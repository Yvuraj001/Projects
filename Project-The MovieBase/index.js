
let popularwidth;


let positions = new Map()


let theaitems = []
let comitems = []
let url = "https://api.themoviedb.org/3/movie/popular?api_key=95a08eadc472f7ab8f7ac10cfe63027a&page=1"

let apikey = "95a08eadc472f7ab8f7ac10cfe63027a"
const shortitle = (title, maxLength = 15) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
}

const mainfunc = async () => {

    async function load() {

        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let a = await fetch(url, { signal: controller.signal });

        if (!a.ok) throw new Error("Failed to fetch!");

        let data = await a.json()


        popularwidth = data.results.length




        ihtml = ""



        for (const movie of data.results) {

            ihtml += ` <div class="movie-card shadow" data-id="${movie.id}" data-type="movie">
            <div style="position: relative;">
             <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Movie Title" class="u-card-img"> 
                <div class="rating-badge">
                  <span>⭐${movie.vote_average}</span>
                </div>
            </div>
             <button class="view-details-btn" title="View Details">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </button>
             
        </div>`


        }

        popularitems.innerHTML = ihtml






    }




    async function load4() {


        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let a = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=95a08eadc472f7ab8f7ac10cfe63027a&page=1", { signal: controller.signal });

        if (!a.ok) throw new Error("Failed to fetch!");

        let data = await a.json()


        comitems = data.results
        ihtml9 = ""
        for (const movie of data.results) {
            ihtml9 += ` <div class="coming shadow" data-id="${movie.id}" data-type="movie">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
           
             <button class="view-details-btn" title="View Details">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </button>
            
             
            
        </div>`

        }
        toprateditems.innerHTML = ihtml9

    }


    async function load5() {

        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let a = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US", { signal: controller.signal });

        if (!a.ok) throw new Error("Failed to fetch!");

        let data = await a.json()

        comitems = data.results
        ihtml10 = ""
        for (const movie of data.results) {
            ihtml10 += ` <div class="coming shadow" data-id="${movie.id}" data-type="${movie.media_type || 'movie'}">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
            
             <button class="view-details-btn" title="View Details">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </button>
            
              
                  
            
        </div>`

        }
        weeklytrendingitems.innerHTML = ihtml10

    }


    async function load6() {

        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let a = await fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US", { signal: controller.signal });

        if (!a.ok) throw new Error("Failed to fetch!");

        let data = await a.json()


        ihtml11 = ""
        for (const movie of data.results) {
            ihtml11 += ` <div class="coming shadow" data-id="${movie.id}"  data-type="tv">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
            
             <button class="view-details-btn" title="View Details">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </button>
            
              
                
            
        </div>`

        }
        onairitems.innerHTML = ihtml11
    }

    async function load7() {

        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let a = await fetch(" https://api.themoviedb.org/3/movie/upcoming?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US", { signal: controller.signal });

        if (!a.ok) throw new Error("Failed to fetch!");

        let data = await a.json()


        ihtml12 = ""
        for (const movie of data.results) {
            ihtml12 += ` <div class="coming shadow" data-id="${movie.id}"  data-type="movie">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
            
             <button class="view-details-btn" title="View Details">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </button>
            
              
                
            
        </div>`

        }
        upcomingitems.innerHTML = ihtml12
    }


    async function load8() {

        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let a = await fetch(" https://api.themoviedb.org/3/movie/now_playing?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US", { signal: controller.signal });

        if (!a.ok) throw new Error("Failed to fetch!");

        let data = await a.json()


        ihtml13 = ""
        for (const movie of data.results) {
            ihtml13 += ` <div class="coming shadow" data-id="${movie.id}"  data-type="movie">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt=""></div>
            
             <button class="view-details-btn" title="View Details">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </button>
            
              
                
            
        </div>`

        }
        nowplayingitems.innerHTML = ihtml13
    }

    async function loadPopularTV() {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&page=1", { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch!");
        let data = await response.json();

        let html = "";
        for (const show of data.results) {
            html += `
        <div class="coming shadow" data-id="${show.id}" data-type="tv">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${show.poster_path}" alt=""></div>
            <button class="view-details-btn" title="View Details">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
            </button>
        </div>`;
        }
        document.getElementById("populartvitems").innerHTML = html;
    }

    async function loadTopRatedTV() {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let response = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&page=1", { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch!");

        let data = await response.json();

        let html = "";
        for (const show of data.results) {
            html += `
        <div class="coming shadow" data-id="${show.id}" data-type="tv">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${show.poster_path}" alt=""></div>
            <button class="view-details-btn" title="View Details">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
            </button>
        </div>`;
        }
        document.getElementById("topratedtvitems").innerHTML = html;
    }

    async function loadTrendingTV() {

        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);

        let response = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US", { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch!");

        let data = await response.json();

        let html = "";
        for (const show of data.results) {
            html += `
        <div class="coming shadow" data-id="${show.id}" data-type="tv">
            <div><img class="u-card-img" src="https://image.tmdb.org/t/p/w500/${show.poster_path}" alt=""></div>
            <button class="view-details-btn" title="View Details">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
            </button>
        </div>`;
        }
        document.getElementById("trendintvitems").innerHTML = html;
    }

    // loding all the groups mo fucntion
    try {
        let loadercont = document.getElementById("loadingOverlay");
        loadercont.classList.remove('none');
        await load()
        await load4()

        loadercont.classList.add('none');

    } catch (error) {
        let loadercont = document.getElementById("loadingOverlay");
        loadercont.classList.add('none');

        let displaymessage = error.message
        if (error.name === 'AbortError') {
            displaymessage = "<div style=\"color: red\">⏱️ Connection timeout! Server is not responding. Please try again or use VPN.</div> <i >  Alternate you can you another network DNS.</i>";
        }
        document.querySelector(".container").innerHTML = ` 
       
        <div class="errorcontainer" style="
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(295deg, var(--bg-gradient-start), var(--bg-gradient-end));  
                margin: 0 auto;
        ">
            <div style="
                background: white;
                padding: 50px;
                border-radius: 20px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                max-width: 500px;
            ">
                <h1 style="color: #ff4444; font-size: 48px; margin-bottom: 20px;">⚠️</h1>
                <h2 style="color: #333; margin-bottom: 15px;">Oops! Something went wrong </h2>
                <p style="color: #666; font-size: 18px; margin-bottom: 30px;">
                    ${displaymessage}
                </p>
                <button onclick="location.reload()" style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    border-radius: 30px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: transform 0.3s;
                " onmouseover="this.style.transform='scale(1.05)'" 
                   onmouseout="this.style.transform='scale(1)'">
                    🔄 Try Again
                </button>
            </div>
        </div>
    `;

        return;
    }
    // finally {
    //     // also hide loader even if no error happened
    //     let loadercont = document.getElementById("loadingOverlay");
    //     loadercont.classList.add('none');
    // }




    await Promise.all([

        load5(),
        load6(),
        load7(),
        load8(),
        loadPopularTV(),
        loadTopRatedTV(),
        loadTrendingTV()])


    // throw new Error("Loading timeout - please check your connection or try using VPN or another newtork DNS :( ");


    // Making the card move

    const cardWidth = 268;
    const container = document.querySelector('#popular');
    const visibleCards = Math.floor(container.offsetWidth / cardWidth);
    const maxScroll = -((popularwidth - visibleCards) * cardWidth + 200);





    document.querySelectorAll(".next").forEach(e => {

        e.addEventListener("click", (n) => {

            let items = n.target.closest(".global-st").querySelector(".items")

            let currentpos = positions.get(items) || 0

            if (currentpos > maxScroll) {

                currentpos -= 269

                positions.set(items, currentpos)
                items.style.transform = `translateX(${currentpos}px)`

                document.querySelector(".container").style.transition = 'transform 0.3s ease-in-out';
            }


        }
        )
    })


    document.querySelectorAll(".previous").forEach(e => {

        e.addEventListener("click", (n) => {

            let items = n.target.closest(".global-st").querySelector(".items")

            let currentpos = positions.get(items) || 0
            if (currentpos < 0) {




                currentpos += 269
                positions.set(items, currentpos)
                items.style.transform = `translateX(${currentpos}px)`

                document.querySelector(".container").style.transition = 'transform 0.3s ease-in-out';

            }

        })
    })





}

mainfunc()






// if we are on index page check and store 

if (document.querySelector("#faltu")) {

    let pt = document.querySelectorAll(".uphead")[0]
    let hrt = document.querySelectorAll(".uphead")[1]
    let wt = document.querySelectorAll(".uphead")[2]
    let oi = document.querySelectorAll(".uphead")[3]
    let up = document.querySelectorAll(".uphead")[4]
    let np = document.querySelectorAll(".uphead")[5]
    let ptv = document.querySelectorAll(".uphead")[6]
    let trtv = document.querySelectorAll(".uphead")[7]
    let ttv = document.querySelectorAll(".uphead")[8]

    document.querySelectorAll("#faltu").forEach((e) => {
        e.addEventListener("click", (n) => {
            n.preventDefault();

            let dt = n.target.closest(".uphead")

            if (dt === pt) {
                localStorage.setItem('movieCategory', 'Popular Movies');
                console.log(dt)
            }
            else if (dt === hrt) {
                localStorage.setItem('movieCategory', 'Highest Rated Movies');
                console.log(dt)
            }
            else if (dt === wt) {
                localStorage.setItem('movieCategory', 'Weekly Trending Shows');
                console.log(dt)
            }
            else if (dt === oi) {
                localStorage.setItem('movieCategory', 'On Air Series');
                console.log(dt)
            }
            else if (dt === up) {
                localStorage.setItem('movieCategory', 'Upcoming Movies');
                console.log(dt)
            }
            else if (dt === np) {
                localStorage.setItem('movieCategory', 'In Therater ~');
                console.log(dt)
            }
            else if (dt === ptv) {
                localStorage.setItem('movieCategory', 'Popular TV Shows');
                console.log(dt)
            }
            else if (dt === trtv) {
                localStorage.setItem('movieCategory', 'Top Rated TV Shows');
                console.log(dt)
            }
            else if (dt === ttv) {
                localStorage.setItem('movieCategory', 'Trending TV Shows');
                console.log(dt)
            }


            // Navigate to details page
            window.location.href = './details.html';
        })
    })
}



document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("load", () => {


        const searchButtons = document.querySelectorAll('#searchBtn1');
        const searchInputs = document.querySelectorAll('#searchInput ,#searchInput2 ');

        // Handle search button clicks
        searchButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const query = btn.closest('.searchbar, .smallsearch').querySelector('#searchInput , #searchInput2').value;
                window.location.href = `./search.html?q=${encodeURIComponent(query)}`;
            });
        });

        // Handle Enter key in search inputs
        searchInputs.forEach(input => {
            input.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    const query = this.value;
                    window.location.href = `./search.html?q=${encodeURIComponent(query)}`;
                }
            });
        });
    });
});




window.addEventListener("load", () => {
    const loadingOverlay = document.getElementById("loadingOverlay");
    const content = document.querySelector(".papa");

    // Fade out the loading overlay
    loadingOverlay.style.opacity = "0";
    loadingOverlay.style.transition = "opacity 0.5s ease";

    // Show the content after the overlay fades out
    setTimeout(() => {
        loadingOverlay.style.display = "none";
        content.style.display = "block";
    }, 500); // Match the transition duration
});

document.querySelector(".srcico").addEventListener("click", () => {
    document.querySelector(".smallsearch").style.display = "block"
    document.querySelector(".srcico").style.display = "none"

})

