document.getElementById("signUpLink").addEventListener("click", displaySignUp);
document.getElementById("cancelSignUp").addEventListener("click", cancelSignUp);

function displaySignUp() {
	document.getElementById('signupContainer').classList.remove("hidden");
	document.getElementById('loginContainer').classList.add("hidden");
}

function cancelSignUp() {
	document.getElementById('signupContainer').classList.add("hidden");
	document.getElementById('loginContainer').classList.remove("hidden");
}