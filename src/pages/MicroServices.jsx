import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Technologies from "../components/Technologies";
import Software from "../assets/images/Our-Expertise.jpg";
import Process from "../assets/images/imagine.png";

import Why from "../assets/images/Why-Choose.jpg";
import bubble from "../assets/images/bubble.webp";
import success from "../assets/images/success.png";
import Footer from "../components/Footer";
import "../assets/css/pricing.scss";
import { Link, useLocation } from 'react-router-dom';
import footer from "../assets/images/footer.svg";
import frompng from "../assets/images/fromlogo.jpg";
// import contact  from '../assets/images/contact.jpg'
// import "../assets/css/index.scss";
import Techsection from "../components/Techsection";
import whychooseimg from "../assets/images/whychoose-img.png";
import webdev from "../assets/images/web-dev2.png";
import kvrprofile from '../assets/images/kvr profile.png'
import imagine1 from '../assets/images/imagine1.png'
import Carousel from "../components/Carousel";
import Profiledub from '../assets/images/testing/dub-img.png'
import Price from "../components/Price";


const Microservices = () => {
  useEffect(() => {
          const banner = document.querySelector('.hero-banner')
          const handleScroll = () => {
              if(window.innerWidth > 992){
                  if (window.scrollY > 0 && window.scrollY < 500) {
                      banner.style.backgroundSize = `${100 + (window.scrollY/20)}%`
                  }
              }else{
                  if (window.scrollY > 0) {
                      banner.style.backgroundSize = `${150 + (window.scrollY/10)}%`
                  }
              }
          }
          
          window.addEventListener('scroll', handleScroll)
          return () => {
              window.removeEventListener('scroll', handleScroll)
          }
      }, [])
      const location = useLocation();
      const isContactPage = location.pathname === '/contact';
      
    // Technology expertise data
      const techCards = [
        
          {
              title: "Service Development",
              technologies: ["Node.js (Express, NestJS)", "GoLang"]
          },
          {
              title: "API Gateway",
              technologies: ["Kong Gateway", "AWS API Gateway", "Nginx"]
          },
          {
              title: "Service Mesh",
              technologies: ["Istio", "Linkerd"]
          },
          {
              title: "Messaging/ Event Bus",
              technologies: ["Kafka", "RabbitMQ"]
          },
          {
              title: "Databases per Service",
              technologies: ["MongoDB", "PostgreSQL", "DynamoDB"]
          },
          {
              title: "Monitoring/ Tracing",
              technologies: ["Zipkin", "Jaeger"]
          },
          {
              title: "Container Orchestration",
              technologies: ["Kubernetes (EKS, AKS)"]
          },
          {
              title: "Resilience Patterns",
              technologies: ["Netflix OSS (Hystrix)", "Istio"]
          },
          {
              title: "API Security",
              technologies: ["OAuth2", "mTLS", "OpenID Connect"]
          }
      ];
  
  return (
    <div className="webdev">
      <Navbar />
      {/* <Banner
        h1="Web Development"
        h2=" Crafting Websites that Captivate and Convert"
        h3=""
      /> */}
      <div className='hero-banner hero-2 mt-5' data-aos='fade'>
        
        <div className='container text-center green-text'>
            <p className="bg-img-2 mb-3 mx-auto" data-aos='fade-up' data-aos-duration='400'>Microservices Architecture & Engineering</p>
            <h1 className={`secondary-header mb-3 ${isContactPage?'mb-5 pb-5':''}`} data-aos='fade-up' data-aos-duration='600'>Crafting Websites that Captivate and Convert</h1> 
            <div className="row mt-5" data-aos="fade-up" data-aos-duration="800">
  {/* <div 
    className="d-flex flex-wrap justify-content-center mb-5" 
    style={{ columnGap: '2%', rowGap: '30px' }} // spacing between cards
  >
    {techCards.map((card, index) => (
      <React.Fragment key={index}>
        <div 
          style={{ width: '18%' }} // allows 5 cards in first row with gaps
          data-aos="fade-up" 
          data-aos-duration={600 + (index * 50)} 
          data-aos-easing="ease-in-back"
        >
          <div className="card boxshadow small-card text-center h-100">
            <div className="py-3 secondary-text">
              <p className="fw-bold">{card.title}</p>
              {card.technologies.map((tech, i) => (
                <p key={i} className="mb-1">{tech}</p>
              ))}
            </div>
          </div>
        </div>
        {index === 4 && <div className="w-100" />}
      </React.Fragment>
    ))}
  </div>
</div> */}
                 <div className="row mt-5 mb-4" data-aos="fade-up" data-aos-duration="800">
  <div
    className="d-flex flex-wrap justify-content-center"
    style={{
      gap: '16px',
    }}
  >
    {techCards.map((card, index) => (
      <div
        key={index}
        style={{
          flex: '1 1 calc((100% - 8 * 16px) / 9)', // 9 per row with spacing
          minWidth: '100px',
          maxWidth: '140px',
          boxSizing: 'border-box',
        }}
        data-aos="fade-up"
        data-aos-duration={600 + index * 50}
        data-aos-easing="ease-in-back"
      >
        <div className="card boxshadow small-card text-center h-100">
          <div className="py-3 secondary-text">
            <p className="fw-bold">{card.title}</p>
            {card.technologies.map((tech, i) => (
              <p key={i} className="mb-1">{tech}</p>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>    
        </div>
    </div>

     

      <section className="bg-green-1 pb-5 mt-1">

        <h3 className="secondary-header mx-auto text-center text-white pt-5">
          {" "}
          Get a free website audit: Identify areas for improvement and unlock your website's full potential.
        </h3>
        <p className="col-md-8 primary-text mx-auto text-center text-white py-3">
          Browse our portfolio: See examples of the stunning websites we've created for our clients.

        </p>

        <Link className="text-decoration-none" to={"/ourworks"}>
          <button
            className="gold-btn mx-auto"
          >
            <span className="d-block">See Examples</span>{" "}
            <i className="bi bi-arrow-right"></i>
          </button></Link>
      </section>

      <Techsection />

      {/* <section className='pricing mt-5' id="pricing-section">
        <h1 className='primary-header text-center'>Unlock Our New Features</h1>
        <div className="container pricing-table">
          <div className="pricing-card ">
            <div className='shadow'>
              <h3 className="pricing-card-header">Basic</h3>
              <div className="price text-center"><sup>$</sup>15<span>/MO</span></div>
              <ul>
                <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
                <li><strong>Hosting - 1</strong> Year FREE</li>
                <li><strong>Single 1 </strong> Page Website</li>
                <li><strong>SSL</strong> Certificate</li>
                <li><strong>WhatsApp </strong> Chat</li>
                <li><strong>Social </strong> Media Integration</li>
                <li><strong>Static </strong> Website</li>
                <li><strong>Premade  </strong> Website</li>
                <li><strong>3 Month FREE </strong> Tech Support</li>
              </ul>
            </div>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Pro</h3>
            <div className="price text-center"><sup>$</sup>30<span>/MO</span></div>
            <ul>
              <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
              <li><strong>Hosting - 1</strong> Year FREE</li>
              <li><strong>4 to 6</strong> Pages</li>
              <li><strong>WhatsApp</strong> Chat</li>
              <li><strong>SSL </strong> Certificate</li>
              <li><strong>Full Source </strong> Code</li>
              <li><strong>5 Email – 5GB </strong> Quota Each</li>
              <li><strong>Premade  </strong> Website</li>
              <li><strong>3 Month FREE </strong> Tech Support</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Premium</h3>
            <div className="price text-center"><sup>$</sup>50<span>/MO</span></div>
            <ul>
              <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
              <li><strong>Hosting - 1</strong> Year FREE</li>
              <li><strong>4 to 6</strong> Pages</li>
              <li><strong>WhatsApp</strong> Chat</li>
              <li><strong>SSL </strong> Certificate</li>
              <li><strong>Full Source </strong> Code</li>
              <li><strong>5 Email – 5GB </strong> Quota Each</li>
              <li><strong>Premade  </strong> Website</li>
              <li><strong>3 Month FREE </strong> Tech Support</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Elite</h3>
            <div className="price text-center"><sup>$</sup>80<span>/MO</span></div>
            <ul>
              <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
              <li><strong>Hosting - 1</strong> Year FREE</li>
              <li><strong>4 to 6</strong> Pages</li>
              <li><strong>WhatsApp</strong> Chat</li>
              <li><strong>SSL </strong> Certificate</li>
              <li><strong>Full Source </strong> Code</li>
              <li><strong>5 Email – 5GB </strong> Quota Each</li>
              <li><strong>Premade  </strong> Website</li>
              <li><strong>3 Month FREE </strong> Tech Support</li>
            </ul>
          </div>
        </div>
        <div className="justify-content-center d-flex">
          <a href="/contact" className="order-btn">Order Now</a>
        </div>
      </section > */}
      <Price/>

      {/* Testimonal section */}
      <div>
        <section className='nav-banner testimonal' id="testimonial">
          <div>
            <div
              className="elementor-widget-container"
              style={{ margin: "2rem" }}>
              <div
                className="section-title text-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <h3 className='bg-img-1 mx-auto'>Testimonial</h3>

                <span
                  className="subtitle sub-title text-light heading5"
                  style={{ fontFamily: '"Montserrat", sans-serif' }} data-aos="fade-right" data-aos-duration="800"
                >
                  What happy clients say about us ?
                </span>
              </div>
            </div>
            <div className="">
              <div className="carousel ">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-inner container">
                    <div className="carousel-item active" data-bs-interval="3000">
                      <div className="row p-3">
                        <div className="col-md-4 mb-5">

                          <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                            <div>
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3' >
                              <h4 className='heading9 fw-bold fs-5'> Priya Desai</h4>
                              <p className='heading5'>Owner</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description " >
                              <div className="title-area">
                                <div className="title-info">
                                  <p>Modern and Engaging</p>
                                  <h3 className="title heading9">The Craftful Boutique</h3>
                                  <span className="date"> </span>
                                </div>

                                <div className="rating">
                                  <ul className="p-0 mx-auto my-0">
                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="my-3 border"></div>
                              <div className="seperator"></div>
                              <p className="description heading5">"My old website was outdated and didn't reflect our brand's personality. V-Accel completely transformed it! The design is modern, engaging, and truly captures our essence. Plus, it's user-friendly and mobile-responsive, which has boosted our online traffic and conversions significantly. Thank you, V-Accel!"{" "}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <div className="row p-3">
                        <div className="col-md-4 mb-5">
                          <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                            <div>
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3'>
                              <h4 className='heading9 fw-bold fs-5'>Rahul Sharma</h4>
                              <p className='heading5'>Head of Marketing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description ">
                              <div className="title-area">
                                <div className="title-info">
                                  <p>Increased Leads and Sales</p>
                                  <h3 className="title heading9">Ecom Solutions</h3>
                                  <span className="date"> </span>
                                </div>

                                <div className="rating">
                                  <ul className="p-0 mx-auto my-0">
                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="my-3 border"></div>
                              <div className="seperator"></div>
                              <p className="description heading5">"We needed a website that not only looked good but also generated leads and sales.V-Accel delivered! Their SEO expertise and conversion-focused design have increased our website traffic by 30% and leads by 25%. They even helped us set up automated marketing workflows, streamlining our sales process. We're thrilled with the results!"{" "}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <div className="row p-3">
                        <div className="col-md-4 mb-5">
                          <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                            <div>
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3'>
                              <h4 className='heading9 fw-bold fs-5'>Vijay Patel</h4>
                              <p className='heading5'>Owner</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description ">
                              <div className="title-area">
                                <div className="title-info">
                                  <p>Accessible and Easy to Manage</p>
                                  <h3 className="title heading9">Green Groceries</h3>
                                  <span className="date"> </span>
                                </div>

                                <div className="rating">
                                  <ul className="p-0 mx-auto my-0">
                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="my-3 border"></div>
                              <div className="seperator"></div>
                              <p className="description heading5">"As a small business owner, I needed a website that was easy to manage and update myself.V-Accel delivered a user-friendly CMS that allows me to make changes and add content effortlessly. They also ensured the website is accessible to everyone, which is important to our values. We're grateful for their expertise and commitment to inclusivity."{" "}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <div className="row p-3">
                        <div className="col-md-4 mb-5">
                          <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                            <div>
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3'>
                              <h4 className='heading9 fw-bold fs-5'>Manju Iyer</h4>
                              <p className='heading5'>Founder</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description ">
                              <div className="title-area">
                                <div className="title-info">
                                  <p>Personalized and Collaborative</p>
                                  <h3 className="title heading9">Mindful Yoga Studio</h3>
                                  <span className="date"> </span>
                                </div>

                                <div className="rating">
                                  <ul className="p-0 mx-auto my-0">
                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>

                                    <li className="has-rating list-inline-item">
                                      <i className="star-icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-star-fill"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                      </i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="my-3 border"></div>
                              <div className="seperator"></div>
                              <p className="description heading5">"Working with V-Accel was a breeze. They listened carefully to our needs and preferences, even incorporating personal touches that made the website feel truly unique to our brand. They were also patient and collaborative throughout the process, addressing our questions and concerns promptly. We highly recommend them!"{" "}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Microservices;
