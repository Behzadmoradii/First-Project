$(document).ready(function () {
  $("#topHeader a").click(function () {
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1500
    );
    $("#topHeader a.active").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 51) {
      $("#menuFixed").addClass("fixed");
    } else {
      $("#menuFixed").removeClass("fixed");
    }
  });

  let allFilters = $(".portfolioFilter");
  for (let i = 0; i < allFilters.length; i++) {
    $(allFilters[i]).click(function (e) {
      e.preventDefault();
      let type = $(this).attr("data-type");
      if (type == "all") {
        showPortfolioBox();
      } else {
        hidePortfolioBox();
        portfolioFilter(type);
      }

      removeActive();
      $(this).addClass("active");
    });
  }

  $("#myForm").submit(function (e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.onload = function () {
      console.log(xhr.responseText);
    };
    xhr.send(
      JSON.stringify({
        name: $("#input-name").val(),
        email: $("#input-email").val(),
      })
    );
  });
});

const hidePortfolioBox = () => {
  let portFolio = $(".portfolioBox");
  for (let i = 0; i < portFolio.length; i++) {
    $(portFolio[i]).css("display", "none");
  }
};

const showPortfolioBox = () => {
  let portFolio = $(".portfolioBox");
  for (let i = 0; i < portFolio.length; i++) {
    $(portFolio[i]).css("display", "block");
  }
};

const removeActive = () => {
  let portfolioMenu = $(".portfolioFilter");
  for (let i = 0; i < portfolioMenu.length; i++) {
    if ($(portfolioMenu[i]).hasClass("active")) {
      $(portfolioMenu[i]).removeClass("active");
    }
  }
};

const portfolioFilter = (type) => {
  let showBox = $(".portfolioBox-" + type);
  for (let i = 0; i < showBox.length; i++) {
    $(showBox[i]).css("display", "block");
  }
};

function myFunction(x) {
  x.classList.toggle("change");

  if ($("nav").hasClass("mobile")) {
    $("nav").removeClass("mobile");
    $("#headerList").hide();
    $("#topHeader h1").css("margin-top", "148px");
  } else {
    $("nav").addClass("mobaile");
    $("#headerList").fadeIn();
    $("#topHeader h1").css("margin-top", "65px");
  }
}
