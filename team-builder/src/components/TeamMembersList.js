import React from "react"


const TeamMembersList = (props) => {

    const {details, id} = props;

    // console.log(teamMembers)

    return (
        <div className="team-members-list">
            <h2>Team Member {id + 1}:</h2>
            <p>
                <span>Name:</span><br />
                {details.username}
            </p>
            <p>
                <span>E-mail:</span><br />
                {details.email}
            </p>
            <p>
                <span>Role:</span><br />
                {details.role}
            </p>
        </div>
    )
}

export default TeamMembersList;