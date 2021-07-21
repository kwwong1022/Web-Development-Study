const req = new XMLHttpRequest();

req.onload = function () {
    const data = this;
    console.log(data);
    //console.log(JSON.parse(data));
}

req.onerror = function () {

}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();