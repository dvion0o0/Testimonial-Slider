const img = document.querySelector(".img");
const text = document.querySelector(".text");
const author = document.querySelector(".author");
const designation = document.querySelector(".designation");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


const data = [
{
    img:"./images/image-john.jpg",
    text:`If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.`,
    author:"John Torkpaur",
    designation:"Front-end Developer"
},

{
    img:"./images/image-tanya.jpg",
    text:`I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.`,
    author:"Tanya Sinclair",
    designation:"UX Designer"
},

]

let currntItem = 0

window.addEventListener("DOMContentLoaded", function(){
const item = data[currntItem];
img.src = item.img;
text.textContent = item.text;
author.textContent = item.author;
designation.textContent = item.designation;
});


function show(person){
const item = data[person];
img.src = item.img;
text.textContent = item.text;
author.textContent = item.author;
designation.textContent = item.designation;
}

next.addEventListener("click",function(){
    currntItem++;
    if(currntItem > data.length -1){
        currntItem = 0;
    }
    show(currntItem);
});

prev.addEventListener("click",function(){
    currntItem--;
    if(currntItem < 0){
        currntItem = data.length - 1;
    }
    show(currntItem);
});