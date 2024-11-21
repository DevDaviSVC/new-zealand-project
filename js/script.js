window.onload = () => {
    const allElementsToBlur = document.querySelectorAll(".blurElement");

    window.addEventListener("scroll", () => {
        for (i = 0; i < allElementsToBlur.length; i++) {
            const element = allElementsToBlur[i];
            let diff = (window.innerHeight) - element.getBoundingClientRect().top;
            let blurValue;
    
            if (diff > 0 && diff <= (window.innerHeight * 0.2)) {
                blurValue = 20 - Math.floor(((diff)/(window.innerHeight * 0.2)) * 20);
            } else if (diff < 0) {
                blurValue = 20;
            } else {
                blurValue = 0;
            }
    
            element.style.filter = `blur(${blurValue}px)`;
            // element.style.transform = `scale(1.0${Math.floor(blurValue / 2)})`;

            backgroundParallaxEffect(document.querySelector("section.hero"), window.scrollY, 0.5);
        }
    });

    function backgroundParallaxEffect (element, windowScrollY, value) {
        element.style.backgroundPosition = `0 ${windowScrollY * value}px`;
    }

    let slideRight = {
        distance: "50%",
        origin: "left",
        opacity: 0
    };

    ScrollReveal().reveal(".blurElement", {
        reset: true,
        ...slideRight
    });

    // const body = document.body;
    // const scrollWrap = document.querySelectorAll(".main");
    // const height = scrollWrap.getBoundingClientRect().height - 1;
    // const speed = 0.08;

    // let offset = 0;

    // body.style.height = Math.floor(height) + "px";

    // function smootScroll() {
    //     offset += (window.scrollY - offset) * speed;

    //     let scroll = `translateY(-${offset}px) translateZ(0)`;
    //     scrollWrap.style.transform = scroll;
    //     let callScroll = requestAnimationFrame(smootScroll);
    // };

    // smootScroll();
};