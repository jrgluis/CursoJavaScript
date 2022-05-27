const interactionForm = document.querySelector("#interaction-form")

function loadInteraction(id) {
    
    callAPI(url+"interactions/"+id, "GET", {})
        .then( interaction => {
            interactionForm.elements["id"].value       = interaction.id
            interactionForm.elements["name"].value     = interaction.name
            interactionForm.elements["email"].value    = interaction.email
            interactionForm.elements["address"].value  = interaction.address
        })
}

function saveInteraction(event) {
    event.preventDefault()
    var today = new Date();
    
    // 1. obtener datos del formulario
    const inputs = event.target.elements;
    let method  = "";
    let catPath = "interactions/";
    let interaction = {}
    let messagge = "Nota no debe estar en blanco";

    interaction = {
        id:         inputs["id"].value,
        note:       inputs["note"].value,
        createdAt:  today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
        user:       inputs["userId"].value,
        costumer:   inputs["customer"].value,
        
    }

    if(interaction.id === ""){
        method = "POST"
    }else{
        method = "PUT"
        catPath = catPath + interaction.id
    }

    // 2. Guardamos
    callAPI(url+catPath, method, interaction)
    .then(interaction => {
        window.location.reload();
    })
}

function deleteInteraction(id) {
    callAPI(url+"interactions/"+id, "DELETE", {})
    window.location.reload();
}

async function loadList(event) {
  const list = await fetch(url + "interactions")
    .then( response => response.json());

    callAPI(url+"customers/", "GET", {})
    .then( customer => {
        customer.forEach(element => {
            var $select = $('#customer');
            $select.append('<option value='+ element.id +'>' + element.name + '</option>');
        });
  })
  renderizarListadoPost(list)
}

function renderizarListadoPost(list) {
    const elementoList = document.querySelector("#list")
    list.forEach(interaction => {
        const elemtTr = document.createElement("tr")

        const tdId          = document.createElement("td")
        const tdNote        = document.createElement("td")
        const tdCreateAt    = document.createElement("td")
        const tdUser        = document.createElement("td")
        const tdCustomer    = document.createElement("td")

        const tdAction      = document.createElement("td")
        
        const hrefDelete    = document.createElement("a");
        const hrefEdit      = document.createElement("a");
        const iActionDelete = document.createElement("i");
        const iActionEdit   = document.createElement("i");

        hrefDelete.className= "btn btn-default btn-circle btn-sm btn-outline-danger";
        hrefEdit.className  = "btn btn-default btn-circle btn-sm btn-outline-primary";
        hrefEdit.setAttribute("onclick", "loadinteraction("+interaction.id+")");
        hrefDelete.setAttribute("onclick", "deleteinteraction("+interaction.id+")");

        iActionDelete.classList.add("fas");
        iActionDelete.classList.add("fa-trash")

        iActionEdit.classList.add("fad");
        iActionEdit.classList.add("fa-file-pen")
        iActionEdit.className = "fas fa-edit fa-lg";

        hrefDelete.appendChild(iActionDelete);
        hrefEdit.appendChild(iActionEdit);
        //elemtPost.classList.add("interaction")

        tdId.textContent        = interaction.id;
        tdNote.textContent      = interaction.note;
        tdCreateAt.textContent  = interaction.createdAt;
        tdUser.textContent      = interaction.user
        tdCustomer.textContent  = interaction.customer;

        elementoList.appendChild(elemtTr)

        elemtTr.appendChild(tdId)
        elemtTr.appendChild(tdNote)
        elemtTr.appendChild(tdCreateAt)
        elemtTr.appendChild(tdUser)
        elemtTr.appendChild(tdCustomer)
        
        
        elemtTr.appendChild(tdAction)
        tdAction.appendChild(hrefDelete);
        tdAction.appendChild(hrefEdit);
    });
}

window.addEventListener("load", loadList)

// 3. Agregar evento al formulario
interactionForm.addEventListener("submit", saveInteraction)