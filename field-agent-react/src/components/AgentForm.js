import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const DEFAULT_AGENT = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  heightInInches: 0
};

function AgentForm() {
  const [agent, setAgent] = useState(DEFAULT_AGENT);

  const history = useHistory();

  const { id } = useParams();

  useEffect(
    () => {
      if (id) {
        fetch(`http://localhost:8080/api/agent/${id}`)
        .then(response => {
          if (response.status !== 200) {
            return Promise.reject("agent fetch failed")
          }
          return response.json();
        })
        .then(data => setAgent(data))
        .catch(console.log);
      }
    },

    [id]
  );

  const handleChange = (event) => {
    const updatedAgent = {...agent};
    updatedAgent[event.target.name] = event.target.value;
    setAgent(updatedAgent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedAgent = {...agent};

    if (id) {
      const init = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(updatedAgent)
      };
    
      fetch(`http://localhost:8080/api/agent/${id}`, init)
        .then(response => {
          if (response.status !== 204) {
            return Promise.reject("response is not 204 No Content");
          }
          return null;
        })
        .then(data => {
          history.push("/confirmation", { msg: "👍🏾" });
        })
        .catch(() => {
          history.push("/error", { msg: "👎🏾" });
        });
    } else {
      const init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(updatedAgent)
      };
    
      fetch("http://localhost:8080/api/agent", init)
        .then(response => {
          if (response.status !== 201) {
            return Promise.reject("response is not 200 OK");
          }
          return response.json();
        })
        .then(data => {
          history.push("/confirmation", { msg: "👍🏾" });
        })
        .catch(() => {
          history.push("/error", { msg: "👎🏾" });
        });  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{agent.agentId ? "Update An Agent" : "Add An Agent"}</h2>

      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          required
          value={agent.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="middleName">Middle Name: </label>
        <input
          type="text"
          id="middleName"
          required
          value={agent.middleName}
          name="middleName"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          required
          value={agent.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="dob">Date of Birth: </label>
        <input
          type="date"
          id="dob"
          required
          value={agent.dob}
          name="dob"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="heightInInches">Height: </label>
        <input
          type="number"
          id="heightInInches"
          min="36"
          max="96"
          required
          value={agent.heightInInches}
          name="heightInInches"
          onChange={handleChange}
        />
      </div>


      <div>
        <navupdate>
        <button type="submit">Save</button>
        <Link to="/">Cancel</Link>
        </navupdate>
      </div>
    </form>
  );
}

export default AgentForm;
