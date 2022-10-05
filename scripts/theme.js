/* Desenvolva sua lógica aqui ... */
darkMode()

const botaoDm = document.getElementById("darkMode")

botaoDm.addEventListener("click", (event) => {
    darkMode(1)
})

function darkMode(click) {
    const html = document.querySelector("html")
    let icone = document.getElementById("darkModeIcon")
    const preferenciaDm = localStorage.getItem("darkMode")

    if (click === 1) {
        html.classList.toggle("darkMode")
        icone.classList.toggle("textWhite")
        if (!preferenciaDm) {
            localStorage.setItem("darkMode", true)
        }
    
        if (preferenciaDm) {
            localStorage.removeItem("darkMode")
        }
    
        if (icone.classList.contains("textWhite")) {
            icone.src = "../../assets/sun.svg"
        } else {
            icone.src = "../../assets/moon.svg"
        }
        return
    }

   

    if (preferenciaDm) {
        html.classList.toggle("darkMode")
        icone.classList.toggle("textWhite")
        icone.src = "../../assets/sun.svg"
    }
}
