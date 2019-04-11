import webpack = require("webpack");

export interface Options {}

export default class GoodJobPlugin implements webpack.Plugin {
  constructor(private options: Options) {}

  apply(compiler: webpack.Compiler) {
    compiler.hooks.done.tap("GoodJobPlugin", () => {
      console.log(`\n\n${pickRandom(compliments)}\n\n`);
    });
  }
}

function pickRandom(list) {
  const diceRoll = Math.floor(Math.random() * list.length);
  return list[diceRoll];
}

const compliments = [
  "WOW! this code is the best I've ever seen",
  "This file is worthy of two instant approvals",
  "Your unrelenting attention to detail is super impressive",
  "I love how you've used powerful algorithms to solve business-critical problems"
];
