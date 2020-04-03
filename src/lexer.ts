import patterns from "./patterns";
import { SourceCode, LexedToken, Pattern } from './models';

/**
 * In programming language, keywords, constants, identifiers, strings, numbers, operators and punctuations symbols can be considered as tokens
 * For example, in Javascript language, the variable declaration line
 * const value = 100;
 * contains the tokens:
 * const (keyword), value (identifier), = (operator), 100 (constant) and ; (symbol).
 */
const lexer = (sourceCode: SourceCode): LexedToken[] => {
  const sanitize = (sourceCode: SourceCode) => sourceCode.replace(/\s/g, ' ');

  const readToken = (sourceCode: SourceCode, i: number, patterns: Pattern[]): [LexedToken, number] => {
    for (let j = 0; j < patterns.length; j++) {
      const regex = patterns[j][1];
      const result = sourceCode.slice(i).match(regex);
      if (result !== null) {
        const text = result[0];
        const lexedToken: LexedToken = { type: patterns[j][0], token: sourceCode.substr(i, text.length) };
        return [lexedToken, i + text.length];
      }
    }
    throw "exhausted input while lexing token";
  }

  const tokenize = (sourceCode: SourceCode): LexedToken[] => {
    const tokens = [];
    for (let i = 0; i < sourceCode.length;) {
      const result = readToken(sourceCode, i, patterns);
      tokens.push(result[0]);
      i = result[1];
    }
    return tokens;
  };

  return tokenize(sanitize(sourceCode));
}

export default lexer;