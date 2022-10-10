enum Week {         //enum is a special "class" that represents a group of constants (unchangeable variables).
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
}
console.log(Week.SUNDAY);

//----------------------------------------

enum PersonRole {
    ADMIN,
    READ_ONLY,
    AUTHOR,
} //enum is a special "class" that represents a group of constants (unchangeable variables).

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
