let cookieStoreDashBoardArray = [];
cookieStoreDashBoardArray.push(document.querySelector('#seattle'),
    document.querySelector('#tokyo'),
    document.querySelector('#dubai'),
    document.querySelector('#paris'),
    document.querySelector('#lima'));

console.log(cookieStoreDashBoardArray);
console.log(storeInstanceArray);
//console.log(storeInstanceArray[0].cookiesSoldEachHourArray[0])

function cookieStoreDashboard() {
    for (let i = 0; i < cookieStoreDashBoardArray.length; i++) {
        storelocationName = document.createElement('h3');
        storelocationName.textContent = storeInstanceArray[i].location;
        cookieStoreDashBoardArray[i].appendChild(storelocationName);
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