//  declearing the variables
let quote =document.getElementById("Quote");
let author =document.getElementById("author");
let btn =document.getElementById("btn");


//  Here we are useing the API for random qoutes 

const url="https://api.quotable.io/random";
let Nextquote=() => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText= item.content;
        author.innerText=item.author;
    });
};

window.addEventListener("load", Nextquote);
btn.addEventListener("click",Nextquote);
