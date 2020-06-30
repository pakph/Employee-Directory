import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card" id={props.id}>
            <div className="img-container">
                <img alt={props.name} src={props.img} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Salary:</strong> ${props.salary}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeCard;