const next = document.querySelectorAll('.next');
next.forEach(button=>{
    button.addEventListener("click", function(){
        const target = button.getAttribute("data-target");
        window.location.href=target;
        console.log("next!")
    })});


let images = ["s1.jpeg", "s2.jpeg", "s3.jpeg", "s4.jpeg", "s5.jpeg"];
let index=0;
 
function showImage(){
    const img = document.getElementById("carousel-img");
    img.src = images[index];
}

function Next(){
    index=(index+1)%images.length;
    showImage();
}

function Prev(){
    index=(index-1+images.length)%images.length;
    showImage();
}