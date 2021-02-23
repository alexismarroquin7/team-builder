import React from "react"


const TeamMembersList = (props) => {

    const {details} = props;

    // console.log(teamMembers)

    return (
        <div>
            <h2>{details.username}</h2>
            <h2>{details.email}</h2>
            <h2>{details.role}</h2>
        </div>
    )
}

export default TeamMembersList;