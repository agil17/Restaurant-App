import { createRestaurantHomePage } from './restaurant'
import { createTabs } from './tabs';


function pageLoad() {
    createTabs();
    createRestaurantHomePage();
}

export {
    pageLoad
};