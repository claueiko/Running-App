$(function() {
    $('.social a').tooltip({
      placement: "right",
      container: 'body'
    });
  });

$(document).ready(function() {

  $(".content-box").click(function() {
    $(".content-box").animate({
      left: '100px',
    }, 1000);
    $(".content-after").show().animate({
      left: '300px'
    }, 2000);
  });
});





// // LIVE SEARCH
// function search(event) {
//      event.preventDefault();
//      let searchInput = document.querySelector("#city");
//      let city = `${searchInput.value}`;
//      let h4 = document.querySelector("h4");
//      h4.innerHTML = searchInput.value;
//      info(city);
// }

// function updateApp(response) {
//     let city = response.event.eventName;

// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", search);
// info("Solihull");