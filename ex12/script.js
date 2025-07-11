let color=["green","blue","white","yellow","orange"]

let boxes=document.querySelectorAll(".box")

boxes.forEach(box =>
     {
let randomColor=color[Math.floor(Math.random()*color.length)];

box.style.backgroundColor=randomColor;
box.style.color=randomColor;

    
});

