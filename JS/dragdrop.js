const jumbledWords = document.querySelectorAll('#jumbleWordsWrapper > span');
const orderedWords = document.querySelectorAll('#orderedWorldsWrapper > span > p');
console.log('jumbledWords: ', jumbledWords);
console.log('orderedWords: ', orderedWords);


jumbledWords.forEach(el => {
  el.addEventListener('dragstart', dragStartHandler);
})
function dragStartHandler(e) {
  console.log('dragStartHandler running');
  e.dataTransfer.setData('text', e.target.getAttribute('data-source-id'));
  console.log(e.target);
}



orderedWords.forEach(el => {
  el.addEventListener('dragenter', dragEnterHandler);
  el.addEventListener('dragover', dragOverHandler);
  el.addEventListener('dragleave', dragLeaveHandler);
  el.addEventListener('drop', dropHandler);
})

function dragEnterHandler(e) {
  console.log('dragEnterHandler running');
}

function dragOverHandler(e) {
  console.log('dragOverHandler running');
  event.preventDefault();
}

function dragLeaveHandler(e) {
  console.log('dragLeaveHandler running');
}

function dropHandler(e) {
  e.preventDefault();
  
  console.log('dropHandler running');
  
  const dataSourceId = e.dataTransfer.getData('text'); 
  const dataTargetId = e.target.getAttribute('data-target-id');
  console.warn(dataSourceId, dataTargetId);

  if(dataSourceId === dataTargetId) {
    console.log(document.querySelector([dataTargetId]));
    e.target.insertAdjacentHTML('afterbegin', dataSourceId);
  }
}