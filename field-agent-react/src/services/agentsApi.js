const url = 'http://localhost:8080/api/agent';

export const findAll = async () => {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  } else {
    Promise.reject(['Something unexpected happened!']);
  }
};

export const findById = async (agentId) => {
    const response = await fetch(`${url}/${agentId}`);
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 404) {
      return ['Field Agent not found.'];
    } else {
      Promise.reject(['Something unexpected happened!']);
    }
  };

  export const add = async (agent) => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(agent)
    };

const response = await fetch(url, init);
if (response.status === 201 || response.status === 400) {
  return response.json();
} else {
  Promise.reject(['Something unexpected happened!']);
}
};

export const update = async (agent) => {
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(agent)
    };

    const response = await fetch(`${url}/${agent.agentId}`, init);
  if (response.status === 204) {
    return null;
  } else if (response.status === 400) {
    return response.json();
  } else if (response.status === 404) {
    return ['Agent not found.'];
  } else {
    Promise.reject(['Something unexpected happened!']);
  }
};

export const deleteById = async (id) => {
    const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
    if (response.status === 204) {
      return null;
    } else if (response.status === 404) {
      return ['Agent not found.'];
    } else {
      Promise.reject(['Something unexpected happened!']);
    }
  }

