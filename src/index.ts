import lexer from "./lexer";
import { SourceCode } from "./models";
import { readFileSync } from "fs";

const compiler = (sourceCode: SourceCode) => {
  const lexedTokens = lexer(sourceCode);

  /**
   * Print program source code
   */
  console.log("Program source code:\n");
  console.log(sourceCode);

  /**
   * Print program as lexed tokens
   * type (token)
   * Example:
   * for (keyword)
   * ; (symbol)
   */
  console.log("Lexed tokens:\n");
  lexedTokens.map(lt => console.log(`${lt.token} (${lt.type})`));

  return sourceCode;
};

const sourceCode = readFileSync('./src/sample.robot', "utf-8");
compiler(sourceCode);
