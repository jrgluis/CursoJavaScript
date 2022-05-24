const loginForm = document.querySelector("#login-form")

async function logIn(event) {
    event.preventDefault()
    const inputs = event.target.elements;
    
    const userName = inputs["userName"].value;
    const password = inputs["password"].value;

    callAPI(url+"/?user_name="+userName, "GET", {})
    .then( user => {
        if(user[0].user_name === userName){
            if(user[0].password === password){
                window.location.replace(window.location.origin+"/dashboard");
            }else{
                alert("usuario o contraseña incorectos");
            }
        }else{
            alert("usuario o contraseña incorectos");
        }
    })
}

loginForm.addEventListener("submit", logIn)