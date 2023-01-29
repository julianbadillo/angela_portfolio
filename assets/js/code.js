// --Change background header--
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// --services modal--

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.clients_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc, i) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

//--filter portfolio--

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
})

//--link active work--

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}


linkWork.forEach(l=> l.addEventListener('click', activeWork))


// --work modal--

const modalWorkview = document.querySelectorAll('.work_modal'),
      modalWorkBtns = document.querySelectorAll('.work_button'),
      modalWorkClose = document.querySelectorAll('.work_modal-close')

let modalWork = function(modalClick){
    modalWorkview[modalClick].classList.add('portfolo-active-modal')
}
modalWorkBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modalWork(i)
    })
})

modalWorkClose.forEach((mc, i) =>{
    mc.addEventListener('click', () =>{
        modalWorkview.forEach((mv) =>{
            mv.classList.remove('portfolo-active-modal')
        })
    })
})


//--scroll sectioin active link--

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionID = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.remove('active-link')
        }

    })

}

window.addEventListener('scroll', scrollActive)


// light dark theme
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

//  previous topic

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme the interface has by validating the light theme class

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// we validate if the user previously chose a topic

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())


})

// --swiper explore--

let swiperExplore = new Swiper(".explore_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 1,
      
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
    },

  });

//     Avatar Animation

  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/js/data.json',
  });



