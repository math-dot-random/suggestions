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

module.exports = { stock };