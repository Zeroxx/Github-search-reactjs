import React from 'react';
import './Searchitem.css';

const Searchitem=(props)=>{

    return(
        <a href={props.html_url} className="Searchitem">
            <div>
                <h2>{props.name}</h2>
                <p>Language: {props.language} </p>
                <p>Score: {props.score} </p>
                <p>Updated_At: {props.updated_at} </p>
                <p>Created_At: {props.created_at} </p>
            </div>
        </a>
    )
} 

export default Searchitem;