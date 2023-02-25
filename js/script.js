const myImages = [
    {
        src: "/images/caterpillar.jpg",
        description: "A caterpillar eating some fennel."
    },
    {
        src: "/images/chip.jpg",
        description: "A itchy chipmunk."
    },
    {
        src: "/images/hair-do.jpg",
        description: "An amazing hair-do."
    },
    {
        src: "/images/sniff.jpg",
        description: "She can smell through the window."
    }
];

const showcaseImageElement = document.getElementById('showcase-image');
const showcaseImageDescription = document.getElementById('showcase-description');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

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
    showcaseImageDescription.innerText = myImages[currentIndex].description
}

nextButton.onclick = changeMyImage;
prevButton.onclick = changeMyImage;