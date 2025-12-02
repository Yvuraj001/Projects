function print(v1, v2){
    return v1+ v2
}

// To check the tags 
 const tagchk = async () => {
    let elm = document.querySelectorAll(".genre-tag, .pd");

    Array.from(elm).forEach(e => {
         
        const cleaned = e.textContent.replace(/['" ]/g, '') 
        
        if (cleaned === "e" || cleaned === "") {
            e.style.display = "none";
        }
    });
}
// To get the genres

let genresMap = {}

async function loadGenres() {
    let genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=95a08eadc472f7ab8f7ac10cfe63027a"
    let response = await fetch(genreUrl)
    let data = await response.json()

    data.genres.forEach(genre => {
        genresMap[genre.id] = genre.name

    })
}



let genresMap2 = {}

async function loadGenres2() {
    // for movie genres
    let moviegenreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=95a08eadc472f7ab8f7ac10cfe63027a"
    let response = await fetch(moviegenreUrl)
    let moviedata = await response.json()

    // for tv series genres
    let seriesgenreUrl = "https://api.themoviedb.org/3/genre/tv/list?api_key=95a08eadc472f7ab8f7ac10cfe63027a"
    let seriesresponse = await fetch(seriesgenreUrl)
    let seriesdata = await seriesresponse.json()

    moviedata.genres.forEach(genre => {
        genresMap[genre.id] = genre.name

    })
    seriesdata.genres.forEach(genre => {
        genresMap[genre.id] = genre.name

    })
}
// Fuction of time conversion
function minutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} hour${hours === 1 ? '' : 's'} & ${remainingMinutes} minute${remainingMinutes === 1 ? '' :
    's'}`;
}


 
 
 
 
   export {tagchk, minutesToHoursAndMinutes}