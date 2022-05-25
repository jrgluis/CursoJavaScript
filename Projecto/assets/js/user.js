const userForm = document.querySelector("#user-form")

function loadUser(id) {
    //const id = getParam("id");
    callAPI(url+"users/"+id, "GET", {})
    .then( user => {
        userForm.elements["id"].value = user.id
        userForm.elements["name"].value = user.name
        userForm.elements["userName"].value = user.user_name
        //userForm.elements["password"].value = user.password
    })
}

function saveUser(event) {
    event.preventDefault()

    // 1. obtener datos del formulario
    const inputs = event.target.elements;
    let method  = "";
    let catPath = "users";

    const user = {
        id:         inputs["id"].value,
        name:       inputs["name"].value,
        user_name:  inputs["userName"].value,
        password:   inputs["password"].value,
    }

    if(user.id === ""){
        method = "POST"
    }else{
        method = "PUT"
        catPath = catPath + "/" +user.id
    }
    // 2. Guardamos
    callAPI(url+catPath, method, user)
    .then(user => {
        window.location.reload();
    })
    
}

function deleteUser(id) {
    callAPI(url+"users/"+id, "DELETE", {})
    window.location.reload();
}

window.addEventListener("load", event=> {
    validateSession(userName)
});

async function loadList(event) {
    const list = await fetch(url+"users")
    .then( response => response.json());
    renderizarListadoPost(list)
}

function renderizarListadoPost(list) {
    const elementoListado = document.querySelector("#list")
    list.forEach(user => {
        const elemtTr       = document.createElement("tr")
        const tdId          = document.createElement("td")
        const tdName        = document.createElement("td")
        const tdUserName    = document.createElement("td")
        const tdActions     = document.createElement("td")
        const hrefDelete    = document.createElement("a");
        const hrefEdit      = document.createElement("a");
        const iActionDelete = document.createElement("i");
        const iActionEdit   = document.createElement("i");
        hrefDelete.className= "btn btn-default btn-circle btn-sm btn-outline-danger";
        hrefEdit.className  = "btn btn-default btn-circle btn-sm btn-outline-primary";
        hrefEdit.setAttribute("onclick", "loadUser("+user.id+")");
        hrefDelete.setAttribute("onclick", "deleteUser("+user.id+")");

        iActionDelete.classList.add("fas");
        iActionDelete.classList.add("fa-trash")

        iActionEdit.classList.add("fas");
        iActionEdit.classList.add("fa-user-edit")

        hrefDelete.appendChild(iActionDelete);
        hrefEdit.appendChild(iActionEdit);

        tdId.textContent = user.id;
        tdName.textContent = user.name;
        tdUserName.textContent = user.user_name;
        elementoListado.appendChild(elemtTr)
        elemtTr.appendChild(tdId)
        elemtTr.appendChild(tdUserName)
        elemtTr.appendChild(tdName)
        elemtTr.appendChild(tdActions)
        tdActions.appendChild(hrefDelete);
        tdActions.appendChild(hrefEdit);
    });
}

window.addEventListener("load", loadList)

userForm.addEventListener("submit", saveUser)