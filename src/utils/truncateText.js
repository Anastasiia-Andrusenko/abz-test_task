// hide end of string for upload file

export const truncateFieldInput = text => {
	const viewportWidth = window.innerWidth;
	const threshold = viewportWidth >= 768 ? 30 : 22;

	if (text.length <= threshold) return text;
	return text.substring(0, threshold) + '...';
};

// hide end of string for text in user card
export const truncateText = text => {
	const viewportWidth = window.innerWidth;
	const threshold = viewportWidth >= 1024 ? 30 : 35;

	if (text.length <= threshold) return text;
	return text.substring(0, threshold) + '...';
};
