import { Assembler } from "./assembler.js";

const assembler = new Assembler();

let code_line = [
    "MOV A, B",
    "LXI B, 2323",
    "HLT"
];
let output = assembler.converter(code_line);

console.log(output);

