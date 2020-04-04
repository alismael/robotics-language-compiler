# Robotics language compiler

This repo is still under development.

Implementing main components of a simple compiler for robotics language.

## Documentation of Robotics language

Grammar of the language is very simple (const, let, while, if, obstacle, move)

## Lexer

Which transform source code into tokens (words, numbers, literals).

## Parser

Write top-down recursive descent parser for your grammar, which accepts or rejects input.

program -> block

block -> `{` stmts `}`

stmts -> stmts1 stmt
      |  ϵ

stmt -> expr;
      | if(expr) stmts1
      | while(expr) stmts1
      | block

expr -> rel = expr1
      | rel

rel -> rel1 < term
     | rel1 <= factor
     | term

term -> (expr)
      | num

## Syntax tree

Add syntax tree generation into your parser.

## Machine code

Write machine code generator from the syntax tree.

## Installation

Dependencies installation

```sh
npm install
```

Then prepare by building the project

```sh
npm run build
```

Now start

```sh
npm start
```

The sample source code is located at src/sample.robot.
