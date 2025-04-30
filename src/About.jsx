import React from "react";
import "../src/assets/css/About.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
// import AboutImage from '../src/assets/images/About2.jpg';
import success from "../src/assets/images/about/success.png";
import whyus2 from '../src/assets/images/about/whyus2.png'
// import rightway from '../src/assets/images/about/rightway.jpg'
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import md from "../src/assets/images/md/venkatesan-ceo.jpg";
import yourNewImage from '../src/assets/images/for-about.png';
import Links from "./components/Links";

function About() {
  return (
    <div>
      <Navbar />
      {/* <Banner
        h1={"About Us"}
        h2={"Axess Technology: Weaving Digital Successes for 8 Years"}
      /> */}

<div className='hero-banner hero-2 mt-5 ' data-aos='fade'>
                 <div className='container text-center green-text'>
                     <p className="bg-img-2 mb-3 mx-auto" data-aos='fade-up' data-aos-duration='400'>Team</p>
                     <h1 className={`secondary-header mb-5`} data-aos='fade-up' data-aos-duration='600'>Saas Buiders | AI Inovators | Cloud and Devops Experts</h1>
                     {/* <p className='mb-0 secondary-text mb-3' data-aos='fade-up' data-aos-duration='700'>{h3}</p> */}
                         {/* <Link to={"/contact"} className='text-decoration-none'>
                             <button className='gold-btn green-btn m-5 mx-auto' data-aos='zoom-out' data-aos-duration='600'>s
                                 <span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i>
                             </button>
                         </Link> */}
                 </div>
             </div>

      {/* <div className="">
        <div className="row">
          <div className="col-md-5 bg-axess-gold-2 d-none d-md-block"  data-aos="fade-right" data-aos-duration="600">
            <div className="container">
              <div className="col-lg-6 mx-auto pt-5">
              <img src={whyus2} className="" alt="whyus2" />
              </div>
            </div>
          </div>
          <div className="col-md-7 bg-green-1"  data-aos="fade-left" data-aos-duration="600">
            <div className="container d-flex flex-column align-items-center justify-content-center h-100 py-5">
              <p className="bg-img-2 mx-auto"> Why Us</p>
              <p className="secondary-text text-white">Axess isn't just a tech company, it's your digital ecosystem architect. We weave the code that empowers your business, test the limits to ensure flawless experiences, craft websites that captivate and convert, and ignite your online presence with data-driven marketing magic. With 8 years of experience and a passionate team, we don't just deliver services, we build long-term partnerships, tailoring solutions that unlock your digital potential across software development, testing, website development, and digital marketing. Let's write your digital success story together.</p>
            </div>
          </div>
        </div>
      </div> */}

<div className="mt-4">
  <div className="row bg-green-1" style={{ minHeight: '400px' }}>
    
    {/* Left side - Heading */}
    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-right" data-aos-duration="600">
  <h1 className="fw-bold mb-3 text-white" style={{ fontSize: '80px' }}>Why V-Accel?</h1>
  
  <div style={{ maxWidth: '500px' }}>
    <p style={{ color: 'white', fontSize: '30px', marginBottom: '5px' }}>
      From Concept to Reality —
    </p>
    <p style={{ color: 'white', fontSize: '23px' }}>
      Empowering Ideas with AI & Accelerating Success
    </p>
  </div>
</div>



    {/* Right side - Image */}
    <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-left" data-aos-duration="600">
      <img 
        src={yourNewImage} 
        alt="centeredImage" 
        style={{ width: '300px', height: '400px', objectFit: 'cover' }} 
      />
    </div>

  </div>
</div>



      <div className="container">
        <div className=" pt-3 row justify-content-end">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="p-3 mx-2" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="mt-5 text-center bg-img-1 mx-auto">About the Founder & CEO</h1>
              
              <div class="rounded-img d-lg-none">
                <img
                  src={
                    md
                  }
                  alt="Venkatesanj"
                />
              </div>
              <p className="mt-3 ceo-content">
              Mr. Venkatesan J — Full-Stack Engineer | AI Specialist | Visionary Technologist
With over 8+ years of hands-on experience in building high-performance applications and intelligent systems, Venkatesan leads V-Accel AI Dynamics with a unique blend of deep technical expertise and strategic vision.
Holding a B.E. in Mechanical Engineering, a PGDM in Operations & Supply Chain, a PG Diploma in AI/ML, and an M.E. in Artificial Intelligence & Data Science, he bridges the gap between engineering, enterprise, and emerging technologies.
As a Full-Stack Software Engineer (MERN) and a QA Automation Specialist, he has architected, tested, and scaled SaaS platforms, microservices ecosystems, and AI-powered products across industries.

              </p>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2 d-none d-lg-block">
            <div className="aboutusimg position-relative" data-aos="fade-left" data-aos-duration="1000">
              <div class="blur-img aboutMdimg d-none d-lg-block">
                <img
                  src={md
                  }
                  alt="Venkatesanj"
                />
              </div>
              <div class="rounded-img">
                <img
                  src={
                    md
                  }
                  alt="Venkatesanj"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className='aboutme'>
           <div className='container mt-5'>
                <div >
                    <h3 className=''>Let's talk about your digital aspirations. Whether you're a budding startup or a seasoned enterprise, Axess has the tools and vision to help you soar.</h3>
                    <div className="row dots text-center mt-5">
                        <div className="col-lg-4 aboutcase">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cards1 ">
                                        <p className='text-center'>Software Development: We craft bespoke applications that empower your business processes, enhance efficiency, and streamline operations.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <div className="cards1">
                                        <p className='text-center'>Software Testing: We leave no stone unturned, ensuring your software is bug-free, reliable, and delivers a seamless user experience.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6 ">
                                    <div className="cards1">
                                        <p className='text-center'>Website Development: We create stunning, user-friendly websites that are the perfect digital canvas for your brand story.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <div className="cards1">
                                        <p className='text-center'>Digital Marketing: We orchestrate data-driven campaigns that ignite engagement, drive conversions, and build lasting customer relationships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='mt-5'>
                                <img src={success} alt="success" className="about-img" style={{ width: '300px', height: '300px' }} />
                            </div>
                           
                        </div>
                        <div className="col-lg-4 mt-5">
                                <div className="cards1">
                                    <p className='text-center mt-5 py-5 fs-5'><q>Eight years of experience, countless success stories, and a burning passion for digital excellence - that's Axess Technology.</q></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           </div> */}
      <div className="container mt-5">
        <div>
          <h5 className="secondary-header text-center py-5" data-aos="fade-up" data-aos-duration="1000">
          At V-Accel, he’s not just a founder — he's the lead problem-solver, code architect, and mentor behind every successful delivery. 
          </h5>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 " data-aos="fade-right" data-aos-duration="1000">
            <div className="d-flex justify-content-center align-items-center">
              <img src={success} alt="success" className="img-fluid w-75" />
            </div>
          </div>
          <div className="col-md-6 pt-4" data-aos="fade-left" data-aos-duration="1000">
            <div className="mt-3">
              <h6 className="secondary-header">
              Today, he champions innovation in:
              </h6>
            </div>
            <div className="aboutpoints mt-3 pt-3">
              <ul>
                <li>
                  <strong> Custom Software Development & SaaS Engineering:</strong> We craft bespoke
                  applications that empower your business processes, enhance
                  efficiency, and streamline operations.
                </li>
                <li className="mt-4 pt-2">
                  <strong>AI/ML Solutions (LLMs, Automation, Vector DBs):
                  </strong> We leave no stone unturned,
                  ensuring your software is bug-free, reliable, and delivers a
                  seamless user experience.
                </li>
                <li className="mt-4 pt-2">
                  <strong>Software Testing (Manual + Automation + API):</strong> We create stunning,
                  user-friendly websites that are the perfect digital canvas for
                  your brand story.
                </li>
                <li className="mt-4 pt-2">
                  <strong>DevOps, CI/CD, Cloud-native Deployment:</strong> We orchestrate data-driven
                  campaigns that ignite engagement, drive conversions, and build
                  lasting customer relationships.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-green-1 py-5 mt-5">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="secondary-header mx-auto text-center text-white mb-2">
            <q>
            Let's talk about your digital aspirations. Whether you're a budding
            startup or a seasoned enterprise, V-Accel has the tools and vision to
            help you soar.
            </q>
          </h3>
          <p className="col-md-8 fs-5 mx-auto text-center text-white mt-4">
            Ready to weave your digital success story? Let's connect!{" "}
          </p>

        </div>

        <div className="row  py-3" data-aos="fade-up" data-aos-duration="600">
          {/* <div className="col-md-6 pt-2 d-flex justify-content-center ">
            <div className="text-center">
              <p className="secondary-text text-white"> Follow us on social media for digital insights and inspiration.</p>
              <div className=" d-flex justify-content-center align-items-center">
                <Link to={'https://www.facebook.com/profile.php?id=61556380648787'} target="_blank">
                  <i className="bi bi-facebook text-primary fs-4 mx-3"></i>
                </Link>
                <Link to={'https://www.instagram.com/axesstech/'} target="_blank">
                  <i className="bi bi-instagram text-danger fs-4 mx-3"></i>
                </Link>
                <Link>
                  <i className="bi bi-whatsapp text-success fs-4 mx-3"></i>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="py-2 text-center">
            <p className="secondary-text text-white">
              Schedule a free consultation to discuss your unique needs.{" "}
            </p>
            <Link to={"/contact"} className="text-decoration-none">
              <button
                className="gold-btn mx-auto"
                data-aos="zoom-out"
                data-aos-duration="300"
              >
                <span className="d-block">Connect with us</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </button>
            </Link>

          </div>

        </div>



      </section>
      <Footer />
       <Links/>
    </div>
  );
}

export default About;
