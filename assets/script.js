const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


let dots = document.querySelector(".dots");

/*creates dost for all objects in the array of JSON objects, 
and give them the "dot" class to style them as real dots */
for (let i = 0; i < slides.length; i++) {
    let dotDiv = document.createElement("div");
    /*gives a number to each dot to distinguish them from each other */
    dotDiv.setAttribute("order", i + 1);
    dotDiv.setAttribute("class", "dot");
    /*adds event listener to the dot div element*/
    dotDiv.addEventListener("click", () => {
        /* depending on which dot use clicks, the corresponding image appears on the screen 
        !!!for interpolated strings backticks arenecessary doesn't work with anything else!!! */
        document.querySelector(".banner-img").setAttribute("src", `./assets/images/slideshow/${slides[i].image}`);
        /*adds the tagline under each image*/
        document.querySelector(".banner-img+p").innerHTML = slides[i].tagLine;
        /*adds a number to each dot to be able to identify it later*/
        document.querySelector(".banner-img").setAttribute("order", i + 1);
        /*removes styling of all dost so they all appear unselected*/
        document.querySelectorAll(".dots div").forEach(function (e) { e.classList.remove("dot_selected") });
        /*adds styling of a white dot to a dot that has been clicked on */
        document.querySelector(`div[order="${i + 1}"]`).classList.add("dot_selected");
    })
    /*adds the dot to it's parent container*/
    dots.appendChild(dotDiv);

}
/*during page load need to make the fist dot appear selected*/
document.querySelector(".banner-img").setAttribute("order", "1");
document.querySelector("div[order='1']").classList.add("dot_selected");


/*************************ARROW CLICK IMAGE CHANGE************************* */

function ChangeImageOnClick(slides, slideNumber) {
    /*shows image that corresponds to the selected slide*/
    document.querySelector(".banner-img").setAttribute("src", `./assets/images/slideshow/${slides[slideNumber - 1].image}`);
    /*add the tagline to each image*/
    document.querySelector(".banner-img+p").innerHTML = slides[slideNumber - 1].tagLine;
    /*adds a slide number to the shown image to be able to identify it */
    document.querySelector(".banner-img").setAttribute("order", slideNumber);
    /*removes styling from any other dot that has not been clicked on*/
    document.querySelectorAll(".dots div").forEach(function (e) { e.classList.remove("dot_selected")});
    /*adds styling to the dot that has been semested*/
    document.querySelector(`div[order="${slideNumber}"]`).classList.add("dot_selected");
}

document.querySelector(".arrow-left").addEventListener("click", () => {
    /*identifies the current image shown after clicking on arrow */
    let slideNumber = document.querySelector(".banner-img").getAttribute("order");
    /*if clicked on left arrow when fist image shown, we select the last image*/
    if (--slideNumber < 1) slideNumber = 4;
    /*adds the entire event listener logic*/
    ChangeImageOnClick(slides, slideNumber);
});

document.querySelector(".arrow-right").addEventListener("click", () => {
    /*identifies the current image shown after clicking on arrow */
    let slideNumber = document.querySelector(".banner-img").getAttribute("order");
    /*if clicked on left arrow when fist image shown, we select the last image*/
    if (++slideNumber > 4) slideNumber = 1;
    /*adds the entire event listener logic*/
    ChangeImageOnClick(slides, slideNumber);
});



