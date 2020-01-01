const list= document.querySelector("ol");
const input= document.querySelector("input");
const btn1=document.getElementById("btn-1");

btn1.addEventListener("click", function(){
  let item = input.value;

  
  input.value="Please input an item";
  
  input.value="";
  
  let newItem=document.createElement("li");
  let newSpan=document.createElement("span");
  let newBtn=document.createElement("div");

  newBtn.setAttribute("id","btn-1");

  newItem.appendChild(newSpan);
  newItem.appendChild(newBtn);

  newSpan.textContent= item;
  newBtn.textContent="Delete";
  newBtn.style.marginLeft="1%";

  //Event when "Delete" is clicked
  newBtn.onclick= function (){
    newItem.remove();
  }

  list.appendChild(newItem);

  input.focus();
})
