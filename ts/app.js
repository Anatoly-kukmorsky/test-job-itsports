"use strict";

const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".nav__list");
const menuLinks = document.querySelectorAll(".nav-link");

function burgerMenu() {
    burger.addEventListener("click", (e) => {
        e.isClick = true;
        menuList.classList.toggle("active");
        burger.classList.toggle("active");
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuList.classList.remove("active");
            burger.classList.remove("active");
        });
    });

    body.addEventListener("click", (e) => {
        if (e.isClick === true || e.target.classList.contains("nav__list") === true) return;
        menuList.classList.remove("active");
        burger.classList.remove("active");
    });
}
burgerMenu();

function titleOfThePost(id) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
            console.log(posts);
            const post15 = posts.find((post) => post.id === id);
            post15 ? console.log(post15.title) : console.log("Post with id 15 not found.");
        })
        .catch((error) => console.log(error));
}

titleOfThePost(15);
