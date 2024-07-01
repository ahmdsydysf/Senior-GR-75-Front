// // function test() {
// //   var un = document.getElementById("usernameInput");
// //   var pw = document.getElementById("passwordInput");
// //   console.log(pw.type);
// //   pw.type = "text";
// // }

// function viewPassword() {
//   var pw = document.getElementById("passwordInput");
//   if (pw.type == "text") {
//     pw.type = "password";
//   } else if (pw.type == "password") {
//     pw.type = "text";
//   }
// }

// // test();

// function showContent() {
//   var txt = document.getElementById("myTxt");
//   var content = document.getElementById("content");
//   content.innerHTML = txt.value;
// }
// // < > <=  >=  != == === !==    comparisons
// // logical operators | &  ||  &&
// // laptop || book
// // laptop && book
// // var x = 65;

// // if (x == 10 || x == 5) {
// //   console.log("ahmed");
// // }

// // if (x !== "ahmed") {
// //   console.log("not ahmed");
// // } else {
// //   console.log("ahmmmmmmmmmmed");
// // }

// // if (x >= 90 && x < 100) {
// //   console.log("A+");
// // } else if (x < 90 && x > 80) {
// //   console.log("B");
// // } else if (x <= 80 && x > 50) {
// //   console.log("c");
// // } else {
// //   console.log("F");
// // }

// // 8  == '8'  true
// // 8  === '8'  false

// // console.log(x);
// // var arr = [44, 5, 36, 8];
// // var r = Math.min(...arr);
// // console.log(r);
// // var r = Math.max(44, 5, 36, 8);
// // var r = Math.round(15.44);
// // var r = Math.ceil(15.44);
// // var r = Math.floor(15.99);
// // var r = Math.trunc(15.99);
// // var r = Math.random() * 100; //  random float number between 0  =>  100

// // var x = Math.round(r);
// // console.log(x);

// // r = x.trim().toUpperCase();
// // r = x.concat(" is Ahmed");

// // var myname = x.replace("my", "our");
// // index0  length1
// // var x = "my name is ahmed";

// // var r = x.charAt(60);

// // var r1 = x.indexOf("ahmed");
// // var r = x.substring(r1);

// // // var r = x.length;

// // // console.log(myname);
// // console.log(r);

// // var Myname = "ahmed @ gmail . com";

// // console.log(Myname.slice(-8, -3));

// // console.log(Myname.split());
// // console.log(Myname.split(""));
// // console.log(Myname.split(" "));

// // console.log(Myname.indexOf("ed")); //3
// // console.log(Myname.indexOf("sayed")); //6
// // console.log(Myname.indexOf("sayed", 8)); // -1 no result is found

// // console.log(Myname.indexOf("ed", Myname.indexOf("ed") + 1));
// // console.log(Myname.lastIndexOf("ed"));
// // var le = Myname.length;
// // console.log(le);
// // console.log(Myname.includes(".com", le - 4));

// // var myString = "Lorem ipsum dolor sit amet consectetur";

// // // console.log(myString.slice(0, 3));
// // // console.log(myString.slice(0, 3));

// // var len = myString.length;
// // var myP = Math.round(Math.random() * len); // 0 -> 10   33
// // var myP2 = Math.round(Math.random() * len); // 0 -> 10   33

// // console.log(myString);
// // console.log(myP);
// // console.log(myString.slice(myP2, myP));

// function gen() {
//   var lorem =
//     "ask8784515faf ascdfs523af4we89 fw4897r523 89%^&*#&*(*)__WQ!1234yhrjkncsdjkgweytrw3 78ry";
//   var myPassword = document.getElementById("usernameInput");
//   var mylength = document.getElementById("passwordInput");

//   if (mylength.value >= 6) {
//     var finalPass = ""; // 5sdjso8&

//     for (var i = 0; i < mylength.value; i++) {
//       var r = Math.round(Math.random() * lorem.length); // 0 -> 60  20
//       finalPass += lorem.slice(r, r + 1);
//     }
//     myPassword.value = finalPass;
//   } else {
//     myPassword.value = "Plz try again more than 6 char";
//   }
// }

// function createElementPost() {
//   var newElem = document.createElement("div");
//   var myRow = document.querySelector(".container .row");
//   newElem.innerHTML =
//     "this is new post <button> delete </button> <button> Edit </button>";
//   myRow.appendChild(newElem);
// }

// start for Loop explain   for(; ;){}

// window.document.write("<h1> ahmed sayed 1</h1>");
// window.document.write("<h1> ahmed sayed 3</h1>");
// window.document.write("<h1> ahmed sayed 4</h1>");

// var x = 0;

// for (;;) {
//   x = x + 1;

//   if (x > 4) {
//     break;
//   }
//   //1 1 1 1
//   window.document.write("<h1> ahmed sayed 1</h1>");
// }

// for (var i = 0; i <= 4; i++) {
//   window.document.write("<h1> ahmed sayed 1</h1>");
// }

// for (var i = 100; i > 0; i -= 2) {
//   window.document.write(`<h1> ahmed sayed ${i} </h1>`);
//   console.log(i);
// }

// for (var i = 20; i > 0; i++) {
//   console.log(i);
// }

//  array   or  object

// var animals = ["lions", "cats", "tigers", "bears", "Dogs"];

// for (var i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);

// nested Loop
// for (var i = 0; i < 10; i++) {
//   console.log("i is == " + i);

//   for (var j = 0; j < 4; j++) {
//     console.log("j is == " + j);
//   }
// }

// let studentsOfPrimary2 = [
//   ["a", "b"],
//   ["v", "g", "h", "oasidj"],
//   ["y", "u", "o"],
// ];

// for (var i = 0; i < studentsOfPrimary2.length; i++) {
//   var row = studentsOfPrimary2[i];

//   for (var j = 0; j < row.length; j++) {
//     window.document.write(`<div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${row[j]}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`);
//   }
// }

// for of  ==> arrays
// var students = ["ah", "mo", "sy", "mazen"];

// // for (var i = 0; i < students.length; i++) {
// //   console.log(students[i]);
// // }

// for (var student of students) {
//   console.log(student);
// }

// var students = [
//   ["ahmed", "bahy"],
//   ["vodafone", "google", "hesham", "oasidj"],
//   ["yasser", "uouu", "oppo"],
// ];

// for (var classOfStudents of students) {
//   for (var student of classOfStudents) {
//     console.log(student);
//   }
// }

// for in   ==> object  &&   arrays

// var sd = {
//   ahmed: 90,
//   mazen: 91,
//   mohamed: 100,
// };

// for (var mazenTryToGetNames in sd) {
//   console.log(mazenTryToGetNames + " and degree = " + sd[mazenTryToGetNames]);
// }

// Object.keys(sd); // ['ahmed' , 'mazen' , 'mohamed']
// console.log(Object.keys(sd));
// console.log(Object.values(sd));
// console.log(Object.entries(sd));
// console.log(sd["mazen"]);

// studentsDegree['mazen']

// for (var std in studentsDegree) {
//   console.log(std + "and his Degree is == " + studentsDegree[std]);
//   // Object.values();
//   // Object.keys();
//   // Object.entries();
// }
// console.log(Object.values(studentsDegree)); // return new array contain all valu
// var AllDegrees = Object.values(studentsDegree);
// for (var deg of AllDegrees) {
//   console.log(deg);
// }
// var AllNames = Object.keys(studentsDegree);
// for (var nm of AllNames) {
//   console.log(nm);
// }
// var AllNamesAndDegrees = Object.entries(studentsDegree);
// for (var data of AllNamesAndDegrees) {
//   console.log(`degree of ${data[0]} == ${data[1]}`);
// }

//  while

// var secret = "ahmed";

// var guess = prompt("enter your name ~~");

// while (guess != secret) {
//   guess = prompt("try to enter the wright name ??");
// }

// console.log("congrats you success");

// do while

// var i = 0;

// do {
//   console.log("ahmed sayed");
//   i++;
// } while (i < 5);

// var max = parseInt(prompt("enter max number to guess"));

// while (!max) {
//   max = parseInt(prompt("enter max number to guess"));
// }

// var targetNum = Math.round(Math.random() * max);

// var guess = parseInt(prompt("plz enter your guess ?"));

// var attempts = 1;

// while (guess != targetNum) {
//   attempts++;
//   if (attempts == 6) {
//     alert(`Faaaaaaaaaaaaaaaaaail`);
//     break;
//   }
//   if (guess > targetNum) {
//     guess = parseInt(
//       prompt(
//         `your guess is to hight this is your attempt num :: ${attempts - 1}?`
//       )
//     );
//   } else {
//     guess = parseInt(
//       prompt(`your guess is to low  your attempt num :: ${attempts - 1}?`)
//     );
//   }
// }

// alert(`your number (${guess}) guess is correct after ${attempts} time`);

// // console.log(max, typeof max);
