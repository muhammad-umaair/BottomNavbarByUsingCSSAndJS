const btn = document.querySelector("button");
const nav = document.querySelector(".nav-collapse");
const boxes = document.querySelectorAll(".nav-collapse .box");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    if(nav.classList.contains("active")){
        boxes.forEach((box) => {
            box.classList.remove("active");
        });
        nav.style.width = `6rem`;
        setTimeout(()=> {
            nav.classList.remove("active");
        }, 500);
    }else{
        nav.classList.add("active");
        setTimeout(()=> {
            nav.style.width = `20rem`;
            boxes.forEach((box) => {
                box.classList.add("active");
            })
        },500);
    }
});