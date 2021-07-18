const sendBtn = document.querySelector("#sendBtn");
const post = document.querySelector(".posts");
const modal = document.querySelector(".modalBackground");
const modalCloseBtn = document.querySelector(".modalClose");
const modalContent = document.querySelector(".modalContent");


const authorInput = document.querySelector("#create-msg-author");
const messageInput = document.querySelector("#create-msg-text");

const createElement = (tag, className, textContent = "") => {
    if (!tag) {
        alert("Внутреняя ошибка сервиса!");
        return;
    }
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;

}
const prependElement = () => {

    const element = createElement('li', 'msg');
    const author = createElement('div', 'author', authorInput.value); 
    const text = createElement('div', 'text', messageInput.value); 
    element.append(author, text); 
    post.prepend(element); 
    authorInput.value = ''; 
    messageInput.value = ''; 
}
sendBtn.addEventListener('click', prependElement);

const openModal = () =>{
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
}
const closeModal = () =>{
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
}
close.onclick = closeModal;
window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}