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

  // ���Ŀ��Ԫ���Ƿ�Ϊ��λ
  if (!slot.classList.contains('slot')) {
    return; // ������ǲ�λ������ֹ���ò���
  }

  // ����λ���Ƿ��Ѿ�����ͼƬ
  if (slot.getElementsByTagName("img").length > 0) {
    return; // ����Ѿ�����ͼƬ������ֹ���ò���
  }

  slot.appendChild(draggableElement);
}
function showImage(element) {
  element.style.display = 'block';
}

function hideImage(element) {
  element.style.display = 'none';
}