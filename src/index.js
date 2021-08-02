import './styles/index.scss'
import printMe from './scripts/sub'

function component() {
  const bg = document.createElement('div');
  const element = document.createElement('h1');
  const btn = document.createElement('button');

  bg.classList.add('bg');

  element.innerHTML = 'Hello webpack!'

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe();

  element.appendChild(btn);
  bg.appendChild(element);

  return bg;
 }

document.body.appendChild(component());


 