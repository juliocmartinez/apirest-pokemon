window.addEventListener('load', getDatos);

let container = document.querySelector("#container")

function getDatos() {
    let url = 'https://rickandmortyapi.com/api/character'

    fetch(url)
        .then(response => response.json())
        .then((datos) => {
            let characters = datos.results
            mostrarDatos(characters)
        })

}


function mostrarDatos(characters) {

    // Creando campo de busqueda de personajes
    let button = document.querySelector("#button")

    button.addEventListener('click', () => {
        let campo_entrada = document.getElementById("campo_entrada").value
        let caja = document.querySelector("#caja")
        let result = document.querySelector("#result")
        result.style.display="block"

        characters.find((algo) => {
            if (algo.name == campo_entrada) {
                let name = document.createElement("h3")
                let img = document.createElement("img")
                img.src = algo.image
                img.style.width = "70px"
                name.append(algo.name)
                caja.append(name)
                caja.append(img)

            }

        })
    })

        // Fin creacion campo de busqueda de personajes


    characters.map((index) => {
        let caja = document.createElement("div")
        let name = document.createElement("h2")
        let date_creation = document.createElement("p")
        let img = document.createElement("img")
        let urlEpisode = document.createElement("a")
        urlEpisode.href = index.origin.url
        urlEpisode.append("URL Pirata")
        urlEpisode.style.textDecoration = "none"
        urlEpisode.style.color = "gray"
        urlEpisode.style.fontWeight = "bold"





        // console.log(urlEpisode);
        img.src = index.image
        name.append(index.name)
        date_creation.append(index.created)
        caja.append(name)
        caja.append(img)
        caja.append(date_creation)
        caja.append(urlEpisode)
        container.append(caja)
        container.style.display = "flex"
        container.style.flexDirection = "row"
        container.style.flexWrap = "wrap"
        container.style.justifyContent = "space-between"




    })
    // console.log(characters);
}