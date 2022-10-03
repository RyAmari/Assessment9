import { useState, useEffect } from "react";
import { findAll } from "../services/agentsApi";
import Agent from "./Agent";

function AgentList() {

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    findAll()
      .then(setAgents);
  }, []);

  return <div className="agent-list">
    <section className="agents container-fluid" id="agents">
      <h1 className="allAgents">All Agents</h1>
      <div className="agent-list row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {agents.map(agent => <Agent key={agent.agentId} agent={agent} />)}
      </div>
    </section>
  </div>;
}

export default AgentList;