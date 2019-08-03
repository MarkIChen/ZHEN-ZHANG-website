function on(index) {

  $("#overlay").css("display", "block");
  // $("body").addClass("fix-page")

  if(index == 2) {
    $(".overlay-content-block p").text("Testing2")
  } else if(index == 3){
    $(".overlay-content-block p").text("Testing3")
  }
}

function off() {
  $("#overlay").css("display", "none");
  // $("body").removeClass("fix-page");
}


$(".card-left").hover(function(){

  $(".card-left .hidden-btn-learn").addClass("show-hidden-layer");
  $(".card-left img").animate({width: "auto", height: "350px"}, 300);
}, function(){
  $(".card-left .hidden-btn-learn").removeClass("show-hidden-layer");
  $(".card-left img").animate({width: "auto", height: "300px"}, 100);
})

$(".card-mid").hover(function(){

  $(".card-mid .hidden-btn-learn").addClass("show-hidden-layer");
  $(".card-mid img").animate({width: "auto", height: "350px"}, 300);
}, function(){
  $(".card-mid .hidden-btn-learn").removeClass("show-hidden-layer");
  $(".card-mid img").animate({width: "auto", height: "300px"}, 100);
})

$(".card-right").hover(function(){

  $(".card-right .hidden-btn-learn").addClass("show-hidden-layer");
  $(".card-right img").animate({width: "auto", height: "350px"}, 300);
}, function(){
  $(".card-right .hidden-btn-learn").removeClass("show-hidden-layer");
  $(".card-right img").animate({width: "auto", height: "300px"}, 100);
})
