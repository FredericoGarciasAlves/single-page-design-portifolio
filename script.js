document.addEventListener("DOMContentLoaded", () => {
    btnArrowLeft = document.querySelector(".btn-arrow-left");
    btnArrowRight = document.querySelector(".btn-arrow-right");
    const carousel = document.querySelector(".container-imgs-work");
    let images = Array.from(carousel.children);
    let imageCount = 5;
    let imageOrder = [1, 2, 3, 4, 5];
    function moveSlide(direction) {
        if (direction === 1) {
            let nextImageIndex =
                (imageOrder[imageOrder.length - 1] % imageCount) + 1;
            let newImage = document.createElement("img");
            newImage.src = `./assets/images/image-slide-${nextImageIndex}.jpg`;
            newImage.alt = nextImageIndex;

            carousel.appendChild(newImage);
            carousel.removeChild(carousel.firstElementChild);
            imageOrder.push(nextImageIndex);
            imageOrder.shift();
        } else {
            let prevImageIndex =
                ((imageOrder[0] - 2 + imageCount) % imageCount) + 1;
            let newImage = document.createElement("img");
            newImage.src = `./assets/images/image-slide-${prevImageIndex}.jpg`;
            newImage.alt = prevImageIndex;

            carousel.insertBefore(newImage, carousel.firstElementChild);
            carousel.removeChild(carousel.lastElementChild);
            imageOrder.unshift(prevImageIndex);
            imageOrder.pop();
        }
    }

    btnArrowLeft.addEventListener("click", () => {
        moveSlide(-1);
    });

    btnArrowRight.addEventListener("click", () => {
        moveSlide(1);
    });
});
