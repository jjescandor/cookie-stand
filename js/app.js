"use strict";
//Arrays used in the app
let times = ['Store Location', '0600 AM', '0700 AM', '0800 AM', '0900 AM', '1000 AM', '1100 AM',
    '1200 PM', '0100 PM', '0200 PM', '0300 PM', '0400 PM', '0500 PM', '0600 PM', '0700 PM', 'Daily Location Total'];
let cookieStoresTotalSalesArray = [];
let totalSalesPerHourArray = [];
let storeObjectsArray = [];
//Grab the anchor table elements
let cookieStoreHeader = document.getElementById('cookieStoreHeader')
let cookieStoreSales = document.getElementById('cookieStoreSales');
let salesPerHourFooter = document.getElementById('salesPerHourFooter')
//Object constructor function
function CookieStore(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesSoldEachHourArray = [];
    //Generates randoom cookie sales per hour
    this.getCookieSalesPerHour = function () {
        let randomNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        let cookiesPerHour = Math.ceil(randomNumber * this.avg);
        return cookiesPerHour;
    };
    //Renders tbody section of the Table
    this.renderTableTbody = function () {
        let storeLocation = document.createElement('tr');
        storeLocation.textContent = this.location
        cookieStoreSales.appendChild(storeLocation);
        let sum = 0;
        for (let i = 0; i < times.length - 2; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sum += this.cookiesSoldEachHourArray[i];
            let cookieSalesPerHour = document.createElement('td');
            cookieSalesPerHour.textContent = this.cookiesSoldEachHourArray[i];
            storeLocation.appendChild(cookieSalesPerHour);
        }
        cookieStoresTotalSalesArray.push(sum);
        let totalSalesPerStore = document.createElement('td');
        totalSalesPerStore.textContent = sum;
        storeLocation.appendChild(totalSalesPerStore);
    };
    storeObjectsArray.push(this);
}
//Five instances of the object
new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);
//Function that renders the table header
function renderCookieStoreTableHeader() {
    for (let i = 0; i < times.length; i++) {
        let th = document.createElement('th');
        th.textContent = times[i];
        cookieStoreHeader.appendChild(th);
    }
    for (let i = 0; i < storeObjectsArray.length; i++) {
        storeObjectsArray[i].renderTableTbody();
    }
}
//Function that renders the table footer
function renderTableFooter() {
    renderCookieStoreTableHeader();
    let totalSalesHourTitle = document.createElement('tr');
    totalSalesHourTitle.textContent = 'Total';
    salesPerHourFooter.appendChild(totalSalesHourTitle);
    let totalOfTotal = 0;
    for (let i = 0; i < times.length - 2; i++) {
        let totalSalesPerHourinAllstores = 0;
        let totalSalesPerHour = document.createElement('td');
        for (let j = 0; j < storeObjectsArray.length; j++) {
            totalSalesPerHourinAllstores += storeObjectsArray[j].cookiesSoldEachHourArray[i];
            console.log(totalSalesPerHourinAllstores);
        }
        totalSalesPerHourArray.push(totalSalesPerHourinAllstores);
        totalOfTotal += totalSalesPerHourinAllstores;
        totalSalesPerHour.textContent = totalSalesPerHourArray[i];
        totalSalesHourTitle.appendChild(totalSalesPerHour);
    }
    let totalSalesInAllStores = document.createElement('td');
    totalSalesInAllStores.textContent = totalOfTotal;
    totalSalesHourTitle.appendChild(totalSalesInAllStores);
}
//Invokes the entire program
renderTableFooter();



