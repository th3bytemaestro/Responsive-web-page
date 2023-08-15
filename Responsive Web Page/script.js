const showMenu = (toggleID, navID) =>{
    const toggle=document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if (toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('menu-toggle','nav-menu')