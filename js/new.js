'use strict';
const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.createElement( 'table' );

function tableHead() {
  const parentElement = document.getElementById( 'locationProfiles' );
  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );

  articleElement.appendChild( tableElement );

  // const theadElement = document.createElement( 'thead' );
  // tableElement.appendChild( theadElement );

  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );

  const th1Element = document.createElement( 'th' );
  tr1Element.appendChild( th1Element );
  th1Element.textContent = 'location';

  for ( let i = 0; i < workingHours.length; i++ ) {
    const th2Element = document.createElement( 'th' );
    tr1Element.appendChild( th2Element );
    th2Element.textContent = `${workingHours[i]}`;
  }
  const dailyTotal = document.createElement( 'th' );
  tr1Element.appendChild( dailyTotal ).innerHTML = 'Total of total sales';

}
tableHead();

function Market( location, minCus, maxCus, avgCookie ) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookie = avgCookie;
  this.customerHour = [];
  this.cookiesSale = [];
  this.total = 0;
  this.finalTotals = 0;
  Market.allMarkets.push( this );
}

Market.prototype.getRandomint = function ( min, max ) {
  return Math.ceil( Math.random() * ( max - min ) + min );
};
Market.prototype.getCookiesale = function () {
  for ( let i = 0; i < workingHours.length; i++ ) {
    let cookie = this.getRandomint( this.minCus, this.maxCus ) * this.avgCookie;
    this.cookiesSale.push( Math.ceil( cookie ) );
    this.total = this.total + cookie;
  }
};
Market.prototype.getCustomer = function () {
  for ( let i = 0; i < workingHours.length; i++ ) {
    let customer = Math.ceil( this.getRandomint( this.minCus, this.maxCus ) );
    this.cookiesSale.push( customer );
  }

};
Market.prototype.render = function () {
  // const parentElement = document.getElementById ( 'locationProfiles' );
  // const tableElement = document.createElement( 'table' );
  // parentElement.appendChild( tableElement );


  // const tbodyElement = document.createElement( 'tbody' );
  // tableElement.appendChild( tbodyElement );

  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );

  const clelement = document.createElement( 'th' );
  tr1Element.appendChild( clelement );
  clelement.textContent = `${this.location}`;


  for ( let i = 0; i < workingHours.length; i++ ) {
    const tdElement = document.createElement( 'td' );
    tr1Element.appendChild( tdElement );
    tdElement.textContent = `${this.cookiesSale[i]}`;
  }
  const totalElement = document.createElement( 'td' );
  tr1Element.appendChild( totalElement ).innerHTML = Math.ceil( this.total );




};
function tablefoot() {
  // const tFooter = document.createElement( 'tfoot' );
  // tableElement.appendChild( tFooter );

  const talbelFoot = document.createElement( 'tr' );
  tableElement.appendChild( talbelFoot );

  const totalHeader = document.createElement( 'th' );
  talbelFoot.appendChild( totalHeader ).innerHTML = 'Totals';

  for ( let i = 0; i < workingHours.length; i++ ) {
    const totfoHeader = document.createElement( 'td' );
    talbelFoot.appendChild( totfoHeader );

    let totalCookies = 0;
    for(let j = 0; j < Market.allMarkets.length; j++) {
      totalCookies += Market.allMarkets[j].cookiesSale[i];
    }

    totfoHeader.textContent = totalCookies;

  }



  const totalOfTotals = document.createElement( 'td' );
  let totalOfTotal = 0;
  for(let j = 0; j < Market.allMarkets.length; j++) {
    totalOfTotal += Market.allMarkets[j].total;
  }


  talbelFoot.appendChild( totalOfTotals ).textContent = Math.ceil(totalOfTotal);


}




Market.allMarkets = [];
const Seattle = new Market( 'Steattle', 23, 65, 6.3 );
Seattle.getCookiesale();
Seattle.getCustomer();
Seattle.render();

const Tokyo = new Market( 'Tokyo', 3, 24, 1.2 );
Tokyo.getCookiesale();
Tokyo.getCustomer();
Tokyo.render();

const Dubai = new Market( 'Dubai', 23, 65, 6.3 );
Dubai.getCookiesale();
Dubai.getCustomer();
Dubai.render();

const Paris = new Market( 'Paris', 23, 65, 6.3 );
Paris.getCookiesale();
Paris.getCustomer();
Paris.render();

const Lima = new Market( 'Lima', 23, 65, 6.3 );
Lima.getCookiesale();
Lima.getCustomer();
Lima.render();
tablefoot();


const formElement = document.getElementById( 'addNewCookiesStorForm' );
formElement.addEventListener( 'submit', function ( Tareq ) {
  Tareq.preventDefault();
  const storName = Tareq.target.Store_name.value;
  const minCus = Tareq.target.minCus.value;
  const maxCus = Tareq.target.maxCus.value;
  const avgCookie = Tareq.target.avgCookie.value;

  tableElement.removeChild(tableElement.lastChild);

  const Stor = new Market( storName, Number( minCus ), Number( maxCus ), Number( avgCookie ) );

  Stor.getCookiesale();
  Stor.getCustomer();
  Stor.render();

  tablefoot();
  // console.log( Market.allMarkets );
  // console.log( Market.allMarkets[0].total );
} );