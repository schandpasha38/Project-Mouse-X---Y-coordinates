window.addEventListener("mousemove", function(event){
    console.log(event);
    document.getElementById("xvalue").textContent = event.x;
    document.getElementById("yvalue").textContent = event.y;
})
