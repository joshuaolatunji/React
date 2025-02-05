import{Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <div className='navbar'>
        <span>Logo</span>
          <ul className="navlinks">
            <Link to="/home" >
            <li className="navlink">Home</li>
            </Link>
            <Link to="/about" >
            <li className="navlink">About</li>
            </Link> 
          </ul>    
        </div>
    );
  }
      