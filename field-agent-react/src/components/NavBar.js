import { Link } from 'react-router-dom';

function NavBar() {
  return <header>
    <h1 className='text-bg-primary p-4'>Field Agents</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add an Agent</Link>
    </nav>
  </header>
}

export default NavBar;