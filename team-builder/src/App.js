import './App.css';
import React, {useState} from "react"
import Form from './components/Form'
import TeamMembersList from './components/TeamMembersList'

const initialFormValues = {
  name: '',
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
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
      return;
    }
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form />
      <TeamMembersList />
    </div>
  );
}

export default App;
