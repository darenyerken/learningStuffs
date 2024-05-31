import * as babylon from "babylon";

const code = `import { increase , decrease } from './hooks/useIncrease'`;

const ast = babylon.parse(code,{
  sourceType: "module",
  plugins:['estree']
});
console.log(ast.program.body[0].specifiers);