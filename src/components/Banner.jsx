    // import React, { useEffect } from 'react';
    // import { Link, useLocation } from 'react-router-dom';


    // export default function Banner({ h1, h2, h3 }) {
    //     useEffect(() => {
    //         const banner = document.querySelector('.hero-banner')
    //         const handleScroll = () => {
    //             if(window.innerWidth >  992){
    //                 if (window.scrollY > 0 && window.scrollY < 500) {
    //                     banner.style.backgroundSize = `${100 + (window.scrollY/20)}%`
    //                 }
    //             }else{
    //                 if (window.scrollY > 0) {
    //                     banner.style.backgroundSize = `${150 + (window.scrollY/10)}%`
    //                 }
    //             }
    //         }

    //         window.addEventListener('scroll', handleScroll)
    //         return () => {
    //             window.removeEventListener('scroll', handleScroll)
    //         }
    //     }, [])
    //     const location = useLocation();
    //     const isContactPage = location.pathname === '/contact';

    //     return (
    //         <div className='hero-banner hero-2 mt-5' data-aos='fade'>
    //             <div className='container text-center green-text'>
    //                 <p className="bg-img-2 mb-5 mx-auto" data-aos='fade-up' data-aos-duration='400'>{h1}</p>
    //                 <h1 className={`secondary-header mb-3 ${isContactPage?'mb-5 pb-5':''}`} data-aos='fade-up' data-aos-duration='600'>{h2}</h1>
    //                 <p className='mb-0 secondary-text mb-3' data-aos='fade-up' data-aos-duration='700'>{h3}</p>
    //                 {/* {isContactPage ? null : (
    //                     <Link to={"/contact"} className='text-decoration-none'>
    //                         <button className='gold-btn green-btn m-5 mx-auto' data-aos='zoom-out' data-aos-duration='600'>
    //                             <span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i>
    //                         </button>
    //                     </Link>
    //                 )} */}
    //             </div>
    //         </div>
    //     );
    // }

    import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Banner() {
  useEffect(() => {
    const banner = document.querySelector('.hero-banner');
    const handleScroll = () => {
      if (window.innerWidth > 992) {
        if (window.scrollY > 0 && window.scrollY < 500) {
          banner.style.backgroundSize = `${100 + window.scrollY / 20}%`;
        }
      } else {
        if (window.scrollY > 0) {
          banner.style.backgroundSize = `${150 + window.scrollY / 10}%`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-banner hero-2 mt-5" data-aos="fade">
      <div className="bg-transparent text-dark-green p-1">
        <div className="container">
          <div className="row align-items-center g-5 py-5">
            <div className="col-md-4">
              <p className="bg-img-2" data-aos="fade-up">Industries</p>
              <h1 className="secondary-header" data-aos="fade-up">
                Transforming Industries to Become Smarter and Safer
              </h1>
              <p
                className="secondary-text"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                At V-Accel, We Tackle Some of the World's Biggest Challenges by
                Building Great Digital Products.
              </p>
            </div>
            <div className="col-md-8 text-green">
              <div className="row gy-3">
                {industriesList.map((industry, index) => (
                  <div
                    className="col-6 col-md-5 col-lg-3"
                    key={index}
                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    <div className="industries-card">
                      <i
                        className={`bi ${industry.icon} fs-3`}
                        style={{ color: 'green' }}
                      ></i>
                      <p className="mb-0 text-green">{industry.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const industriesList = [
  { name: 'Fintech', icon: 'bi-bank2' },
  { name: 'HealthCare', icon: 'bi-lungs-fill' },
  { name: 'Education', icon: 'bi-backpack3' },
  { name: 'Insurance', icon: 'bi-cash-coin' },
  { name: 'Restaurant', icon: 'bi-shop' },
  { name: 'Shopping', icon: 'bi-cart-plus' },
  { name: 'Manufacturing', icon: 'bi-building-fill-gear' },
  { name: 'Supply Chain', icon: 'bi-gear-wide-connected' },
  { name: 'Logistics', icon: 'bi-truck' },
  { name: 'Entertainment', icon: 'bi-dice-5' },
  { name: 'Real Estate', icon: 'bi-buildings' },
  { name: 'Social Networking', icon: 'bi-hand-thumbs-up' },
];

