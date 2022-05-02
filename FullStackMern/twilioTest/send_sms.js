const accountSid ='ACa781c9ef3e203041b6949c9d347433ef';
const authToken = 'ef7956361f0bd473389b050fcfd8158d';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+15153254937',
        to: '+15404089549'
    })
    .then(message => console.log(message.sid));
    