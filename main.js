let marker = document.getElementById('marker');
let first = document.getElementById('first');
const option = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px'
}

const observe = new IntersectionObserver(addElement, option);
observe.observe(marker);

function addElement() {
  console.log('я тут');
}


let link = 'https://p.calameoassets.com/220802135746-99d43c3366604dc65b260e077fc3580b/p2.svgz';

function createBlock(link) {
 let cont = document.querySelector('.container');
 let str = `<div class="block">
   <img src="https://p.calameoassets.com/220802135746-99d43c3366604dc65b260e077fc3580b/p2.svgz
" alt="">
 </div>`;
 cont.insertAdjacentHTML("beforeend",str);
}

createBlock(link);
