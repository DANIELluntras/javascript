const day = `${now.getDate()}`.padStart(2,0);
const month = `${now.getMonth()+1}`.padStart(2,0);
const year = now.getFullYear();
const hour  = `${now.getHours()
}`.padStart(2,0);
const minute = now.getMinutes();
labelDate.textContent = `${day}/ ${month}/ ${year} ,${hour}: ${minute}`;
// time to langueage 
const now = new Date();
labelDate.textContent= new Intl.DateTimeFormat('ro-RO',).format(now)


const nows = new Date();
const options = {
  hour:'numeric',
  minute:'numeric',
  day:'numeric',
  month:'long',
  year:'numeric',
  weekday:'long',
}
const locale = navigator.language;
console.log(locale)
labelDate.textContent= new Intl.DateTimeFormat('ro-RO',options).format(now)

console.log(options)