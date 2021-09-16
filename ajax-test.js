


const requestURL = "http://localhost:3000/download"

const btn = document.querySelector("button");
const conteiner = document.querySelector(".conteiner");
function oncl(cb){
    
const xhr = new XMLHttpRequest();

xhr.open("GET",requestURL);
xhr.addEventListener("load", ()=>{
    console.log("request loader")
    //console.log(xhr.responseText)
    //let a = xhr.responseText;
    const response = JSON.parse(xhr.responseText);
    console.log(response)
    cb(response);
});
xhr.send()
xhr.addEventListener("error",(e)=>{
    console.log("error",e);
}); 

   
}
function renderPost(response){
     const fragment = document.createDocumentFragment();
    response.forEach(post =>{
        const card = document.createElement("div");
        card.classList.add("card");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        
        
        
        const id = document.createElement("h1");
        id.classList.add("card-title")
        id.textContent = `User id:  ${post.id}`;
        cardBody.appendChild(id);
        card.appendChild(cardBody);
        fragment.appendChild(card);
        
        const email = document.createElement("h5");
        email.classList.add("card-title")
        email.textContent = `User email:  ${post.email}`;
        cardBody.appendChild(email);
        card.appendChild(cardBody);
        fragment.appendChild(card);
        
        const first_name = document.createElement("h5");
        first_name.classList.add("card-title")
        first_name.textContent = `User first_name:  ${post.first_name}`;
        cardBody.appendChild(first_name);
        card.appendChild(cardBody);
        fragment.appendChild(card);
        
        const last_name = document.createElement("h5");
        last_name.classList.add("card-title")
        last_name.textContent = `User last_name:  ${post.last_name}`;
        cardBody.appendChild(last_name);
        card.appendChild(cardBody);
        fragment.appendChild(card);
        
        
        const newImage = document.createElement("img");
        newImage.src = post.photo
        newImage.classList.add("card-title")
        newImage.textContent = `User photo:  ${post.photo}`;
        cardBody.appendChild(newImage);
        card.appendChild(cardBody);
        fragment.appendChild(card);
        
     
        

    })
    
    
    conteiner.appendChild(fragment);
}

btn.addEventListener("click", (e)=>{
        oncl(renderPost);
})
