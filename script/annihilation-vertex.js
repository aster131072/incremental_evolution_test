function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.currentTarget.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggableElement = document.getElementById(data);
  var slot = event.target;

  // 检查目标元素是否为槽位
  if (!slot.classList.contains('slot')) {
    return; // 如果不是槽位，则阻止放置操作
  }

  // 检查槽位中是否已经存在图片
  if (slot.getElementsByTagName("img").length > 0) {
    return; // 如果已经存在图片，则阻止放置操作
  }

  slot.appendChild(draggableElement);
}
function showImage(element) {
  element.style.display = 'block';
}

function hideImage(element) {
  element.style.display = 'none';
}