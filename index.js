// 照片轮播
const views = document.querySelectorAll('.view img')
let current = 0
setInterval(function () {
    current = (current + 1) % views.length
    views.forEach(view => view.classList.remove('change'))
    views[current].classList.add('change')
}, 6000)


// 返回顶部
const h1 = document.querySelector('h1')
const upBtn = document.querySelector('.up')
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= h1.offsetTop) {
        upBtn.classList.add('up-active')
        upBtn.disabled = false
    }
    else {
        upBtn.classList.remove('up-active')
        upBtn.disabled = true
    }
})

upBtn.addEventListener('click', function () {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})