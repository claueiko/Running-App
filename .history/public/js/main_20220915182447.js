// $(function() {
//     $('.social a').tooltip({
//       placement: "right",
//       container: 'body'
//     });
//   });

$(document).ready(function() {
  $(".mediaIcon").click(function () {
    console.log("button has been clicked")
    $("#fbImage").animate({left: '220px'}, 500); //I think I need visibility here but it is still not showing as visible.
    $("#twImage").animate({left: '160px'}, 500);
    $("#insImage").animate({left: '100px'}, 500);
  })
})





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