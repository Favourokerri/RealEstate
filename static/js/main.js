function openNav() {
    const navClass = document.getElementsByClassName("nav-links")[0];
    navClass.style.left = "0px"
    document.getElementById("overlay").style.display = "block";
    
}

function closeNav() {
    const navClass = document.getElementsByClassName("nav-links")[0];
    navClass.style.left = "-300px"
    document.getElementById("overlay").style.display = "none";
}