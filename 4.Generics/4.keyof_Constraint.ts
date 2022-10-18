function extractAndDescribe<T extends object, S extends keyof T>(
    obj: T,
    key: S,
) {
    //keyof it meanse that parameter in guaranteed the key of object
    return obj[key];
}

console.log(extractAndDescribe({ name: "Persons" }, "name"));
