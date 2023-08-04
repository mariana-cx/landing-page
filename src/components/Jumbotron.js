import React from "react";

export const Jumbotron = () => {
    return (<div className="jumbotron">
        <div className="col-2"></div>
        <div className="bg-secondary-subtle container col-8">
            <div className="row fs-1 ms-2 mb-1">A Warm Welcome!</div>
            <div className="row ms-2 mb-2 text-start align-self-center d-block">
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </div>
            <div className="button" type="button" class="d-flex btn btn-primary justify-content-start p-2 mb-5 ms-2">Call to action!
            </div>
            <div className="col-2"></div>
        </div>
    </div>
    )
}