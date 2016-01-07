var mongo = require('mongodb').MongoClient,
 	client = require('socket.io').listen(8080).sockets,
    	fs = require('fs');

mongo.connect('mongodb://127.0.0.1/database',function(err,db) {
	if(err){ console.log(err); throw err; };
	
	client.on('connection',function(socket){
		/* User connects with socket.id */
		console.log("User connects with socket id " + socket.id);	

		/* On request */
		socket.on('request', function(data){
			var collection = db.collection(data.collection);	

			if(data.type == 'get'){
				get(collection, data);
			}
			if(data.type == 'insert'){

			}
			if(data.type == 'update'){

			}
			if(data.type == 'delete'){

			}

		});


		/* On socket disconnect */
		socket.on('disconnect', function (data) {
		    console.log('User disconnects: ' + socket.id);
		});

	});

});

function get(collection, data){
	collection.find(data.query);
}

console.log('Server started successfully.');

// Example query
var query = {
	type : 'get',
	collection: 'mycollection',
	query: "{ score: { $gt: 0, $lt: 2 } }"
};

