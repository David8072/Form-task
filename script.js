const form = document.getElementById("myform");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const Firstname = document.getElementById("name").value;
  const Lastname = document.getElementById("name").value;
  const Gender = document.querySelector('input[name="gender"]:checked').value;
  const ChoiceofFood = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const Address = document.getElementById("address").value;
  const Pincode = document.getElementById("pincode").value;
  const State = document.getElementById("state").value;
  const Country = document.getElementById("country").value;

  const foodChoices = Array.from(ChoiceofFood).map(
    (checkbox) => checkbox.value
  );


  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  const newRow = table.insertRow(); //document.createElement("tr");
  const FirstnameCol = newRow.insertCell(); //document.createElement("td");
  const LastnameCol = newRow.insertCell(); //document.createElement("td");
  const GenderCol = newRow.insertCell(); //document.createElement("td");
  const ChoiceofFoodCol = newRow.insertCell(); //document.createElement("td");
  const AddressCol = newRow.insertCell(); //document.createElement("td");
  const PincodeCol = newRow.insertCell(); //document.createElement("td");
  const StateCol = newRow.insertCell(); //document.createElement("td");
  const CountryCol = newRow.insertCell(); //document.createElement("td");

  FirstnameCol.textContent = Firstname;
  LastnameCol.textContent = Lastname;
  GenderCol.textContent = Gender;
  ChoiceofFoodCol.textContent = foodChoices.join(", ");
  AddressCol.textContent = Address;
  PincodeCol.textContent = Pincode;
  StateCol.textContent = State;
  CountryCol.textContent = Country;

  form.reset();
});