class dataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getData() {
        return [...this.data];
    }
}

const testStorage = new dataStorage<string>();

testStorage.addItem("Person1");
testStorage.addItem("Person2");
testStorage.addItem("Person3");
testStorage.addItem("Person4");
testStorage.removeItem("Person1");

const numberStorage = new dataStorage<number>();

numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.addItem(4);
numberStorage.removeItem(2);

const objectStorage = new dataStorage<object>();

objectStorage.addItem({ name: "Person-1" });
objectStorage.addItem({ name: "Person-2" });
objectStorage.addItem({ name: "Person-3" });
objectStorage.addItem({ name: "Person-4" });
let obj = { name: "Person-2" };
objectStorage.removeItem(obj);

console.log(testStorage.getData());
console.log(numberStorage.getData());
console.log(objectStorage.getData());
