import  {createElement, createDate}  from "./utils.js";

const messages = JSON.parse(localStorage.getItem('messages')) || [];
const sendBtn = document.querySelector("#sendBtn");
const post = document.querySelector(".posts");

const authorInput = document.querySelector("#create-msg-author");
const messageInput = document.querySelector("#create-msg-text");
const colorChoice = document.querySelector("#color-choice");


const modal = document.querySelector(".modalBackground");
const modalCloseBtn = document.querySelector(".modalClose");
const modalContent = document.querySelector(".modalContent");

const renderMessages = () => {
    for (let i = 0; i < messages.length; i++) {
        const element = messages[i];
        const message = createElement('li', 'msg');
        const author = createElement('div', 'author', element.author); 
        const text = createElement('div', 'text', element.message); 
        const date = createElement('div', 'date', createDate(element.createdAt)); 
        console.log(element.style); 

        if(element.style === 'Dark'){
            message.style.background = '#373737';
            message.style.color = "rgb(236, 236, 236)"; 
            date.style.color = "rgb(236, 236, 236)"; 
        }
        
        message.append(author,date, text); 
        post.prepend(message);
    }
}

sendBtn.addEventListener('click', function() {
    const message = {
        author: ``,
        message: messageInput.value,
        createdAt: Date.now(), 
        style: 'light', 
    };
    if(!messageInput.value || messageInput.value.trim().length === 0){
        openModal('Вы не ввели текст сообщения');
        clearInput();
        return;
    }
    else if(!authorInput.value || authorInput.value.trim().length === 0){
        message.author = `Unknown author`
    }
    else{
       message.author = authorInput.value;
    }
    message.style = colorChoice.value; 
    console.log(message.style); 
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages)); 
    clearInput(); 
    postClear(); 
    renderMessages();
});


const clearInput = () =>{
    authorInput.value = ''; 
    messageInput.value = '';
    colorChoice.value = 'Light';  
}
const postClear = () =>{
    post.innerHTML = ""; 
}
const openModal = (message) =>{
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
    modalContent.textContent = `${message}`;

}
const closeModal = () =>{
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
    modalContent.textContent = ``;
}
modalCloseBtn.onclick = closeModal;
window.onclick = function(event){
    if(event.target === modal){
        closeModal();
    }
}

renderMessages(); 



// localStorage.setItem('test', 0); 
// localStorage.test = JSON.stringify({a: 'a'});
// console.log(JSON.parse(localStorage.test));  

// const messages = [
//     {
//         author: 'it academy', 
//         message: 'hello i am it academy', 
//         createdAt: Date.now(), 
//     },
//     {
//         author: 'kodmanspp', 
//         message: 'hello i am it kodmanspp', 
//         createdAt: Date.now(), 
//     },

// ]; 