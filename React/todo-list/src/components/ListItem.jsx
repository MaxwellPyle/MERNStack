import React, { useState } from 'react';



const ListItem = () => {
    let [itemContent, setItemContent] = useState("");

    let [itemList, setItemList] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();
        if(itemContent.length < 1){
            return;
        }
        let newListItem = {
            text: itemContent,
            complete: false
        }

        setItemContent("");

        setItemList([...itemList, newListItem]);
    }

    const deleteHandler = (index) => {
        const filteredList = itemList.filter((item, i) => { return i !== index});
        setItemList(filteredList);
    }

    const handleToggle = (idx) => {
        const updatedItems = itemList.map((item, i) => { 
            if(idx === i){
                item.complete = !item.complete;
            }
        return item;
        });
        setItemList(updatedItems);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="ItemContent">To Do:</label>
                    <input type="text" name="ItemContent" id ="" className="form-control" onChange={(e)=>{setItemContent(e.target.value)}} value = {itemContent}/>
                </div>            
                <input type="submit" className="btn btn-dark mt-2" value = "Add A Box!"/>
            </form>
            <div className="container m-2 text-align-center">
                {
                    itemList.map((item, i) => {
                        const itemClasses = [];
                        if(item.complete) {
                            itemClasses.push("strike-through");
                        }

                        return <div key = {i} className="w-50 m-2 border border-dark">
                                <input onChange={(e)=>{handleToggle(i)}} checked={item.complete} type="checkbox"/>
                                <span className={itemClasses.join(" ")}>{item.text}</span>
                                <button className="btn btn-dark m-2" onClick={(e) =>{deleteHandler(i)}}>Delete</button>
                            </div>
                    })
                }
            </div>
        </>

    )

}
export default ListItem