/*let portOverlay = document.getElementsByClassName("Shade-overlay Portfolio-overlay");*/

let portOverlay=document.getElementById("test");


console.log(portOverlay);

let portImage = document.getElementsByClassName("open-overlay");
portImage.onclick = function() {
    portOverlay.style.visibility = "visible";
}