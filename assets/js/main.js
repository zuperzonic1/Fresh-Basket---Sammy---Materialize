// Nav menu burger toggle
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
});

//Product page carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
  });

  // Autoplay function
  setInterval(function () {
    var instance = M.Carousel.getInstance(elems[0]);
    instance.next();
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  var moveRightButton = document.querySelector(".move-right");
  var moveLeftButton = document.querySelector(".move-left");
  var carousel = document.getElementById("custom-carousel");

  moveRightButton.onclick = function () {
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
  };

  moveLeftButton.onclick = function () {
    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
  };
});

/* list of our functions here */
function getHome() {
  $(".hide-all").hide();
  $(".home-page").show();
}

function getDepartment(id) {
  // alert("getDepartment" + id);
  $(".hide-all").hide();
  $(".department-page").show();
}

function getProduct(name, upc) {
  // alert("getDepartment" + name + "/" + upc);
  $(".hide-all").hide();
  $(".product-page").show();
}

function getSearch(id) {
  // alert("getSearch" + id);
  $(".search-page").show();
}

function getCart() {
  $(".hide-all").hide();
  $(".cart-page").show();
}

function getCreateAccount() {
  $(".hide-all").hide();
  $(".createaccount-page").show();
}

function getLogin() {
  $(".hide-all").hide();
  $(".login-page").show();
}
function getLocation() {
  $(".hide-all").hide();
  $(".location-page").show();
}

/* Start main code for event handling */

$(window).on("load", function () {
  /* BINDING */
  $(".logo").click(function () {
    location.href = `#/home/`;
  });

  $(".department-link").click(function () {
    location.href = `#/department/bakery`;
  });

  $(".product-link").click(function () {
    location.href = `#/product/cornflakes/1283674785`;
  });

  $(".search-link").click(function () {
    location.href = `#/search/xyz`;
  });

  $(".cart-link").click(function () {
    location.href = `#/cart/`;
  });

  $(".createaccount-link").click(function () {
    location.href = `#/createaccount/`;
  });

  $(".login-link").click(function () {
    location.href = `#/login/`;
  });

  $(".reset-link").click(function () {
    location.href = `#/reset/`;
  });

  $(".checkout-link").click(function () {
    location.href = `#/checkout/`;
  });

  $(".payment-link").click(function () {
    location.href = `#/payment/`;
  });

  $(".shipping-link").click(function () {
    location.href = `#/shipping/`;
  });

  $(".confirm-link").click(function () {
    location.href = `#/confirm/`;
  });

  $(".complete-link").click(function () {
    location.href = `#/complete/`;
  });

  $(".location-link").click(function () {
    location.href = `#/location/`;
  });

  /* ROUTING */

  var app = $.sammy(function () {
    this.get("#/home/", function () {
      getHome();
    });

    this.get("#/department/:department", function () {
      let id = this.params["department"];
      getDepartment(id);
    });
    this.get("#/location/", function () {
      getLocation();
    });

    this.get("#/product/:product/:upc", function () {
      let product = this.params["product"];
      let upc = this.params["upc"];
      // alert(product);
      getProduct(product, upc);
    });

    this.get("#/search/:search", function () {
      let id = this.params["search"];
      getSearch(id);
    });

    this.get("#/cart/", function () {
      getCart();
    });

    this.get("#/createaccount/", function () {
      getCreateAccount();
    });

    this.get("#/login/", function () {
      getLogin();
    });

    this.get("#/reset/", function () {
      getReset();
    });

    this.get("#/checkout/", function () {
      getCheckout();
    });

    this.get("#/payment/", function () {
      getPayment();
    });

    this.get("#/confirm/", function () {
      getConfirm();
    });

    this.get("#/shipping/", function () {
      getShipping();
    });

    this.get("#/complete/", function () {
      getComplete();
    });
  });

  // default when page first loads
  $(function () {
    app.run("#/home/");
  });
});
