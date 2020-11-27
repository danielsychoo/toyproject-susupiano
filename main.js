// 달력출력 ------------------------------
let currentTitle = document.querySelector('#idCurrent-year-month');
let calendarBody = document.querySelector('#idCalendar-body');
let today = new Date();
let first = new Date(today.getFullYear(), today.getMonth(), 1);
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let leapYear = [31,29,31,30,31,30,31,31,30,31,30,31];
let notLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
let pageFirst = first;
let pageYear;

if(first.getFullYear() % 4 === 0) {
  pageYear = leapYear;
} else {
  pageYear = notLeapYear;
}

function showCalendar() {
  let monthCnt = 100;
  let cnt = 1;
  for(let i = 0; i < 6; i++) {
    let $tr = document.createElement('tr');
    $tr.setAttribute('id', monthCnt);
    for(let n = 0; n < 7; n++) {
      if((i === 0 && n < first.getDay()) || cnt > pageYear[first.getMonth()]) {
        let $td = document.createElement('td');
        $tr.appendChild($td);
      } else {
        let $td = document.createElement('td');
        $td.textContent = cnt;
        $td.setAttribute('id', cnt);
        $tr.appendChild($td);
        cnt++;
      }
    }
    monthCnt++;
    calendarBody.appendChild($tr);
  }
}

showCalendar();

function removeCalendar() {
  let catchTr = 100;
  for(let i = 100; i < 106; i++) {
    let $tr = document.querySelector(catchTr);
    $tr.remove();
    catchTr++;
  }
}
// 달력출력 ------------------------------

// 이전달 다음달 -------------------------
