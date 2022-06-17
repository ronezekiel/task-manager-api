// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    //CRUD

    //CREATE
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Ezekiel',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Aron',
    //         age: 21

    //     }, {
    //         name: 'Yza',
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         decription: 'Eat',
    //         completed: true

    //     }, {
    //         decription: 'Code',
    //         completed: true
    //     }, {
    //         decription: 'Sleep',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })


    // READ
    // db.collection('users').findOne({_id: new ObjectID("62a97af99c4fe75a50de1795")}, ( error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 23 }).count((error, users) => {
    //     console.log(users)
    // })

    //  db.collection('tasks').findOne({_id: new ObjectID("62a97d7b22fc4502f0cfd1f3")}, ( error, task) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    //UPDATE
    // db.collection('users').updateOne({
    //     _id: new ObjectID("62a97be47247c4276032c903")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    //     // $inc: {
    //     //     age: 1
    //     // }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(error)
    // })

    //DELETE
    // db.collection('users').deleteMany({
    //     age: 23
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        decription: "Sleep"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})