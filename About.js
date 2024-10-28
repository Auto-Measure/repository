// About.js

document.addEventListener("DOMContentLoaded", () => {
    const contentText = document.querySelector(".about-info .content p");

    const versions = [
        "At FitCraft, we bring simplicity to custom clothing. Measure yourself accurately from home, explore your fit on a 3D avatar, and connect with tailors seamlessly. FitCraft empowers you to experience perfectly tailored clothing.",
        "FitCraft makes personalized clothing easy. Get precise measurements at home, view your fit through a virtual 3D avatar, and work with skilled tailors. FitCraft offers a smooth path to your ideal clothing fit.",
        "Simplify custom clothing with FitCraft. Capture measurements from home, preview your fit in 3D, and team up with tailors. FitCraft provides all the tools you need for flawless, tailored clothing."
    ];

    let currentVersion = 0;

    function updateText() {
        contentText.textContent = versions[currentVersion];
        currentVersion = (currentVersion + 1) % versions.length;
    }

    setInterval(updateText, 5000); // Change text every 5 seconds
    updateText(); // Initial call to set the first version
});
