// Function to the click.js

document.querySelectorAll(".container , #mvcards , #searchdata , #onair", "#upcoming").forEach(e => {

  e.addEventListener("click", async (n) => {

    let cards = n.target.closest(".movie-card , .theater, .coming , .detail-cards")



    if (cards) {
      let movieid = cards.dataset.id || cards.dataset.type

      let mediaType = cards.dataset.type || 'movie';



      window.location.href = `./click-details.html?titleId=${movieid}&type=${mediaType}`


    }
  })
})



document.querySelector(".head-title").addEventListener("click", () => {
  window.location.href = "./index.html"
})

const showme = () => {
    let overlay = document.createElement("div");
    overlay.className = "showme";
    
    let content = document.createElement("div");
    content.innerHTML = `
        <h3>Hi! My name is Yuvraj </h3>
        <p>Nice to see you here!</p>
        <p>If you find any issues or have suggestions, contact me at: <strong>geniusandsmart123@gmail.com</strong> </p>
        <button class="closebtn">Ok, thanks! ✨</button>
    `;
    
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Close button functionality
    content.querySelector(".closebtn").addEventListener("click", () => {
        overlay.remove();
    });
    
    // Close when clicking outside the modal
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
};


document.addEventListener('keydown', function(event) {
    // Only log when Z is pressed
    if (event.code === 'KeyZ') {
        console.log('Z pressed! Ctrl:', event.ctrlKey, 'Alt:', event.altKey);
        
        if (event.ctrlKey && event.altKey) {
            event.preventDefault();
            
            showme();
        }  
    }
});
 
  
 
 

 
