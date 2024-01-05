// let heading = document.querySelector('h1').innerText
// console.log(heading)
// console.log("Hello World")

let username = "abdullah"

// let form = document.querySelector('form')
// console.log(typeof form)

function formSubmit() {
  let uname = document.getElementById("username").value;
  let pwd = document.getElementById("password").value;

  if (uname === username) {
    if (typeof pwd == "string") {
      if (document.getElementById("javascript").checked) {
        console.log(`Hi ${uname}, Welcome to JS community.`);
      } else if(document.getElementById('java').checked) {
        console.log(`Hi ${uname}, Welcome to Java community.`);
      } else {
        console.log('No choices selected')
      }
    } else {
      console.log(`Password ${pwd} is incorrect!`);
    }
  } else {
    console.log(`User not found!`);
  }
}
