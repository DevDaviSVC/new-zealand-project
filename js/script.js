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

    // Mobile navbar menu

    const toggleMenuIcon = document.querySelector("#toggleMenuIcon > i");
    const samePageLink = document.querySelector("nav.mobile a[href='#']");
    const mobileNavbar = document.querySelector(".mobileMenu");
    const mainSection = document.querySelector("div.main");
    const headerLogo = document.querySelector("header .logo");

    toggleMenuIcon.addEventListener("click", toggleMobileMenu);
    samePageLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMobileMenu();
    });


    function toggleMobileMenu () {
        const visibility = mobileNavbar.style.right === "calc(0% - 2px)";


        if (visibility) {
            toggleMenuIcon.classList.remove("bi-x-lg");
            toggleMenuIcon.classList.add("bi-list");

            mainSection.style.filter = "brightness(100%)";
            headerLogo.style.filter = "brightness(100%)";
            mobileNavbar.style.right = "-60%";
        } else {
            toggleMenuIcon.classList.remove("bi-list");
            toggleMenuIcon.classList.add("bi-x-lg");

            mainSection.style.filter = "brightness(30%)";
            headerLogo.style.filter = "brightness(30%)";
            mobileNavbar.style.right = "calc(0% - 2px)";
        }
    }
};