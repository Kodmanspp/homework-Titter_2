const messages = [
    {
        author: 'it academy', 
        message: 'hello i am it academy', 
    },
    {
        author: 'kodmanspp', 
        message: 'hello i am it kodmanspp', 
    },

]; 


const sendBtn = document.querySelector("#sendBtn");
const post = document.querySelector(".posts");

const authorInput = document.querySelector("#create-msg-author");
const messageInput = document.querySelector("#create-msg-text");

const modal = document.querySelector(".modalBackground");
const modalCloseBtn = document.querySelector(".modalClose");
const modalContent = document.querySelector(".modalContent");

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
const renderMessages = (messages) => {
    for (let i = 0; i < messages.length; i++) {
        const element = messages[i];
        const message = createElement('li', 'msg');
        const author = createElement('div', 'author', element.author); 
        const text = createElement('div', 'text', element.message); 
        message.append(author, text); 
        post.prepend(message);
    }
}
renderMessages(messages); 
sendBtn.addEventListener('click', function() {
    const message = {
        author: ``,
        message: messageInput.value,
    };
    if(!messageInput.value || messageInput.value.trim().length === 0){
        openModal('Вы не ввели текст сообщения');
        return;
    }
    else if(!authorInput.value || authorInput.value.trim().length === 0){
        message.author = `Unknown author`
    }
    else{
       message.author = authorInput.value;
    }
    messages.push(message);
    clearInput(); 
    postClear(); 
    renderMessages(messages); 
});

const clearInput = () =>{
    authorInput.value = ''; 
    messageInput.value = ''; 
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