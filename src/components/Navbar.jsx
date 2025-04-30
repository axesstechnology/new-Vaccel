import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import logo from '../assets/images/logo/logo.png';
import '../assets/css/hamburgers/hamburgers.scss';
import { userContext } from '../store/Store';
import vlogo from '../assets/images/V Logo.png';

function Navbar() {
  const [fixed, setFixed] = useState(false);
  const [nav, setNav] = useState(false);
  const [value, setValue] = useContext(userContext);


  const handleOutsideClick = (event) => {
    const navbar = document.getElementById('navbarSupportedContent');
    const isClickInsideNavbar = navbar.contains(event.target);

    if (!isClickInsideNavbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      setNav(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100 && window.scrollY < 800) {
      setFixed('fixed-1');
    } else if (window.scrollY > 800) {
      setFixed('fixed-2');
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setNav(false);
  }, [navigation]);




  return (
    <div>
      {/* Upper Navigation */}
      <div className='d-flex py-3 py-lg-0 justify-content-between bg-white justify-content-lg-around align-items-center upper-nav border-bottom container-fluid flex-wrap' data-aos='fade-down' data-aos-duration='500'>
        {/* <div className='d-flex share order-2 order-lg-1 '>
          <Link to={'https://www.facebook.com/profile.php?id=61556380648787'} target='_blank'><i className="bi bi-facebook text-primary fs-6"></i></Link>
          <Link to={'https://www.instagram.com/axesstech/'} target='_blank'><i className="bi bi-instagram text-danger fs-6"></i></Link>
          <Link><i className="bi bi-whatsapp text-success fs-6"></i></Link>
        </div> */}
        {/* <NavLink to='/' className='d-none d-lg-flex justify-content-center col-12 col-lg-4  order-1 order-lg-2'>
          <p> Axess</p>
         <img style={{ width: '50px',height: '110px' }} src={vlogo} alt="" /> 
          <p>Technology</p>
        </NavLink>  */}

        {/* <NavLink 
  to='/' 
  className='d-none d-lg-flex align-items-center justify-content-center col-12 col-lg-4 order-1 order-lg-2'
>
  <div className="d-flex align-items-center" style={{ gap: '20px' }}>
    <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px',color:'#1f4051' }}>
      V
      <span 
      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500', margin: '0 10px' }}
    >
      -
    </span>
    Accel
    </p>
    <img 
      src={vlogo} 
      alt="Logo" 
      style={{ width: '80px', height: '110px', objectFit: 'contain' }} 
    />
    <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px',color:'#1f4051' }}>
      AI Dynamics
    </p>
  </div>
</NavLink> */}

        <div className="container-fluid px-4">
          <div className="row align-items-center">
            {/* Logo at top left */}
            <div className="col-6 col-lg-2 d-none d-lg-flex justify-content-start align-items-center">
              <Link to='/' className="navbar-brand">
                <img src={vlogo} alt="" style={{ width: '100px', height: '110px', objectFit: 'contain' }} />
              </Link>
              {/* <img 
    src={vlogo} 
    alt="Logo" 
    style={{ width: '100px', height: '110px', objectFit: 'contain' }} 
  /> */}

            </div>

            {/* Centered heading */}

            {/* <div className="col-12 col-lg-8 d-none d-lg-flex justify-content-center">
  <div className="d-flex align-items-center">
    <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px', color: '#1f4051' }}>
      V<span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>-</span>Accel AI Dynamics
    </p>
  </div>
</div> */}
<div className="col-lg-8 d-none d-lg-flex justify-content-center">
  <div className="d-flex flex-column align-items-center justify-content-center text-center">
    <p style={{ fontSize: '52px', fontWeight: '900', whiteSpace: 'nowrap', letterSpacing: '4px', color: '#1f4051' }}>
      V<span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>-</span>Accel
    </p>
    <p className="fs-2 mb-0 ">We Accelerate AI Dynamics</p>
  </div>
</div>
            {/* Empty column for spacing/alignment on larger screens */}
            <div className="col-lg-2 d-none d-lg-block"></div>
          </div>
        </div>

        {/* <div className='order-3 order-lg-3'> */}
        {/* <NavLink to={'/login'} className='gold-btn px-4'>
            <span className='d-block green-text-1'>Login</span>
          </NavLink> */}
        {/* </div> */}
      </div>

      {/* Main Navigation */}
      <div>
        <nav className={`navbar position-absolute w-100 navbar-expand-lg bg-body-tertiary p-0 position-relative z-3 ${fixed === 'fixed-1' ? 'fixed-1' : ''} ${fixed === 'fixed-2' ? 'fixed-1 fixed-2' : ''}`}>
          <div className="container-fluid">
            <div className="d-lg-none d-flex justify-content-between align-items-center w-100 py-2 align-items-end upper-nav">
              <Link to='/' className="navbar-brand col-1">
                <img src={vlogo} alt="" />
              </Link>
              <p className="secondary-text m-0 text-center" onClick={() => navigation("/")}>V-Accel</p>
              <button
                className={`navbar-toggler shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation" onClick={() => setNav(!nav)}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav align-items-center mx-auto mb-2 mb-lg-0" data-aos='fade-up'>
                <li className="nav-item">
                  <NavLink to={'/'} activeclassname="active" className="nav-link navhover" aria-current="page" >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about"} activeclassname="active" className="nav-link navhover" >
                    Team
                  </NavLink>
                </li>

                <li className="nav-item position-relative">
                  <NavLink  className="nav-link navhover" to={'/services'} onClick={() => setValue(true)}>
                    Services
                  </NavLink>
                  <div className="drop">
                    <div className='nav-item'>
                      <NavLink to={'/services'} activeclassname="active" className="nav-link navhover" aria-current="page" >All Services</NavLink>
                    </div>
                   <div className='nav-item'>
                      <NavLink to={'/development'} activeclassname="active" className="nav-link navhover" aria-current="page" > Custom Software Development</NavLink>
                    </div>
                    
                     <div className='nav-item'>
                      <NavLink to={'/testing'} activeclassname="active" className="nav-link navhover" aria-current="page" >SaaS Product Development</NavLink>
                    </div> 
                  
                    <div className='nav-item'>
                      <NavLink to={'/webdevelopment'} activeclassname="active" className="nav-link navhover" aria-current="page" >AI & ML Engineering</NavLink>
                    </div>
                    <div className='nav-item'>
                      <NavLink to={'/digitalmarketing'} activeclassname="active" className="nav-link navhover" aria-current="page" >DevOps & Cloud Engineering</NavLink>
                    </div>
                    <div className='nav-item'>
                      <NavLink to={'/micro-services'} activeclassname="active" className="nav-link navhover" aria-current="page" >Microservices Architecture & Engineering</NavLink>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink to={"/ourworks"} activeclassname="active" className="nav-link navhover" >
                    Our works
                  </NavLink>
                </li>

                {/* <li className="nav-item position-relative">
                  <Link className="nav-link navhover" >
                    Pricing
                  </Link>
                  <div className="drop pricing">  
                    <div className='nav-item'>
                      <Link to={'/development'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Software Development Pricing</Link>
                    </div>
                    <div className='nav-item'>
                      <Link to={'/testing'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Software Testing Pricing</Link>
                    </div>
                    <div className='nav-item'>
                      <Link to={'/webdevelopment'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Web Development Pricing</Link>
                    </div>
                    <div className='nav-item'>
                      <Link to={'/digitalmarketing'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Digital Marketing Pricing</Link>
                    </div>
                  </div>
                </li> */}
                <li className="nav-item">
                  <NavLink to={"/contact"} activeclassname="active" className="nav-link navhover" >
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                                    <NavLink to={"/collaborate"} activeclassname="active" className="nav-link" >
                                        Collaborate with us
                                    </NavLink>
                                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
