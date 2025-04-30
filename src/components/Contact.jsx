import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import "../assets/css/index.scss";
import "../assets/css/contact.scss";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"
import footer from '../assets/images/footer.svg'
import { Link } from 'react-router-dom';
import Links from '../components/Links';

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const MSG = {
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
        address: "",
        serviceOption: "",
    });
    const [contact, setContact] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        serviceOption: "",
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'phone') {
            value = value.replace(/\D/g, '').slice(0, 10);
        }
        if (name === 'fname') {
            value = value.replace(/[^a-zA-Z\s]/g, '');
        }
        if (name === 'lname') {
            value = value.replace(/[^a-zA-Z\s]/g, '');
        }
        setContact({
            ...contact,
            [name]: value,
        });
        validateField(name, value);
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
    // console.log(contact)
    const validateField = (name, value) => {

        switch (name) {
            case 'fname':
                setErrors({
                    ...errors,
                    fname: value.length === 0 ? 'Firstname is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid firstname, only letters allowed' : '',
                });
                break;


            case 'lname':
                setErrors({
                    ...errors,
                    lname: value.length === 0 ? 'Lastname is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid lastname' : '',
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
    //         const response = await axios.post('/api/contact', contact);
    //         console.log("res", response)
    //         if (response.status === 201) {
    //             console.log("201")
    //             showToast("Our team will connect with you", { style: { background: "linear-gradient(to right, #00b09b, #96c93d)" } });
    //             var serviceOptions = document.getElementsByName("serviceOption");
    //             for (var i = 0; i < serviceOptions.length; i++) {
    //                 serviceOptions[i].checked = false;
    //             }
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
    //             console.log('else Unexpected response:', response);
    //             showToast("Internal server error", { style: { border: "1px solid red" } });
    //         }
    //     } catch (error) {
    //         console.log("error", error);
    //         showToast("Unexpected error", { style: { border: "1px solid red" } });
    //     }
    // }

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


    return (
        <div>
            <Navbar />
            {/* <Banner h1={'Talk to a Human'} h2={'we check our emails everyday and reply even if we are at dinner. You are not going to hit a ridiculously long phone menu when you call us.'} /> */}
            <div className='hero-banner hero-2 mt-5' data-aos='fade'>
                <div className='container text-center green-text'>
                    <p className="bg-img-2 mb-5 mx-auto" data-aos='fade-up' data-aos-duration='400'>Talk to a Human</p>
                    <h1 className={`secondary-header mb-3`} data-aos='fade-up' data-aos-duration='600'>We check our emails everyday and reply even if we are at dinner. You are not going to hit a ridiculously long phone menu when you call us.</h1>
                    {/* <p className='mb-0 secondary-text mb-3' data-aos='fade-up' data-aos-duration='700'>{h3}</p> */}
                    {/* {isContactPage ? null : (
                         <Link to={"/contact"} className='text-decoration-none'>
                             <button className='gold-btn green-btn m-5 mx-auto' data-aos='zoom-out' data-aos-duration='600'>
                                 <span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i>
                             </button>
                         </Link>
                     )} */}
                </div>
            </div>
            <div className='container'>
                <div className='card mt-4'>
                <div className="card-body">
                            <p className='text-center text-capitalize bg-img-1'>For Urgent Queries</p>
                            <p className='text-center text-capitalize fw-semibold primary-text'>Call or Whatsapp Us.</p>
                            {/* Call and WhatsApp Buttons */}
      <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
        <a href="tel:+918754453361" className="btn btn-primary">
          📞 Call Now
        </a>
        <a
  href={`https://wa.me/918056056106`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-success"
>
  💬 WhatsApp
</a>
      </div>
                        </div>
                </div>
            </div>
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
                        {/* <ToastContainer /> */}
                    </form>
                </div>
            </div>
            <div className='faq'>


                <div className="container mt-5">
                    <h3 className='bg-img-1 mx-auto'> Frequently Asked Questions </h3>
                    <h4 className=' mx-auto m-5 '>Customized Software Development with AI Integration:</h4>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                                    Q1: What are V-Accel's core services?

                                </button>

                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    We are a one-stop shop for all your digital needs, offering software development, software testing, website development, and digital marketing services.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Q2: What sets  V-Accel apart from other software companies?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    We combine extensive experience with a passionate and innovative approach. We don't just deliver services; we build long-term partnerships, tailoring solutions to your unique needs and ensuring your success.
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Q3: What is your pricing structure?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    Our pricing varies depending on the specific project requirements and scope. We offer transparent quotes and flexible payment options to fit your budget.
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Q4:  Do you offer free consultations?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    Absolutely! We're happy to discuss your project and answer any questions you may have during a free consultation.                                    </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    {/* <h4 className=' mx-auto m-5'> Software Development:</h4> */}
                    <div className="accordion" id="accordionPanelsStayOpenExample1">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
                                    Q1:   What types of software do you develop?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    We have expertise in building custom web applications, mobile apps, enterprise software, and more.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
                                    Q2: What technologies do you use?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    We are proficient in various programming languages and frameworks, including Java, Python, React, etc. We choose the best technology stack based on your specific needs.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
                                    Q3: Do you offer ongoing maintenance and support for software?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we offer comprehensive maintenance and support plans to ensure your software runs smoothly and stays up-to-date.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    {/* <h4 className='mx-auto m-5'> Software Testing:</h4> */}
                    <div className="accordion" id="accordionPanelsStayOpenExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true" aria-controls="panelsStayOpen-collapseNine">
                                    Q1: What types of software testing do you offer?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    We provide a wide range of testing services, including functional testing, performance testing, security testing, and usability testing.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" aria-controls="panelsStayOpen-collapseEight">
                                    Q2: How can your testing services benefit my business?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Our testing ensures your software is bug-free, reliable, and delivers a positive user experience, leading to increased customer satisfaction and reduced costs.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true" aria-controls="panelsStayOpen-collapseTen">
                                    Q3: Do you offer automated testing solutions?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we leverage advanced automation tools to streamline the testing process and improve efficiency.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    {/* <h4 className=' mx-auto m-5'> Website Development:</h4> */}
                    <div className="accordion" id="accordionPanelsStayOpenExample3">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="true" aria-controls="panelsStayOpen-collapseEleven">
                                    Q1: Do you design and develop custom websites?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseEleven" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    Absolutely! We create unique and user-friendly websites that reflect your brand and drive conversions.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTweleve" aria-expanded="true" aria-controls="panelsStayOpen-collapseTweleve">
                                    Q2: What platforms do you use for website development?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTweleve" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    We are proficient in various CMS platforms like WordPress and Drupal, ensuring flexibility and ease of content management.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThirteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseThirteen">
                                    Q3: Do you offer website maintenance and security services?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThirteen" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we ensure your website stays up-to-date, secure, and performing optimally with our ongoing maintenance and security solutions.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 pb-5">
                    {/* <h4 className=' mx-auto m-5'>Digital Marketing:</h4> */}
                    <div className="accordion" id="accordionPanelsStayOpenExample3">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFourteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseFourteen">
                                    Q1:  What digital marketing services do you offer?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFourteen" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    We provide a comprehensive range of services, including SEO, social media marketing, content marketing, email marketing, and paid advertising.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFifteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseFifteen">
                                    Q2: How can your digital marketing services help me reach my target audience?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFifteen" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    Our data-driven strategies and expert execution help you attract, engage, and convert your ideal customers, expanding your online reach and brand awareness.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSixteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseSixteen">
                                    Q3:  Do you track and report on the results of your campaigns?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSixteen" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we provide detailed reports and analytics to measure the success of your campaigns and continuously refine your strategies for optimal results.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
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
                    <div className="col-12 text-center mb-5">
                      <small>Copyright © All rights reserved 2025.V - Accel 
                        <a href="/privacy-policy" className="text-primary ms-1">Privacy Policy</a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>     
             <Links/>                        
            </div>
            
    );
}


export default Contact;
