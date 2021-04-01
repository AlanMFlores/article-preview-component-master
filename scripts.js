const share = document.querySelector('.share');
const openTt = document.querySelector('.share-button');
const closeTt = document.querySelector('.share__button--white');
const arrow = document.getElementById('icon-share');

openTt.addEventListener('click', function() {
        share.classList.toggle('active')
        
        if(share.classList.contains('active')) {

        openTt.classList.add('share-white');
        arrow.style.filter = 'grayscale(100) brightness(100)'
        } else {

        openTt.classList.remove('share-white');
        arrow.style.filter = 'none';

        }
        
})



