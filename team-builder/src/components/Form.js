import React from "react"

const Form = (props) => {

    const {values, update, submit} = props;

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(`name: ${name} || value: ${value}`)
        update(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        submit()
    }

    return (
        <div>
            {/* <h2>Add A Team Member</h2> */}
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                    <input 
                        type="text"
                        name="username"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.username}
                    />
                </label><br />
                <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    autoComplete="off"
                    onChange={handleChange}
                    value={values.email}
                />
                </label><br />
                <select 
                    value={values.role} name="role" onChange={handleChange}>
                    <option value=''>-- Select Role --</option>
                    <option value='BACK_END_ENGINEER'>Back-end Engineer</option>
                    <option value='FRONT_END_ENGINEER'>Front-end Engineer</option>
                    <option value='DESIGNER'>Designer</option>
                </select><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;