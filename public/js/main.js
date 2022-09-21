// $(function() {
//     $('.social a').tooltip({
//       placement: "right",
//       container: 'body'
//     });
//   });


$(document).ready(function() {
  $(".mediaIcon").click(function () {
    console.log("button has been clicked")
    $("#fbImage").animate({left: '180px'}, 500); //I think I need visibility here but it is still not showing as visible.
    $("#twImage").animate({left: '120px'}, 500);
    $("#insImage").animate({left: '60px'}, 500);
  })
})


$(".alert").fadeOut(3000);