import fs from 'fs';
import express from 'express';
import dummyjson from 'dummy-json';

const usersTemplate = fs.readFileSync('dummy-json/users.hbs', { encoding: 'utf8' });
const categoriesTemplate = fs.readFileSync('dummy-json/getAllCategories.hbs', { encoding: 'utf8' });

const app = express();

const myHelpers = {
    categoryName() {
        // Use randomArrayItem() to ensure the seeded random number generator is used
        return dummyjson.utils.randomArrayItem(
            [
                'Suspension',
                'Engine',
                'Interior',
                'Auto Chemistry',
                'Gearbox'
            ]
        );
    },
    subcategoryName() {
        return dummyjson.utils.randomArrayItem(
            [
                'Anti rain',
                'Antigel',
                'Clutch',
                'Tire',
                'Shampoo',

                'Coolant',
                'Coolant Box',
                'Radiator',

                'Oil Filter',
                'Air Filter',
                'Fuel Filter',
                'Cabin Filter',
                'Motor Oil',
                'Transmission Fluid',

                'Front Axle',
                'Rear Axle',
                'Inner tie rod',
                'Outer tie rod',
                'Lever',

                'Piston',
                'Piston Ring',
                'Oil Pump',
                'Antifreeze Pump',
                'Timing Chain',
                'Timing Chain Kit',
                'Intake',
                'Intake Gasket',
                'Engine Block',
                'EGR Valve'
            ]
        );
    }
};

app.get('/api/users', function(req, res) {
    res.set('Content-Type', 'application/json');
    res.status(200).send(dummyjson.parse(usersTemplate, {helpers: myHelpers}));
});

app.get('/api/getAllCategories', function(req, res) {
    res.set('Content-Type', 'application/json');
    res.status(200).send(dummyjson.parse(categoriesTemplate, {helpers: myHelpers}));
});

app.listen(3000);