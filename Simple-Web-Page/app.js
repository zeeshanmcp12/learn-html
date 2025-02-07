// console.log("Nothing special!")

const btn = document.querySelector("button");

const inputVal = document.getElementById("name");

// let formSubmit = btn.addEventListener("click", (evt) => {
//     // console.log(evt);
//     console.log("Button was clicked!")

// })

function formSubmit(){
    btn.addEventListener("click", () => {
        console.log("Button was clicked!")
        console.log(`Hi ${inputVal.value}!`);

    })
}

// console.log(typeof formSubmit);
// console.log(inputVal)