//  SEARCH OPEN & CLOSE
//  HEADER & SEARCH SECTION

function srchOpen() {
  document.querySelector(".nav-search").style .transform = "translateY(0px)";
}

function srchClose() {
  document.querySelector(".nav-search").style .transform = "translateY(-100px)";
}


//  HUMBURGER MENU OPEN & CLOSING

function menuOpen() {
    
  document.getElementsByClassName("humb-menu-wrap")[0].style.width="100%";

}

function closeMenu() {
  document.getElementsByClassName("humb-menu-wrap")[0].style.width="0%";
}




//  DETAILS OPEN & CLOSE
//  HEADER & DETAILS SECTIONS

function dtlOpen() {
  document.querySelector(".nav-details").style .transform = "translateX(0px)";
}

function dtlClose() {
  document.querySelector(".nav-details").style .transform = "translateX(500px)";
}








//  SWIPPER SLIDER
//  DESIGN SECTION

var swiper = new Swiper(".design-container", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



//  TEAM SECTION
//  UIKIT COUNTING







//  PRICING SECTION
//  PRICE MONTH & YEAR FILTERING


