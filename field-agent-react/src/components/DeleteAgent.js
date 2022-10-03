import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteById, findById } from '../services/agentsApi';

function DeleteAgent() {
  
  const { id } = useParams();
  const [agent, setAgent] = useState({ firstName: '', lastName: '' });

  const history = useHistory();

  useEffect(() => {
    if (id) {
      findById(id)
        .then(data => setAgent(data));
    } 
  }, [id]);

  const handleDeleteClicked = () => {
    deleteById(id)
      .then(() => {
        history.push("/");
      })
      .catch(() => console.error("Something went wrong!"));
  };

  return <section className="agents">
    <h1>Delete the following agent?</h1>
    <ul>
      <li>Name: <span>{agent.firstName}</span></li>
      <li>Last Name: <span>{agent.lastName}</span></li>
    </ul>
    <div>
      <button className="btn btn-danger m-5" type="button" onClick={handleDeleteClicked}>Delete Agent</button>
      <Link to="/" className="btn btn-warning ml-2">Cancel</Link>
    </div> 
  </section>;
}

export default DeleteAgent;