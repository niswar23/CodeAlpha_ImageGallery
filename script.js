let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg"
];

let currentImage = 0;


function openLightbox(index) {

    currentImage = index;

    document.getElementById("lightboxImage").src = images[currentImage];

    document.getElementById("lightbox").style.display = "flex";
}


function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}


function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("lightboxImage").src = images[currentImage];
}


function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightboxImage").src = images[currentImage];
}


function filterImages(category) {

    let items = document.getElementsByClassName("gallery-item");

    for (let i = 0; i < items.length; i++) {

        if (category === "all") {

            items[i].style.display = "block";

        } else if (items[i].classList.contains(category)) {

            items[i].style.display = "block";

        } else {

            items[i].style.display = "none";
        }
    }
}