import './App.css';
import Form from './components/Form'
import TeamMembersList from './components/TeamMembersList'


function App() {
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form />
      <TeamMembersList />
    </div>
  );
}

export default App;
