'use strict';
//Selecting the elements needs for the app
const progBar = document.querySelector('.progress-bar');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkBox = document.querySelectorAll('input[type="checkbox"]');
const containerGroupInputs = document.querySelectorAll('.card');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');
const btnCancel = document.querySelector('#cancel');
const btnPlace = document.querySelector('#place');
const sectionDelivery = document.querySelector('#delivery');
const sectionSummary = document.querySelector('#summary');

// Add style display none to section summary and delivery

sectionDelivery.style.display = 'none';
sectionSummary.style.display = 'none';
//Calculate percentage, depending of the number of container card(where radio and checks are)
const percentage = 100 / containerGroupInputs.length;
let progress = 0;
progBar.style.width = progress + '%';

//Var prices

let price = 0;
let order = [];

// Create an object to keep track of completed groups
const completedGroups = [];

// Loop through the radio buttons
radioButtons.forEach(function (radioButton) {
  // Add an event listener to the radio button
  radioButton.addEventListener('change', function () {
    price = 0;
    // Check if the radio button is checked
    if (radioButton.checked) {
      sectionSummary.style.display = 'block';
      // Checking if this group of radio button has already been used
      if (!completedGroups.includes(radioButton.name)) {
        progress = progress + percentage;
        progressBar(progress);
      }
      // Get the parent card element
      const card = radioButton.closest('.card');

      // Update the background color of the card header
      const cardHeader = card.querySelector('.card-header');
      cardHeader.classList.remove('bg-secondary');
      cardHeader.classList.add('bg-danger');
      // Retrieve the selected option price
      const price = pizzaPrices(radioButton.value);

      // Checking if the group its already been used
      const checkGroup = order.find((item) => item.group === radioButton.name);

      //if the group exists update the value and price
      if (checkGroup) {
        checkGroup.value = radioButton.value;
        checkGroup.price = price;
      }

      // Pushing items for orders array
      if (!checkGroup)
        order.push({
          group: radioButton.name,
          value: radioButton.value,
          price: price,
        });

      //Inserting new row in the table
      insertItemSummary(order);
      //Pushing in completedGroups the selected option
      completedGroups.push(radioButton.name);
    }
  });
});

// Loop through the check boxes
checkBox.forEach(function (checkBox) {
  // Add an event listener to the radio button
  checkBox.addEventListener('change', function () {
    price = 0;
    // Check if the radio button is checked
    if (checkBox.checked) {
      sectionSummary.style.display = 'block';
      // Checking if this group of radio button has already been used
      if (!completedGroups.includes(checkBox.name)) {
        progress = progress + percentage;
        progressBar(progress);
      }
      // Get the parent card element
      const card = checkBox.closest('.card');

      // Update the background color of the card header
      const cardHeader = card.querySelector('.card-header');
      cardHeader.classList.remove('bg-secondary');
      cardHeader.classList.add('bg-danger');
      // Retrieve the selected option price
      const price = 1;

      // Checking if the group its already been used
      const checkGroup = order.find((item) => item.group === checkBox.name);

      // Pushing items for orders array

      order.push({
        group: checkBox.name,
        value: checkBox.value,
        price: price,
      });

      //Inserting new row in the table
      insertItemSummary(order);
      //Pushing in completedGroups the selected option
      completedGroups.push(checkBox.name);
    }
  });
});

// Handling the display of the form to add the info delivery

btnPlace.addEventListener('click', () => {
  sectionDelivery.style.display = 'block';
  sectionSummary.scrollIntoView({ behavior: 'smooth' });
});

// Function prices

const pizzaPrices = function (item) {
  if (item === 'small') price = 10;
  if (item === 'medium') price = 15;
  if (item === 'large') price = 20;
  if (item === 'extra-large') price = 24;
  if (item === 'cheese-stuffed') price = 3;
  if (item === 'extra-cheese') price = 3;
  return price;
};

// Inserting the update list of selected option from the client
const insertItemSummary = function (order) {
  let html = '';
  let sum = 0;
  order.forEach(function (item) {
    sum = sum + item.price;
    html += `
        <tr>
          <td>${formatString(item.value)}</td>
          <td>£ ${item.price}</td>
        </tr>
      `;
  });
  tbody.innerHTML = html;
  html = '';
  html += `
  <tr>
    <td><strong>Total:</strong></td>
    <td><strong>£ ${sum}</strong></td>
  </tr>
`;
  tfoot.innerHTML = html;
};

// Used to format the strings, values coming from the form
const formatString = function (str) {
  return str.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, (c) => c.toUpperCase());
};

// Filling progress bar

const progressBar = function (progress) {
  progBar.style.width = progress + '%';

  if (parseInt(progress.toFixed(0)) === 100) activateButtons();
};

// Once the progress bar is 100% activate buttons

const activateButtons = function () {
  btnCancel.classList.remove('btn-cancel-order');
  btnPlace.classList.remove('btn-place-order');
};

const resetOrder = function () {
  price = 0;
  order = [];
  progress = 0;
  sectionDelivery.style.display = 'none';
  sectionSummary.style.display = 'none';
  btnCancel.classList.add('btn-cancel-order');
  btnPlace.classList.add('btn-place-order');
  radioButtons.forEach((element) => (element.checked = false));
  checkBox.forEach((element) => (element.checked = false));
};

btnCancel.addEventListener('click', resetOrder);
