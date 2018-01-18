console.log('a');

var getUser = (id,callback) => {

    console.log('b');

    var user = {
        id: id,
        name: 'Ayush'
    };

    console.log('c');

    callback(user);

    console.log('d');
};

console.log('e');

getUser(31,(user) => {

    console.log('f');

    console.log(user);

    console.log('g');
});

console.log('h');
