export type SourceCode = string;
export type Token = string;
export type Pattern = [string, RegExp];
export interface LexedToken {
  token: string;
  type: string;
};