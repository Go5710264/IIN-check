import isValidInn from './validators';
import { InnFormWidget } from './widget';

const form = new InnFormWidget();
const input = document.querySelector('.innogrn-form-widget');
const button = document.querySelector('.innorgn-submit');
const control = document.querySelector('#innorgn-input');

console.log(control.text)
button.addEventListener('click', (e) => {
    e.preventDefault();

    if(isValidInn(control.value)){
        input.classList.add('valid');
    }
})