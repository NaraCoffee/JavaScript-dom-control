const content = document.querySelector('.content')
const toggleBtn = document.querySelector('.toggleBtn')
const wrap = document.querySelector('#wrap')


toggleBtn.addEventListener('click', function(){
    wrap.classList.toggle('open-modal')
})