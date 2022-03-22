const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class User {
    constructor(_id, firstName, lastName, phoneNumber, email, password){
        this._id = faker.phone.phoneNumber();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(_id, name, address){
        this._id = faker.phone.phoneNumber();
        this.name = faker.name.jobTitle();
        this.address = [
            this.street = faker.address.streetName(), 
            this.city = faker.address.cityName(),
            this.state = faker.address.state(),
            this.zipCode = faker.address.zipCode(), 
            this.country = faker.address.country()
        ]
    }
}
app.get("/api/users/new", (req, res) => {
    res.json({ user: new User() });
})

app.get("/api/company/new", (req, res) => {
    res.json({ company: new Company() });
})

app.get("/api/users/company", (req, res) => {
    res.json({ user: new User(), company: new Company() });
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );