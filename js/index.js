//change font of body
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//styling of title and section
const title = document.querySelector(".title");
title.style.textAlign = "center";

const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around"

//change styling of h2 elements
const menuCategories = document.querySelectorAll(".category");
menuCategories.forEach(({ style: category }) => {
    category.fontStyle = "italic"
    category.fontSize = "2rem";
    category.borderBottom = "1px solid black";
});
console.log(menuCategories);

//change font size of warning at bottom of page
let warning = document.querySelector("#warning");
warning.style.fontSize = "2rem";
warning.style.marginBottom = "0";
warning.style.marginLeft = "1.5rem";

//color generator
colorGenerator = () => {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    randomColor += "50";
    return randomColor;
}

//assigning a random color to each list item
const foodCategories = document.querySelectorAll(".food-category");
foodCategories.forEach(({ style: category }) => {
    category.backgroundColor = colorGenerator();
    category.width = "20rem";
    category.height = "10rem";
    category.margin = "1rem";
});

const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach(({ style: item }) => {
    item.marginTop = "1rem";
    item.listStyle = "none";
});

// allergies section - add styling
const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

const allergyList = document.querySelector(".allergies");
allergyList.style.width = "20rem";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";

// Easy solution with pseudo-class :nth-child
// const allergyItems = document.querySelectorAll(".allergy-info:nth-child(2n)");
// allergyItems.forEach((item) => {
//     item.style.backgroundColor = "skyblue";
// })

// Another solution
const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
    if (i % 2 === 1) {
        item.backgroundColor = "skyblue";
    }
    item.paddingLeft = "1rem";
    item.lineHeight = "1.75";
});

//footer descriptions
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const description = document.querySelectorAll(".food-desc");
description.forEach(({ style: desc }) => {
    desc.border = "5px solid orange";
    desc.borderRadius = "100%";
    desc.height = "7rem";
    desc.width = "7rem";
    desc.display = "flex";
    desc.justifyContent = "center";
    desc.alignItems = "center";
    desc.margin = "1rem";
})

