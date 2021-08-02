import './styles/index.scss'
import printMe from './scripts/sub'

function component() {
  const bg = document.createElement('div');
  const element = document.createElement('h1');
  const btn = document.createElement('button');

  bg.classList.add('bg');

  element.innerHTML = 'webpack config'

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe();

  bg.appendChild(element);
  bg.appendChild(btn);

  return bg;
 }

document.body.appendChild(component());


 