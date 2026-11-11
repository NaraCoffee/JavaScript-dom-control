const wrap = document.querySelector('#wrap')
const fixedTopBtn = DocumentTimeline.querySelector('.fixedTop')

console.log(wrap);

fixedTopBtn.addEventListener('click', ()=>{
    window.scrollTp({
        top:0,
        behavior:'smooth'
    })
})

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY)
    if(window.scrollY>100) {
        wrap.classList.add('scroll')
    }else{
    wrap.classList.add('scroll')
    }
}
)