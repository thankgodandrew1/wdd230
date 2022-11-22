// Get the ticket
const ticket = document.getElementById('support');


// When the user clicks anywhere outside of the ticket, close it
window.onclick = function(event) {
    if (event.target == ticket) {
        ticket.style.display = "none";
    }
}