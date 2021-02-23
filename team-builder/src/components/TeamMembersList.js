import React from "react"
import {AiOutlineEdit} from "react-icons/ai"

const TeamMembersList = (props) => {

    const {details, id} = props;

    // console.log(teamMembers)

    // const handleEdit = e => {
    //     debugger
    //     const {name} = e.target;
    //     console.log(name)
    // }

    return (
        <div style={
            {
                border: '1px solid black',
                padding: '2%'
            }
        }>
            <h2>
                <AiOutlineEdit />
                Team Member {id + 1}:</h2>
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