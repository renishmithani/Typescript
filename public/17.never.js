"use strict";
function throwError(message, code) {
    throw { message: message, errorCode: code };
}
throwError("An Error Occurred", 500);
//NOTE: never type is used when function throws error, while infinite loop etc...
