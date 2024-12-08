function downloadRawData() {
    const buttonTracker = JSON.parse(localStorage.getItem("buttonTracker"));
    if (!buttonTracker) {
        alert("No data available to download.");
        return;
    }
    const rows = [];
    rows.push(["Button ID", "Description", "Type", "Date", "Count", "Cancelled", "Times"]);
    for (const buttonId in buttonTracker) {
        const button = buttonTracker[buttonId];
        for (const date in button.data) {
            const { count, cancelled, times } = button.data[date];
            rows.push([
                buttonId,
                button.description,
                button.type,
                date,
                count,
                cancelled,
                times.join(";")
            ]);
        }
    }
    const csvContent = rows.map(row => row.map(value => `"${value}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "buttonTracker.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function downloadRawDataAsJSONx() {
    const buttonTracker = JSON.parse(localStorage.getItem("buttonTracker"));
    if (!buttonTracker) {
        alert("No data available to download.");
        return;
    }
    const jsonString = JSON.stringify(buttonTracker, null, 2);
    const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "buttonTracker.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

document.getElementById('csvDownload').addEventListener('click', downloadRawData);

document.getElementById('jsonDownload').addEventListener('click', downloadRawDataAsJSON);

function downloadRawDataAsJSON() {
    const metricDisplay = document.getElementById("metricDisplay");
    metricDisplay.style.display = "inline-block";
    const outputObject = getSortedButtons(buttonTracker);
    const keys = Object.keys(outputObject);
    const keysHtml = keys.map(key => `<div>${key}</div>`).join("");
    metricDisplay.innerHTML = keysHtml;
    
}