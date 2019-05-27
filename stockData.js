const faker = require('faker');

const stock = [];

for (let i = 1; i <= 400; i++) {
  stock.push({
    stockname: faker.company.companyName(),
    buyPercentage: faker.finance.amount(),
    currentPrice: faker.finance.amount(),
    changePercent: faker.finance.amount(),
    url: faker.internet.url(),
  });
}



// console.log(stock)

// var generator = function (){
//   const data = {};
//   let stockId = 0;

//   for(let i = 0; i < 400; i++){
//     data.id= i;
//     data.otherStockId=getRandomInt(1,100);
//     if(i%4 === 0){
//       stockId++
//     }
//     data.stockId = stockId
//   }
// }


// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
module.exports = { stock };