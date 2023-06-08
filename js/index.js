const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY >0)
})