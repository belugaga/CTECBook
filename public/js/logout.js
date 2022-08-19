function logoutMe() {
    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();
    $('#editMenu').hide();
    sessionStorage.removeItem("token")
    window.location.reload("index.html");
}