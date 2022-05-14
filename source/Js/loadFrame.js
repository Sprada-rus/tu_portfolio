//Функция для уставки высоты элемента <iframe/>
function getHeight(node){
    node.height = (node.contentWindow.document.body.scrollHeight + 20) + 'px';
}