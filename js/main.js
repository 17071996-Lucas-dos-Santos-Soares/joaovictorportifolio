window.revelar = ScrollReveal(
    {
        reset:true
    })

    // topo do site

    revelar.reveal('.animate-txt-hero-site',{
        duration: 1000,
        distance: '90px'
    })

    revelar.reveal('.animate-img-hero-site',{
        duration: 1000,
        distance: '90px',
        delay: 500
    })

    // titulos

    revelar.reveal('.animate-especialidades',{
        duration: 1000,
        distance: '90px'
    })

    revelar.reveal('.animate-portifolio',{
        duration: 1000,
        distance: '90px'
    })

    revelar.reveal('.animate-form',{
        duration: 1000,
        distance: '90px'
    })

    // especialidades
    revelar.reveal('.efeito-especialidades1',{
        duration: 1000,
        distance: '90px',
        delay: 500
    })

    revelar.reveal('.efeito-especialidades2',{
        duration: 1000,
        distance: '90px',
        delay: 1000
    })

    revelar.reveal('.efeito-especialidades3',{
        duration: 1000,
        distance: '90px',
        delay: 1500
    })

    // sobre

    revelar.reveal('.animate-img-sobre',{
        duration: 1000,
        distance: '90px',
        delay: 1000,
        origin: 'left'
    })

    revelar.reveal('.animate-txt-sobre',{
        duration: 2000,
        distance: '90px',
        delay: 1000,
        origin: 'right'
    })

    revelar.reveal('.animate-redes-sociais',{
        duration: 1000,
        distance: '90px',
        delay: 1200,
        origin: 'bottom'
    })

    // projetos

    revelar.reveal('.animate-projeto1',{
        duration: 1000,
        distance: '90px',
        delay: 500,
        origin: 'left'
    })
    
    revelar.reveal('.animate-projeto2',{
        duration: 1000,
        distance: '90px',
        delay: 1000,
        origin: 'top'
    })

    revelar.reveal('.animate-projeto3',{
        duration: 1000,
        distance: '90px',
        delay: 1500,
        origin: 'right'
    })
    
// menu mobile

let btnMenu = document.querySelector('#abrir-menu')
let menu = document.querySelector('#menuMobile')
let overlay = document.querySelector('#overlay-de-menu')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('ver-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('ver-menu')
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('ver-menu')
})

