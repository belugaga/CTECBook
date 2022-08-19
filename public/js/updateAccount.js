function updateAcc() {

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "/users", true);
    updateUser.setRequestHeader("Content-Type", "application/json");
    updateUser.onload = function () {
        
        window.location.reload();
        
    }
    
    username1 = document.getElementById('username1').value
    name1 = document.getElementById('name1').value
    email1 = document.getElementById('email1').value
    token = sessionStorage.getItem("token");
    
    
    
    var payload = {username:username1,name:name1,email:email1,token:token};

    //console.log("payload = " + token)

    updateUser.send(JSON.stringify(payload));

}