
let bg = document.querySelector(".background");
let text = document.querySelector(".text");

// bg.addEventListener("load", () => app());

function app() {
    for (let i = 0, d = 50; i <= 100; i++, d -= 0.5) {
        setTimeout(() => {
            let o = d / 50;
            setTimeout(() => {
                text.textContent = `${i}%`;
                console.log(d);
                bg.setAttribute("style", `filter: blur(${d}px);`)
                text.setAttribute("style", `opacity: ${o};`)
            }, i * 50);
        }, 1000);
    };
};


setTimeout(() => {
    app();
}, 100);