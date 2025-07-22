const array = [1,2,3,4,5,6,7,8,9,10];

const arrPares = (arr) => arr.filter((a) => a%2 === 0).map((a) => a ** 3);

console.log(arrPares(array));