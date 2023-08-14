import React from "react";

export const Cards = (props) => {

    return (<>
        <div className={`card border rounded-top ${props.isFirst ? "" : "ms-2"}`}>
            <img src={props.content.img} className="card-img-top border img-fluid rounded-top" style={{ width: '300px', height: '150px' }} alt="Card 1" />
            <div className="card-body">
                <h5 className="card-title">{props.content.title}</h5>
                <p className="card-text">{props.content.description}</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-sm">Find out more!</button>
            </div>
        </div>

    </>)
}