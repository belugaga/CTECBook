var express = require("express"); //using the express web framework
const port = 3000;

var bookController = require('./controllers/bookController'); // set movieController to the movieController class
var commentController = require('./controllers/commentController');
var userController = require('./controllers/userController');
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
// In time to come we will need to accept new or edited comments from user

app.route('/books').get(bookController.getAllBooks); // activate the getAllMovies method if the route is GET(method) /movies
app.route('/comments').get(commentController.getAllComments);
app.route('/comments').post(commentController.addComment);
app.route('/comments/:id').put(commentController.updateComment)
app.route('/comments/:id').delete(commentController.deleteComment)

app.route('/users').get(userController.getAllUsers);
app.route('/users').post(userController.addUser);
app.route('/users').put(userController.updateUser);
app.route('/users/:id').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);

app.listen(port, () => console.log("Example app listening on port ${port}!")); // start the nodejs to be listening for incoming request @ port 8080
//console.log("web server running @ http://127.0.0.1:8080"); // output to console 
