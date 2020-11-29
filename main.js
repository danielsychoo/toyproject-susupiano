let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let todayYearMonth = `${todayYear}년 ${todayMonth}월`;

let calendar = document.querySelector('#idCalendar');

// Start // 달력을 만드는 함수 --------------------------- //
function buildCalendar() {
  let firstDate = new Date(todayYear, todayMonth - 1, 1);
  let lastDate = new Date(todayYear, todayMonth, 0);
  let day = firstDate.getDay();
  let week = Math.ceil(lastDate.getDate() / 7) + 1;

  let leftDays = 7;
  let setDays = 1;

  for(let i = 1; i < week; i++) {
    let row = calendar.insertRow();
    while(day !== 0) {
      row.insertCell().textContent = '';
      day -= 1;
      leftDays -= 1;
    }
    while(leftDays !== 0) {
      if(setDays > lastDate.getDate()) {
        row.insertCell().textContent = '';
        leftDays -= 1;
      } else {
        row.insertCell().textContent = setDays;
        setDays += 1;
        leftDays -= 1;
      }
    }
    leftDays = 7;
  }
  setDays -= 1;
  if(setDays !== lastDate.getDate()) {
    let row = calendar.insertRow();
    while(setDays !== lastDate.getDate()) {
      setDays ++;
      leftDays --;
      row.insertCell().textContent = setDays;
    }
  }
  let yearMonth = document.querySelector('#idYearMonth');
  yearMonth.textContent = todayYearMonth;
};
// End // 달력을 만드는 함수 --------------------------- //

// Start // 달력을 만드는 함수 실행 --------------------------- //
buildCalendar();
// End // 달력을 만드는 함수 실행 --------------------------- //

// Start // 달력을 지우는 함수 --------------------------- //
function deleteCalendar() {
  while(calendar.rows.length > 2) {
    calendar.deleteRow(2);
  }
};
// End // 달력을 지우는 함수 --------------------------- //

// Start // 이전달로 가는 함수 --------------------------- //
function prevMonth() {
  todayMonth = todayMonth - 1;
  if(todayMonth === 0) {
    todayMonth = 12;
    todayYear -= 1;
  }
  deleteCalendar();
  today = new Date(todayYear, todayMonth - 1);
  todayYearMonth = `${todayYear}년 ${todayMonth}월`;
  buildCalendar();
}
// End // 이전달로 가는 함수 --------------------------- //

// Start // 다음달로 가는 함수 --------------------------- //
function nextMonth() {
  todayMonth += 1;
  if(todayMonth === 13) {
    todayMonth = 1;
    todayYear = todayYear + 1;
  }
  deleteCalendar();
  today = new Date(todayYear, todayMonth - 1);
  todayYearMonth = `${todayYear}년 ${todayMonth}월`;
  buildCalendar();
}
// End // 다음달로 가는 함수 --------------------------- //

// Start // 버튼에 이벤트 연결 --------------------------- //
let prevBtn = document.querySelector('#preventMonthButton');
let nextBtn = document.querySelector('#nextMonthButton');
prevBtn.addEventListener('click', prevMonth);
nextBtn.addEventListener('click', nextMonth);
// End // 버튼에 이벤트 연결 --------------------------- //
