"use strict";
var Week;
(function (Week) {
    Week[Week["SUNDAY"] = 0] = "SUNDAY";
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 2] = "TUESDAY";
    Week[Week["WEDNESDAY"] = 3] = "WEDNESDAY";
    Week[Week["THURSDAY"] = 4] = "THURSDAY";
    Week[Week["FRIDAY"] = 5] = "FRIDAY";
    Week[Week["SATURDAY"] = 6] = "SATURDAY";
})(Week || (Week = {}));
console.log(Week.SUNDAY);
//----------------------------------------
var PersonRole;
(function (PersonRole) {
    PersonRole[PersonRole["ADMIN"] = 0] = "ADMIN";
    PersonRole[PersonRole["READ_ONLY"] = 1] = "READ_ONLY";
    PersonRole[PersonRole["AUTHOR"] = 2] = "AUTHOR";
})(PersonRole || (PersonRole = {})); //enum is a special "class" that represents a group of constants (unchangeable variables).
const INFO = {
    name: "Renish",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: PersonRole.ADMIN,
};
if (INFO.role === PersonRole.READ_ONLY) {
    console.log("Read Only");
}
console.log(PersonRole);
