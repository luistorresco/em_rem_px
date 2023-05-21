let toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
	let body = document.body;
	let isDarkMode = body.classList.contains("dark-mode");

	if (isDarkMode) {
		body.classList.remove("dark-mode");
		toggleBtn.textContent = "Cambiar a modo oscuro";
	} else {
		body.classList.add("dark-mode");
		toggleBtn.textContent = "Cambiar a modo claro";
	}
}