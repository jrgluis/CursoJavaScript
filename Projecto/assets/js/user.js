/*window.addEventListener("load", event=> {
    const id = getParam("id");
    callAPI('${url}/${id}', "GET", {})
    .then( user => {
        const userForm = document.querySelector("#user-form")
        userForm.elements["id"].value = user.id
        userForm.elements["name"].value = user.name
        userForm.elements["userName"].value = user.userName
        userForm.elements["password"].value = user.password
    })
})*/

const userForm = document.querySelector("#user-form")

async function loadList(event) {
    const list = await fetch(url)
    .then( response => response.json());
    renderizarListadoPost(list)
}

function renderizarListadoPost(list) {
    const elementoListado = document.querySelector("#list")
    list.forEach(user => {
        const elemtTr = document.createElement("tr")
        const tdId = document.createElement("td")
        const tdName = document.createElement("td")
        const tdUserName = document.createElement("td")
        const tdActions = document.createElement("td")
        //elemtPost.classList.add("user")
        tdId.textContent = user.id;
        tdName.textContent = user.name;
        tdUserName.textContent = user.user_name;
        elementoListado.appendChild(elemtTr)
        elemtTr.appendChild(tdId)
        elemtTr.appendChild(tdUserName)
        elemtTr.appendChild(tdName)
        elemtTr.appendChild(tdActions)
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

window.addEventListener("load", loadList)

// 3. Agregar evento al formulario
//userForm.addEventListener("submit", saveUser)