let buttonTracker;
const today = daysSinceEpoch();
localStorage.setItem("currentDay", today);
document.addEventListener('DOMContentLoaded', initializeButtonTrackerData);

function initializeButtonTrackerData() {
	const storedTracker = localStorage.getItem("buttonTracker");
	if (!storedTracker) {
		buttonTracker = newTracker();
		localStorage.removeItem("currentDay");
	} else {
		buttonTracker = JSON.parse(localStorage.getItem("buttonTracker"));
	}
	let savedDay = localStorage.getItem("currentDay");
	const todayString = today.toString();
	if (todayString === savedDay) {
		return;
	} else {
		for (const buttonKey in buttonTracker) {
			const button = buttonTracker[buttonKey];
			trackerDay(button);
		}
		localStorage.setItem("currentDay", today);
	}
	savebuttonTracker();
}

function savebuttonTracker() {
	localStorage.setItem('buttonTracker', JSON.stringify(buttonTracker));
	filterAndDisplayData();
}

function trackerDay(button) {
	button.data[today] = {
		count: 0,
		cancelled: 0,
		times: []
	};
}

function daysSinceEpoch() {
	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	const now = new Date();
	const epoch = new Date(0);
	const daysSinceEpoch = Math.floor((now - epoch) / millisecondsPerDay);
	return daysSinceEpoch.toString();
}

function validate(buttonId) {
	const button = buttonTracker[buttonId];
	if (!button) {
		console.error(`Button ID ${buttonId} not found in buttonTracker.`);
		return null;
	}
	if (!button.data[today]) {
		trackerDay(button);
	}
	return button;
}

function addCount(button) {
	button.data[today].count += 1;
	savebuttonTracker();
}

function startTimer(button) {
	button.timeStarted = Date.now();
	if (button.description.includes("pdf00")) {
		localStorage.setItem("pdfId", button.description);
	}
	savebuttonTracker();
}

function stopTimer(buttonId) {
	const button = validate(buttonId);
	if (!button) return;
	const startTime = button.timeStarted; //retrieve start time
	if (!startTime || isNaN(startTime)) { //if it's null or not a number
		return; //quit
	}
	const elapsedRaw = (Date.now() - startTime) / 1000; // Convert to seconds
	const elapsed = elapsedRaw.toFixed(2); // Format to 2 decimal places
	button.data[today].times.push(elapsed); //store in todays times array
	button.timeStarted = null; //reset time start
	savebuttonTracker();
}

function cancelTimer(buttonId) {
	const button = validate(buttonId);
	if (!button) return;
	button.timeStarted = null; //reset time start
	button.data[today].cancelled += 1;
	button.data[today].count -= 1;
	savebuttonTracker();
}

function handlePdfs() {
	const pdfId = localStorage.getItem("pdfId");
	stopTimer(pdfId);
	localStorage.removeItem("pdfId");
}

document.addEventListener('DOMContentLoaded', initButtonListeners);

function initButtonListeners() {
	document.addEventListener("click", (event) => {
		const buttonId = event.target.id;
		if (buttonTracker[buttonId]) {
			processClicks(buttonId);
		}
	});
}

function processClicks(buttonId) {
	const button = validate(buttonId);
	if (!button)
		return;
	const remapId = button.remap;
	if (remapId) { 
		processClicks(remapId);
		return;
	}
	const targetId = button.target;
	if (targetId) {
		addCount(button);
		cancelTimer(targetId);
		return;
	}
	const hook = button.hook;
	if (hook) {
		handlePdfs();
		return;
	}
	const finishId = button.finish;
	if (finishId) {
		addCount(button);
		stopTimer(finishId);
		return;
	}
	if (button.isTimed) {
		const timerValue = button.timeStarted;
		if (timerValue) {
			cancelTimer(button);
		}
		startTimer(button);
	}
	addCount(button);
}

document.getElementById('metricMenu')?.addEventListener('click', function () {
	document.getElementById('dashContainer').classList.add('show');
	filterAndDisplayData();
});

document.getElementById('closeDash')?.addEventListener('click', function () {
	document.getElementById('dashContainer').classList.remove('show');
	document.getElementById("startDate").value = '';
    document.getElementById("endDate").value = '';
});

function filterAndDisplayData() {
    const typeFilter = document.getElementById("typeFilter").value;
    const dateFilter = document.getElementById("dateFilter").value;
    let dateRange = [];
    const today = parseInt(daysSinceEpoch());
    if (dateFilter === "today") {
        dateRange = [today];
    } else if (dateFilter === "last7Days") {
        for (let i = 0; i < 7; i++) {
            dateRange.push(today - i);
        }
    } else if (dateFilter === "lastMonth") {
        for (let i = 0; i < 30; i++) {
            dateRange.push(today - i);
        }
    } else if (dateFilter === "custom") {
        const startDateInput = document.getElementById("startDate").value;
        const endDateInput = document.getElementById("endDate").value;
        const startDate = new Date(startDateInput);
        const endDate = new Date(endDateInput);

        if (isNaN(startDate) || isNaN(endDate)) {
            return;
        }
        const startEpoch = Math.floor(startDate.getTime() / (24 * 60 * 60 * 1000));
        const endEpoch = Math.floor(endDate.getTime() / (24 * 60 * 60 * 1000));
        if (startEpoch > endEpoch) {
            alert("Start date must be earlier than or equal to end date.");
            return;
        }
        for (let i = startEpoch; i <= endEpoch; i++) {
            dateRange.push(i);
        }
    }
    const tableBody = document.getElementById("resultsTable").querySelector("tbody");
    tableBody.innerHTML = "";
	
    for (const buttonKey in buttonTracker) {
        const button = buttonTracker[buttonKey];
		
        if (typeFilter !== "all") {
            if (typeFilter === "timed" && !button.isTimed) continue;
            if (typeFilter !== "timed" && button.type !== typeFilter) continue;
        }
		
        const aggregated = {
            count: 0,
            cancelled: 0,
            times: []
        };
		
        dateRange.forEach(day => {
            const dayStr = day.toString();
            const dataForDay = button.data[dayStr];

            if (dataForDay) {
                aggregated.count += dataForDay.count;
                aggregated.cancelled += dataForDay.cancelled;
                aggregated.times = aggregated.times.concat(dataForDay.times);
            }
        });
		aggregated.times = aggregated.times.map(item => {
			let num = Number(item);
			return isNaN(num) ? 0 : num;
			});
        let averageTime = aggregated.times.length
            ? (aggregated.times.reduce((sum, time) => sum + time, 0) / aggregated.times.length).toFixed(2)
            : "N/A";
        let fastestTime = aggregated.times.length
            ? Math.min(...aggregated.times).toFixed(2)
            : "N/A";
        let slowestTime = aggregated.times.length
            ? Math.max(...aggregated.times).toFixed(2)
            : "N/A";
        const row = document.createElement("tr");
        row.dataset.buttonKey = buttonKey; // Assign buttonKey for click events
        row.innerHTML = `
            <td>${button.description}</td>
            <td>${button.type}</td>
            <td>${aggregated.count}</td>
            <td>${aggregated.cancelled}</td>
            <td>${averageTime}</td>
            <td>${fastestTime}</td>
            <td>${slowestTime}</td>
        `;
        tableBody.appendChild(row);
    }
}

function calculateAggregatedMetrics(button, dateRange) {
    if (!Array.isArray(dateRange)) {
        console.error("Invalid dateRange passed to calculateAggregatedMetrics:", dateRange);
        return {
            totalClicks: 0,
            avgClicks: "N/A",
            totalTime: "N/A",
            avgTotalTime: "N/A",
            fastestTime: "N/A",
            slowestTime: "N/A",
            avgTime: "N/A",
        };
    }

    const metrics = {
        totalClicks: 0,
        times: [],
        daysWithClicks: 0,
        daysWithTimes: 0,
    };

    dateRange.forEach(day => {
        const dayStr = day.toString();
        const dataForDay = button.data[dayStr];

        if (dataForDay) {
			dataForDay.times.forEach((item, index, arr) => {
				arr[index] = Number(item);
			});
						
            metrics.totalClicks += dataForDay.count;

            if (dataForDay.count > 0) {
                metrics.daysWithClicks++;
            }

            const totalTimeForDay = dataForDay.times.reduce((sum, time) => sum + time, 0);
            if (totalTimeForDay > 0) {
                metrics.daysWithTimes++;
            }

            metrics.times.push(...dataForDay.times);
        }
    });

    const totalTime = metrics.times.reduce((sum, time) => sum + time, 0);
    const avgClicks = metrics.daysWithClicks > 0
        ? (metrics.totalClicks / metrics.daysWithClicks).toFixed(2)
        : "N/A";
    const avgTotalTime = metrics.daysWithTimes > 0
        ? (totalTime / metrics.daysWithTimes).toFixed(2)
        : "N/A";
    const fastestTime = metrics.times.length
        ? Math.min(...metrics.times).toFixed(2)
        : "N/A";
    const slowestTime = metrics.times.length
        ? Math.max(...metrics.times).toFixed(2)
        : "N/A";
    const avgTime = metrics.times.length
        ? (totalTime / metrics.times.length).toFixed(2)
        : "N/A";

    return {
        totalClicks: metrics.totalClicks,
        avgClicks,
        totalTime: totalTime.toFixed(2),
        avgTotalTime,
        fastestTime,
        slowestTime,
        avgTime,
    };
}


document.getElementById("resultsTable")?.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (!row || !row.dataset.buttonKey) return;

    const buttonKey = row.dataset.buttonKey;
    const button = buttonTracker[buttonKey];

    const detailContainer = document.getElementById("detailContainer");
    const detailsContent = document.getElementById("detailsContent");
	const contentFooter = document.getElementById("contentFooter");

    if (button) {
        const today = parseInt(daysSinceEpoch());
        const dateRanges = {
            "7": Array.from({ length: 7 }, (_, i) => today - i),
            "30": Array.from({ length: 30 }, (_, i) => today - i),
            "90": Array.from({ length: 90 }, (_, i) => today - i),
        };

        const metrics = {
            totalClicks: {},
            avgClicks: {},
            totalTime: {},
            avgTotalTime: {},
            fastestTime: {},
            slowestTime: {},
            avgTime: {},
        };

        // Calculate metrics for all date ranges
        for (const rangeKey in dateRanges) {
            const rangeMetrics = calculateAggregatedMetrics(button, dateRanges[rangeKey]);
            metrics.totalClicks[rangeKey] = rangeMetrics.totalClicks;
            metrics.avgClicks[rangeKey] = rangeMetrics.avgClicks;

            if (button.isTimed) {
                metrics.totalTime[rangeKey] = rangeMetrics.totalTime;
                metrics.avgTotalTime[rangeKey] = rangeMetrics.avgTotalTime;
            }

            if (button.core) {
                metrics.fastestTime[rangeKey] = rangeMetrics.fastestTime;
                metrics.slowestTime[rangeKey] = rangeMetrics.slowestTime;
                metrics.avgTime[rangeKey] = rangeMetrics.avgTime;
            }
        }

        // Build the details content
        let content = `
			<div class="metrics_details">
				<p>Total Clicks:</p>
				<ul>
					<li>Past 7 Days: ${metrics.totalClicks["7"]}</li>
					<li>Past 30 Days: ${metrics.totalClicks["30"]}</li>
					<li>Past 90 Days: ${metrics.totalClicks["90"]}</li>
				</ul>
				<p>Average Clicks Per Day:</p>
				<ul>
					<li>Past 7 Days: ${metrics.avgClicks["7"]}</li>
					<li>Past 30 Days: ${metrics.avgClicks["30"]}</li>
					<li>Past 90 Days: ${metrics.avgClicks["90"]}</li>
				</ul>
			</div>
        `;

        if (button.isTimed) {
            content += `
			<div class="metrics_details">
				<p>Total Time Used:</p>
				<ul>
					<li>Past 7 Days: ${metrics.totalTime["7"]}s</li>
					<li>Past 30 Days: ${metrics.totalTime["30"]}s</li>
					<li>Past 90 Days: ${metrics.totalTime["90"]}s</li>
				</ul>
				<p>Average Time Per Day Used:</p>
				<ul>
					<li>Past 7 Days: ${metrics.avgTotalTime["7"]}s</li>
					<li>Past 30 Days: ${metrics.avgTotalTime["30"]}s</li>
					<li>Past 90 Days: ${metrics.avgTotalTime["90"]}s</li>
				</ul>
			</div>
            `;
        }

        if (button.core) {
            content += `
			<div class="metrics_details">
				<p>Fastest Time:</p>
				<ul>
					<li>Past 7 Days: ${metrics.fastestTime["7"]}s</li>
					<li>Past 30 Days: ${metrics.fastestTime["30"]}s</li>
					<li>Past 90 Days: ${metrics.fastestTime["90"]}s</li>
				</ul>
				<p>Slowest Time:</p>
				<ul>
					<li>Past 7 Days: ${metrics.slowestTime["7"]}s</li>
					<li>Past 30 Days: ${metrics.slowestTime["30"]}s</li>
					<li>Past 90 Days: ${metrics.slowestTime["90"]}s</li>
				</ul>
				<p>Average Time:</p>
				<ul>
					<li>Past 7 Days: ${metrics.avgTime["7"]}s</li>
					<li>Past 30 Days: ${metrics.avgTime["30"]}s</li>
					<li>Past 90 Days: ${metrics.avgTime["90"]}s</li>
				</ul>
			</div>
            `;
        }

		
        detailsContent.innerHTML = content;
        detailContainer.classList.remove("hidden");
		document.getElementById("mainDash").classList.add("share");
		contentFooter.innerHTML = `<h3>Details for ${button.description}</h3>`;
    }
});

function resetMetricDisplay() {
	document.getElementById("detailsContent").innerHTML = '';
	document.getElementById("contentFooter").innerHTML = '';
	document.getElementById("detailContainer").classList.add("hidden");
	document.getElementById("mainDash").classList.remove("share");
}

document.getElementById("closeMetricDetail")?.addEventListener("click", resetMetricDisplay);

document.getElementById("typeFilter")?.addEventListener("change", filterAndDisplayData);
document.getElementById("dateFilter")?.addEventListener("change", () => {
	const customDateRange = document.getElementById("customDateRange");
	if (document.getElementById("dateFilter").value === "custom") {
		customDateRange.style.display = "block";
	} else {
		customDateRange.style.display = "none";
		filterAndDisplayData();
	}
});

document.getElementById("endDate")?.addEventListener("change", filterAndDisplayData);

document.getElementById("startDate")?.addEventListener("change", filterAndDisplayData);

document.getElementById("fakeRecord")?.addEventListener("click", () => {
	generateTestData();
});

function generateTestData(days = 90) {
	buttonTracker = JSON.parse(localStorage.getItem("buttonTracker"));
	const today = parseInt(daysSinceEpoch());
	for (const buttonId in buttonTracker) {
		const button = buttonTracker[buttonId];
		if (!button || typeof button !== "object") {
			console.error(`Invalid button object for ID: ${buttonId}`);
			continue;
		}
		if (!button.data || typeof button.data !== "object") {
			button.data = {};
		}
		for (let dayOffset = 0; dayOffset < days; dayOffset++) {
			const day = (today - dayOffset).toString();
			const count = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
			button.data[day] = { 
				count,
				cancelled: Math.floor(Math.random() * 4),
				times: []
			};
			if (button.isTimed) {
				for (let i = 0; i < count; i++) {
					const time = (Math.random() * (15 - 4) + 4).toFixed(2);
					button.data[day].times.push(parseFloat(time));
				}
			}
		}
	}
	savebuttonTracker();
}
