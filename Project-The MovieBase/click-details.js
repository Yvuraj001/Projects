import { tagchk, minutesToHoursAndMinutes } from "./functions.js"

const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get("titleId")
const mediaType = urlParams.get("type")
 
let popularwidth;
const positions = new Map();    

let endpoint = mediaType === 'tv'
    ? `https://api.themoviedb.org/3/tv/${movieId}?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US`
    : `https://api.themoviedb.org/3/movie/${movieId}?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US`;

let ihtml = ""
// Simple helper to show/hide the loading overlay
const _getLoaderEl = () => document.getElementById('loader-overlay')
const showLoader = () => { const l = _getLoaderEl(); if (l) l.style.display = 'flex'; }
const hideLoader = () => { const l = _getLoaderEl(); if (l) l.style.display = 'none'; }

const loadData = async () => {
 
    showLoader()
    try {
        let a = await fetch(endpoint)
        let data = await a.json()  

        let videoEndpoint = mediaType === 'tv'
            ? `https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US`
            : `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US`;


        // Getting trailers
        let videoResponse = await fetch(videoEndpoint);
        let videoData = await videoResponse.json();


        let trailers = videoData.results?.filter(video =>
            video.type === "Trailer" &&
            video.site === "YouTube"
        ) || [];


        let trailersHTML = '';
        if (trailers.length > 0) {
            trailersHTML = '<h3></h3><div class="trailer-section">';
            trailers.forEach(trailer => {
                trailersHTML += `
            <div class="trailer-item">
                <h4>'' ${trailer.name} ''</h4>
                <iframe 
                    width="100%" 
                    height="400" 
                    src="https://www.youtube.com/embed/${trailer.key}" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
            });
            trailersHTML += '</div>';
        }

        // Getting Providers

        let watchurlendpoint = mediaType === "tv"
            ? `https://api.themoviedb.org/3/tv/${movieId}/watch/providers?api_key=95a08eadc472f7ab8f7ac10cfe63027a` : `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=95a08eadc472f7ab8f7ac10cfe63027a`
        let provhtml = '<div class="amar"></div><div class="provider-container">'
        let provider = await fetch(watchurlendpoint)
        let providerData = await provider.json()

        if (providerData.results && providerData.results.US) {
            const usprovider = providerData.results.US
            if (usprovider.flatrate) {
                usprovider.flatrate.forEach(prov => {

                    provhtml += `<div class="provider-item">
    <img src="https://image.tmdb.org/t/p/w200${prov.logo_path}" alt="${prov.provider_name}">
    <div class="provider-name">${prov.provider_name}</div>
    </div>`

                })
            }

        }
        else {
            provhtml += '<div class="no-providers">No streaming providers available</div>';
        }
        provhtml += '</div>'

        // Getting Cast 

        let casturlendpoint = mediaType === "tv"
            ? `https://api.themoviedb.org/3/tv/${movieId}/credits?api_key=95a08eadc472f7ab8f7ac10cfe63027a` : `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=95a08eadc472f7ab8f7ac10cfe63027a`

        let castinfo = await fetch(casturlendpoint)
        let castdata = await castinfo.json()
        popularwidth = castdata.cast.length * 269;
        let casthtml = '<div class="cast-title"`></div><div class="cast-container">'
        castdata.cast.forEach(castmember => {
            casthtml += `<div class="cast-member">
        <img src="https://image.tmdb.org/t/p/w200${castmember.profile_path}" alt="${castmember.name}">
        <div class="cast-name">${castmember.name}</div>`
            casthtml += `</div>`
        })

        if (data) {
            ihtml += `<div class="data">
                <div class="left">
                    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="titleimage">
                </div>
                <div class="right">
                    <div class="click-title"><strong>Title :</strong> ${data.title || data.name}</div>
                    <div class="release-date"><strong>Release Date : </strong>  ${data.release_date || data.first_air_date}</div>
                    <div class="gerne-cont">
                        <span class="genre-tag">${data.genres[0]?.name || 'e'}</span>
                        <span class="genre-tag">${data.genres[1]?.name || 'e'}</span>
                        <span class="genre-tag">${data.genres[2]?.name || 'e'}</span>
                        
                    </div>
                     <div class="popularity"><strong>Popularity:</strong> ${data.vote_average  }  <strong> Out of </strong> "${data.vote_count}" <strong> Vote</strong></div>
                <div class="language"><strong>Language:</strong> ${data.original_language?.toUpperCase() || 'N/A'}</div>
                <div class="country"><strong>Origin Country:</strong> ${data.origin_country?.[0] || data.production_countries?.[0]?.name || 'N/A'}</div>
                <div class="runtime"><strong>Runtime:</strong> ${data.runtime ? minutesToHoursAndMinutes(data.runtime) : (data.episode_run_time?.[0] ? data.episode_run_time[0] + ' min' : 'N/A')}</div>

                <div class="providers">${provhtml}</div>
                    <div class="production"><div class="pdtitle"> Production Houses :</div>
                    <div class="pd"> ${data.production_companies[0]?.name || 'e'} ",</div>
                    <div class="pd"> ${data.production_companies[1]?.name || 'e'} ",</div>
                    <div class="pd"> ${data.production_companies[2]?.name || 'e'} " </div>
                    </div>
                    <div class="overview">" ${data.overview || 'No overview available'} "</div>
                </div>
                <div class="cast-info"> <div class="click-details-nav">
                <img class="previous" style="height: 21px;"  src="./images/previous1.svg" alt="">
                <img class="next" style="height: 21px;" src="./images/next.svg" alt="">
            </div>${casthtml}</div>
               
            </div> <div class="trailer">${trailersHTML}</div>`
        }
       
      
        clickmoviedetails.innerHTML += ihtml
        await tagchk()
        
    } catch (err) {
        console.error('Error loading movie details', err) 
         
         const el = document.getElementById('clickmoviedetails')
         if (el) el.innerHTML = '<div class="error">Failed to load details.Chekc your connection or  try again later.</div>'
    } finally {
        hideLoader()
    }

    
const cardWidth = 169;
const container = document.querySelector('.cast-info .cast-container');

if (container) {
    const visibleCards = Math.floor(container.offsetWidth / cardWidth);
    const maxScroll = -((popularwidth - visibleCards * cardWidth));

    // Handle NEXT button
    document.querySelectorAll(".click-details-nav .next").forEach(e => {
        e.addEventListener("click", () => {
            let currentpos = positions.get(container) || 0;
            
            if (currentpos > maxScroll) {
                currentpos -= 169;
                positions.set(container, currentpos);
                container.style.transform = `translateX(${currentpos}px)`;
                container.style.transition = 'transform 0.3s ease-in-out';
            }
        });
    });


    document.querySelectorAll(".click-details-nav .previous").forEach(e => {
        e.addEventListener("click", () => {
            let currentpos = positions.get(container) || 0;
            
            if (currentpos < 0) {
                currentpos += 169;
                positions.set(container, currentpos);
                container.style.transform = `translateX(${currentpos}px)`;
                container.style.transition = 'transform 0.3s ease-in-out';
            }
        });
    });
}
}

loadData()


searchBtn1.addEventListener("click", () => {



    const query = document.getElementById('searchInput').value;
    window.location.href = `./search.html?q=${encodeURIComponent(query)}`;

})

document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const query = document.getElementById('searchInput').value;
        window.location.href = `./search.html?q=${encodeURIComponent(query)}`;
    }
});




document.querySelector(".head-title").addEventListener("click", () => {
    window.location.href = "./index.html"
})

//  <span class="genre-tag">${data.genres[1].name || 'e'}</span>

//                    <span class="genre-tag">${data.genres[2].name || 'e'}</span>
