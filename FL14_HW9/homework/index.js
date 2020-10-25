//Task 1 function convert()
function convert() {
  let convertedArr = [];
  for(let i = 0; i < arguments.length; i++) {
    if(typeof arguments[i] === 'string') {
      convertedArr[i] = Number(arguments[i]);
    } else {
      convertedArr[i] = String(arguments[i]);
    }
  }
  return convertedArr;
}

//Task 2 function executeForEach()
function executeForEach(array, func) {
  for(let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

//Task 3 function mapArray()
function mapArray(array, callback) {
  let result = [];
  executeForEach(array, function(el) {
    result.push(callback(el));
  });
  return result;
}

//Task 4 function filterArray()
function filterArray(array, callback) {
  let result = [];
  executeForEach(array, function(el) {
    if(callback(el)) {
      result.push(el);
    }
  });
  return result;
}

//Task 5 function getValuePosition()
function getValuePosition(array, value) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === value) {
      return i + 1;
    }
  }
  return false;
}

//Task 6 function flipOver()
function flipOver(string) {
  let flippedArr = [];
  let flippedStr = '';
  for(let i = string.length - 1, j = 0; i <= 0, j < string.length; i--, j++) {
    flippedArr[j] = string[i];
    flippedStr += flippedArr[j];
  }
  return flippedStr;
}

//Task 7 function makeListFromRange()
function makeListFromRange(range) {
  let list = [];
  for(let i = 0, j = range[0]; i <= range[1] - range[0], j <= range[1]; i++, j++) {
    list[i] = j;
  }
  return list;
}

//Task 8 function getArrayOfKeys()
function getArrayOfKeys(array, keyname) {
  let arrayOfKeys = [];
  executeForEach(array, function(object) {
    for(let key in object) {
      if(key === keyname) {
        arrayOfKeys.push(object[key]);
      }
    }
  })
  return arrayOfKeys;
}

//Task 9 function getTotalWeight()
function getTotalWeight(array) {
  let totalWeight = 0;
  executeForEach(array, function(object) {
    for(let key in object) {
      if(key === 'weight') {
        totalWeight += object[key];
      }
    }
  })
  return totalWeight;
}

//Task 10 function getPastDay()
function getPastDay(date, daysbetween) {
  const msInADay = 86400000;
  let dateStart = date.getTime(),
      dateBetween = daysbetween * msInADay,
      dayPast = Math.abs(dateStart - dateBetween),
      newDate = new Date(dayPast);
  return newDate.getDate();
}

//Task 11 function formatDate()
function formatDate(date) {
  let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      ten = 10;
  if(month < ten) {
    month = '0' + month;
  }
  if(day < ten) {
    day = '0' + day;
  }
  if(hours < ten) {
    hours = '0' + hours;
  }
  if(minutes < ten) {
    minutes = '0' + minutes;
  }
  return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;
}