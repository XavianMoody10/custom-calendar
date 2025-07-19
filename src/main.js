"use strict";

// Get current Month
function getCurrentMonth(currentDate) {
  return currentDate.toLocaleString("default", { month: "long" });
}

function getCurrentDay(currentDate) {
  return currentDate.getDate();
}

// Get the day the current month started
function getFirstDayOfTheMonth(currentDate) {
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  return firstDayOfMonth.getDay() + 1;
}

// Get number of days in the current month
function getNumberOfDaysInCurrentMonth(currentDate) {
  return (
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate() + 1
  );
}

// Diplay days to calendar
function displayDaysOnCalendar(numOfDaysInMonth, currentDay, weekdayNumber) {
  const container = document.querySelector(".calendar-days");

  for (let i = 0 + 1; i < numOfDaysInMonth; i++) {
    if (i === currentDay) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="calendar-days__date calendar-days__date--current">${i}</div>`
      );
    } else {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="calendar-days__date">${i}</div>`
      );
    }
  }

  document.querySelector(
    ".calendar-days__date:nth-of-type(1)"
  ).style.gridColumnStart = weekdayNumber;
}

// Display data
function displayDate() {
  const currentDate = new Date();
  const currentMonth = getCurrentMonth(currentDate);
  const currentDay = getCurrentDay(currentDate);
  const firstDayOfTheMonth = getFirstDayOfTheMonth(currentDate);
  const numOfDaysInMonth = getNumberOfDaysInCurrentMonth(currentDate);

  // Display month
  document.querySelector(".calendar-month__text").textContent = currentMonth;

  displayDaysOnCalendar(numOfDaysInMonth, currentDay, firstDayOfTheMonth);
}

displayDate();
