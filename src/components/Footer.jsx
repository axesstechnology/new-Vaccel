import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import footer from '../assets/images/footer.svg'
// import frompng from '../assets/images/fromlogo.jpg'
// import contact  from '../assets/images/contact.jpg'
import "../assets/css/index.scss"
import "../assets/css/footer.scss"
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"


function Footer({ displayContact }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // console.log("displayContact",displayContact)
    const [receiveMsg, setReciveMsg] = useState();
    const navigate = useNavigate();
    let MSG = {
        success: "Success",
        mailSended: "Mail sended successfully",
        unexpectedError: "Unexpected Error",
        unexpectedResponse: "Unexpected Response",
        incorrectMail: "Incorrect Mail"
    }
    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        comments: "",
        serviceOption: "",
    });
    const [contact, setContact] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        comments: "",
        serviceOption: "",
    });
    // const handleRoute = () => { navigate('/about') }
    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'fname') {
            value = value.replace(/[^a-zA-Z\s]/g, '');
        }
        if (name === 'lname') {
            value = value.replace(/[^a-zA-Z\s]/g, '');
        }
        if (name === 'phone') {

            value = value.replace(/\D/g, '').slice(0, 10);
            // console.log("phone", value)
        }


        setContact({
            ...contact,
            [name]: value,
        });
        validateField(name, value);
    };
    // console.log(contact)
    const validateField = (name, value) => {

        switch (name) {
            case 'fname':
                setErrors({
                    ...errors,
                    fname: value.length === 0 ? 'FirstName is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid firstname, only letters allowed' : '',
                });
                break;


            case 'lname':
                setErrors({
                    ...errors,
                    lname: value.length === 0 ? 'LastName is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid lastname' : '',
                });
                break;
            case 'email':
                setErrors({
                    ...errors,
                    email:
                        value.length === 0 ? 'Email is required' :
                            !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
                                ? 'Invalid email'
                                : '',
                });
                break;

            case 'phone':
                setErrors({
                    ...errors,
                    phone:
                        value.length === 0
                            ? 'Phone is required'
                            : value.length !== 10 || !/^[5-9]\d+$/.test(value) ? 'Invalid phone' : '',
                });
                break;
             case 'serviceOption':
                 setErrors({
                     ...errors,
                     serviceOption: value.length === 0 ? 'serviceOption is required' : /[1]/.test(value) ? 'Invalid serviceOption' : '',
                 });
                break;
            default:
                break;
        }
    };

    const showToast = (text, options = {}) => {
        Toastify({
            text,
            duration: options.duration || 3000,
            newWindow: options.newWindow || true,
            close: options.close || true,
            gravity: options.gravity || "top",
            position: options.position || "center",
            stopOnFocus: options.stopOnFocus || true,
            style: options.style || {},
            onClick: options.onClick || function () { }
        }).showToast();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!contact.fname || !contact.lname || !contact.email || !contact.phone) {
          setErrors({
            fname: !contact.fname ? "Please enter your first name" : "",
            lname: !contact.lname ? "Please enter your last name" : "",
            email: !contact.email ? "Please enter your email" : "",
            phone: !contact.phone ? "Please enter your mobile number" : "",
          });
          return;
        }
      
        setIsSubmitting(true); // set loading
      
        try {
          await fetch("https://script.google.com/macros/s/AKfycbwuDRO58tSja3wV0Vuqi5haB4BcB1Sr-kdzsSv4zQ9jRC9oSan5Wa_3pMNEgnYJrd1zHQ/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });
      
          showToast("Our team will connect with you", {
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          });

          setContact({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            address: "",
            serviceOption: "",
          });
      
          setErrors({});
        } catch (error) {
          console.error("Error submitting to Google Sheet", error);
          showToast("Unexpected error", { style: { border: "1px solid red" } });
        } finally {
          setIsSubmitting(false); // reset loading
        }
      };

    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // console.log("error", errors, errors.fname || errors.lname || errors.email || errors.phone || errors.address)

    //     if (errors.fname || errors.lname || errors.email || errors.phone) return
    //     if (!contact.fname.trim() || !contact.lname.trim() || !contact.email.trim() || !contact.phone.trim()) {
    //         setErrors({
    //             fname: !contact.fname ? 'FirstName is required.' : '',
    //             lname: !contact.lname ? 'LastName is required.' : '',
    //             email: !contact.email ? 'Email is required.' : '',
    //             phone: !contact.phone ? 'Phone.No is required.' : '',
    //             // address: !contact.address ? 'Address is required.' : '',
    //             // serviceOption: !contact.serviceOption ? 'serviceoption is required' : ''
    //         });
    //         return;
    //     }
    //     try {
    //         // const response = await axios.post('/api/contact', contact);
    //         const response = await axios.post('https://script.google.com/macros/s/AKfycbyX_OOwZ0OGi8-haf5Z86tPq02h926x-RftkUcmrM_FpTh3W5K_j_-F1t_cwP6y5w55/exec');
    //         console.log("res", response)
    //         if (response.status === 201) {
    //             alert(" Our team will connect with you")
    //             Toastify({
    //                 text: "Your form submitted successfully. ",
    //                 newWindow: true,
    //                 close: true,
    //                 gravity: "top", // `top` or `bottom`
    //                 position: "left", // `left`, `center` or `right`
    //                 stopOnFocus: true, // Prevents dismissing of toast on hover
    //                 style: {
    //                     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //                 },
    //                 onClick: function () { } // Callback after click
    //             }).showToast();
    //             setContact({
    //                 fname: "",
    //                 lname: "",
    //                 email: "",
    //                 phone: "",
    //                 address: "",
    //                 serviceOption: ""

    //             })
    //             setErrors({
    //                 fname: '',
    //                 lname: '',
    //                 email: '',
    //                 phone: '',
    //                 address: ''

    //                 // serviceOption: '',
    //             });

    //         } else {
    //             console.log('Unexpected response:', response);
    //         }
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //         Toastify({
    //             text: "Unexpected server error",
    //             duration: 3000,
    //             // destination: "https://github.com/apvarun/toastify-js",
    //             newWindow: true,
    //             close: true,
    //             gravity: "top", // `top` or `bottom`
    //             position: "center", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //                 //   background: "linear-gradient(to right, #00b09b, #96c93d)",
    //                 border: "1px solid red"
    //             },
    //             onClick: function () { } // Callback after click
    //         }).showToast();
    //     }

    // }
    // var alertcontent = document.getElementById('alert');
    // if (alertcontent) {
    //     console.log('true');

    // } else {
    //     console.log('false')
    // }
    // const handlePhoneCall = (phoneNumber) => {
    //     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //         window.location.href = `tel:${phoneNumber}`;
    //     }
    // };

    return (
        <div>
            {/* <div className={`container mt-4 contactbg ${displayContact ? "d-none" : ""}`}>
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-body position-relative">
                            <div className="row">
                                <div className="col-md-10">
                                    <p className='text-start mx-2 fs-5 bg-img-1' data-aos='zoom-out'>Contact us</p>
                                    <p data-aos='zoom-out'>We’re excited to hear about your project. Schedule a call today and Connect with our experts. At V-Accel, We respect your privacy and Never share your details with anyone. Let's build together.</p>
                                </div>
                                <div className="col-md-2 position-absolute footerbg">
                                    <img src={frompng} alt="" />
                                </div>
                            </div>

                            <div className="">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <input data-aos='zoom-out' type="text" name="fname" value={contact.fname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' onChange={handleChange} placeholder='First Name *' />
                                        <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.fname}</div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input data-aos='zoom-out' type="text" name="lname" value={contact.lname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' onChange={handleChange} placeholder='Last Name *' />
                                        <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.lname}</div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input data-aos='zoom-out' type="email" name="email" value={contact.email} className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' onChange={handleChange} placeholder='E-mail *' />
                                        <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.email}</div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input data-aos='zoom-out' type="phone" value={contact.phone} name="phone" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' onChange={handleChange} placeholder='Phone Number *' />
                                        <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.phone}</div>
                                    </div>

                                    <div className="col-md-12 mb-4">
                                        <input data-aos='zoom-out' type="text" value={contact.comments} name="comments" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' onChange={handleChange} placeholder='Description' />
                                        <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.comments}</div>
                                    </div>
                                </div>

                                <div className="row">

                                     <div className="col-md-4" data-aos='zoom-out'>
                                        <p>WhatsApp: <Link to={"+91 6379532366"} className='text-decoration-none concolor'> +91 63795 32366 </Link></p>
                                        <p>Instagram: <a className='text-decoration-none concolor' href="https://www.instagram.com/axesstech/" target='_blank'>axesstech</a></p>
                                    </div> 

                                    <div className="col-md-4" data-aos='zoom-out'>
                                         <p>Phone:<Link to={"+91 90425 77261"} className='text-decoration-none concolor'> +91 90425 77261</Link></p> 
                                         <p>Phone: <span className='text-decoration-none concolor' onClick={() => handlePhoneCall('+919042577261')}> +91 9042577261</span></p> 
                                        <div className='d-none d-lg-block'>Phone: <span className='concolor text-decoration-none'>+91 7603846245</span></div>
                                         <div className='d-lg-none'>Phone:<Link to="tel:7845721438" className='concolor text-decoration-none'> +91 90425 77261</Link></div> 
                                        <p className='mt-3'>Email : <a className='text-decoration-none concolor' href="mailto: info@v-accel.ai">info@v-accel.ai</a></p>
                                    </div>

                                    <div className="col-md-4" data-aos='zoom-out'>
                                        <button className='gold-btn m-0 green-btn'><span className='d-block'>Submit</span> <i className="bi bi-arrow-right"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> 
                    <ToastContainer /> 
                </form>
            </div> */}

<div className="container">
                <div className="card mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <p className='text-center text-capitalize bg-img-1'>Request for quote</p>
                            <p className='text-center text-capitalize fw-semibold primary-text'>discuss your project with us. We are waiting to serve you better.</p>
                        </div>

                        <div className="row container text-capitalize">
                            <div className="col-md-6 mb-4">
                                <input type="text" name="fname" value={contact.fname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='First Name * ' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.fname}</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="lname" value={contact.lname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Last Name *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.lname}</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="email" value={contact.email} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='E-mail *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.email}</div>
                            </div>
                            {/* <div className="col-md-6 mb-4">
                                <input type="text" name="countrycode" value={contact.countryCode} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Phone *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.countryCode}</div>

                            </div> */}


                            <div className="col-md-6 mb-4">
                                <input type="text" name="phone" value={contact.phone} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Phone Number *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.phone}</div>

                            </div>
                            <div className="col-12 mb-4">
                                <input type="text" name="address" value={contact.address} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Address ' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.address}</div>

                            </div>
                        </div>
                        <div className=' container mb-3 mt-3'>
                            <p className='bg-img-1 d-flex text-center'>Select service</p>
                            <div className="row">
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_1" onChange={handleChange} value={"Custom Software Development"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_1">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            {/* <p className='secondary-text'>Software Development</p> */}
                                            <p className='secondary-text'>Custom Software Development</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_2" onChange={handleChange} value={"SaaS Product Development"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_2">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            {/* <p className='secondary-text'>Software Testing</p> */}
                                            <p className='secondary-text'>SaaS Product Development</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_3" onChange={handleChange} value={"AI & ML Engineering"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_3">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            {/* <p className='secondary-text'>Website Development</p> */}
                                            <p className='secondary-text'>AI & ML Engineering</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_4" onChange={handleChange} value={"Devops & Cloud Engineering"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_4">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            {/* <p className='secondary-text'>Digital Marketing</p> */}
                                            <p className='secondary-text'>Devops & Cloud Engineering</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_6" onChange={handleChange} value={"MicroServices Architecture & Engineering"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_6">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            {/* <p className='secondary-text'>Digital Marketing</p> */}
                                            <p className='secondary-text'>MicroServices Architecture & Engineering</p>
                                        </label>
                                    </div>
                                </div>
                                {/* <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_5" onChange={handleChange} checked value={"Others"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_5">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Others</p>
                                            <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.others}</div>

                                        </label>
                                    </div>
                                </div> */}
                                <div className="col-md-4 checkbox-label">
  <div className="checkbox-animated">
    <input
      id="checkbox_animated_5"
      type="radio"
      name="serviceOption"
      checked={contact.serviceOption.startsWith("Others")}
      onChange={() => {
        setContact((prev) => ({
          ...prev,
          serviceOption: "Others: ",
        }));
      }}
    />
    <label htmlFor="checkbox_animated_5">
      <span className="check"></span>
      <span className="box"></span>
      <p className="secondary-text">Others</p>

      {contact.serviceOption.startsWith("Others") && (
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Please specify"
          value={contact.serviceOption.replace("Others: ", "")}
          onChange={(e) => {
            setContact((prev) => ({
              ...prev,
              serviceOption: `Others: ${e.target.value}`,
            }));
          }}
        />
      )}
    </label>
    <div
      style={{ color: "red", textAlign: "center", fontSize: "12px" }}
    >
      {errors.others}
    </div>
  </div>
</div>


                            </div>
                        </div>
                        <div className="mt-3 text-center mb-3" data-aos='zoom-out' data-aos-anchor-placement="bottom-bottom">
                            {/* <button className='gold-btn green-btn'><span className='d-block'>Submit</span> <i className="bi bi-arrow-right"></i></button> */}
                            <button className="gold-btn green-btn" disabled={isSubmitting}>
  <span className="d-block">
    {isSubmitting ? "Submitting..." : "Submit"}
  </span>
  <i className="bi bi-arrow-right"></i>
</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className='bg-black text-white footercontent'>
                <div className='container'>
                    <div className="text-capitalize mt-5">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className='col-10 mx-auto'>
                                    <img src={footer} className='' data-aos='zoom-out' data-aos-duration='700' alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 text-center pt-4 " data-aos='fade-up' data-aos-duration='700'>
                                <p className='gold-text-2 fw-bolder'>Visit Us</p>
                                <Link to={'#'} className='text-decoration-none'><p className='primary-text text-white'>Tidel Park,<br /> GF-04,
                                    No-4, Rajiv Gandhi Salai,
                                    Taramani,<br />
                                    Chennai - 600113.</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center text-capitalize mt-0 py-md-5 my-md-5 g-4 g-md-0">
                        <div className="col-5 col-md-6" data-aos='fade-up' data-aos-duration='700'>
                            <p className='gold-text-2 fw-bolder'>V-Accel</p>    
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled'>
                                    <button onClick={handleRoute}>home</button>
                                    <li><Link to="/" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white' >Home</Link></li>
                                    <li><Link to="/about" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white footerhover'>About</Link></li>
                                    <li><Link to="/services" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white footerhover'>Services</Link></li>
                                    <li><Link to="/ourworks" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white footerhover'>Our Works</Link></li>
                                    <li><Link to="/contact" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white footerhover'>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-7 col-md-6" data-aos='fade-up' data-aos-duration='700'>
                            <p className='gold-text-2 fw-bolder'>Our Services</p>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled'>
                                    <li><Link to="/development" className='primary-text text-decoration-none text-white footerhover'>Custom Software Development</Link></li>
                                    <li><Link to="/testing" className='primary-text text-decoration-none text-white footerhover'>SaaS Product Development</Link></li>
                                    <li><Link to="/webdevelopment" className='primary-text text-decoration-none text-white footerhover'>AI & ML Engineering</Link></li>
                                    <li><Link to="/digitalmarketing" className='primary-text text-decoration-none text-white footerhover'>Devops & Cloud Engineering</Link></li>
                                    <li><Link to="/micro-services" className='primary-text text-decoration-none text-white footerhover'>Microservices Architecture & Engineering</Link></li>
                                </ul>
                            </div>
                        </div> */}

                        {/* <div className="col-md-4" data-aos='fade-up' data-aos-duration='700'>
                            <div>
                                <p className='gold-text-2 fw-bolder text-center mb-3'>Social media</p>
                                <p className='text-center primary-text mb-3'>Follow Us on Social Media.</p>
                                <ul className='list-unstyled d-flex justify-content-center'>
                                    <li className='zoom-effect'><Link to={'https://www.facebook.com/profile.php?id=61556380648787'} target='_blank' className='text-decoration-none'><i className="bi bi-facebook bg-img-1"></i></Link></li>
                                    <li className='zoom-effect'><Link to={'https://www.instagram.com/axesstech/'} target='_blank' className='text-decoration-none'><i className="bi bi-instagram bg-img-1"></i></Link></li>
                                    <li className='zoom-effect'><Link><i className="bi bi-whatsapp  bg-img-1"></i></Link></li>
                                    <li className='zoom-effect'><Link to={'https://www.linkedin.com/company/axess-technology-official'} target='_blank' className='text-decoration-none'><i className="bi bi-linkedin bg-img-1"></i></Link></li>
                                </ul>
                            </div>
                        </div> */}
<div className='bg-black text-white footercontent'>
  <div className='container py-3'>
    {/* Flexbox row for even spacing */}
    <div className='row gx-5 d-flex align-items-start'>
      <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
        <img
          src={footer}
          className="img-fluid"
          alt="footer-illustration"
          style={{ maxHeight: '100px', objectFit: 'contain' }}
        />
      </div>
      
      <div className="col-6 col-md-4 d-flex flex-column pl-3 ps-md-5">
        <p className='gold-text-2 fw-bold mb-2'>V-Accel</p>
        <ul className='list-unstyled mb-0'>
          <li><Link to="/about" className='text-white text-decoration-none footerhover'>About</Link></li>
          <li><Link to="/services" className='text-white text-decoration-none footerhover'>Services</Link></li>
          <li><Link to="/ourworks" className='text-white text-decoration-none footerhover'>Our Works</Link></li>
          <li><Link to="/contact" className='text-white text-decoration-none footerhover'>Contact</Link></li>
        </ul>
      </div>
      
      <div className="col-6 col-md-4 d-flex flex-column">
        <p className='gold-text-2 fw-bold mb-2'>Our Services</p>
        <ul className='list-unstyled mb-0'>
          <li><Link to="/development" className='text-white text-decoration-none footerhover'>Custom Software Development</Link></li>
          <li><Link to="/testing" className='text-white text-decoration-none footerhover'>SaaS Product Development</Link></li>
          <li><Link to="/webdevelopment" className='text-white text-decoration-none footerhover'>AI & ML Engineering</Link></li>
          <li><Link to="/digitalmarketing" className='text-white text-decoration-none footerhover'>DevOps & Cloud Engineering</Link></li>
          <li><Link to="/micro-services" className='text-white text-decoration-none footerhover'>Microservices Architecture</Link></li>
        </ul>
      </div>
    </div>
    
    {/* Single-line Visit Us section with reduced top margin */}
    <div className="row mt-4">
      <div className="col-12 d-flex flex-wrap justify-content-center align-items-center text-center">
        <span className='gold-text-2 fw-bold me-2'>Visit Us:</span>
        <span className="text-white">Tidel Park, GF-04, No-4, Rajiv Gandhi Salai, Taramani, Chennai - 600113.</span>
      </div>
    </div>
  </div>
  
  {/* Copyright section with reduced padding */}
  <div className="copyright-section border-top border-secondary mt-2">
    <div className="container py-2">
      <div className="row">
        <div className="col-12 text-center">
          <small>Copyright © All rights reserved 2025.V - Accel 
            <a href="/privacy-policy" className="text-primary ms-1">Privacy Policy</a>
          </small>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Footer