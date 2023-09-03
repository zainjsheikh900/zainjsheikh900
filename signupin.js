function reg() {
    var iname = document.getElementById("form3Example1c").value
    var iemail = document.getElementById("form3Example3c").value
    var ipass = document.getElementById("form3Example4c").value

    localStorage.setItem("Name",iname)
    localStorage.setItem("Email",iemail)
    localStorage.setItem("Password",ipass)
}