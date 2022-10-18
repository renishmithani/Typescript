"use strict";
const arr = [];
const promise = new Promise((resolve, reject) => {
    const random = Math.random() > 0.5;
    setTimeout(() => {
        if (random)
            resolve("Task Complete...");
        reject("Task Not Complete");
    }, 100);
})
    .then((res) => {
    console.warn(res);
})
    .catch((err) => {
    console.error(err);
});
