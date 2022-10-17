function givValue(): void {
    //Void Means function not return anything
    console.log("Hello World...");
}

function returnNum(num1: number, num2: number): number {
    return num1 + num2;
}

function returnStr(str: string): string {
    return str.toUpperCase();
}

function getUndefined(): undefined {
    //undefined only when get return keyword only
    console.log("Got Undefined");
    return;
}

givValue();
returnNum(10, 20);
returnStr("Renish");
getUndefined();
