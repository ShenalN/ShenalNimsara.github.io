var menuBtn = document.getElementById("menuBtn");

var sideNav = document.getElementById("sideNav");

menuBtn.addEventListener("click", menuBar);

sideNav.style.right = -400 + "px";

  function menuBar() {
    if (sideNav.style.right == -400 + "px") {
      sideNav.style.right = 0 + "px";
      menuBtn.src = "menuclose.png";
    }else {
      sideNav.style.right = -400 + "px";
      menuBtn.src = "menu.png";
    }
  }
  
  
//pre loader


window.addEventListener("load", function() {
  document.querySelector(".loader").classList.add("hide");
});
  
