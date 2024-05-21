import { useEffect, useState } from "react";
import axios from 'axios';
import Item from "./Item";

function Content()
{
    const [data,setData]=useState([]);
    const fetchData=async()=>{
        await axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            setData(response.data)
            console.log(data);
        }
        );
    }
    useEffect(()=>{fetchData()},[data.length])
    return(

        <div id="itemss">
            {
                data.map((item)=>(
                    <Item title={item.title}  image={item.image} price={item.price} key={item.id}/>
                    ))
            }
        </div>
    );
}
export default Content;