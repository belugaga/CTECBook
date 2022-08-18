function registerMe(){

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "/users", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload=function(){

        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }

    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var payload = {username:username, name:name, password:password, email:email};
    registerUser.send(JSON.stringify(payload));
}