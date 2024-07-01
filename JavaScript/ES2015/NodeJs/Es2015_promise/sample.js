#!/usr/bin/node


doSomething();
function doSomething(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Did something");
            resolve("https://tonys.onrender.com/");
        }, 200);
    });
}

