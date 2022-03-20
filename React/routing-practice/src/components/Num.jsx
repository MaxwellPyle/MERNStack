import React from 'react';
import { useParams } from "react-router";

const Num = () => {
    const { num, bgcolor } = useParams();

    return(
        <div style = {{backgroundColor: `${bgcolor}`}}>
            {
            isNaN(num)?
                <h1>the word is: {num}</h1>:
                <h1>the num is: {num}</h1>
            }
        </div>
    );
};
export default Num;