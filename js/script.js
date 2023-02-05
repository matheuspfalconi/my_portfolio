function hiddeService(services) {

swebsite = document.getElementById("servico_website");
slanding = document.getElementById("servico_landing");
ssocial = document.getElementById("servico_social");
sidvisual = document.getElementById("servico_idvisual");

pwebsite = document.getElementById("pwebsite");
planding = document.getElementById("planding");
psocial = document.getElementById("psocial");
pidvisual = document.getElementById("pidvisual");

switch (services) {
	case 'swebsite':
		swebsite.classList.remove("hidden");
		slanding.classList.add("hidden");
		ssocial.classList.add("hidden");
		sidvisual.classList.add("hidden");

		pwebsite.classList.add("orange_text");
		planding.classList.remove("orange_text");
		psocial.classList.remove("orange_text");
		pidvisual.classList.remove("orange_text");
		break;

	case 'slanding':
		swebsite.classList.add("hidden");
		slanding.classList.remove("hidden");
		ssocial.classList.add("hidden");
		sidvisual.classList.add("hidden");

		pwebsite.classList.remove("orange_text");
		planding.classList.add("orange_text");
		psocial.classList.remove("orange_text");
		pidvisual.classList.remove("orange_text");
		break;

		case 'ssocial':
			swebsite.classList.add("hidden");
			slanding.classList.add("hidden");
			ssocial.classList.remove("hidden");
			sidvisual.classList.add("hidden");

			pwebsite.classList.remove("orange_text");
			planding.classList.remove("orange_text");
			psocial.classList.add("orange_text");
			pidvisual.classList.remove("orange_text");
			break;

		case 'sidvisual':
			swebsite.classList.add("hidden");
			slanding.classList.add("hidden");
			ssocial.classList.add("hidden");
			sidvisual.classList.remove("hidden");

			pwebsite.classList.remove("orange_text");
			planding.classList.remove("orange_text");
			psocial.classList.remove("orange_text");
			pidvisual.classList.add("orange_text");
			break;
	}
}

function openLanguage() {
	element = document.getElementById("choice_language");

	if (element.classList.contains("hidden")) {
		element.classList.remove("hidden");
	} else {
		element.classList.add("hidden");
	}	
}