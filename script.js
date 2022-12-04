const opening = document.querySelector(".icon-image");
const closing = document.querySelector(".exit-buttom");
const menu = document.querySelector(".links");
const rest= document.querySelector(".rest");
opening.addEventListener('click',()=>{
    
     menu.setAttribute('data-visible',"true")
     rest.setAttribute('active','true')
    
})
closing.addEventListener('click',()=>{
    
    menu.setAttribute('data-visible',"false")
    rest.setAttribute('active','false')
   
})
rest.addEventListener('click',() =>{
    menu.setAttribute('data-visible',"false")
    rest.setAttribute('active','false')
})



