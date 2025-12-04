  // Fix heading
let totalPages = 1;
 
 
const details = async () => {
    const loadingOverlay = document.getElementById("loadingOverlay")
    if (document.getElementById("mvcards")) {
            try{
                if(loadingOverlay){
                     loadingOverlay.classList.remove('none');
                }
           

        let url;
        let heading = localStorage.getItem('movieCategory')
        let currentpage = 1

        Heading.innerHTML = `<div class="heading">${heading}</div>`

        if (heading === 'Popular Movies') {
            url = "https://api.themoviedb.org/3/movie/popular?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
        }
       
        if (heading === 'Highest Rated Movies') {
            url = " https://api.themoviedb.org/3/movie/top_rated?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
        }
        if (heading === 'Weekly Trending Shows') {
            url = " https://api.themoviedb.org/3/trending/movie/week?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
        }
        if (heading === 'On Air Series') {
            url = "https://api.themoviedb.org/3/tv/on_the_air?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
        }
        if(heading === "Upcoming Movies"){
            url=  "https://api.themoviedb.org/3/movie/upcoming?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
        }
        if(heading === 'In Therater ~'){
            url=  "https://api.themoviedb.org/3/movie/now_playing?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&page=1 "
        }

if (heading === 'Popular TV Shows') {
    url = "https://api.themoviedb.org/3/tv/popular?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
}

if (heading === 'Top Rated TV Shows') {
    url = "https://api.themoviedb.org/3/tv/top_rated?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
}

if (heading === 'Trending TV Shows') {
    url = "https://api.themoviedb.org/3/trending/tv/week?api_key=95a08eadc472f7ab8f7ac10cfe63027a&language=en-US&region=US"
}
        const dtfc = async (pagenum) => {

            let fetchurl = url + `&page=${pagenum}`

            let a = await fetch(fetchurl)
            let data = await a.json()
            totalPages = data.total_pages

            ihtml = ""

 

            for (const movie of data.results) {

                ihtml += `  
            <div class="detail-cards theater shadow" data-id="${movie.id}">
            
             <div>  <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Movie Title" class="u-card-img"></div> 
                 
            
             <button class="view-details-btn" title="View Details">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </button>
            
        </div>`


            }

            mvcards.innerHTML = ihtml
             

        }

         
        await dtfc(currentpage)
       
       } // if's bracket
       catch(error){
        mvcards.innerHTML =  `<div class="errortxt" style="color:red;"> *There is a issue while loading the titles. Please try again later or check the internet connection.</div>`
 
        console.log("Here the Error: " , error)

       } finally{
        if (loadingOverlay) {
               setTimeout(() => {
                loadingOverlay.classList.add('none'); 
               }, 1000); 
            }
       }
            
        

        let next = document.querySelector(".next")
        let prev = document.querySelector(".previous")
        
        
        document.querySelector(".pagenav").addEventListener("click", async (e) => {
              let clickedButton = e.target.closest('button');
            
            if (clickedButton === next && currentpage < totalPages) {
                currentpage++
              
                await dtfc(currentpage) 
                

            }
            else if(clickedButton === prev && currentpage > 1 ){
                currentpage-- 
                await dtfc(currentpage)      
                          
            }
                
            
             
            
        })
    }
    
  

}
details()



 
 

// Navigate to the search page
searchBtn1.addEventListener("click", ()=>{
    const query = document.getElementById('searchInput2').value;
   window.location.href = `./search.html?q=${encodeURIComponent(query)}`;
})

srcico.addEventListener("click", ()=>{
     window.location.href = `./search.html`;
})

// Enter key press
document.getElementById("searchInput2").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  
       const query = document.getElementById('searchInput2').value;
   window.location.href = `./search.html?q=${encodeURIComponent(query)}`;
    }
});

document.querySelector(".srcico2").addEventListener("click",()=>{
      window.location.href = `./search.html`;
})
 

 
 
 



 