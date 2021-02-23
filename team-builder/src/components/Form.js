import React from "react"

const Form = (props) => {

    const {values, update, submit} = props;

    const handleChange = e => {
        const {name, value} = e.target;
        update(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        submit()
    }

    return (
        <div>
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
                <button 
                    type="submit"
                    disabled={!values.username || !values.email || !values.role}
                >Submit</button>
            </form>
        </div>
    )
}

export default Form;