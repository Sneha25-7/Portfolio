const text = [
    "AI & Data Science Student",
    "Python Developer",
    "Web Designer",
    "Machine Learning Enthusiast",
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    current = text[count];

    letter = current.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === current.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,120);

    }

/* Counter Animation */

const counters=document.querySelectorAll(".counter");

const speed=100;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,20);

}

else{

counter.innerText=target+"+";

}

};

update();

});

/* Back To Top */

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* Dark Mode */

const dark=document.querySelector(".dark-btn");

dark.onclick=function(){

document.body.classList.toggle("dark");

};

})();