import React from "react"

const Form = () => {
    return (
        <div>
            <h2>Add A Team Member</h2>
            <form>
                <label>
                Name:
                    <input type="text" name="name" />
                </label><br />
                <label>
                Email:
                <input type="email" name="email" />
                </label><br />
                <select>
                    <option>-- Select Role --</option>
                    <option>Back-end Engineer</option>
                    <option>Front-end Engineer</option>
                    <option>Designer</option>
                </select>
            </form>
        </div>
    )
}

export default Form;