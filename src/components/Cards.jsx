import React from 'react'

export const Cards = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <img src= {props.url} alt="" />                
            </div>
        </div>
    )
}
