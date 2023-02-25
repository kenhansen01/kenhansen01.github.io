const myImages = [
    {
        src: "/images/caterpillar.jpg",
        description: "A caterpillar eating some fennel.",
        alt: "caterpillar"
    },
    {
        src: "/images/chip.jpg",
        description: "A itchy chipmunk.",
        alt: "chipmunk"
    },
    {
        src: "/images/hair-do.jpg",
        description: "An amazing hair-do.",
        alt: "hair-do"
    },
    {
        src: "/images/sniff.jpg",
        description: "She can smell through the window.",
        alt: "sniff sniff"
    }
];

const showcaseImageElement = document.getElementById('showcase-image');
const showcaseImageDescription = document.getElementById('showcase-description');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

showcaseImageElement.src = myImages[currentIndex].src
showcaseImageElement.alt = myImages[currentIndex].alt
showcaseImageDescription.innerText = myImages[currentIndex].description

function changeMyImage(e){
    if (e.target.id === nextButton.id) {
        if (currentIndex < myImages.length -1) {
            currentIndex += 1
        } else {
            currentIndex = 0
        } 
    }   
    if (e.target.id === prevButton.id) {
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = myImages.length - 1
        }
    }
    
    showcaseImageElement.src = myImages[currentIndex].src
    showcaseImageElement.alt = myImages[currentIndex].alt
    showcaseImageDescription.innerText = myImages[currentIndex].description
}

nextButton.onclick = changeMyImage;
prevButton.onclick = changeMyImage;