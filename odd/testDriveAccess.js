function validateAccess(event) {
	event.preventDefault();
    const name = document.getElementById("name").value.trim();
	const accessForm = document.getElementById("accessForm");
    if (!name) {
        alert("Put in Geoff. What do I care?");
        return;
    }
    alert(`Lol, ${name} is happy.`);
	document.getElementById("accessForm").classList.add("hidden");
	name.value = "";
}

document.getElementById("accessFormFields").addEventListener("submit", validateAccess);