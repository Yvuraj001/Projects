

const Addtask = () => {
     
    
    let IV = document.getElementById("input").value  // get value of input
     
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // gives array of the stored task or empty array
    
    tasks.push(document.getElementById("input").value)// puts the value into the user's entered data.

    localStorage.setItem("tasks", JSON.stringify(tasks)); // set the values of input into localstorage.
    
    loadtask() // load fuction

    document.getElementById("input").value = "" //  clears the input.
    
}


 function loadtask() {
    
             let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
         
             let taskValue = document.getElementById("taskValue"); // select HTMl elm.
         
             taskValue.innerHTML = ""; // first the value inside the div is empty. The the for Each loop fills the element by the vlaues of Array form the local Storage
         
             // Tasks is a Array of the objects and loop prints the values
             tasks.forEach((task, index) => {
                 // Handle old format (string) and new format (object)
                 let taskText = typeof task === 'string' ? task : task.text;
                 let isCompleted = typeof task === 'object' ? task.completed : false;
         
                 let IV = taskText
         
                 ihtml = `
                <div class="parent tick ${isCompleted ? 'ok' : ''}" data-index="${index}">
                 <div class="text">${IV}</div> 
                <div class="svgcont">  
                 <div id="ok" onclick="ok(this)" class="svg-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
             <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
            <div class="svg-2" onclick="del(this)"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
           <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
         </svg></div>
         </div>
                </div> `
         
                 taskValue.innerHTML += ihtml
             });
         }

 

// Click function
// Generated..
 const ok = (el) => {
             let parent = el.closest(".parent");
             let index = parent.getAttribute("data-index");
             
             // Toggle the visual class
             parent.classList.toggle("ok");
             
             // Get tasks from localStorage
             let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
             
             // Handle old format - convert to new format
             if (typeof tasks[index] === 'string') {
                 tasks[index] = {
                     text: tasks[index],
                     completed: false
                 };
             }
             
             // Toggle completed status
             tasks[index].completed = !tasks[index].completed;
             
             // Save back to localStorage
             localStorage.setItem("tasks", JSON.stringify(tasks));
         }
  
         const del = (el) => {
             // Get the index from data attribute
             let parent = el.closest(".parent");
             let index = parent.getAttribute("data-index");
             
             // Get tasks from localStorage
             let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
             
             // Remove the task at that index
             tasks.splice(index, 1);
             
             // Update localStorage
             localStorage.setItem("tasks", JSON.stringify(tasks));
             
             loadtask();
         }
         


// Clock Section

 
setInterval(function () {
    let a = new Date()
    let h = String(a.getHours()).padStart(2, '0')
    let m = String(a.getMinutes()).padStart(2, '0')
    let s = String(a.getSeconds()).padStart(2, '0')

    let clk = document.getElementById('clock')
    clk.innerHTML = `${h} / ${m} / ${s}`
}, 100)

// Enter buttan

document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // prevent form submit/reload
        Addtask();
    }
});

// Title Animation
 


let c = document.getElementsByTagName("h2")[0]
 
setTimeout(() => {
    c.innerHTML = "J"
}, 100);
setTimeout(() => {
    c.innerHTML += "u"
}, 200);
setTimeout(() => {
    c.innerHTML += "s"
}, 300);
setTimeout(() => {
    c.innerHTML += "t "
}, 400);
setTimeout(() => {
    c.innerHTML += " D"
}, 500);
setTimeout(() => {
    c.innerHTML += "o "
}, 600);
setTimeout(() => {
    c.innerHTML += " I"
}, 700);
setTimeout(() => {
    c.innerHTML += "t"
}, 800);

setTimeout(() => {
    c.innerHTML += "."
}, 900);
 
 // Theme fucntion

 


 
let first = document.getElementById("mainbody")

let loadtheme = localStorage.getItem("theme")
 
let x = ()=>{
     
    localStorage.removeItem("theme")
  localStorage.setItem("theme", "dark") 
  first.classList.remove("lighttheme")
    first.classList.add("darktheme")
    
}
let y = ()=>{

    localStorage.removeItem("theme")
    localStorage.setItem("theme", "light") 
  first.classList.remove("darktheme")
    first.classList.add("lighttheme")
return 2
}
 a.addEventListener('click', x)
 b.addEventListener('click', y)

 const It = ()=>{
 
     let gettheme = localStorage.getItem("theme")

     if(gettheme === "dark"){
        mainbody.classList.add("darktheme")
     }
     else if (gettheme ==="light"){
        mainbody.classList.add("lighttheme")
     }
     else if(gettheme !== "dark" , "light"){
        mainbody.classList.add("lighttheme")
     }
     else{
        alert("Please Open this file from VS Code or Live Server....")
     }
 }
 
  window.onload = ()=>{
    loadtask(),
    It() }
 
   //  const Addtask = () => {
         //     let IV = document.getElementById("input").value // get value of input
         
         //     let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // gives array of the stored task or empty array
         
         //     // Create task object with text and completed status
         //     tasks.push({
         //         text: document.getElementById("input").value,
         //         completed: false
         //     })
         
         //     localStorage.setItem("tasks", JSON.stringify(tasks)); // set the values of input into localstorage.
         
         //     loadtask() // load fuction
         
         //     document.getElementById("input").value = "" //  clears the input.
         // }
         
         
         // function loadtask() {
         //     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
         
         //     let taskValue = document.getElementById("taskValue"); // select HTMl elm.
         
         //     taskValue.innerHTML = ""; // first the value inside the div is empty. The the for Each loop fills the element by the vlaues of Array form the local Storage
         
         //     // Tasks is a Array of the objects and loop prints the values
         //     tasks.forEach((task, index) => {
         //         // Handle old format (string) and new format (object)
         //         let taskText = typeof task === 'string' ? task : task.text;
         //         let isCompleted = typeof task === 'object' ? task.completed : false;
         
         //         let IV = taskText
         
         //         ihtml = `
         //        <div class="parent tick ${isCompleted ? 'ok' : ''}" data-index="${index}">
         //         <div class="text">${IV}</div> 
         //        <div class="svgcont">  
         //         <div id="ok" onclick="ok(this)" class="svg-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
         //     <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
         //    <div class="svg-2" onclick="del(this)"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
         //   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
         //   <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
         // </svg></div>
         // </div>
         //        </div> `
         
         //         taskValue.innerHTML += ihtml
         //     });
         // }
         
         // setTimeout(
         //     window.onload = loadtask
         // ), 300
         
         // // Click function - NOW SAVES THE STATE
         // const ok = (el) => {
         //     let parent = el.closest(".parent");
         //     let index = parent.getAttribute("data-index");
             
         //     // Toggle the visual class
         //     parent.classList.toggle("ok");
             
         //     // Get tasks from localStorage
         //     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
             
         //     // Handle old format - convert to new format
         //     if (typeof tasks[index] === 'string') {
         //         tasks[index] = {
         //             text: tasks[index],
         //             completed: false
         //         };
         //     }
             
         //     // Toggle completed status
         //     tasks[index].completed = !tasks[index].completed;
             
         //     // Save back to localStorage
         //     localStorage.setItem("tasks", JSON.stringify(tasks));
         // }
         
         // const del = (el) => {
         //     // Get the index from data attribute
         //     let parent = el.closest(".parent");
         //     let index = parent.getAttribute("data-index");
             
         //     // Get tasks from localStorage
         //     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
             
         //     // Remove the task at that index
         //     tasks.splice(index, 1);
             
         //     // Update localStorage
         //     localStorage.setItem("tasks", JSON.stringify(tasks));
             
         //     loadtask();
         // }
         
         
         // // Clock Section
         // setInterval(function () {
         //     let a = new Date()
         //     let h = String(a.getHours()).padStart(2, '0')
         //     let m = String(a.getMinutes()).padStart(2, '0')
         //     let s = String(a.getSeconds()).padStart(2, '0')
         
         //     let clk = document.getElementById('clock')
         //     clk.innerHTML = `${h} / ${m} / ${s}`
         // }, 100)
         
         // // Enter button
         // document.getElementById("input").addEventListener("keypress", function(event) {
         //     if (event.key === "Enter") {
         //         event.preventDefault(); // prevent form submit/reload
         //         Addtask();
         //     }
         // });
         
         // // Title Animation
         // let c = document.getElementsByTagName("h2")[0]
          
         // setTimeout(() => {
         //     c.innerHTML = "J"
         // }, 100);
         // setTimeout(() => {
         //     c.innerHTML += "u"
         // }, 200);
         // setTimeout(() => {
         //     c.innerHTML += "s"
         // }, 300);
         // setTimeout(() => {
         //     c.innerHTML += "t "
         // }, 400);
         // setTimeout(() => {
         //     c.innerHTML += " D"
         // }, 500);
         // setTimeout(() => {
         //     c.innerHTML += "o "
         // }, 600);
         // setTimeout(() => {
         //     c.innerHTML += " I"
         // }, 700);
         // setTimeout(() => {
         //     c.innerHTML += "t"
         // }, 800);
         // setTimeout(() => {
         //     c.innerHTML += "."
         // }, 900);
          
         // // Theme function
         // let first = document.getElementById("mainbody")
         // let loadtheme = localStorage.getItem("theme")
          
         // let x = () => {
         //     localStorage.removeItem("theme")
         //     localStorage.setItem("theme", "dark") 
         //     first.classList.remove("lighttheme")
         //     first.classList.add("darktheme")
         // }
         
         // let y = () => {
         //     localStorage.removeItem("theme")
         //     localStorage.setItem("theme", "light") 
         //     first.classList.remove("darktheme")
         //     first.classList.add("lighttheme")
         //     return 2
         // }
         
         // a.addEventListener('click', x)
         // b.addEventListener('click', y)
         
         // const It = () => {
         //     let gettheme = localStorage.getItem("theme")
         
         //     if(gettheme === "dark"){
         //         mainbody.classList.add("darktheme")
         //     }
         //     else if (gettheme === "light"){
         //         mainbody.classList.add("lighttheme")
         //     }
         //     else{
         //         alert("Please Open this file from VS Code or Live Server....")
         //     }
         // }
         
         // setTimeout(
         //     window.onload = It  
         // ), 120
                