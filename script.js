const view_btn = document.getElementById('js-view-img')

view_btn.addEventListener('click', () => {
    view_btn.classList.add('active')
    setTimeout(function(){
        view_btn.classList.remove('active')
    }, 30000)

})
