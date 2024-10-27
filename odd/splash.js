function splashScreen() {
	const splashDiv = document.getElementById('splashContainer');
    setTimeout(function () {
        splashDiv.classList.add("exit-effect");
    }, 1000);
    splashDiv.addEventListener('transitionend', function () {
        document.body.removeChild(splashDiv);
    });
}