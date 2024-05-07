// let el = document.querySelector("h1");
// el.style.color = "red";

// var h3 = document.querySelector("h1");
// var name = "ahmed";

// h3.innerText = "senior";

// h3.style.color = "red";

// var x;

// x = 10;

// // console.log(x);

// x = 150;

// console.log(x);

// //  +   -    *    /

// var x = "5";

// x = 50 + x; //  550 => string
// console.log(typeof x);
// console.log(x);

// var x = "10";

// x = Number(x) - 5;

// console.log(x);
// console.log(typeof x);

// var _name = "ahmed";
// var salary = 1000;
// var fullNameOfStudentOfOurClass = "ahmed sayed";

// var x = 10;

// // x = x + 50;
// x += 50;
// console.log(x);

// 123e-2  =  .00123
// var name = "ahmed";
// var age = 30;

// // my name is ahmed and age is 30

// var myH1 = "<div style=color:red  class=col p-5 ><h1>ahmed</h1></div>";
// var myH1 = `<div style="color:red " class='col p-5' ><h1>${name}</h1></div>`;
// document.write(myH1);

// makeAnAlertOnDom();
// myfn();

// function makeAnAlertOnDom() {
//   alert("are you sure !!!!");
// }

// console.log(nameIs);
// var nameIs;
// nameIs = "mahmoud";
// console.log(nameIs);
// var myfn = function () {
//   console.log("i am a variable function");
// };

// function sum() {
//   var x = 10;
//   var y = 20;
//   var sum = x + y;
//   alert(sum);
// }
// sum();
// function sum(x = 0, y = 0) {
//   alert(x + y);
// }
// sum();
// parameter  &  arguments

// function printYourName(username , password) {
//   // alert("your name is : " + username + "and my password is : " + password);
//   alert(`my name is ${username} and pw ${password}`);
// }
// printYourName("ahmed sayed", 123);
// function test() {
//   var x = 1;
//   var y = 2;
//   var r = x + y;
//   return r;
// }
// // console.log(test());

// var myH1 = document.getElementById("myH");
// console.log(myH1);
// myH1.innerText = "red";
// console.log(myH1);

//const // can't be redeclear or reasign

// const myName = "amed";
// const Tax = 0.14
// console.log(myName);
// var myAge;
// myAge = 20;
// console.log(myAge);
// myAge = 30;
// var myFileName;
// myFileName = "index.html";

// var x = "ahmed";
// console.log(x);
// console.log(typeof x);

// var y = parseInt("y8u0u");
// var y1 = Number("80u"); // NAN
// var y2 = 66;
// console.log(y2);
// y2.toString();
// console.log(y2);

// console.log(typeof y2);
// ahmed, mariam, noran , ziad;

// Array = variable multi values
// var names = [
//   "ahmed",
//   "mariam",
//   "Ziad",
//   "nouran",
//   null,
//   50,
//   undefined,
//   [1, 2, "Sayed"],
//   y2,
// ];

// console.log(names);
// console.log(names[3]);
// var nouranName = names[3];

// var x = 10;
// var y = "10";

// // x -= y;// x = x+y
// // x == y // boolean false
// // x === y
// console.log(x !== y); // 11

// alert("are u sure ?!!!");
// document.write("welcome");
// var r = confirm("20");
// console.log(r);

// function dele(event, btn) {
//   console.log(btn);
//   console.log(event);
//   var r = confirm("are you sure deleting this item ??");
//   if (r == true) {
//     btn.parentElement.parentElement.remove();
//   }
// }

// function test() {
//   var r = confirm("are you sure ??");
//   var elem = document.querySelector("header");

//   if (r == true) {
//     elem.innerHTML += `<span class='alert alert-info'> test </sapn>`;
//   } else {
//     elem.innerHTML += `<span class='alert alert-danger'> test </sapn>`;
//   }
// }

// var num = 100.5658;

// console.log(num.toString());
// console.log((1_000_000).toString());
// console.log((1_000_000).toString());
// console.log(num.toFixed(2));
// console.log(Number("100a"));
// console.log(parseInt("100a"));
// console.log(1e6);
// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.68));

// oop; // object orianted progrMMING

// organize and minimaize

// ahmed
// mo , nam , em , dat

// mohamed
// ex , ag , name , phone

// var name = "ahmed";

// var emps = {
//   namee: "ahmed",
//   email: "ahmed@gmail.com",
//   mobile: 100,
//   address: ["add1", "add2"],
//   printName: function () {
//     alert("welcome from emps object");
//   },
// };
// console.log(emps.printName());
// console.log(emps["printName"]());
// var myyear = 1990;

// var year = {
//   1990: "good",
//   2024: "not bad",
// };
// // console.log(year["1990"]);
// //  console.log(year.1990)
// console.log(year[myyear]);

// var midterm = {
//   ahmed: 60,
//   mohamed: 99,
// };
// console.log(midterm);
// midterm.ahmed = 98;
// console.log(midterm);
// midterm.mariam = 1000;
// console.log(midterm);
// midterm["nouran"] = 1000;
// console.log(midterm);

var firstObj = {
  name: "ahmed",
  age: 20,
};
var scondObj = {
  name: "mohamed",
  num: 2222,
};

var newObject = { ...firstObj, ...scondObj, address: "" };
newObject = {
  name: "ahmed",
  age: 20,
  name: "mohamed",
  num: 2222,
};

console.log(newObject);
