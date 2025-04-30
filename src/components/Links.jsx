import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

export default function Links() {

  const [hover, setHover] = useState('');




  function setcolorfunctoin(color) {
    if (color == 'whatsappcolor') {
      setHover('whatsappcolor');
    } else if (color == 'phone') {
      setHover('phone');
    } else if (color == 'mail') {
      setHover('mail');
    }
  }

  // function setcolorfunctoin(iconName) {
  //   setHover(iconName); // iconName: 'whatsapp', 'phone', 'mail'
  // }

  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if the scroll position is greater than 50
      if (scrollPosition > 100) {
        // Add a class when scroll is greater than 50
        setScrollClass('active');
      } else {
        // Remove the class when scroll is 50 or less
        setScrollClass('');
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${scrollClass} links-container row align-items-center text-white ${hover}`}>
      <div className="col-4">
        <a href='https://wa.me/+918754453361' target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={() => setcolorfunctoin('whatsappcolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div
              className={`icons whatsapp ${hover === 'whatsappcolor' ? 'highlight-icon' : ''}`}
            >
              <i
                className="bi bi-whatsapp"
                style={{ color: hover === 'whatsappcolor' ? 'white' : '#25D366' }}
              ></i>
            </div>

          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>Whatsapp</p>
        </a>
      </div>
      <div className="col-4">
        <a href="tel:+918754453361" target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={() => setcolorfunctoin('phone')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div
              className={`icons phone ${hover === 'phone' ? 'highlight-icon' : ''}`}
            >
              <i
                className="bi bi-phone"
                style={{ color: hover === 'phone' ? 'white' : '#007bff' }}
              ></i>
            </div>

          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>Phone</p>
        </a>
      </div>
      <div className="col-4">
        {/* <a href={`mailto:info@v-accel.ai`} target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={() => setcolorfunctoin('white')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons mail">
              <i className="bi bi-envelope"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>Mail</p>
        </a> */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@v-accel.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={() => setcolorfunctoin('mail')}
          onMouseLeave={() => setHover('')}
        >
          <div className="position-relative">
            <div
              className={`icons mail ${hover === 'mail' ? 'highlight-icon' : ''}`}
            >
              <i
                className="bi bi-envelope"
                style={{ color: hover === 'mail' ? 'white' : '#dc3545' }}
              ></i>
            </div>
          </div>
          <p className="mb-0 ms-5 d-none d-lg-block px-2">Mail</p>
        </a>

      </div>
      {/* <div className="col-3">
        <a href='https://www.facebook.com/profile.php?id=61556380648787' target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={(color) => setcolorfunctoin('facebookcolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons facebook">
              <i className="bi bi-facebook"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>V-Accel</p>
        </a>
      </div> */}
      {/* <div className="col-3">
        <a href='https://www.instagram.com/axesstech/' target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={(color) => setcolorfunctoin('instagramcolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons instagram">
              <i className="bi bi-instagram"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>V-Accel</p>
        </a>
      </div> */}
      {/* <div className="col-3">
        <a href='https://www.linkedin.com/company/axess-technology-official' target='_blank' className="d-flex justify-content-center text-decoration-none text-white"
          onMouseEnter={(color) => setcolorfunctoin('linkedincolor')}
          onMouseLeave={() => setHover('')}>
          <div className="position-relative">
            <div className="icons linkedin">
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
          <p className='mb-0 ms-5 d-none d-lg-block px-2'>V-Accel-official</p>
        </a>
      </div> */ }
    </div>
  )
}
