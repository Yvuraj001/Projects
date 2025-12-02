 


// serach function

const urlParams = new URLSearchParams(window.location.search)
const queryFromUrl = urlParams.get("q")
let searchpage = 1
let searchlength;


const searchfunc = async (searchQuery, searchpagenumber) => {


    let query = searchQuery || searchInput.value


    if (!query) {
        searchdata.innerHTML = "Plese enter the Movie name before searching."
    }

    searchInput.value = query




    const newUrl = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
    window.history.pushState({}, '', newUrl);

    const apiKey = "95a08eadc472f7ab8f7ac10cfe63027a";
    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${searchpagenumber}`;


    let a = await fetch(searchUrl)
    let data = await a.json()

    searchlength = data.total_pages;
    if (!query) {
        searchdata.innerHTML = "Plese enter the Movie name before searching."
        return;
    }


    let ihtml7 = ""

    searchdata.innerHTML = ""

    for (const movie of data.results) {

         

        ihtml7 +=
            ` <div class="coming shadow" data-id="${movie.id}" data-type="${movie.media_type}">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div></div>`
    }
    searchdata.innerHTML = ihtml7


    if (ihtml7 === "") {
        searchdata.innerHTML = "No results found. Please try a different query."
    }
    

    localStorage.setItem("lastquery", query)
    localStorage.setItem("lastresults", ihtml7)


}
// End of search function


// Normal search fucntion
if (queryFromUrl) {
    searchfunc(queryFromUrl, searchpage)
}

if (!queryFromUrl) {

    const savedquery = localStorage.getItem("lastquery")
    const savedresults = localStorage.getItem("lastresults")
    if (savedquery && savedresults) {
        searchInput.value = savedquery
        searchdata.innerHTML = savedresults

    }
}
// serchpagenumber = 

let next = document.querySelector(".next")
let prev = document.querySelector(".previous")

document.querySelector(".searchnav").addEventListener("click", async (e) => {
    let clickedButton = e.target.closest('button');


    if (clickedButton === next && searchpage < searchlength) {
        searchpage++

        await searchfunc(queryFromUrl, searchpage)

    }
    if (clickedButton === prev && searchpage > 1) {
        searchpage--
        console.log(clickedButton, searchpage)
        await searchfunc(queryFromUrl, searchpage)

    }

})

searchBtn.addEventListener("click", () => {
    searchpage = 1;
    searchfunc(searchInput.value, 1);
})

document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchpage = 1;
        searchfunc(searchInput.value, 1);
    }
});



document.getElementById("home").addEventListener("click", (e) => {
    window.location.href = '/index.html';
})


