

const createRestaurantHomePage = () => {
    const content = document.querySelector('.content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.classList.add('home');

    const heading = document.createElement('h1');
    heading.innerHTML = "Welcome to Little Caesars!";

    const img = document.createElement('img');
    img.src = './img/littlecaesar.jpeg';

    const p = document.createElement('p');
    p.innerHTML = "The BEST place for pizza in town!";

    pageContent.appendChild(heading);
    pageContent.appendChild(img);
    pageContent.appendChild(p);

    content.appendChild(pageContent);
}

export {
    createRestaurantHomePage
};