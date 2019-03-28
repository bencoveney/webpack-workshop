module.exports = function(content, map, meta) {
	const transformedContent = escapeQuotes(wrapParagraphs(content));
	return `module.exports = '${transformedContent}'`;
};

function escapeQuotes(text) {
	return text.replace("'", "\'");
}

function wrapParagraphs(text) {
	return text.split(/[\r\n]+/).map(paragraph => `<p>${paragraph}</p>`).join("");
}
