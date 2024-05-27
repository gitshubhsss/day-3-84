let images=document.getElementsByClassName("oldImg");

for(let i=0;i<images.length;i++){
    images[i].src="assets/spiderman_img.png";
}

let links=document.querySelectorAll("div a");

for(i=0;i<links.length;i++){
    console.dir(links[i].innerHTML);
}