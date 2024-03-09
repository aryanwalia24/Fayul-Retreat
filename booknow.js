// Hamburger button
$(function() {
  $(".toggle").on("click", function() {
    $(".item").toggleClass("active");
    $("#hamburger-icon").toggleClass("active");
    $(".filter-menu").toggleClass("active");
  });

  $(document).on("click", function(event) {
    const menu = $("#navbar");
    if (!menu.is(event.target) && menu.has(event.target).length === 0) {
      $(".item").removeClass("active");
      $("#hamburger-icon").removeClass("active");
      $(".filter-menu").removeClass("active");
    }
  });
});

// navbar sticky
window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Cookies
document.getElementById("agreeButton").addEventListener("click", function() {
  var elementToHide = document.getElementById("contentToHide");
  elementToHide.classList.add("hidden");
});

// // Price Converter
// function convertPriceToINR() {
//   var priceElements = document.querySelectorAll(".siPrice");
//   priceElements.forEach(function(element) {
//     var priceText = element.textContent;
//     var priceInDollars = parseFloat(priceText.replace("$", "").trim());
//     if (!isNaN(priceInDollars)) {
//       var priceInINR = priceInDollars * 82;
//       element.textContent = "₹" + priceInINR.toFixed(2);
//     }
//   });
// }
// function convertPriceToUSD() {
//   var priceElements = document.querySelectorAll(".siPrice");
//   priceElements.forEach(function(element) {
//     var priceText = element.textContent;
//     var priceInINR = parseFloat(priceText.replace("₹", "").trim());
//     if (!isNaN(priceInINR)) {
//       var priceInUSD = priceInINR / 82;
//       element.textContent = "$" + priceInUSD.toFixed(2);
//     }
//   });
// }

// document.getElementById("item2").addEventListener("click", function() {
//   if (this.textContent.trim() === "Prices in INR(Rs)") {
//     convertPriceToUSD();
//     this.textContent = "Prices in USD($)";
//   } else {
//     convertPriceToINR();
//     this.textContent = "Prices in INR(Rs)";
//   }
// });

// // Sort Rooms

// // sorting status
// var sortByPriceAscending = false;
// var sortByNameAscending = false;

// // "By Name"
// document.getElementById("item3").addEventListener("click", function() {
//   sortByNameAscending = !sortByNameAscending;
//   sortRoomsByName(sortByNameAscending);
//   updateArrowIcon("item3", sortByNameAscending);
// });

// // "By Price"
// document.getElementById("item4").addEventListener("click", function() {
//   sortByPriceAscending = !sortByPriceAscending;
//   sortRoomsByPrice(sortByPriceAscending);
//   updateArrowIcon("item4", sortByPriceAscending);
// });

// // sort rooms by name
// function sortRoomsByName(ascending) {
//   var roomList = document.querySelector(".room-area");
//   var rooms = roomList.querySelectorAll(".searchItem");
//   var sortedRooms = Array.from(rooms).sort(function(a, b) {
//     var nameA = a.querySelector(".sititle").textContent.trim().toLowerCase();
//     var nameB = b.querySelector(".sititle").textContent.trim().toLowerCase();
//     if (ascending) {
//       return nameA.localeCompare(nameB);
//     } else {
//       return nameB.localeCompare(nameA);
//     }
//   });
//   roomList.innerHTML = "";
//   sortedRooms.forEach(function(room) {
//     roomList.appendChild(room);
//   });
// }

// // sort rooms by price
// function sortRoomsByPrice(ascending) {
//   var roomList = document.querySelector(".room-area");
//   var rooms = roomList.querySelectorAll(".searchItem");
//   var sortedRooms = Array.from(rooms).sort(function(a, b) {
//     var priceA = parseFloat(
//       a
//         .querySelector(".siPrice")
//         .textContent.replace("$", "")
//         .replace("Rs.", "")
//         .trim()
//     );
//     var priceB = parseFloat(
//       b
//         .querySelector(".siPrice")
//         .textContent.replace("$", "")
//         .replace("Rs.", "")
//         .trim()
//     );
//     if (ascending) {
//       return priceA - priceB;
//     } else {
//       return priceB - priceA;
//     }
//   });
//   roomList.innerHTML = "";
//   sortedRooms.forEach(function(room) {
//     roomList.appendChild(room);
//   });
// }

// // update arrow icon based on sorting order
// function updateArrowIcon(itemId, ascending) {
//   var item = document.getElementById(itemId);
//   var arrow = item.querySelector(".arrow");
//   arrow.textContent = ascending ? "▲" : "▼";
// }

// Original prices in USD
var originalPricesUSD = [];

// Function to initialize original prices in USD
function initializeOriginalPrices() {
  var priceElements = document.querySelectorAll(".siPrice");
  priceElements.forEach(function(element) {
    var priceText = element.textContent;
    var priceInDollars = parseFloat(priceText.replace("$", "").trim());
    originalPricesUSD.push(priceInDollars);
  });
}

// Price Converter
function convertPriceToINR() {
  var priceElements = document.querySelectorAll(".siPrice");
  priceElements.forEach(function(element, index) {
    var priceInUSD = originalPricesUSD[index];
    var priceInINR = priceInUSD * 82; 
    element.textContent = "₹" + priceInINR.toFixed(2);
  });
}

function convertPriceToUSD() {
  var priceElements = document.querySelectorAll(".siPrice");
  priceElements.forEach(function(element, index) {
    var priceInUSD = originalPricesUSD[index];
    element.textContent = "$" + priceInUSD.toFixed(2);
  });
}

// Toggle between currencies
document.getElementById("item2").addEventListener("click", function() {
  if (this.textContent.trim() === "Prices in INR(Rs)") {
    convertPriceToINR();
    this.textContent = "Prices in USD($)";
  } else {
    convertPriceToUSD();
    this.textContent = "Prices in INR(Rs)";
  }
});

// Sort Rooms

// Sorting status
var sortByPriceAscending = false;
var sortByNameAscending = false;

// "By Name"
document.getElementById("item3").addEventListener("click", function() {
  sortByNameAscending = !sortByNameAscending;
  sortRoomsByName(sortByNameAscending);
  updateArrowIcon("item3", sortByNameAscending);
});

// "By Price"
document.getElementById("item4").addEventListener("click", function() {
  sortByPriceAscending = !sortByPriceAscending;
  sortRoomsByPrice(sortByPriceAscending);
  updateArrowIcon("item4", sortByPriceAscending);
});

// Sort rooms by name
function sortRoomsByName(ascending) {
  var roomList = document.querySelector(".room-area");
  var rooms = roomList.querySelectorAll(".searchItem");
  var sortedRooms = Array.from(rooms).sort(function(a, b) {
    var nameA = a.querySelector(".sititle").textContent.trim().toLowerCase();
    var nameB = b.querySelector(".sititle").textContent.trim().toLowerCase();
    if (ascending) {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });
  roomList.innerHTML = "";
  sortedRooms.forEach(function(room) {
    roomList.appendChild(room);
  });
}

// Sort rooms by price
function sortRoomsByPrice(ascending) {
  var roomList = document.querySelector(".room-area");
  var rooms = roomList.querySelectorAll(".searchItem");
  var sortedRooms = Array.from(rooms).sort(function(a, b) {
    var priceA = parseFloat(
      a
        .querySelector(".siPrice")
        .textContent.replace("$", "")
        .replace("₹", "")
        .trim()
    );
    var priceB = parseFloat(
      b
        .querySelector(".siPrice")
        .textContent.replace("$", "")
        .replace("₹", "")
        .trim()
    );
    if (ascending) {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });
  roomList.innerHTML = "";
  sortedRooms.forEach(function(room) {
    roomList.appendChild(room);
  });
}

// Update arrow icon based on sorting order
function updateArrowIcon(itemId, ascending) {
  var item = document.getElementById(itemId);
  var arrow = item.querySelector(".arrow");
  arrow.textContent = ascending ? "▲" : "▼";
}

initializeOriginalPrices();
