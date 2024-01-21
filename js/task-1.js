"use strict"
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
    const headingText = item.querySelector("h2").textContent;
    const liItems = item.querySelectorAll("ul>li");
    console.log(`Category: ${headingText}`);
    console.log(`Elements: ${liItems.length}`)
})

