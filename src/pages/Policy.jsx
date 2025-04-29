import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
function Policy() {

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
  return (
    <>
      <section >
        <Navbar />
        {/* <Banner
          h1="Privacy Policy"
          h2="Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meaning as in our Terms and Conditions."
          h3="Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy Policy constitute your agreement with us (“Agreement”)"
        /> */}
        <div className='hero-banner hero-2 mt-5' data-aos='fade'>
        
        <div className='container text-center green-text'>
            <p className="bg-img-2 mb-5 mx-auto" data-aos='fade-up' data-aos-duration='400'>Privacy Policy</p>
            {/* <h1 className={`secondary-header mb-3 ${isContactPage?'mb-5 pb-5':''}`} data-aos='fade-up' data-aos-duration='600'>V-Accel Digital Marketing: Ignite Your Brand and Dominate the Digital Landscape.</h1> */}
            <p className='mb-0 secondary-text mb-3' data-aos='fade-up' data-aos-duration='700'>At V-Accel AI Dynamics Private Limited (referred to as V-Accel), we value your privacy. This Privacy Policy describes the types of personal information we collect and how we use, store, and protect it. By using our services, accessing our products, or visiting our website, you agree to the terms outlined in this policy.</p>
           
         </div>
            
          
        </div>
   
<div className=" bg-green-1 ">
        <div className="container mt-5">
          <p className="secondary-header text-light pt-4">Welcome to  V-Accel.</p>
          <div className="row justify-content-center bg-green-1 text-light">
            <div className="col-md-10">
              <h4 className="gold-text-2 mt-3">1. Information We Collect
              </h4>
              <p className="secondary-text">
              We collect the following types of personal information when you interact with our website or use our products and services:
              </p>
              <ul>
                <li><b>Personal Identification Information:</b> Name, email address, phone number, company name, job title, and other details you provide when submitting inquiries, signing up for services, or using our products.</li>
                <li><b>Technical Information:</b>  IP address, browser type, operating system, device information, and other technical data to improve the functionality of our website and services.</li>
                <li><b>Payment Information:</b> If you make a purchase or pay for our services, we collect billing details and payment information to process your transactions.</li>
              </ul>
              <h4 className="gold-text-2">2. How We Use Your Information
              </h4>
              <p className="secondary-text">
              We use your personal information to:
              </p>
              <ul>
                <li>Provide IT services, solutions, and products as requested.</li>
                <li>Communicate with you regarding your inquiries, updates, and support.</li>
                <li>Process payments for our products and services.</li>
                <li>Improve the quality of our website and services.</li>
                <li>Send promotional emails, newsletters, or updates, only if you have opted in to receive such communications.</li>

              </ul>
              <h4 className="gold-text-2">3. How We Protect Your Information</h4>
              <p className="secondary-text">
              We take appropriate security measures to protect your personal information. These include using encryption technologies, secure payment gateways, and restricted access to sensitive data. However, no system is completely secure, and while we strive to protect your information, we cannot guarantee its absolute security.
              </p>
              <h4 className="gold-text-2">4.  Sharing Your Information</h4>
              <p className="secondary-text">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers and partners who assist us in operating our business, providing services to you, and managing our products. These third parties are obligated to keep your information confidential and are prohibited from using it for any other purpose.
              </p>
              <h4 className="gold-text-2">5. Cookies and Tracking Technologies</h4>
              <p className="secondary-text pb-1">
              We use cookies and similar technologies to enhance your experience on our website. Cookies are small files stored on your device that allow us to collect information about your interactions with our site. This helps us improve functionality, understand user behavior, and provide more personalized services.

              </p><p className="secondary-text">
              You can adjust your browser settings to disable cookies, but this may affect your ability to access certain features of the site.

              </p>
              <h4 className="gold-text-2">6. Your Rights</h4>
              <p className="secondary-text">
              You have the right to:
              </p>
              <ul>
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of any inaccurate or incomplete personal data.</li>
                <li>Request deletion of your personal data, subject to legal obligations.</li>
                <li>Object to or restrict the processing of your personal data under certain circumstances.</li>
                <li>Withdraw your consent to receive marketing communications at any time.</li>
               
              </ul>
              <h4 className="gold-text-2">7. Data Retention</h4>
              <p className="secondary-text">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. When your personal information is no longer needed, we securely delete, anonymize, or archive it in compliance with applicable laws.
              </p>
              <h4 className="gold-text-2">8. International Data Transfers</h4>
              <p className="secondary-text">
              If you are located outside of India, please be aware that your information may be transferred to and processed in Chennai. By using our services, you consent to the transfer of your data to a jurisdiction with different privacy laws than your own.
              </p>
              <h4 className="gold-text-2">9. Third-Party Websites</h4>
              <p className="secondary-text">
              Our website may contain links to third-party websites. This Privacy Policy applies only to V-Accel’s website and services. We are not responsible for the privacy practices or content of external sites, and we encourage you to review their privacy policies.
              </p>
              <h4 className="gold-text-2">
              10. Children’s Privacy
              </h4>
              <p className="secondary-text">
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 16, we will take steps to delete such information promptly.
              </p>
              <h4 className="gold-text-2">
              11. Changes to This Privacy Policy
              </h4>
              <p className="secondary-text">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will update the "Last Updated" date accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
             
              <h4 className="gold-text-2">12. Contact Us</h4>
              <p className="secondary-text">
                If you have any questions about this Privacy Policy, please
                contact us by email: <Link to={'mailto: info@v-accel.ai'} className="text-decoration-none concolor"> info@v-accel.ai</Link>
              </p>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Policy;
