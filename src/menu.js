const createMenuPage = () => {
    const content = document.querySelector('.content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.classList.add('menu');


    //Cheese Pizza
    const pizzaCheeseBox = document.createElement('div');
    pizzaCheeseBox.classList.add('pizza-container');

    const cheeseImgContainer = document.createElement('div');
    const cheeseImg = document.createElement('img');
    cheeseImg.classList.add('pizza-img');
    cheeseImg.src = '../dist/img/classic-cheese.jpg';

    cheeseImgContainer.appendChild(cheeseImg);

    const cheeseTextContainer = document.createElement('div');
    cheeseTextContainer.classList.add('pizza-text-container');
    const cheeseHeading = document.createElement('h1');
    cheeseHeading.textContent = 'Classic Cheese Pizza';
    const cheeseCalories = document.createElement('p');
    cheeseCalories.textContent = '2000 Calories';

    cheeseTextContainer.appendChild(cheeseHeading);
    cheeseTextContainer.appendChild(cheeseCalories);

    pizzaCheeseBox.appendChild(cheeseImgContainer);
    pizzaCheeseBox.appendChild(cheeseTextContainer);

    pageContent.appendChild(pizzaCheeseBox);
    
    //Pepperoni Pizza
    const pizzaPepBox = document.createElement('div');
    pizzaPepBox.classList.add('pizza-container');

    const pepImgContainer = document.createElement('div');
    const pepImg = document.createElement('img');
    pepImg.classList.add('pizza-img');
    pepImg.src = '../dist/img/classic-pepperoni.jpg';

    pepImgContainer.appendChild(pepImg);

    const pepTextContainer = document.createElement('div');
    pepTextContainer.classList.add('pizza-text-container');
    const pepHeading = document.createElement('h1');
    pepHeading.textContent = 'Classic Pepperoni Pizza';
    const pepCalories = document.createElement('p');
    pepCalories.textContent = '2200 Calories';

    pepTextContainer.appendChild(pepHeading);
    pepTextContainer.appendChild(pepCalories);

    pizzaPepBox.appendChild(pepImgContainer);
    pizzaPepBox.appendChild(pepTextContainer);
    
    pageContent.appendChild(pizzaPepBox);
    

    //Veggie Pizza
    const pizzaVegBox = document.createElement('div');
    pizzaVegBox.classList.add('pizza-container');

    const vegImgContainer = document.createElement('div');
    const vegImg = document.createElement('img');
    vegImg.classList.add('pizza-img');
    vegImg.src = '../dist/img/veggie.jpg';

    vegImgContainer.appendChild(vegImg);

    const vegTextContainer = document.createElement('div');
    vegTextContainer.classList.add('pizza-text-container');
    const vegHeading = document.createElement('h1');
    vegHeading.textContent = 'Classic Veggie Pizza';
    const vegCalories = document.createElement('p');
    vegCalories.textContent = '1800 Calories';

    vegTextContainer.appendChild(vegHeading);
    vegTextContainer.appendChild(vegCalories);

    pizzaVegBox.appendChild(vegImgContainer);
    pizzaVegBox.appendChild(vegTextContainer);
    
    pageContent.appendChild(pizzaVegBox);


    //Hawaiian Pizza
    const pizzaHulaBox = document.createElement('div');
    pizzaHulaBox.classList.add('pizza-container');

    const hulaImgContainer = document.createElement('div');
    const hulaImg = document.createElement('img');
    hulaImg.classList.add('pizza-img');
    hulaImg.src = '../dist/img/hula-hawaiian.jpg';

    hulaImgContainer.appendChild(hulaImg);

    const hulaTextContainer = document.createElement('div');
    hulaTextContainer.classList.add('pizza-text-container');
    const hulaHeading = document.createElement('h1');
    hulaHeading.textContent = 'Hula Hawaiian Pizza';
    const hulaCalories = document.createElement('p');
    hulaCalories.textContent = '2300 Calories';

    hulaTextContainer.appendChild(hulaHeading);
    hulaTextContainer.appendChild(hulaCalories);

    pizzaHulaBox.appendChild(hulaImgContainer);
    pizzaHulaBox.appendChild(hulaTextContainer);
    
    pageContent.appendChild(pizzaHulaBox);


    
    content.appendChild(pageContent);



    


}

export {
    createMenuPage
};