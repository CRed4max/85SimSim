let ans = [];

export class Assembler{
    constructor(){

    }
    convert(single_str)
    {
        if(single_str.localeCompare("MOV A,B")==0)
        {
            ans.push("78");
        }
        else if(single_str.localeCompare("MOV A,C")==0)
        {
            ans.push("79");
        }
        else if(single_str.localeCompare("MOV A,D")==0)
        {
            ans.push("7A");
        }
        else if(single_str.localeCompare("MOV A,E")==0)
        {
            ans.push("7B");
        }
        else if(single_str.localeCompare("MOV A,H")==0)
        {
            ans.push("7C");
        }
        else if(single_str.localeCompare("MOV A,L")==0)
        {
            ans.push("7D");
        }
        else if(single_str.localeCompare("MOV A,M")==0)
        {
            ans.push("7E");
        }
        else if(single_str.localeCompare("MOV A,A")==0)
        {
            ans.push("7F");
        }                                                    //FOR COPYING INTO REGISTER B
        else if(single_str.localeCompare("MOV B,B")==0)
        {
            ans.push("40");
        }
        else if(single_str.localeCompare("MOV B,C")==0)
        {
            ans.push("41");
        }
        else if(single_str.localeCompare("MOV B,D")==0)
        {
            ans.push("42");
        }
        else if(single_str.localeCompare("MOV B,E")==0)
        {
            ans.push("43");
        }
        else if(single_str.localeCompare("MOV B,H")==0)
        {
            ans.push("44");
        }
        else if(single_str.localeCompare("MOV B,L")==0)
        {
            ans.push("45");
        }
        else if(single_str.localeCompare("MOV B,M")==0)
        {
            ans.push("46");
        }
        else if(single_str.localeCompare("MOV B,A")==0)
        {
            ans.push("47");
        }                                                //FOR COPYING INTO REGISTER C
        else if(single_str.localeCompare("MOV C,B")==0)
        {
            ans.push("48");
        }
        else if(single_str.localeCompare("MOV C,C")==0)
        {
            ans.push("49");
        }
        else if(single_str.localeCompare("MOV C,D")==0)
        {
            ans.push("4A");
        }
        else if(single_str.localeCompare("MOV C,E")==0)
        {
            ans.push("4B");
        }
        else if(single_str.localeCompare("MOV C,H")==0)
        {
            ans.push("4C");
        }
        else if(single_str.localeCompare("MOV C,L")==0)
        {
            ans.push("4D");
        }
        else if(single_str.localeCompare("MOV C,M")==0)
        {
            ans.push("4E");
        }
        else if(single_str.localeCompare("MOV C,A")==0)
        {
            ans.push("4F");
        }                                                //FOR COPYING INTO REGISTER D
        else if(single_str.localeCompare("MOV D,B")==0)
        {
            ans.push("50");
        }
        else if(single_str.localeCompare("MOV D,C")==0)
        {
            ans.push("51");
        }
        else if(single_str.localeCompare("MOV D,D")==0)
        {
            ans.push("52");
        }
        else if(single_str.localeCompare("MOV D,E")==0)
        {
            ans.push("53");
        }
        else if(single_str.localeCompare("MOV D,H")==0)
        {
            ans.push("54");
        }
        else if(single_str.localeCompare("MOV D,L")==0)
        {
            ans.push("55");
        }
        else if(single_str.localeCompare("MOV D,M")==0)
        {
            ans.push("56");
        }
        else if(single_str.localeCompare("MOV D,A")==0)
        {
            ans.push("57");
        }                                                //FOR COPYING INTO REGISTER E
        else if(single_str.localeCompare("MOV E,B")==0)
        {
            ans.push("58");
        }
        else if(single_str.localeCompare("MOV E,C")==0)
        {
            ans.push("59");
        }
        else if(single_str.localeCompare("MOV E,D")==0)
        {
            ans.push("5A");
        }
        else if(single_str.localeCompare("MOV E,E")==0)
        {
            ans.push("5B");
        }
        else if(single_str.localeCompare("MOV E,H")==0)
        {
            ans.push("5C");
        }
        else if(single_str.localeCompare("MOV E,L")==0)
        {
            ans.push("5D");
        }
        else if(single_str.localeCompare("MOV E,M")==0)
        {
            ans.push("5E");
        }
        else if(single_str.localeCompare("MOV E,A")==0)
        {
            ans.push("5F");
        }                                                //FOR COPYING INTO REGISTER H
        else if(single_str.localeCompare("MOV H,B")==0)
        {
            ans.push("60");
        }
        else if(single_str.localeCompare("MOV H,C")==0)
        {
            ans.push("61");
        }
        else if(single_str.localeCompare("MOV H,D")==0)
        {
            ans.push("62");
        }
        else if(single_str.localeCompare("MOV H,E")==0)
        {
            ans.push("63");
        }
        else if(single_str.localeCompare("MOV H,H")==0)
        {
            ans.push("64");
        }
        else if(single_str.localeCompare("MOV H,L")==0)
        {
            ans.push("65");
        }
        else if(single_str.localeCompare("MOV H,M")==0)
        {
            ans.push("66");
        }
        else if(single_str.localeCompare("MOV H,A")==0)
        {
            ans.push("67");
        }                                                //FOR COPYING INTO REGISTER L
        else if(single_str.localeCompare("MOV L,B")==0)
        {
            ans.push("68");
        }
        else if(single_str.localeCompare("MOV L,C")==0)
        {
            ans.push("69");
        }
        else if(single_str.localeCompare("MOV L,D")==0)
        {
            ans.push("6A");
        }
        else if(single_str.localeCompare("MOV L,E")==0)
        {
            ans.push("6B");
        }
        else if(single_str.localeCompare("MOV L,H")==0)
        {
            ans.push("6C");
        }
        else if(single_str.localeCompare("MOV L,L")==0)
        {
            ans.push("6D");
        }
        else if(single_str.localeCompare("MOV L,M")==0)
        {
            ans.push("6E");
        }
        else if(single_str.localeCompare("MOV L,A")==0)
        {
            ans.push("6F");
        }
        

    }
    

    converter(assembly_code){
        for(let each of assembly_code){
            this.convert(each);
        }
    }
}

{
    {
        {
            
        }
    }
}