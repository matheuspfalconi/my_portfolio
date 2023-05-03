function openLanguage() {
	element = document.getElementById("choice-language");

	if (element.classList.contains("hidden")) {
		element.classList.remove("hidden");
	} else {
		element.classList.add("hidden");
	}	
}