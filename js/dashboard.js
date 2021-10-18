let cookieStoreDashBoardArray = [];
cookieStoreDashBoardArray.push(document.querySelector('#seattle'),
    document.querySelector('#tokyo'),
    document.querySelector('#dubai'),
    document.querySelector('#paris'),
    document.querySelector('#lima'));

function cookieStoreDashboard() {
    for (let i = 0; i < cookieStoreDashBoardArray.length; i++) {
        storelocationName = document.createElement('h3');
        minimumCookiesale = document.createElement('h4');
        minimumCookiesale.textContent = `Min cookie sold: ${storeInstanceArray[i].min}`;
        maximumCookiesale = document.createElement('h4');
        maximumCookiesale.textContent = `Max cookie sold: ${storeInstanceArray[i].max}`;
        avgCookiesale = document.createElement('h4');
        avgCookiesale.textContent = `Avg cookie sold: ${storeInstanceArray[i].avg}`;
        storelocationName.textContent = storeInstanceArray[i].location;
        cookieStoreDashBoardArray[i].appendChild(storelocationName);
        cookieStoreDashBoardArray[i].appendChild(minimumCookiesale);
        cookieStoreDashBoardArray[i].appendChild(maximumCookiesale);
        cookieStoreDashBoardArray[i].appendChild(avgCookiesale);
        for (let j = 0; j < columnsArray.length - 2; j++) {
            let cookieStoreLi = document.createElement('li');
            cookieStoreLi.textContent = `${columnsArray[j + 1]} : ${storeInstanceArray[i].cookiesSoldEachHourArray[j]} `;
            cookieStoreDashBoardArray[i].appendChild(cookieStoreLi);
        }
        let seattleTotal = document.createElement('li');
        seattleTotal.textContent = `Total Cookes Sold: ${cookieSalesPerStoreArray[i]}  `
        cookieStoreDashBoardArray[i].appendChild(seattleTotal);
    }
}

cookieStoreDashboard();