"use strict";
//Arrays used in the app
let columnsArray = ['Store Location', '0600 AM', '0700 AM', '0800 AM', '0900 AM', '1000 AM', '1100 AM',
    '1200 PM', '0100 PM', '0200 PM', '0300 PM', '0400 PM', '0500 PM', '0600 PM', '0700 PM', 'Daily Location Total'];
let cookieSalesPerStoreArray = [];
let totalSalesPerHourArray = [];
let storeInstanceArray = [];
//HTML tags that are used as anchors for DOM manipulation 
let cookieStoreHeader = document.querySelector('thead');
let cookieStoreSales = document.querySelector('tbody');
let salesPerHourFooter = document.querySelector('tfoot')
//Object constructor function
function CookieStore(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesSoldEachHourArray = [];
    //Generates randoom cookie sales per hour
    this.getCookieSalesPerHour = function () {
        let cookiesPerHour = Math.ceil((Math.random() * (this.max - this.min + 1) + this.min) * this.avg);
        return cookiesPerHour;
    };
    //Renders tbody section of the Table
    this.renderTableTbody = function () {
        let storeLocation = document.createElement('tr');
        storeLocation.textContent = this.location
        cookieStoreSales.appendChild(storeLocation);
        let sumPerStore = 0;
        for (let i = 0; i < columnsArray.length - 2; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sumPerStore += this.cookiesSoldEachHourArray[i];
            let cookieSalesPerHour = document.createElement('td');
            cookieSalesPerHour.textContent = this.cookiesSoldEachHourArray[i];
            storeLocation.appendChild(cookieSalesPerHour);
        }
        cookieSalesPerStoreArray.push(sumPerStore);
        let totalSalesPerStore = document.createElement('td');
        totalSalesPerStore.textContent = sumPerStore;
        storeLocation.appendChild(totalSalesPerStore);
    };
    storeInstanceArray.push(this);
}
//Instances of the CookieStore object
new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);
//Function that renders the table header
function renderCookieStoreTableHeader() {
    for (let i = 0; i < columnsArray.length; i++) {
        let tableHeader = document.createElement('th');
        tableHeader.textContent = columnsArray[i];
        cookieStoreHeader.appendChild(tableHeader);
    }
    for (let i = 0; i < storeInstanceArray.length; i++) {
        storeInstanceArray[i].renderTableTbody();
    }
}
//Function that renders the table footer
function renderTableFooter() {
    renderCookieStoreTableHeader();
    let totalSalesHourTitle = document.createElement('tr');
    totalSalesHourTitle.textContent = 'Total';
    salesPerHourFooter.appendChild(totalSalesHourTitle);
    let totalOfTotal = 0;
    //Finds the total number of cookies sold per hour in all stores
    for (let i = 0; i < columnsArray.length - 2; i++) {
        let totalSalesPerHourinAllstores = 0;
        let totalSalesPerHour = document.createElement('td');
        for (let j = 0; j < storeInstanceArray.length; j++) {
            totalSalesPerHourinAllstores += storeInstanceArray[j].cookiesSoldEachHourArray[i];
            totalSalesPerHourinAllstores;
        }
        totalSalesPerHourArray.push(totalSalesPerHourinAllstores);
        totalSalesPerHour.textContent = totalSalesPerHourArray[i];
        totalSalesHourTitle.appendChild(totalSalesPerHour);
        totalOfTotal += totalSalesPerHourinAllstores;
    }
    let totalSalesInAllStores = document.createElement('td');
    totalSalesInAllStores.textContent = totalOfTotal;
    totalSalesHourTitle.appendChild(totalSalesInAllStores);
}
//Invokes the entire program
renderTableFooter();

console.log(cookieSalesPerStoreArray)


