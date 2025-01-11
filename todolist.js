let btn = document.querySelector("button");
let inpt = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inpt.value;
    ul.appendChild(item);
       
    inpt.value = ""
   


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
   delBtn.classList.add("delete");
    item.appendChild(delBtn);
   

});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        

    } 
})



