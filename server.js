const express = require('express')
const app = express()
const PORT = 8000;

const todos = {
    '1': {
        id: 1,
        userName: 'Salman Farooqi',
        task: 'Write backend for Todo App',
        isCompleted: false,
    },
    '2': {
        id: 2,
        userName: 'Noman Bin Basheer',
        task: 'Write backend for Todo App',
        isCompleted: false,
    },
    '3': {
        id: 3,
        userName: 'Hassan Sattar',
        task: 'Write backend for Todo App',
        isCompleted: false,
    },
    'unknown': {
        id: 0,
        userName: 'unknown',
        task: 'unknown',
        isCompleted: false,
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.get('/todos/todo/:todoNum', (req, res) => {
    const todoNumber = req.params.todoNum
    if (todos[todoNumber]) {
        res.json(todos[todoNumber])
    } else {
        res.json(todos['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})