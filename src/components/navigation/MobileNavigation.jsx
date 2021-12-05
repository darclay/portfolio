import { Link } from 'react-router-dom';
import NavLinks from './NavLinks.jsx'
import {RiMenu5Line} from 'react-icons/ri'
import {AiFillCloseSquare} from 'react-icons/ai'
import { useState } from 'react'

const MobileNavigation = () => {
  
  const [ toggle, setToggle ] = useState(false);
  
  const openIcon = <RiMenu5Line 
                    className="Hamburger" 
                    size="40px" 
                    onClick={() => setToggle(!toggle)}/>

  const closeIcon = <AiFillCloseSquare 
                    className="Hamburger" 
                    size="40px" 
                    onClick={() => setToggle(!toggle)}/>

  return (
    <nav className="MobileNavigation">
      <Link to="/" style={{ textDecoration: 'none'}}><h3 className="mobTitle">David Barcaly Gurule</h3></Link>
      {toggle ? closeIcon : openIcon}
      {toggle ? <NavLinks/> : null}
    </nav>
  );
}
 
export default MobileNavigation;