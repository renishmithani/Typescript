function throwError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}
throwError("An Error Occurred", 500);

//NOTE: never type is used when function throws error,and while infinite loop etc...
