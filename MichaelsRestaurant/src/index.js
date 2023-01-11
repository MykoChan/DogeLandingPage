import "./style.css";
import lazeez from "../img/lazeez.png";
import hamburgerMenuIcon from "../img/hamburger-menu-icon.png";
import Shawarma from "../img/Shawarma.jpg";
import SpecialWrap from "../img/SpecialWrap.png";
import BeefDonair from "../img/BeefDonair.png";

const categorizedMenuItems = {
    "Main Entrees": [
        {
            name: "Chicken Shawarma Wrap",
            price: "15",
            description:
                "Chicken wrap. Taste good. Buy now. Full sentences and good grammar optional.",
            img: Shawarma,
        },
        {
            name: "Beef Shawarma Wrap",
            price: "16",
            description:
                "Beef wrap. Taste good-er. Buy fast. Shawarma always good option. Long and wrapping food descriptions for some items are always sometimes necessary. In order to make an exceptionally long description, I will mindlessly type random sentences and occassionally repeat things I've already stated in order to fill out some more space, reminiscent of fulfilling long essay word requirements in a high school essay assignment. Being succinct with your words will go against you. Anyway... I digress. This was suppose to be a Beef Shawarma Wrap description.",
            img: Shawarma,
        },
        {
            name: "Falafel Wrap",
            price: "11",
            description: "Are you still reading these?",
            img: SpecialWrap,
        },
        {
            name: "Beef Donair",
            price: "999",
            description: "Beef Donair.",
            img: BeefDonair,
        },
        {
            name: "Chicken on the Rock",
            price: "13",
            description:
                "Like... It's actually standing on a big rock. Just some random text to entertain you until you realize there's no meaningful text here.",
        },
        {
            name: "Chicken on the Stick",
            price: "14",
            description:
                "Same thing, but it's on a stick. More silly text to add as filler just so I can see how my text wraps around objects on this webpage.",
        },
        {
            name: "Falafel on the Rock",
            price: "13",
            description: "Use your imagination.",
        },
        {
            name: "Beef Poutine",
            price: "17",
            description: "Poutine, with beef.",
        },
        {
            name: "Chicken Poutine",
            price: "15",
            description: "Poutine, but for chicken.",
        },
    ],
    "Appetizers and Salads": [
        {
            name: "Garden Salad",
            price: "9.98",
            description: "Freshly picked greens.",
        },
        {
            name: "Greek Salad",
            price: "9.99",
            description: "",
        },
    ],
    Sides: [
        {
            name: "French Fries",
            price: "5",
        },
        {
            name: "Cole Slaw",
            price: "5",
        },
        {
            name: "Baked Potato",
            price: "5",
        },
        {
            name: "Twice Baked Potato",
            price: "5",
        },
        {
            name: "Bacon Strips",
            price: "5",
        },
    ],
    Drinks: [
        {
            name: "KokaKola",
            price: "1",
        },
        {
            name: "Bepsi",
            price: "1",
        },
        {
            name: "DoctorPaper",
            price: "1",
        },
        {
            name: "Diet Kola",
            price: "1",
        },
        {
            name: "Water",
            price: "5",
        },
    ],
};

function createRestaurantHeader() {
    const header = document.createElement("header");
    const container = document.createElement("div");
    const icon = new Image();
    const menu = document.createElement("button");
    const title = document.createElement("h1");
    const signInButton = document.createElement("button");

    header.classList.add("header");
    container.classList.add("header-content");
    icon.src = hamburgerMenuIcon;
    menu.classList.add("hamburger-menu");
    title.textContent = "MykoEats";
    signInButton.textContent = "Sign in";

    menu.appendChild(icon);
    container.appendChild(menu);
    container.appendChild(title);
    container.appendChild(signInButton);

    header.appendChild(container);
    return header;
}

function createRestaurantBanner() {
    const container = document.createElement("div");
    container.classList.add("banner");
    const image = new Image();
    image.src = lazeez;
    container.appendChild(image);
    return container;
}

function createRestaurantInfo() {
    const container = document.createElement("div");
    const restaurantName = document.createElement("h1");
    const ratings = document.createElement("p");
    const hoursOfOperation = document.createElement("p");

    container.classList.add("restaurant-info");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Shawaaaaaaarma";
    ratings.textContent = "★ 5.0 (1000+ ratings)";
    hoursOfOperation.textContent = "Open until 12am";

    container.appendChild(restaurantName);
    container.appendChild(ratings);
    container.appendChild(hoursOfOperation);

    return container;
}

function createCategorySidebar() {
    const menuCategoriesSidebar = document.createElement("nav");
    menuCategoriesSidebar.classList.add("menu-category-sidebar");

    for (const category in categorizedMenuItems) {
        const categoryText = document.createElement("a");
        categoryText.textContent = category;
        categoryText.href = `#${category}`;
        menuCategoriesSidebar.appendChild(categoryText);
    }
    return menuCategoriesSidebar;
}

function createCategorizedMenuItems() {
    const container = document.createElement("div");
    container.classList.add("menu-items-container");

    for (const category in categorizedMenuItems) {
        const categoryDiv = document.createElement("div");
        const categoryLabel = document.createElement("h1");

        categoryLabel.id = category;
        categoryLabel.textContent = category;
        categoryDiv.classList.add("category-label");
        categoryDiv.appendChild(categoryLabel);
        container.appendChild(categoryDiv);

        for (const item of categorizedMenuItems[category]) {
            const menuItemContainer = document.createElement("div");
            const menuItemTextContainer = document.createElement("div");
            const menuItemTitle = document.createElement("h2");
            const menuItemPrice = document.createElement("p");
            const menuItemDescription = document.createElement("p");

            menuItemContainer.classList.add("menu-item");
            menuItemTextContainer.classList.add("menu-item-text");
            menuItemTitle.textContent = item.name;
            menuItemPrice.textContent = `$${parseInt(item.price).toFixed(2)}`;
            menuItemDescription.classList.add("menu-item-description");
            menuItemDescription.textContent = item.description;

            menuItemTextContainer.appendChild(menuItemTitle);
            menuItemTextContainer.appendChild(menuItemPrice);
            menuItemTextContainer.appendChild(menuItemDescription);
            menuItemContainer.appendChild(menuItemTextContainer);

            if (item.img) {
                const menuImage = new Image();

                menuImage.src = item.img;
                menuImage.classList.add("menu-item-img");
                menuItemContainer.appendChild(menuImage);
            }

            container.appendChild(menuItemContainer);
        }
    }
    return container;
}

function createMainMenu() {
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main-menu");
    mainMenu.appendChild(createCategorySidebar());
    mainMenu.appendChild(createCategorizedMenuItems());

    return mainMenu;
}

const header = document.querySelector(".header");
const contentDiv = document.querySelector(".content");
header.appendChild(createRestaurantHeader());
contentDiv.appendChild(createRestaurantBanner());
contentDiv.appendChild(createRestaurantInfo());
contentDiv.appendChild(createMainMenu());
