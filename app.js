const accordeonContainer = document.querySelector('.container')
accordeonContainer.addEventListener('click', onclick)

let selectedItem;

function onclick(event) {
  let target = event.target;
  if (target.classList == 'accordion-item-title'){
    highlight(target)
  }
 }

 function highlight(item) {
    if (selectedItem) { // убрать существующую подсветку, если есть
      selectedItem.nextElementSibling.classList.remove('highlight-content');
      selectedItem.classList.remove('highlight-title')
    }
  selectedItem = item;
  selectedItem.classList.add('highlight-title')
  selectedItem.nextElementSibling.classList.add('highlight-content'); // подсветить новый td
}


