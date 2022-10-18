interface Bird {
    type: "bird"; //Descriminated Union ( one common properties in every interfaces )
    flyingSpeed: number;
}

interface Horse {
    type: "horse"; //Descriminated Union ( one common properties in every interfaces )
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving Speed is " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 1000 });
