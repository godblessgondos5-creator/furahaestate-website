const hero = document.querySelector(".hero");


const images = [

"https://i.postimg.cc/yxJS5ssf/Transform-the-reference-architectural-exterior-pho-1779183440873.png",

"https://i.postimg.cc/V6ZCDdQZ/w-QYPTWSK.jpg",

"https://i.postimg.cc/jST9QG2K/Chat-GPT-Image-Jul-10-2026-06-29-08-AM.png",

"https://i.postimg.cc/BQYwWXQy/Chat-GPT-Image-Jul-10-2026-12-57-57-AM.png"


];


let index = 0;


function changeHero(){

hero.style.backgroundImage =
`url(${images[index]})`;


index++;


if(index >= images.length){

index = 0;

}

}


changeHero();


setInterval(changeHero,5000);

const elements = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade"
);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }else{
            entry.target.classList.remove("active");
        }
    });
},{
    threshold:0.15
});

elements.forEach(el=>observer.observe(el));

const sections = document.querySelectorAll(".reveal-text");

document.querySelectorAll(".reveal-text").forEach(section=>{

    section.querySelectorAll("span").forEach((line,index)=>{

        line.style.transitionDelay = `${index*0.25}s`;

    });

});

document.querySelectorAll(".card").forEach((card,index)=>{
    card.style.transitionDelay = `${index * 0.15}s`;
});

