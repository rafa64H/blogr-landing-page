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
    
    let productDropBtn = dropBtns[0]
    let companyDropBtn = dropBtns[1]
    let connectDropBtn = dropBtns[2]

    let productDropMenu = dropMenus [0]
    let companyDropMenu = dropMenus [1]
    let connectDropMenu = dropMenus [2]

    let productDropArrowIcon = dropArrowIcons[0]
    let companyDropArrowIcon = dropArrowIcons[1]
    let connectDropArrowIcon = dropArrowIcons[2]

    switch (event.target){
        case productDropBtn:
            
            if(productDropMenu.dataset.dropActive === "false"){

                productDropMenu.dataset.dropAnimation = "true"
                productDropArrowIcon.dataset.dropArrowActive = "true"
                productDropMenu.dataset.dropActive = "true"

            } else {
                productDropMenu.dataset.dropAnimation = "false"
                productDropArrowIcon.dataset.dropArrowActive = "false"
                productDropMenu.dataset.dropActive = "false"
            }

            break;
    }

}

dropMenus.forEach(allTheDropMenus => {
    
    allTheDropMenus.addEventListener('animationend', (e) => {

        if(e.animationName === "drop-close")
            delete allTheDropMenus.dataset.dropAnimation
    })

});