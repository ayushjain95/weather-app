console.log('starting app');

setTimeout(() => {
    console.log('inside of callback 1');
},0);
setTimeout(() => {
    console.log('inside of callback 2');
},0);
console.log('finishing app');
