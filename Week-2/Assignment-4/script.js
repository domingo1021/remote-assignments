// first requirement
let firstContent = document.getElementById("first-content");
firstContent.addEventListener("click", (event)=>{
    if(event.target.id === "first-content"){
        firstContent.textContent = "Have a Good Time!"
    }
})

//second requirement.
let actionBtn = document.querySelector("#action-btn");
let secondContentBox = document.getElementsByClassName("second-content")[1]
actionBtn.addEventListener("click", (event)=>{
    if(event.target.id==="action-btn"){
        secondContentBox.style.display = "block";
    }
})