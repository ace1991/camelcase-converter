function capitalizeFirstLetterOfAWord(cadena: string) {
	return cadena.charAt(0).toUpperCase() + cadena.substring(1).toLowerCase();
}

export function toCamelCase(cadena: string) {
	const regex = /[\s\-_]/g;
	const words = cadena.split(regex);

	return words.map((word) => capitalizeFirstLetterOfAWord(word)).join('');
}
