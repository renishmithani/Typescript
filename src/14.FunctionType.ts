function givValue(): void {             //Function Return Type
    //Void Means function not return anything
    console.log("Hello World...");
}

function returnNum(num1: number, num2: number): number {            //Function Return Type
    return num1 + num2;
}

function returnStr(str: string): string {
    return str.toUpperCase();
}

function getUndefined(): undefined {                //Function Return Type
    //undefined only when get return keyword only
    console.log("Got Undefined");
    return;
}

function getFunctionTypeArray(): number[]{
    console.log('Renish')
    return [10+10]
}

let getNumber: Function             //Function Type
getNumber = returnNum


givValue();
returnNum(10, 20);
returnStr("Renish");
getUndefined();
