import teddy from "teddy";

export default function (config) {
	config.addTemplateFormats("teddy");
	config.addExtension("teddy", {
		compile: async function (inputContent) {
			return async (dataCascade) => teddy.render(inputContent, dataCascade);
			// const outputTemplate = teddy.compile(inputContent);
			// return async (dataCascade) => outputTemplate(dataCascade);
		}
	})
}

export const config = {
	htmlTemplateEngine: "teddy",
	markdownTemplateEngine: "teddy",
	dir: {
		input: "src",
		layouts: "_includes/layouts",
	}
}