
const fetchBitcoinPrice = async()=> {
    const res = await fetch("https://api.crasdyptonator.com/api/ticker/btc-usd")
        .then(r => {
            console.log("done");
            console.log(r.json());
        })
        .catch((e)=> {
            console.log("Error", e);
        });

    console.log("hi, ok");
}
