// let heading = document.querySelector('h1').innerText
// console.log(heading)
// console.log("Hello World")

let username = "abdullah"

// let form = document.querySelector('form')
// console.log(typeof form)

function formSubmit() {
  let uname = document.getElementById("username").value;
  let pwd = document.getElementById("password").value;
  // console.log(isNaN(pwd))
  // let programming_lang_selection = document.getElementById("programming-languages").value
  // console.log(programming_lang_selection)


  let numRegex = /^[0-9]+$/;

  if (uname == "") {
    alert("Username cannot be empty!")
    
  }

  if (uname === username) {
    if (pwd === "") {
      alert("Password must be filled!");
    } else if (document.getElementById("javascript").checked) {
      console.log(`Hi ${uname}, Welcome to JS community.`);
      // alert('Hi Hussain! Welcome to JS community.')
    } else if (document.getElementById("java").checked) {
      console.log(`Hi ${uname}, Welcome to Java community.`);
    } else {
      console.log("No choices were selected");
    }
  } else {
    console.log(`User not found!`);
  }
}
