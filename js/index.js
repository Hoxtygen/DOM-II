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

        window.addEventListener('resize', () => {
            console.log("You resized the window")
            document.body.clientWidth <= "500px" ? document.body.fontFamily = "Stylish" : document.body.fontFamily = ""
        })

        //drag
        const images = document.querySelectorAll("img");
        images.forEach(e => e.addEventListener("drag", () => {
            e.style.opacity = "0";
        }))

 // })