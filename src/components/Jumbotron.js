import React from "react";

export const Jumbotron = () => {
    return (<div className="jumbotron">
        <div className="col-2"></div>
        <div className="bg-secondary-subtle container col-8">
            <div className="row fs-1 ms-2 mb-1">A Warm Welcome!</div>
            <div className="row ms-2 mb-2 text-start align-self-center d-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt adit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
            </div>
            <div className="d-inline p-2 d-flex flex-row">
                <button className="btn btn-primary p-2 mb-5 ms-1">Call to action!</button>
            </div>
            <div className="col-2"></div>
        </div>
    </div>
    )
}