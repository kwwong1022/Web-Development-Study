// MDN Event Reference: https://developer.mozilla.org/en-US/docs/Web/Events
// event object
const body = document.querySelector("body");
const h1 = document.querySelector("#title");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", ()=> {
    alert("clicked!");
})

btn2.addEventListener("dblclick", ()=> {
    alert("clicked!");
})

btn3.addEventListener("click", ()=> {
    let color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    h1.innerText = color;
    body.style.backgroundColor = color;
})

// this
const btnGroup = document.querySelector("#btn-group");

for(let i=0; i<100; i++) {
    let btn = document.createElement("button");
    btn.innerText = "Click Me!";
    btn.style.margin = "10px";
    btn.style.width = "100px";
    btn.style.height = "100px";
    btn.addEventListener("click", ()=>{
        btn.style.backgroundColor = newRandColor();
    });
    btnGroup.appendChild(btn);
}

function newRandColor() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}

// form event
const form1 = document.querySelector("#form1");
const tweets = document.querySelector("#tweets");

form1.addEventListener("submit", (e)=> {
    e.preventDefault();
    let userName = form1.elements.username.value;
    let comment = form1.elements.comment.value;
    console.log(`${userName}: ${comment}`);
    const li = document.createElement("li");
    li.innerText = `${userName}: ${comment}`;
    tweets.appendChild(li);
})

//input & change event
const input = document.querySelector("#typeBelow");
const h1 = document.querySelector(".typeBelow");

input.addEventListener("change", (e)=> {
    console.log("Change!")
});

input.addEventListener("input", (e)=> {
    console.log("New Input!")
});