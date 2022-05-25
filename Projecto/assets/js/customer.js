function loadCustomer(customer) {
    const id = getParam("id");
    callAPI('${url}/${id}', "GET", {})
    .then( user => {
        const userForm = document.querySelector("#user-form")
        userForm.elements["id"].value = user.id
        userForm.elements["name"].value = user.name
        userForm.elements["userName"].value = user.userName
        userForm.elements["password"].value = user.password
    })
}

const userForm = document.querySelector("#customer-form")

async function loadList(event) {
    const list = await fetch(url+"customers")
    .then( response => response.json());
    renderizarListadoPost(list)
}

function renderizarListadoPost(list) {
    const elementoList = document.querySelector("#list")
    list.forEach(customer => {
        const elemtTr = document.createElement("tr")
        const tdId = document.createElement("td")
        const tdName = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdAddress = document.createElement("td")
        const tdCreateAt = document.createElement("td")
        const tdAction = document.createElement("td")
        //elemtPost.classList.add("user")
        tdId.textContent = customer.id;
        tdName.textContent = customer.name;
        tdEmail.textContent = customer.email;
        tdCreateAt.textContent = customer.createdAt;
        tdAddress.textContent = customer.address;
        elementoList.appendChild(elemtTr)
        elemtTr.appendChild(tdId)
        elemtTr.appendChild(tdName)
        elemtTr.appendChild(tdEmail)
        elemtTr.appendChild(tdAddress)
        elemtTr.appendChild(tdCreateAt)
        elemtTr.appendChild(tdAction)
    });
}

function createUser(event) {
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
    callAPI(url+"users", "POST", userForm)
    .then(user => {
        console.log(user)
        //....
        loadList();
        window.addEventListener("load", loadList)
    })
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