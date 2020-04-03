import { Pattern } from "./models";

export default [
  ["keyword", /^(const|let|while|if|obstacle|move)/],
  ["wspace", /^\s+/],
  ["identifier", /^[a-zA-Z_]\w*/],
  ["float", /^-?\d+\.\d+/],
  ["int", /^-?\d+/],
  ["string", /^"(\\\\|\\"|[^"])*"/],
  ["symbol", /^(\<|\>|\=|\+|\-|\!)/],
  ["comment", /\/*.*.*\//],
  ["semicolon", /^\;/],
  ["obracket", /^\[/],
  ["cbracket", /^\]/],
  ["oparen", /^\(/],
  ["cparen", /^\)/],
  ["obrace", /^\{/],
  ["cbrace", /^\}/],
  ["other", /^[\s\S]/]
] as Pattern[];
