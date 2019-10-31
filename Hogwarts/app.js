
let container = document.querySelector("#container"); 
console.log(container) 



let newH1 = document.createElement("h1")
newH1.innerHTML = "Hogwarts"
console.log(newH1)
container.append(newH1);


let h2 = document.createElement("h2")
h2.innerHTML = "Felipe"
container.append(h2);

let h3 = document.createElement("h3")
h3.innerText = "Gryffindor"
container.append(h3);

let h4 = document.createElement("h4")
h4.classList.add("cat")
h4.innerHTML = "Cat"
container.append(h4)
let otherH4 = document.createElement("h4")
otherH4.classList.add("HollyWand")
otherH4.innerHTML = "Holly Wand with Unicorn Hair Core"
container.append(otherH4)


