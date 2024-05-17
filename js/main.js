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
