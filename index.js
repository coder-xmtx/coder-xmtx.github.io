// 照片轮播
let view = document.querySelector('.view')
let items = view.children
let index = 0

setInterval(function () {
    items[index].className = ''
    if (index === items.length - 1) {
        index = -1
    }
    index++
    items[index].className = 'change'
}, 10000)