let openNavBtn = document.querySelector('.open-close-nav-btn')
let nav = document.querySelector('nav')

let dropBtns = document.querySelectorAll('.drop-btn')
let dropMenus = document.querySelectorAll('.drop-menu')
let dropArrowIcons = document.querySelectorAll('.drop-arrow')

openNavBtn.addEventListener('click', () => {
    
    if (openNavBtn.dataset.navBtnActive === "false"){

        openNavBtn.dataset.navBtnActive = "true"
        nav.dataset.navActive = "true"

    } else {

        openNavBtn.dataset.navBtnActive = "false"
        nav.dataset.navActive = "false"

        nav.addEventListener('animationend', (e) => {

            if (e.animationName === "nav-close"){
                delete nav.dataset.navActive;
            }

        })
    }

})

dropBtns.forEach(allTheDropBtns => {

    allTheDropBtns.addEventListener('click', (e) => {

        openDropMenu(e)

    })

});

function openDropMenu(event){

    for (let i = 0; i < dropMenus.length; i++) {
        
        if (event.target === dropBtns[i] && dropMenus[i].dataset.dropActive === "false"){

            dropMenus[i].dataset.dropAnimation = "true"
            dropArrowIcons[i].dataset.dropArrowActive = "true"
            dropMenus[i].dataset.dropActive = "true"

        } 
        else if (dropMenus[i].dataset.dropActive === "true"){
            
            dropMenus[i].dataset.dropAnimation = "false"
            dropArrowIcons[i].dataset.dropArrowActive = "false"
            dropMenus[i].dataset.dropActive = "false"
        }
        
    }

}

dropMenus.forEach(allTheDropMenus => {
    
    allTheDropMenus.addEventListener('animationend', (e) => {

        if(e.animationName === "drop-close")
            delete allTheDropMenus.dataset.dropAnimation
    })

});