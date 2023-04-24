/*10. Create a human readable time format using the Date time object
a. YYYY-MM-DD HH:mm
b. DD-MM-YYYY HH:mm
c. DD/MM/YYYY HH:mm */
const currentDate = new Date();
const date = currentDate.getDate();
const hours = currentDate.getHours();
const months = currentDate.getMonth()+1; // Add 1 because getMonth() returns a zero-based value
const year = currentDate.getFullYear();
const minutes = currentDate.getMinutes();
console.log(`${year}-${months}-${date} ${hours}:${minutes}`);
console.log(`${date}-${months}-${year} ${hours}:${minutes}`)
console.log(`${date}/${months}/${year} ${hours}:${minutes}`)