"use strict";
//Arrays used in the app
let columnsArray = ['Store Location', '0600 AM', '0700 AM', '0800 AM', '0900 AM', '1000 AM', '1100 AM',
    '1200 PM', '0100 PM', '0200 PM', '0300 PM', '0400 PM', '0500 PM', '0600 PM', '0700 PM', 'Daily Location Total'];
let cookieSalesPerStoreArray = [];
let totalSalesPerHourArray = [];
let storeInstanceArray = [];
let cookieStoreDashBoardArray = [];

//Tags in sales.html that are used as anchors for DOM manipulation 
let cookieStoreHeader = document.querySelector('thead tr');
let cookieStoreSales = document.querySelector('tbody');
let salesPerHourFooter = document.querySelector('tfoot');

//Object constructor function
function CookieStore(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesSoldEachHourArray = [];
    //Generates random cookie sales per hour
    this.getCookieSalesPerHour = function () {
        let cookiesPerHour = Math.ceil(Math.floor(Math.random() * (this.max - this.min + 1)
            + this.min) * this.avg);
        return cookiesPerHour;
    };
    //Renders tbody section of the Table which is invoked in renderCookieStoreTableHeader()
    this.renderTableTbody = function () {
        let trStoreLocation = document.createElement('tr');
        cookieStoreSales.appendChild(trStoreLocation);
        let storeLocation = document.createElement('td');
        storeLocation.textContent = this.location;
        trStoreLocation.appendChild(storeLocation);
        let sumPerStore = 0;
        for (let i = 0; i < columnsArray.length - 2; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sumPerStore += this.cookiesSoldEachHourArray[i];
            let cookieSalesPerHour = document.createElement('td');
            cookieSalesPerHour.textContent = this.cookiesSoldEachHourArray[i];
            trStoreLocation.appendChild(cookieSalesPerHour);
        }
        cookieSalesPerStoreArray.push(sumPerStore);
        let totalSalesPerStore = document.createElement('td');
        totalSalesPerStore.textContent = sumPerStore;
        trStoreLocation.appendChild(totalSalesPerStore);
    };
    storeInstanceArray.push(this);
}

//Instances of the CookieStore object constructor function
new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

//Renders the header section of the table
function renderCookieStoreTableHeader() {
    for (let i = 0; i < columnsArray.length; i++) {
        let tableHeader = document.createElement('td');
        tableHeader.textContent = columnsArray[i];
        cookieStoreHeader.appendChild(tableHeader);
    }
    //Invokes renderTableTbody() on all instances of CookieStore object
    for (let i = 0; i < storeInstanceArray.length; i++) {
        storeInstanceArray[i].renderTableTbody();
    }
}
renderCookieStoreTableHeader();

//Renders footer section of the table
function renderTableFooter() {
    //Invokes renderCookieStoreTableHeader()
    let trTotal = document.createElement('tr');
    salesPerHourFooter.appendChild(trTotal);
    let totalSalesHourTitle = document.createElement('td');
    totalSalesHourTitle.textContent = 'Total';
    trTotal.appendChild(totalSalesHourTitle);
    let totalOfTotal = 0;
    //Finds the total number of cookies sold per hour in all stores
    for (let i = 0; i < columnsArray.length - 2; i++) {
        let totalSalesPerHourinAllstores = 0;
        let totalSalesPerHour = document.createElement('th');
        for (let j = 0; j < storeInstanceArray.length; j++) {
            totalSalesPerHourinAllstores += storeInstanceArray[j].cookiesSoldEachHourArray[i];
        }
        totalSalesPerHourArray.push(totalSalesPerHourinAllstores);
        totalSalesPerHour.textContent = totalSalesPerHourArray[i];
        trTotal.appendChild(totalSalesPerHour);
        //Stores the total number of sales from 6am - 7pm in all stores in a variable
        totalOfTotal += totalSalesPerHourinAllstores;
    }
    let totalSalesInAllStores = document.createElement('td');
    totalSalesInAllStores.textContent = totalOfTotal;
    trTotal.appendChild(totalSalesInAllStores);
}
//Invokes renderTableFooter(), intitializes the entire program
renderTableFooter();

cookieStoreDashBoardArray.push(document.querySelector('#seattle'),
    document.querySelector('#tokyo'),
    document.querySelector('#dubai'),
    document.querySelector('#paris'),
    document.querySelector('#lima'));

function cookieStoreDashboard() {
    for (let i = 0; i < cookieStoreDashBoardArray.length; i++) {
        let storelocationName = document.createElement('h3');
        let minimumCookiesale = document.createElement('h4');
        minimumCookiesale.textContent = `Min : ${storeInstanceArray[i].min}`;
        let maximumCookiesale = document.createElement('h4');
        maximumCookiesale.textContent = `Max : ${storeInstanceArray[i].max}`;
        let avgCookiesale = document.createElement('h4');
        avgCookiesale.textContent = `Avg : ${storeInstanceArray[i].avg}`;
        storelocationName.textContent = storeInstanceArray[i].location;
        cookieStoreDashBoardArray[i].append(storelocationName, minimumCookiesale,
            maximumCookiesale, avgCookiesale);
        for (let j = 0; j < columnsArray.length - 2; j++) {
            let cookieStoreLi = document.createElement('li');
            cookieStoreLi.textContent = `${columnsArray[j + 1]} : ${storeInstanceArray[i].cookiesSoldEachHourArray[j]} `;
            cookieStoreDashBoardArray[i].appendChild(cookieStoreLi);
        }
        let seattleTotal = document.createElement('li');
        seattleTotal.innerHTML = `Total Cookies Sold: ${cookieSalesPerStoreArray[i]}`
        cookieStoreDashBoardArray[i].appendChild(seattleTotal);
    }
}
cookieStoreDashboard();