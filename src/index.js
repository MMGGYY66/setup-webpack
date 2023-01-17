import _ from 'lodash';
import './style.css';
import IconImg from './assets/icons/icon.jpg';

function component() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	const myIcon = new Image();
	myIcon.src = IconImg;
	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
