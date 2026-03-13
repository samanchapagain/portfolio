particlesJS("particles-js", {
particles:{
number:{value:80},
color:{value:"#00f2ff"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
move:{enable:true,speed:2}
}
});

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

sections.forEach(section=>{
observer.observe(section);
});