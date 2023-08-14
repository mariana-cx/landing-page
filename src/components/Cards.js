import React from "react";

export const Cards = (props) => {

    return (<>
        <div className={`card border rounded-top ${props.isFirst ? "" : "ms-2"}`}>
            <img src="https://www.edumilestones.com/career-library/images/programming.png" className="card-img-top border img-fluid rounded-top" style={{ width: '300px', height: '150px' }} alt="Card 1" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-sm">Find out more!</button>
            </div>
        </div>
        {/* <div className="card ms-2 border rounded-top">
            <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/21182224/software-engineering.jpg" className="card-img-top img-fluid border rounded-top" style={{ width: '300px', height: '150px' }} alt="Card 2" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-sm">Find out more!</button>
            </div>
        </div>
        <div className="card ms-2 border rounded-top">
            <img src="https://img.freepik.com/premium-vector/programmer-work-laptop-computer-website-code-program-concept_133260-5402.jpg" className="card-img-top img-fluid border rounded-top" style={{ width: '300px', height: '150px' }} alt="Card 3" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-sm">Find out more!</button>
            </div>
        </div>
        <div className="card ms-2 border rounded-top">
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg" className="card-img-top img-fluid border rounded-top" style={{ width: '300px', height: '150px' }} alt="Card 4" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-sm">Find out more!</button>
            </div>
        </div> */}
    </>)
}