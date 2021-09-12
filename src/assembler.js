

export class Assembler{
    constructor(){

    }

    

    converter(assembly_code){
        for(let each of assembly_code){
            this.convert(each);
        }
    }
}