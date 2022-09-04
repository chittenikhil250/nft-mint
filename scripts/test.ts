require('dotenv').config();

const APIKEY: string = process.env.APIKEY!;
const PRIVATEKEY: string = process.env.PRIVATEKEY!;

console.log(APIKEY);
console.log(PRIVATEKEY);