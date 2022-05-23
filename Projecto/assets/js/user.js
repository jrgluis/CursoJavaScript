const url = "http://localhost:3200/users";

window.addEventListener("load", event=> {
    const id = getParam("id");
    callAPI('${url}/${id}', "GET", {})
    .then( user => {
        const userForm = document.querySelector("#user-form")
        userForm.elements["id"].value = user.id
        userForm.elements["name"].value = user.name
        userForm.elements["userName"].value = user.userName
        userForm.elements["password"].value = user.password
    })
})

const userForm = document.querySelector("#user-form")

async function eventoClick(event) {
    const list = await fetch(url)
    .then( response => response.json());
    renderizarListadoPost(list)
}

function renderizarListadoPost(list) {
    const elementoListado = document.querySelector("#listado")
    list.forEach(post => {
        const elemtPost = document.createElement("tr")
        elemtPost.classList.add("post")
        elemtPost.textContent = 'id: ${user.id} | name: ${post.name}.'
        elementoListado.appendChild(elemtPost)
    });
}

function saveUser(event) {
    event.preventDefault()

    // 1. obtener datos del formulario
    const inputs = event.target.elements;
    const userForm = {
        id: inputs["id"].value,
        name: inputs["name"].value,
        userName: inputs["userName"].value,
        password: inputs["password"].value,
    }

    // 2. enviar datos al API
    callAPI('${url}/${userForm.id}', "PUT", userForm)
    .then( () => {
        /*if (confirm(`Desea volver al listado de clientes?`)) {
            window.history.back()
        }*/
    })
    
}

window.addEventListener("load", eventoClick)

// 3. Agregar evento al formulario
userForm.addEventListener("submit", saveUser)