import webpack from "webpack";
import loaderUtils from "loader-utils";
import { RawSourceMap } from "source-map";

const loader: webpack.loader.Loader = function(
  this: webpack.loader.LoaderContext,
  content: string,
  map: RawSourceMap
) {
  const callback = this.async();

  const options = loaderUtils.getOptions(this);

  Promise.resolve().then(() => {
    const transformedContent = escapeQuotes(wrapParagraphs(content));
    const result = `module.exports = '${transformedContent}'`;

    callback(undefined, result);
  });
};

export default loader;

function escapeQuotes(text) {
  return text.replace("'", "'");
}

function wrapParagraphs(text) {
  return text
    .split(/[\r\n]+/)
    .map(paragraph => `<p>${paragraph}</p>`)
    .join("");
}
