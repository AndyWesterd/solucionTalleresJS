const array = [1, 2, 3, 4, 5];

const anonima = function(arr) {
    return arr.map((a) => a * 2);
};

console.log(anonima(array));