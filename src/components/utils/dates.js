function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getUTCMonth() + 1),
        padTo2Digits(date.getUTCDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getUTCHours()),
        padTo2Digits(date.getUTCMinutes()),
        padTo2Digits(date.getUTCSeconds()),
      ].join(':')
    );
  }
  
  // 👇️ "2022-01-15 16:25:12"
  console.log(formatDate(new Date()));
  
  const date = new Date();

// 👉️ "Sat Jan 15 2022 18:23:51 GMT+0200"
console.log(date);

// 👇️ returns UTC year of the date
console.log(date.getUTCFullYear()); // 👉️ 2022

// 👇️ returns UTC month (0-11)
//    0 is January, 11 is December
console.log(date.getUTCMonth()); // 👉️ 0

// 👇️ returns UTC day of the month (1-31)
console.log(date.getUTCDate()); // 👉️ 15

// 👇️ returns UTC Hour of the date
console.log(date.getUTCHours()); // 👉️ 16

// 👇️ returns UTC Minutes of the date
console.log(date.getUTCMinutes()); // 👉️ 23

// 👇️ returns UTC Seconds of the date
console.log(date.getUTCSeconds()); // 👉️ 51