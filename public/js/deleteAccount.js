function deleteAcc() {
    var response = confirm("Are you sure you want to DELETE this ACCOUNT?");
    

    if (response == true) {
        var delete_user_url = "/users/" + username1;
        var deleteUser = new XMLHttpRequest();
        deleteUser.open("DELETE", delete_user_url, true);
        deleteUser.onload = function() {
            sessionStorage.removeItem('token');
            $('#successModal').modal({backdrop: 'static', keyboard: false});
            setTimeout(() => {  window.location.reload('index.html'); }, 2000); 
        };
        deleteUser.send();
    }
    
    
}