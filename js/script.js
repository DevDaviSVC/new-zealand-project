window.onload = () => {
    const allElementsToBlur = document.querySelectorAll(".blurElement");
    console.log(allElementsToBlur)

    window.addEventListener("scroll", () => {
        for (i = 0; i < allElementsToBlur.length; i++) {
            const element = allElementsToBlur[i];
            let diff = (window.innerHeight) - element.getBoundingClientRect().top;
            let blurValue;
    
            if (diff > 0 && diff <= 300) {
                blurValue = 20 - Math.floor(((diff)/300) * 20);
            } else if (diff < 0) {
                blurValue = 20;
            } else {
                blurValue = 0;
            }
    
            element.style.filter = `blur(${blurValue}px)`;
            element.style.transform = `scale(1.0${Math.floor(blurValue / 2)})`;
        }
    })
};