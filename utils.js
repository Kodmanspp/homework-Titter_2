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
const createDate = (timestamp) => {
    const date = new Date(timestamp); 
    const formattedDate = `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
    return formattedDate;  
}
export {createElement, createDate}; 