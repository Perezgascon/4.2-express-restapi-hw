const express = require('express');

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/', (req, res) => res.send('Hello bitches!'));

app.get('/about', (req, res) => res.send('About us'));

app.post('/login', (req, res) => res.send('POST request at /login'));

const fruits = [
    { id: 1, name: 'apple', price: 10 },
    { id: 2, name: 'Banana', price: 15 },
    { id: 3, name: 'Orange', price: 20 },
    { id: 4, name: 'Pineapple', price: 25 },
    { id: 5, name: 'Strawberry', price: 30 }
]

app.get('/fruits', (req, res) => {
    res.json(fruits);
})

app.get('/fruits/:id', (req, res) => {
    for (let fruit of fruits) {
        if (fruit.id == req.params.id) {
            return res.json(fruit);
        }
    }
    res.json({ message: 'No fruit found' });
})

app.post('/fruits', (req, res) => {
    const fruit = {
        id: fruits.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    fruits.push(fruit);
    res.json(fruit);
})


app.delete('/fruits/:id', (req, res) => {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].id == req.params.id) {
            fruits.splice(i, 1);
            return res.json({ message: 'Fruit deleted' });
        }
    }
    res.json({ message: 'No fruit found' });
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));






