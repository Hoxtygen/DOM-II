// Your code goes here

//document.addEventListener('DOMContentLoaded', function() {
    // code
        //dblclick
        const button = document.querySelectorAll(".btn");
        const header4 = document.querySelectorAll("h4");
        button.forEach.call(document.querySelectorAll('.btn'), (btn) => {
            btn.addEventListener("dblclick", () => header4.forEach(e => {
                e.style.color = "green"
                e.style.fontFamily = "Pacifico";
            }))
        });
        
        //mouseover
        const nav = document.querySelector("nav");
        nav.addEventListener("mouseover", (e) => {
            e.preventDefault();
            e.target.style.padding = "10px"
            e.target.style.backgroundColor = "black";
            e.target.style.color = "white";
        });

        //mouseleave
        nav.addEventListener("mouseout", (e) => {
            e.target.style.padding = "10px"
            e.target.style.backgroundColor = "white";
            e.target.style.color = "green";
        });
        
        //focus
        nav.addEventListener("focusin", (e) => {
            e.target.style.outline = "none";
            e.target.style.border = "1px solid red";
            e.target.style.padding = "10px";
        });

        //scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector(".main-navigation")
            window.scrollY === 0 ? header.style.backgroundColor = "" : header.style.backgroundColor = "orange";
            
        })

        //resize
        window.addEventListener('resize', () => {
            const footer = document.querySelector(".footer");
        window.innerWidth <= 500 ? footer.style.backgroundColor = "orange" : footer.style.backgroundColor = ""
        })

        const footerParagraph = document.querySelector(".footer p");
        console.log(footerParagraph)
        footerParagraph.addEventListener("mouseover", (event) => {
            event.stopPropagation()
            footerParagraph.style.fontFamily = "Stylish";
        })

        //drag
        const images = document.querySelectorAll("img");
        images.forEach(e => e.addEventListener("drag", () => {
            e.style.opacity = "0";
            e.classList.add("transition")
        }))

        //transition
        images.forEach(e => {
            e.classList.add("transition");
            e.style.transitionProperty = "transform";
            e.style.transitionDuration = "1s";
            e.style.transitionDelay = "300ms"
            e.addEventListener("mouseover", () => {
                e.style.transform = "rotate(180deg)";
            });
            e.addEventListener("transitionstart", () => {
                e.style.opacity = "0.5";
            })
            e.addEventListener("transitionend", ()=> {
                e.style.transform = "rotate(360deg)";
                e.style.opacity = "1";
            })
        });
        //images.forEach(e => e.addEventListener("click", console.log("You clicked me")))
        document.querySelector("img").addEventListener("click", () => console.log("clicked me"))

 // })