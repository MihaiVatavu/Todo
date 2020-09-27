// Get the elements by class name

const theForm = document.querySelector('.form');
const theList = document.querySelector('.class-list');
const theBtn = document.querySelector('.add-btn');
const sortBtn = document.getElementById('options')


// Add event listeners

theBtn.addEventListener('click', initFunction)


// Functions


// Init function
function initFunction(e) {
  e.preventDefault();

  // Get the value of input
  const theInputValue = document.getElementById('text').value;

  // Create the div wrapper
  if (theInputValue === '') {
    document.querySelector('input').value = 'Write something';

  } else {
    const newElement = document.createElement('div');

    newElement.classList.add('item-container');

    // Create the list item and append it to the div-wrapper

    const newListItem = document.createElement('li');

    newListItem.textContent = theInputValue;

    newElement.appendChild(newListItem);

    // Create delete button and append it to the div-wrapper

    const deleteBtn = document.createElement('button');

    deleteBtn.classList.add('delete');

    deleteBtn.innerHTML = '<i class="fas fa-eraser fa-2x"></i>'

    newElement.appendChild(deleteBtn);

    // Create checked button and append it to the div-wrapper

    const checkedBtn = document.createElement('button');

    checkedBtn.classList.add('checked');

    checkedBtn.innerHTML = '<i class="far fa-check-circle fa-2x"></i>'

    newElement.appendChild(checkedBtn);
    // Append the div-wrapper to the list

    theList.appendChild(newElement);

    // Delete/check item function

    function deleteItem() {

      newElement.remove()

    }

    function checkItem() {

      newListItem.innerHTML = `<s> ${theInputValue}</s>`;
      newElement.classList.add('completed')

    }

    // Sort the elements function


    function sort(e) {

      const items = theList.childNodes;

      console.log(items);

      items.forEach(function (item) {
        switch (e.target.value) {
          case "all":
            item.style.display = 'block';
            break;

          case "completed":
            if (item.classList.contains('completed')) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
            break

          case "uncompleted":
            if (item.classList.contains('completed')) {
              item.style.display = 'none';
            } else {
              item.style.display = 'block';
            }
            break
        }
      });
    }

    deleteBtn.addEventListener('click', deleteItem)

    checkedBtn.addEventListener('click', checkItem)

    sortBtn.addEventListener('click', sort)
  }

  document.getElementById('text').value = ''

}




