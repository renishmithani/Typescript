type _Combination = string | number;

function _add(n1: number, n2: number): number; //Function Overload
function _add(n1: string, n2: string): string; //Function Overload
function _add(n1: _Combination, n2: _Combination) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}

console.log(_add(10, 20));
console.log(_add("Hello ", "world"));
