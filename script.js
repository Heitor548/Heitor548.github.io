let ola = ['Hello welcome!👋','Hola es bienvenido!👋','Olá seja bem-vindo!👋']
let x = 0
setInterval(()=>{
    apresentacao = document.getElementById('bemVindo') 
    apresentacao.innerHTML = ola[x]
    if(ola[x] === 'Olá seja bem-vindo!👋'){

    }else{
        x++
    }
}, 1000)

let curtir = () =>{
    heart = document.getElementById('heart'); 

    if(heart.className === 'bi bi-heart'){
        heart.className += '-fill'
        heart.innerHTML = '1'
    }else{
        heart.className = 'bi bi-heart'
        heart.innerHTML = ''
    }
}

let abrirMenu = () => {
    menu = document.getElementById('menu-principal')

    if(menu.className == ''){
        menu.className = 'active'
    }else{
        menu.className = ''
    }
    
}

$(document).ready(() => {
	
    $('#btn-sobre').on('click', () =>{
        $('#sobre').load('README.md')
    })

})

let email = () =>{
    areaEmail = document.getElementById('area-email')
    areaTexto = document.getElementById("email-texto")

    if(areaTexto.innerText == ''){
        areaTexto.innerText = 'heitorsan548@gmail.com'
    }else{
        areaTexto.innerText = ''
    }
}

