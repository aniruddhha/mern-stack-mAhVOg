import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())

const cars = [
    {
        id: 100,
        make: 'abc',
        model: 'aaa',
        year: '2022'
    }
]

app.get('/car', (req, res) => {
    res.json(cars)
})

app.post('/car', (req, res) => {

    const car  = req.body
    console.log(car)

    cars.push(car)

    res.json({ sts :'success', msg: 'Car Saved Successfully' })
})

app.get('/car/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('Car not found');
    res.json(car);
});


app.put('/car/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('Car not found');

    car.make = req.body.make;
    car.model = req.body.model;
    car.year = req.body.year;
    res.json(car);
});

app.delete('/car/:id', (req, res) => {
    const carIndex = cars.findIndex(c => c.id === parseInt(req.params.id));
    if (carIndex === -1) return res.status(404).send('Car not found');

    const deletedCar = cars.splice(carIndex, 1);
    res.json(deletedCar[0]);
});


app.listen(port,() => {
    console.log(`Express Server Running on ${port}`)
} )