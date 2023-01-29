
//--scroll sectioin active link--
const sections = document.querySelectorAll('.step[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionID = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.remove('active-link');
        }

    })

}

window.addEventListener('scroll', scrollActive)