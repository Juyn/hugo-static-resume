import "./css/main.css";
import "./css/styles.scss";


let menuBtn = $("#menuBar");

menuBtn.click(function() {

  $('.hamburger-menu').toggleClass('animate');

  if ($(".secondaryMenu").hasClass("active")) {

    $(".secondaryMenu").removeClass("active");
    setTimeout(function() {
      $(".primaryMenu").addClass("active");
    }, 400);


  } else {
    $(".primaryMenu").removeClass("active");

    setTimeout(function() {
      $(".secondaryMenu").addClass("active");
    }, 350);
  }
});

function scrollTo(target) {
  const top = $(target).offset().top;
  const duration = 500;
  const changeHash = function() {
    location.hash = target
  };
  $("html, body").animate({ scrollTop: top }, duration, changeHash);
}

$(document).ready(function() {
  var elements = $(".sidebar > .main-info *");

  console.log(elements);

  for (let i = 0; i < elements.length; i++) {
    setTimeout(function() {
      $(elements[i].tagName).addClass("bs");
    }, (400 * i) - 300 * i);
  }

  setTimeout(function() {
    $(".main-content").addClass("active");
  }, 500);

  $("#sidebar a.btn[href='#contact']").on("click", function (event) {
    event.preventDefault();

    scrollTo($.attr(this, "href"));
  });
});

