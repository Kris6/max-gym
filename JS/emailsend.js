function sendMail(){
    let parms = {
        ime : document.getElementById("ime").value,
        email : document.getElementById("email").value,
        poruka : document.getElementById("poruka").value,
    }

    emailjs.send("service_ezbw5rh","template_asjru3c",parms).then(alert("Poruka je poslata!"))
}
