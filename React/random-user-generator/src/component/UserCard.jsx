import React from "react";

const UserCard = (props) => {
    return (
        <div className="UserCard">
            <img src={props.d.picture.large} alt="User"/>
            <h3>{props.d.name.first}</h3>
            <p>{props.d.phone}</p>
            <p>{props.d.location.city}</p>
            <p>{props.d.email}</p>
        </div>
    )
}

export default UserCard