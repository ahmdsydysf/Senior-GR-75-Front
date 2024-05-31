// function test() {
//   var un = document.getElementById("usernameInput");
//   var pw = document.getElementById("passwordInput");
//   console.log(pw.type);
//   pw.type = "text";
// }

function viewPassword() {
  var pw = document.getElementById("passwordInput");
  if (pw.type == "text") {
    pw.type = "password";
  } else if (pw.type == "password") {
    pw.type = "text";
  }
}

// test();

function showContent() {
  var txt = document.getElementById("myTxt");
  var content = document.getElementById("content");
  content.innerHTML = txt.value;
}
// < > <=  >=  != == === !==    comparisons
// logical operators | &  ||  &&
// laptop || book
// laptop && book
// var x = 65;

// if (x == 10 || x == 5) {
//   console.log("ahmed");
// }

// if (x !== "ahmed") {
//   console.log("not ahmed");
// } else {
//   console.log("ahmmmmmmmmmmed");
// }

// if (x >= 90 && x < 100) {
//   console.log("A+");
// } else if (x < 90 && x > 80) {
//   console.log("B");
// } else if (x <= 80 && x > 50) {
//   console.log("c");
// } else {
//   console.log("F");
// }

// 8  == '8'  true
// 8  === '8'  false

// console.log(x);
// var arr = [44, 5, 36, 8];
// var r = Math.min(...arr);
// console.log(r);
// var r = Math.max(44, 5, 36, 8);
// var r = Math.round(15.44);
// var r = Math.ceil(15.44);
// var r = Math.floor(15.99);
// var r = Math.trunc(15.99);
// var r = Math.random() * 100; //  random float number between 0  =>  100

// var x = Math.round(r);
// console.log(x);

// r = x.trim().toUpperCase();
// r = x.concat(" is Ahmed");

// var myname = x.replace("my", "our");
// index0  length1
// var x = "my name is ahmed";

// var r = x.charAt(60);

// var r1 = x.indexOf("ahmed");
// var r = x.substring(r1);

// // var r = x.length;

// // console.log(myname);
// console.log(r);

// var Myname = "ahmed @ gmail . com";

// console.log(Myname.slice(-8, -3));

// console.log(Myname.split());
// console.log(Myname.split(""));
// console.log(Myname.split(" "));

// console.log(Myname.indexOf("ed")); //3
// console.log(Myname.indexOf("sayed")); //6
// console.log(Myname.indexOf("sayed", 8)); // -1 no result is found

// console.log(Myname.indexOf("ed", Myname.indexOf("ed") + 1));
// console.log(Myname.lastIndexOf("ed"));
// var le = Myname.length;
// console.log(le);
// console.log(Myname.includes(".com", le - 4));

// var myString = "Lorem ipsum dolor sit amet consectetur";

// // console.log(myString.slice(0, 3));
// // console.log(myString.slice(0, 3));

// var len = myString.length;
// var myP = Math.round(Math.random() * len); // 0 -> 10   33
// var myP2 = Math.round(Math.random() * len); // 0 -> 10   33

// console.log(myString);
// console.log(myP);
// console.log(myString.slice(myP2, myP));

function gen() {
  var lorem =
    "ask8784515faf ascdfs523af4we89 fw4897r523 89%^&*#&*(*)__WQ!1234yhrjkncsdjkgweytrw3 78ry";
  var myPassword = document.getElementById("usernameInput");
  var mylength = document.getElementById("passwordInput");

  if (mylength.value >= 6) {
    var finalPass = ""; // 5sdjso8&

    for (var i = 0; i < mylength.value; i++) {
      var r = Math.round(Math.random() * lorem.length); // 0 -> 60  20
      finalPass += lorem.slice(r, r + 1);
    }
    myPassword.value = finalPass;
  } else {
    myPassword.value = "Plz try again more than 6 char";
  }
}

function createElementPost() {
  var newElem = document.createElement("div");
  var myRow = document.querySelector(".container .row");
  newElem.innerHTML =
    "this is new post <button> delete </button> <button> Edit </button>";
  myRow.appendChild(newElem);
}
