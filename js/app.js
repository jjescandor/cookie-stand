"use strict";
console.log('hello')
let times = ['0600 AM', '0700 AM', '0800 AM', '0900 AM', '1000 AM', '1100 AM',
    '1200 PM', '0100 PM', '0200 PM', '0300 PM', '0400 PM', '0500 PM', '0600 PM', '0700 PM'];
let seattleSales = document.getElementById('seattle');
let tokyoSales = document.getElementById('tokyo');
let dubaiSales = document.getElementById('dubai');
let parisSales = document.getElementById('paris');
let limaSales = document.getElementById('lima');
let seattleDashBoard = document.getElementById('seattle-store');
let tokyoDashBoard = document.getElementById('tokyo-store');
let dubaiDashBoard = document.getElementById('dubai-store');
let parisDashBoard = document.getElementById('paris-store');
let limaDashBoard = document.getElementById('lima-store');

let seattleStore = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getCookieSalesPerHour: function () {
        let cookiesPerHour = Math.ceil(this.getRandomCustomers() * this.avg);
        return cookiesPerHour;
    },
    renderPage: function () {
        let title = document.createElement('h2');
        title.textContent = `Store: ${this.location}`;
        seattleDashBoard.prepend(title);
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sum += this.cookiesSoldEachHourArray[i];
            console.log(sum);
            let li = document.createElement('li');
            li.textContent = `${times[i]} :  ${this.cookiesSoldEachHourArray[i]} cookies`;
            seattleSales.appendChild(li);
        }
        let totalSum = document.createElement('li');
        totalSum.textContent = `Total Cookie Sales : ${sum}`;
        seattleSales.appendChild(totalSum);
    }
}
let tokyoStore = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getCookieSalesPerHour: function () {
        let cookiesPerHour = Math.ceil(this.getRandomCustomers() * this.avg);
        return cookiesPerHour;
    },
    renderPage: function () {
        let title = document.createElement('h2');
        title.textContent = `Store: ${this.location}`;
        tokyoDashBoard.prepend(title);
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sum += this.cookiesSoldEachHourArray[i];
            console.log(sum);
            let li = document.createElement('li');
            li.textContent = `${times[i]} :  ${this.cookiesSoldEachHourArray[i]} cookies`;
            tokyoSales.appendChild(li);
        }
        let totalSum = document.createElement('li');
        totalSum.textContent = `Total Cookie Sales : ${sum}`;
        tokyoSales.appendChild(totalSum);
    }
}

let dubaiStore = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getCookieSalesPerHour: function () {
        let cookiesPerHour = Math.ceil(this.getRandomCustomers() * this.avg);
        return cookiesPerHour;
    },
    renderPage: function () {
        let title = document.createElement('h2');
        title.textContent = `Store: ${this.location}`;
        dubaiDashBoard.prepend(title);
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sum += this.cookiesSoldEachHourArray[i];
            console.log(sum);
            let li = document.createElement('li');
            li.textContent = `${times[i]} :  ${this.cookiesSoldEachHourArray[i]} cookies`;
            dubaiSales.appendChild(li);
        }
        let totalSum = document.createElement('li');
        totalSum.textContent = `Total Cookie Sales : ${sum}`;
        dubaiSales.appendChild(totalSum);
    }
}

let parisStore = {
    location: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getCookieSalesPerHour: function () {
        let cookiesPerHour = Math.ceil(this.getRandomCustomers() * this.avg);
        return cookiesPerHour;
    },
    renderPage: function () {
        let title = document.createElement('h2');
        title.textContent = `Store: ${this.location}`;
        parisDashBoard.prepend(title);
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sum += this.cookiesSoldEachHourArray[i];
            console.log(sum);
            let li = document.createElement('li');
            li.textContent = `${times[i]} :  ${this.cookiesSoldEachHourArray[i]} cookies`;
            parisSales.appendChild(li);
        }
        let totalSum = document.createElement('li');
        totalSum.textContent = `Total Cookie Sales : ${sum}`;
        parisSales.appendChild(totalSum);
    }
}

let limaStore = {
    location: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getCookieSalesPerHour: function () {
        let cookiesPerHour = Math.ceil(this.getRandomCustomers() * this.avg);
        return cookiesPerHour;
    },
    renderPage: function () {
        let title = document.createElement('h2');
        title.textContent = `Store: ${this.location}`;
        limaDashBoard.prepend(title);
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            sum += this.cookiesSoldEachHourArray[i];
            console.log(sum);
            let li = document.createElement('li');
            li.textContent = `${times[i]} :  ${this.cookiesSoldEachHourArray[i]} cookies`;
            limaSales.appendChild(li);
        }
        let totalSum = document.createElement('li');
        totalSum.textContent = `Total Cookie Sales : ${sum}`;
        limaSales.appendChild(totalSum);
    }
}


seattleStore.renderPage();
tokyoStore.renderPage();
dubaiStore.renderPage();
parisStore.renderPage();
limaStore.renderPage();

