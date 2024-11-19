function validateAccess(event) {
	event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
	const accessForm = document.getElementById("accessForm");
    if (!name || !email || !phone) {
        alert("Please fill out all fields.");
        return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10,15}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid business email.");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid business phone number.");
        return;
    }
    sendDataToCloudflare({ name, email, phone });
	name.value = "";
	email.value = "";
	phone.value = "";
	accessForm.classList.add("hidden");
}

document.getElementById("accessFormFields")?.addEventListener("submit", validateAccess);

async function sendDataToCloudflare(data) {
    try {
        const response = await fetch("https://sandbox.adjusterconsole.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            document.getElementById("accessForm").style.display = "none";
            return;
        } else {
            console.error("There was an issue submitting your data. Please try again.");
            return;
        }
    } catch (error) {
        console.error("Error sending data:", error);
        return;
    }
}