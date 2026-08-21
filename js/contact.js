
function openchat() {
    document.getElementById("chatbox").style.display = "block";
}
function sendmsg() {
    let msg = document.getElementById("msg").value;
    let box = document.getElementById("messages");

    box.innerHTML += "<p><b>you:</b>" + msg + "</p>";

    box.innerHTML += "<P><b>Bot:</b> we will help you soon</P>"

document.getElementById("msg").value ="";
}

form.onsubmit = event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
       form.classList.add('was-validated')
      }else alert('Thanks For Your Request')
    }
