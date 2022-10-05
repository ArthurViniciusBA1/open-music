categories.forEach(element => {
    let listaCategorias = document.querySelector("#listaCategorias")

    let input = document.createElement("input")
    let label = document.createElement("label")

    id = padronizarString(element)

    input.type = "radio"
    input.name = "estilosMusicais"
    input.id = `input_${id}`
    input.hidden = true
    input.className = "radio"

    label.htmlFor = `input_${id}`
    label.className = "filtroEstilos"
    label.id = id
    label.innerText = element

    if (id === "todos") {
        input.checked = "true"
    }

    listaCategorias.append(input, label)
})

const botoesFiltroMusicas = [...document.getElementsByClassName("filtroEstilos")]
const listaAlbuns = document.getElementById("listaAlbuns")
let radio = [...document.getElementsByClassName("radio")]
const range = document.getElementById("range")
let filtro = "todos"

gerarAlbuns()

range.addEventListener('mouseup', () => {
    gerarAlbuns()
})

botoesFiltroMusicas.forEach(element => {
    element.addEventListener("click", (event) => {
        filtro = event.target.id
        gerarAlbuns()
    })
});

function gerarAlbuns() {
    listaAlbuns.innerHTML = ""

    let valorMaximo = range.value
    let produtosFiltradosPorPreco = products.filter(object => object.price <= valorMaximo)

    let category = categories.map(padronizarString).indexOf(filtro)

    if (filtro === "todos") {
        produtosFiltradosPorPreco.forEach(element => {
            listaAlbuns.append(gerarLi(element))
        })
    } else {
        produtosFiltradosPorPreco.filter(object => object.category === category).forEach(element => {
            listaAlbuns.append(gerarLi(element))
        })
    }


}

function gerarLi(objeto) {
    let li = document.createElement("li")

    let valorConvertido = objeto.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


    li.insertAdjacentHTML("afterbegin", `
    <img src="${objeto.img}">
    <div class="conteudo">
        <div class="informacoes">
            <span>${objeto.band}</span>
            <span>${objeto.year}</span>
        </div>
        <h3>${objeto.title}</h3>
        <div class="comprar">
            <span>${valorConvertido}</span>
            <button type="button">Comprar</button>
        </div>
    </div>
    `)

    li.id = `album_${objeto.id}`

    return li
}

function padronizarString(elemento) {
    return elemento.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}