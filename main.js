const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const items = document.querySelector("#items")

btn.addEventListener("click", ()=>{
const inputValus = input.value;
if(inputValus === "") {
     input.focus();
     return
}

const li = document.createElement("li")
const delBtn =document.createElement("button")

li.textContent = inputValus
delBtn.textContent = "Delete"
delBtn.style.marginLeft = "20px"
delBtn.style.marginTop = "5px"
li.appendChild(delBtn)
items.appendChild(li)

delBtn.addEventListener("click", ()=>{
    li.remove()
})

li.addEventListener("click", function(){
  li.classList.toggle("complete")
})

 input.value = ""
 input.focus();
})
