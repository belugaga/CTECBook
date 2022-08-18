//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getBookData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', book_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the movies records into our movie array        
	book_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	fetchComments();
	console.log(book_array) // output to console        
	//call the function so as to display all movies tiles for "Now Showing"        	
    displayBooks();    
};    

//This command starts the calling of the movies web api    
request.send();
}

function displayBooks() {
    var table = document.getElementById("booksTable");
    var bookCount = 0;
    var message = "";

    table.innerHTML = "";
    totalBooks = book_array.length;
    for (var count = 0; count < totalBooks; count++) {
        var picture = book_array[count].pictures;
        var name = book_array[count].name;
	var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + picture + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showBookComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#bookModal" class="card-title" item="' + count + '" onClick="showBookDetails(this)">' + name + '</h5></div>\
</div>'
        table.insertAdjacentHTML('beforeend', cell);
        bookCount++;
    }

    message = bookCount + " Books Available";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";  
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showBookDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("bookTitle").textContent = book_array[item].name;
    document.getElementById("bookPoster").src = book_array[item].pictures;
    document.getElementById("author").textContent = book_array[item].author;
    document.getElementById("year").textContent = book_array[item].published_year;
    document.getElementById("about_book").textContent = book_array[item].about;
    document.getElementById("category").textContent = book_array[item].category;
}

//This function opens a new window/tab and loads the
//particular movie in the cinema website
/*function buyTicket() {
    window.open(book_array[currentIndex].buy, "_blank");
}*/