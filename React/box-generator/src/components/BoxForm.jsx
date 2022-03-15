import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react';

const BoxForm = () => {

    //create state variables for box Generator
    let [color, setColor] = useState("");
    let [sideLength, setSideLength] = useState("");

    //store submitted boxes in state
    let [boxList, setBoxList] = useState([]);

    //Submit handlers 
    const submitHandler = (e) => {
        e.preventDefault();
        let newBox = {color, sideLength}
        
        setColor("");
        setSideLength("");

        //add box to boxArray list
        setBoxList([...boxList, newBox]);
    }

    //return the box generator form
    return(
        <>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="color">Color:</label>
                <input type="text" name="color" id ="" className="form-control" onChange={(e)=>{setColor(e.target.value)}}/>
            </div>            
            <div className="form-group">
                <label htmlFor="sideLength">Side length:</label>
                <input type="text" name="sideLength" id ="" className="form-control" onChange={(e)=>{setSideLength(e.target.value)}}/>
            </div>
            <input type="submit" className="btn btn-dark mt-2" value = "Add A Box!"/>
        </form>
        <div className="d-flex">
        {
            boxList.map(box=> {
                return <div style={{backgroundColor: box.color, height: "", width: "200px"}}>

                </div>
            })
        }
        </div>
        </>
    )
}
export default BoxForm;