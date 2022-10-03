import { Link } from "react-router-dom";

function DeleteAgent({ agent }) {
  return (
    <div>
          <p> First Name: {agent.firstName}</p>
          <p> Middle Name: {agent.middleName}
          </p>
          <p> Last Name: {agent.lastName}</p>
          <p> Date of Birth:
            <time dateTime={agent.dob}>{agent.dob}</time>
          </p>
          <p>Height: {agent.heightInInches}
          </p>
      <footer>
      <div className="card-footer">
        <Link to={`/edit/${agent.agentId}`} className="btn btn-primary m-3">Edit</Link>
        <Link to={`/delete/${agent.agentId}`} className="btn btn-danger m-3">Delete</Link>
      </div>
      </footer>
    </div>
  );
}

export default DeleteAgent;