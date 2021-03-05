'use strict';
Market.allMarket =[];
let time = ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
function Market(name,minimumCustomers,maximumCustomers,averageCookies) {
this.name = name;
this.minimumCustomers = minimumCustomers;
this.maximumCustomers = maximumCustomers;
this.averageCookies = averageCookies;
this.totalCustomers = [];
this.totalPerHour = 0;
Market.allMarket.push(this);
}
//Random choice function
Market.prototype.randomChoice = function () {
for (let i = 0; i < time.length; i++) {
let cookiesPerHour = Math.ceil(randomNumber(this.minimumCustomers, this.maximumCustomers) * this.averageCookies);
this.totalCustomers.push(cookiesPerHour);
this.totalPerHour += cookiesPerHour;
}
// Market.prototype.randomCustomer = function () {
//     for(let i = 0; i < time.length; i++) {
//       let hourSales = Math.ceil(randomNumber(this.minCustomers, this.maxCustomers) * this.customerAvgCookies);
//       this.totalCustomers.push(hourSales);
//       this.totalPerHour += hourSales;
//     } 
};
const formElement = document.getElementById('newPlace');
//console.log(formElement);
formElement.addEventListener('submit', function() {
const marketPlace = document.getElementById('marketPlace');
const minCustomers = document.getElementById('minCustomers');
const maxCustomers = document.getElementById('maxCustomers');
const averagePerHour = document.getElementById('averagePerHour');
marketPlace.randomChoice(minCustomers, maxCustomers, averagePerHour);
marketPlace.render();
//console.log(marketPlace);
})
// global function
function randomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
//render function
Market.prototype.render = function() {
const tableElement = document.getElementById('myTable');
const tr = document.createElement('tr');
tableElement.appendChild(tr);
const td1 = document.createElement('td');
tr.appendChild(td1);
td1.textContent = this.name;

for (let i= 0; i < time.length; i++) {
const td2 = document.createElement('td');
tr.appendChild(td2);
td2.textContent = this.totalCustomers[i]; 
}
const td3 = document.createElement('td');
tr.appendChild(td3);
td3.textContent = this.totalPerHour;
};

//Table header
const Header = function() {
const parentElement = document.getElementById('Place');
const table = document.createElement('table');
parentElement.appendChild(table);
table.setAttribute('id', 'myTable');
const tr1 = document.createElement('tr');
table.appendChild(tr1);
const th1 = document.createElement('th');
tr1.appendChild(th1);
th1.textContent = 'City/time';
for(let i = 0; i < time.length; i++) {
const th2 = document.createElement('th');
tr1.appendChild(th2);
th2.textContent = time[i];
}
const th3 = document.createElement('th');
tr1.appendChild(th3);
th3.textContent = 'Total';
};
Header();
//Table content
//Seattle
const Seattle = new Market('Seattle', 23, 65, 6.3);
Seattle.randomChoice(23, 65,6.3);
Seattle.render();
console.log(Seattle);
//Tokyo
const Tokyo = new Market('Tokyo', 3, 24,1.2);
Tokyo.randomChoice(3, 24,1.2);
Tokyo.render();
console.log(Tokyo);
//Dubai
const Dubai = new Market('Dubai', 11, 38, 3.7);
Dubai.randomChoice(11, 38, 3.7);
Dubai.render();
console.log(Dubai);
//Paris
const Paris = new Market('Paris', 20, 38, 2.3);
Paris.randomChoice(20, 38, 2.3);
Paris.render();
console.log(Paris);
//Lima
const Lima = new Market('Lima', 2, 16, 4.6);
Lima.randomChoice(2, 16, 4.6);
Lima.render();
console.log(Lima);
//
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//Table footer
const Footer = function() {
const tableElement = document.getElementById('myTable');
const tr = document.createElement('tr');
tableElement.appendChild(tr);
const th1 = document.createElement('th');
tr.appendChild(th1);
th1.textContent = 'Total of total';
for(let i = 0; i < time.length; i++) {
const th2 = document.createElement('th');
tr.appendChild(th2);
th2.textContent = Seattle.totalCustomers[i] + Tokyo.totalCustomers[i] + Dubai.totalCustomers[i] + Paris.totalCustomers[i] + Lima.totalCustomers[i];
}
const th3 = document.createElement('th');
tr.appendChild(th3);
//Ihave problem in totalPerHour
th3.textContent = Seattle.totalPerHour + Tokyo.totalPerHour + Dubai.totalPerHour + Paris.totalPerHour + Lima.totalPerHour;
};
Footer();
