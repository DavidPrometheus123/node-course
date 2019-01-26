const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/ufo", {useNewUrlParser: true}, (err, client) => {
    
    if(err) {
        return console.log(err);
    }
    
    const db = client.db("ufo");
    
    db.collection("Todos").find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log(err);
    });
    
    /*db.collection("Todos").insertOne({
        text: "Fuck the dog",
        completed: false
    }, (err, newTodo) => {
        if(err) {
            return console.log(err);
        }
        console.log(newTodo.ops[0]);
    });*/
    
   /* client.close();*/
});