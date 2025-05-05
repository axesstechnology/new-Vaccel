import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from '../../About';
import Services from '../Services';
import TechStack from './TechStack';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';


function Profile() {
  // Update the page title on mount
//   useEffect(() => {
//     document.title = 'V Accel - Customized AI Software Development';
//   }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;