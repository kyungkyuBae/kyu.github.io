const hamburgers = document.querySelector('.nav__hamburgers')
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav')
hamburgers.addEventListener('click',()=>{
    let onActive = navList.className;
    if (onActive == `nav__list active`){
        navList.classList.remove('active')
        nav.classList.remove('active')
    }
    else {
        navList.classList.add('active')
        nav.classList.add('active')
    }

})

// 스크롤시 넷바색상변경
const navbar = document.querySelector('.nav');

const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener('scroll',(e)=>{
    if (navbarHeight < scrollY){
        navbar.classList.add('nav--scroll')
    }
    else {
        navbar.classList.remove('nav--scroll')
    }
})

// navbar menu 클릭시 해당섹션으로 이동
navList.addEventListener('click',(e)=>{
    const activeNav = document.querySelector('.nav__list__item.active')
    if (activeNav === null){
        return
    }
    activeNav.classList.remove('active')
    e.target.classList.add('active')
    const moveContainer = document.querySelector(`.${e.target.getAttribute('data-link')}`)
    if (moveContainer === null){
        return
    }
    moveContainer.scrollIntoView({behavior:'smooth'});
    navList.classList.remove('active')
})

// contact me 버튼을 누르면 contact로 이동

const button = document.querySelector('.button');
const contact = document.querySelector('.footer')
button.addEventListener('click',()=>{

    contact.scrollIntoView({behavior:'smooth'});
})
const homemain = document.querySelector('.home__main');
const homemainHeight = homemain.getBoundingClientRect().height;
window.addEventListener('scroll',(e)=>{
   homemain.style.opacity = 1 - (window.scrollY / homemainHeight)


   
})
// 위로 한번에 올라가는 버튼 만들기
const arrowBtn = document.querySelector('.arrowBtn')
const body = document.querySelector('body');
window.addEventListener('scroll',(e)=>{
    const changeArrow = window.scrollY+arrowBtn.getBoundingClientRect().top
    const footerHeight = document.querySelector('.footer').getBoundingClientRect().height;
    const bodyHeight = document.querySelector('body').getBoundingClientRect().height;
    const changeArrowPoint = bodyHeight-footerHeight
    if (homemainHeight/2 < window.scrollY){
        arrowBtn.classList.add('off');


    }
    else {
        arrowBtn.classList.remove('off')
        
    }
    if (changeArrowPoint < changeArrow){
        arrowBtn.classList.add('color')
    }
    else{
        arrowBtn.classList.remove('color')
    }
    arrowBtn.addEventListener('click',()=>{
        body.scrollIntoView({behavior:'smooth'})
    })
    

})

// project 에 있는 버튼 누르면 활성화된 project 만 나오기
const myWorkMenu = document.querySelector('.my-work__menu');
const project = document.querySelectorAll('.project')
myWorkMenu.addEventListener('click',(e)=>{
    const filter = e.target.getAttribute('-data-visitopton') || e.target.parentNode.getAttribute('-data-visitopton')
    const activeButton = document.querySelector('.my-work__button.active')
    activeButton.classList.remove('active')
    e.target.classList.add('active') || e.target.parentNode.classList.add('active')
    
    // all

    if (filter === 'all'){
        project.forEach(project=>{
            project.classList.remove('inactive')
        })
    }
    // front-end
    else if (filter === 'front-end'){
        project.forEach(project=>{
            if (project.getAttribute('-data-visible') === 'front-end'){
                project.classList.remove('inactive');
            }
            else{
                project.classList.add('inactive')
            }
        }
        )
    }
    // back-end
    else if (filter === 'back-end'){
        project.forEach(project=>{
            if (project.getAttribute('-data-visible') === 'back-end'){
                project.classList.remove('inactive');
            }
            else{
                project.classList.add('inactive')
            }
        }
        )
    }
    // mobile
    else if (filter === 'mobile'){
        project.forEach(project=>{
            if (project.getAttribute('-data-visible') === 'mobile'){
                project.classList.remove('inactive');
            }
            else{
                project.classList.add('inactive')
            }
        }
        )
    }
})

// 768px 이하 메뉴버튼을 누르면 메뉴 활성화

