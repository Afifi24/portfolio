import React,{useState}  from'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
export default function Navbar() {
    const[close,setClose] = useState(false)
    const CloseOpen =()=>{
        setClose(!close)
    }
    const Close =()=>{
        setClose(false)
    }
  return (
    <>
    <Nav>
     <Link to='/' className='logo'>afifi</Link>
     <div className="menu-icon" onClick={CloseOpen}>
        <Link><i className={close?'fas fa-times':'fas fa-bars'} /></Link>
     </div>
      <ul className={close? 'nav-menu active': 'nav-menu'} >
          <li className='nav-item'><Link onClick={Close} to='/' className='nav-link'>About</Link></li>
          <li className='nav-item'><Link onClick={Close} to='/work' className='nav-link'>Work</Link></li>
          <li className='nav-item'><Link onClick={Close} to='/contact' className='nav-link'>Contact</Link></li>
      </ul>
    </Nav>
    </>
  )
}
// styled-components

const Nav = styled.div`
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0rem 1rem;
background-color: #111;
width: 100%;
position: fixed;
top: 0;
z-index: 5;

.logo{
    text-decoration: none;
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: bold;
    border: 2px solid black;
    padding: 4px;
    padding-bottom: 6px;
    border-radius: 50%;
    color: #fff;
    background: linear-gradient(to left,#acb6e5,#86fde8);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}
.menu-icon{
    display: none;
    
    z-index: 11;
    .fa-bars{
        color: #fff;
    }
    .fa-times{
        color: #fff;
    }
}
.nav-menu{
    display: flex;
    align-items: center;
   list-style: none;
   margin-right:2rem;
   font-family: 'Kulim Park', sans-serif;
   font-weight:bold;

}
.nav-item{
    margin-right:6rem;
}
.nav-link{
    text-decoration: none;
    color: #fff;
    background: linear-gradient(to left,#acb6e5,#86fde8);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}
.nav-link:hover{
    color: #00fff0;
}
/* meadia query */

@media(max-width:700px){
    .log{

    }
    .menu-icon{
        display: block;
        position: absolute;
        right: 2rem;
        font-size: 2rem;
    }
    .nav-menu{
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: -100%;
        background-color:#000 ;
        transition: all 0.5s ease;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 0;
        margin: 0;
        text-align: center;
        padding: 3rem 0rem;
        z-index: 10;
    }
    .nav-item{
        margin: 0;
    }
    .active{
        left: 0%;
    }
}
`