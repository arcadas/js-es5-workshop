// jshint esversion:8

function cb(x) {
    console.log(x);
}

let a = 0;
setTimeout(() => cb(1), 500);
console.log('cl a');

let b = 0;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 500);
});
promise.then(cb);
console.log('cl b');

let c = 0;
async function getC() {
    // console.log('cl c 1');
    try {
        c = await new Promise(resolve => setTimeout(() => resolve(3), 500));
        // return new Promise(resolve => setTimeout(() => resolve(3), 500));
        cb(c);
        // console.log('cl c 2');
    } catch(e) {
        console.log(e);
    }
    // console.log('cl c 3');
}
getC();
// getC().then(cb);
console.log('cl c');
// console.log('cl c 4');
