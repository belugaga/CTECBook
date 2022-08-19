$(document).ready(function(){

    var getProfile = new XMLHttpRequest;

    getProfile.open("POST", "/getuser", true)
    getProfile.setRequestHeader("Content-Type","application/json");
    getProfile.onload = function(){
        var profile = JSON.parse(getProfile.responseText);
        console.log(getProfile.responseText);
        username1 = profile[0].username;
        name1 = profile[0].name;
        email1 = profile[0].email;

        document.getElementById('username1').value = username1;
        document.getElementById('name1').value = name1;
        document.getElementById('email1').value = email1;

    }

    var payload = {token:token};
    getProfile.send(JSON.stringify(payload));
})