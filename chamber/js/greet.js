date =  new Date()
const dayOfWeek = date.getDay()

let message;

if (dayOfWeek >= 1  && dayOfWeek <=2) {
    message = "🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}else{
    message = ''
}
document.querySelector('#meeting').textContent = message
document.querySelector('#small-meeting').textContent = message