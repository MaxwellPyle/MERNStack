import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import isMatch from 'date-fns/isMatch';

const FileUpload = () => {

    //list of customers to send message to
    let [customerList, setCustomerList] = useState([]);

    //state variable for filter and filtered list
    let [monthFilter, setMonthFilter] = useState("");
    let [filteredList, setFilteredList] = useState([]);

    // //twilio data 
    // const accountSid = 'ACa781c9ef3e203041b6949c9d347433ef';
    // const authToken = ;
    // const client = require('twilio')(accountSid, authToken);
    
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/customers')
            .then(response => {
                console.log("response: ", response);
                setCustomerList(response.data.results);
            })
            .catch(error => {
                console.log("error: ", error);
            })
    }, [customerList])

    //function to handle filtering of list of customers
    const filterHandler = (e) => {
        e.preventDefault();
        if(filteredList[0] != null){
            setFilteredList([]);
        }
        for (let i = 0; i < customerList.length; i++){
            if(isMatch(customerList[i].dateOfBirth, 'MM/dd/yyyy') && customerList[i].cellPhone !== null && customerList[i].dateOfBirth.slice(0,1) === monthFilter){
                filteredList.push(customerList[i]);
            }
        }
    }

    //function to send twilio request for sms messages
    // const smsHandler = (e) => {
    //     Promise.all(
    //         filteredList.map(customer => {
    //             return client.messages.create({
    //                 to: `+1${customer.cellPhone.toString()}`,
    //                 from: '+15153254937',
    //                 body: `Happy Birthday ${customer.firstName}, from Maxwell Pyle! Call me at 540-408-9549 to plan a lunch sometime.`
    //             });
    //         })
    //     )
    //     .then(messages => {
    //         console.log('Messages sent!');
    //     })
    //     .catch(err => console.error(err));
    // }

    // Function to parse CSV file and create object in database, then push all to customerList
    const changeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.files[0])

        Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                console.log(results.data)

                for(let i = 0; i < results.data.length; i++) {
                    let myObject = results.data[i];


                    let formInfo = {
                                    firstName: myObject["First Name"],
                                    lastName: myObject["Last Name"],
                                    homePhone: myObject["Home Phone"],
                                    cellPhone: myObject["Mobile Phone"],
                                    streetAddress: myObject["Street Address"],
                                    city: myObject["City"],
                                    state: myObject["State"],
                                    zip: myObject["Zip"], 
                                    dateOfBirth: myObject["Date of Birth"]
                                }

                    //send request to express to create customer object
                    axios.post("http://localhost:8000/api/customers/create", formInfo)
                        .then(response => {
                            console.log("response: ", response);
                        })
                        .catch(error => {
                            console.log("error: ", error)
                        })
                }
            },
        });

    };
    
    return(
        <>
            <div className="container border border-dark">
                    <h1>File Uploader</h1>
                    <h2>Upload a csv file below to add users to database</h2>
                    <input type="file" name="csv" accept=".csv" onChange={changeHandler} style={{ display: "block", margin: "10px auto" }}/>
            </div>
            <div className="container border border-dark">
                <h1>This is the Message Sender</h1>
                <form onSubmit={filterHandler}>
                    <label for="filter">Filter for birth month(ex: 8 - August, 4 - april)</label>
                    <input type="text" name="filter" className="m-2" onChange={(e) => {setMonthFilter(e.target.value)}} value={monthFilter}/>
                    <input type="submit" name="submit" className="btn btn-primary" value="Submit"/>
                </form>
                <button value="Send Birthday Texts" className="btn btn-Dark"/>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Street Address</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Zip</th>
                            <th scope="col">Home phone</th>
                            <th scope="col">Mobile Phone</th>
                            <th scope="col">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredList.map((Customer)=>{
                                return(
                                    <tr key={Customer._id}>
                                        <td>{Customer.firstName}</td>
                                        <td>{Customer.lastName}</td>
                                        <td>{Customer.streetAddress}</td>
                                        <td>{Customer.city}</td>
                                        <td>{Customer.state}</td>
                                        <td>{Customer.zip}</td>
                                        <td>{Customer.homePhone}</td>
                                        <td>{Customer.cellPhone}</td>
                                        <td>{Customer.dateOfBirth}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
            </div>
        
        </>
    )
}
export default FileUpload;