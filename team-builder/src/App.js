import './App.css';
import React, {useState} from "react"
import Form from './components/Form'
import TeamMembersList from './components/TeamMembersList'

const initialFormValues = {
  username: '',
  email: '',
  role: ''
}

function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    if(!newTeamMember.username || !newTeamMember.email || !newTeamMember.role){
      return;
    }
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      <TeamMembersList teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
