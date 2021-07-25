const form = document.querySelector('#searchForm');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const searchInput = form.elements.query.value;
    searchTV(searchInput);
});

let searchTV = async (searchInput)=> {
    await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)  //?q=${searchInput}
        .then((res)=> {
            console.log("parsed response to JSON");
            return res.json();
        })
        .then((data)=> {
            if (data.length >= 10) {
                for (let i=0; i<10; i++) {
                    console.log(`Show: ${data[i].show.name}`);
                    console.log(`Score: ${Math.floor(data[i].score*10)}`);
                }
            }
        })
        .catch((e)=> {
            console.log("Error", e);
        });
}

console.log(form.style.backgroundColor.rgb());