const container = document.getElementById("draggable-item-container");
const draggableItems = document.getElementsByClassName('draggable-item');

let isDragging = false;
let startX, startY, initialX, initialY;
let cardId = "card-0";

function onMouseMove(e) {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    let newX = initialX + deltaX;
    let newY = initialY + deltaY;
    const targetElement = document.getElementById(cardId);
    const containerRect = container.getBoundingClientRect();
    const itemRect = targetElement.getBoundingClientRect();
    newX = Math.max(0, newX);
    newX = Math.min(containerRect.width - itemRect.width, newX);
    newY = Math.max(0, newY);
    newY = Math.min(containerRect.height - itemRect.height, newY);
    targetElement.style.left = `${newX}px`;
    targetElement.style.top = `${newY}px`;
}
function onMouseUp(e) {
    isDragging = false;
    const targetElement = document.getElementById(cardId);
    targetElement.classList.remove("dragging");
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}
function onTouchMove(e) {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;
    let newX = initialX + deltaX;
    let newY = initialY + deltaY;
    const targetElement = document.getElementById(cardId);
    const containerRect = container.getBoundingClientRect();
    const itemRect = targetElement.getBoundingClientRect();
    newX = Math.max(0, newX);
    newX = Math.min(containerRect.width - itemRect.width, newX);
    newY = Math.max(0, newY);
    newY = Math.min(containerRect.height - itemRect.height, newY);
    targetElement.style.left = `${newX}px`;
    targetElement.style.top = `${newY}px`;
}
function onTouchEnd(e) {
    isDragging = false;
    const targetElement = document.getElementById(cardId);
    targetElement.classList.remove("dragging");
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
}

function getDraggableElement(elem) {
    if (!elem.classList.contains("draggable-item")) {
        const firstParentElement = elem.parentElement;
        if (!firstParentElement.classList.contains("draggable-item")) {
            return firstParentElement.parentElement;
        } else {
            return firstParentElement;
        }
    } else {
        return elem;
    }
}

for (const draggableItem of draggableItems) {
    draggableItem.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDragging = true;
        const targetElement = getDraggableElement(e.target);
        cardId = targetElement.id;
        targetElement.classList.add("dragging");
        startX = e.clientX;
        startY = e.clientY;
        initialX = targetElement.offsetLeft;
        initialY = targetElement.offsetTop;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });
    draggableItem.addEventListener("touchstart", (e) => {
        e.preventDefault();
        isDragging = true;
        const targetElement = getDraggableElement(e.target);
        cardId = targetElement.id;
        targetElement.classList.add("dragging");
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        initialX = targetElement.offsetLeft;
        initialY = targetElement.offsetTop;
        document.addEventListener("touchmove", onTouchMove, { passive: false });
        document.addEventListener("touchend", onTouchEnd);
    });
}

window.addEventListener("resize", () => {});
