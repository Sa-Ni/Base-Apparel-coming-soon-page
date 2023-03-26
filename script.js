const email = document.querySelector(".email");
const error = document.querySelector(".error");
const errorImg = document.querySelector(".error-img");
const button = document.querySelector(".submit");

let mailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function testMail(input, error) {
    if(mailRegex.test(input.value)) {
        console.log("true");
        error.style.display  = "none";
        errorImg.style.display = "none";
        
    }
    else {
        console.log("false");
        error.style.display = "block";
        email.style.borderColor = "red"
        errorImg.style.display  = "block";
    }
    
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    testMail(email, error,);
    console.log("clicked");
});

