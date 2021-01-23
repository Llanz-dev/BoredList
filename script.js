// Date
const currentDate = new Date();
const weekDays = new Array(7);
weekDays[0] = "Sunday";
weekDays[1] = "Monday";
weekDays[2] = "Tuesday";
weekDays[3] = "Wednesday";
weekDays[4] = "Thursday";
weekDays[5] = "Friday";
weekDays[6] = "Saturday";
const months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";
const monthName = months[currentDate.getMonth()];
const weekName = weekDays[currentDate.getDay()];
document.getElementById("week").innerHTML = weekName + ",";
document.getElementById("day").innerHTML = currentDate.getDate();
document.getElementById("month").innerHTML = monthName;
// Item List
const plus_Icon = document.getElementById("plusIcon");
const input_Field = document.getElementById("input-container");
const input_Text = document.querySelector(".input-container input");
const empty_Message = document.querySelector(".noList-message");
const todo_Container = document.querySelector(".container");
// When user click the plus icon
plus_Icon.onclick = () => {
  // Showing the input field
  if (input_Field.style.display === "block") {
    input_Field.style.display = "none";
    todo_Container.style.userSelect = "auto";
  } else {
    input_Field.style.display = "block";
    todo_Container.style.userSelect = "none";
  }
  // When user enter the input field
  input_Text.onkeyup = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      input_Text.value;
      if (input_Text.value === "") {
        alert("Input your list");
        input_Field.style.display = "block";
      } else {
        showItems(input_Text.value);
        input_Field.style.display = "none";
      }
    }
  };
  input_Text.value = "";
};

let itemCount = 0;
// To show all the items that the user input
let showItems = (userInput_Value) => {
  itemCount++;
  if (itemCount > 0) {
    empty_Message.style.display = "none";
  } else {
    empty_Message.style.display = "flex";
  }
  // Creating a div tag
  const whole_Div = document.createElement("div");
  whole_Div.setAttribute("class", "list");
  const left_Div = document.createElement("div");
  const right_Div = document.createElement("div");
  right_Div.setAttribute("class", "col");
  const icons_Div = document.createElement("div");
  const other_Div = document.createElement("div");
  // Creating a checkbox and item content (p tag)
  const checkbox_Tag = document.createElement("input");
  checkbox_Tag.type = "checkbox";
  checkbox_Tag.setAttribute("id", "checkBox" + itemCount);
  checkbox_Tag.classList.add("for-checkbox");
  const item_Tag = document.createElement("input");
  item_Tag.setAttribute("class", "itemEdit");
  item_Tag.disabled = true;
  item_Tag.type = "text";
  item_Tag.maxLength = "23";
  item_Tag.value = userInput_Value;
  item_Tag.setAttribute("id", "itemList" + itemCount);
  left_Div.appendChild(checkbox_Tag);
  left_Div.appendChild(item_Tag);
  // Creating a time and two icon
  const trash_Icon = document.createElement("i");
  trash_Icon.setAttribute("class", "fas fa-trash");
  const edit_Icon = document.createElement("i");
  edit_Icon.setAttribute("class", "fas fa-edit");
  edit_Icon.classList.add("thin");
  const time_Tag = document.createElement("p");
  time_Tag.style.color = "rgb(63, 63, 63)";
  let time = setTimeout(() => {
    let currentTime = new Date();
    time_Tag.innerHTML = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, 0);
  time;
  other_Div.appendChild(time_Tag);
  icons_Div.appendChild(trash_Icon);
  icons_Div.appendChild(edit_Icon);
  right_Div.appendChild(other_Div);
  right_Div.appendChild(icons_Div);
  right_Div.style.margin = "10px 10px 10px 0";
  const itemCount_Show = document.getElementById("item-count");
  trash_Icon.onclick = () => {
    itemCount--;
    whole_Div.remove();
    itemCount_Show.innerHTML = itemCount + " Tasks";
    if (itemCount > 0) {
      empty_Message.style.display = "none";
    } else {
      empty_Message.style.display = "flex";
    }
  };
  // Aim to editing area of the items list
  edit_Icon.onclick = () => {
    item_Tag.disabled = false;
    item_Tag.classList.add("for-itemEdit");
    item_Tag.onkeypress = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        item_Tag.disabled = true;
        item_Tag.classList.remove("for-itemEdit");
        item_Tag.classList.add("itemEdit");
      }
    };
  };
  // Combining the two major div in the list
  whole_Div.appendChild(left_Div);
  whole_Div.appendChild(right_Div);
  document.getElementById("item-list").appendChild(whole_Div);
  itemCount_Show.innerHTML = itemCount + " Tasks";
  // checkbox function
  const checkbox = document.getElementById("checkBox" + itemCount);
  let number = 1;
  checkbox.onclick = () => {
    number++;
    if (number % 2 === 0) {
      item_Tag.style.color = "rgb(94, 94, 94)";
    } else {
      item_Tag.style.color = "black";
    }
    item_Tag.classList.toggle("finish");
  };
};
