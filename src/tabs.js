import { createRestaurantHomePage } from "./restaurant";
import { createContactPage } from "./contact";
import { createMenuPage } from "./menu";

const createTabs = () => {

    const content = document.querySelector('.content');

    const btnHeader = document.createElement('div');
    btnHeader.classList.add('btn-header');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    btnHeader.appendChild(div1);
    btnHeader.appendChild(div2);
    btnHeader.appendChild(div3);

    content.appendChild(btnHeader);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });

    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })

    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })


}

const clearContent = ()=> {
    const content = document.querySelector('.content');
    const pageContent = document.querySelector('.page-content');
    if(pageContent) {
        content.removeChild(pageContent);
    }
}

export {
    createTabs
};