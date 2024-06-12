import React from "react";
import '../App.css';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Card1 from "../img/card_img1.avif"
import Card2 from "../img/card_img2.avif"
import Card3 from "../img/card_img3.jpg"
function Contact(){
    return (
        <div>
        <section className='developer-img-section'>
          <div className='text1'>
            <h1 style={{ display: "inline-block" }}>Hi,</h1><span className='text1-inner'>I am Dushyant</span><h1>Full StacK Developer</h1>
          </div>
        </section>
        <section className='black_box'>
          <h2 style={{ display: "inline-block" }}>WORK , I CAN DO FOR &nbsp;</h2>
          <h1 style={{ display: "inline-block" }}>YOU</h1>
        </section>
        <section className='card-section'>
          <div className='card1'>
            <Card style={{ width: '23rem',height:'600px' }}>
                <Card.Img variant="top" src={Card1} />
              <Card.Body>
                <Card.Title>
                  Web Developer
                </Card.Title>
                <Card.Text>
                  A web developer is a professional who designs, builds, and maintains websites and web applications. They work with languages like HTML, CSS, and JavaScript, and often use frameworks and tools. Web developers ensure sites are functional, user-friendly, and optimized for performance and security.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='card2'>
            <Card style={{ width: '23rem',height:'600px' }}>
            <Card.Img variant="top" src={Card2} />
              <Card.Body>
                <Card.Title>
                  App Developer
                </Card.Title>
                <Card.Text>
                  An app developer is a professional who creates, tests, and maintains mobile applications for devices like smartphones and tablets. They use programming languages such as Java, Swift, and Kotlin, and work with platforms like iOS and Android.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='card3'>
            <Card style={{ width: '23rem',height:'600px' }}>
            <Card.Img variant="top" src={Card3} />
              <Card.Body>
                <Card.Title>
                  MERN Developer
                </Card.Title>
                <Card.Text>
                  A MERN developer specializes in building web applications using the MERN stack: MongoDB, Express.js, React, and Node.js. They handle both front-end and back-end development, ensuring seamless integration. MERN developers focus on creating dynamic, responsive.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
        <section className='bottom-section'>
        <div className='card contact'>
          <h2>Contact Me</h2>
          <p>
          Feel free to reach out to us with any questions, feedback, or inquiries. You can contact us via email at [your email], call us at [your phone number], or fill out the form below. We aim to respond within 24 hours. We look forward to hearing from you!
          </p>
          </div>
        <div className='card about'>
        <h2>About Me</h2>
        <p>
        Welcome to my personal page! I am [Your Name], a passionate [your profession, e.g., web developer, writer, designer] with a love for creating and innovating. With [number] years of experience, I strive to deliver high-quality work and make a positive impact. Let's connect and create something amazing together!
        </p>
        </div>
        </section>
        <section className='footer'>
          <div className='footer-section'>
            Project By do some coding
          </div>
        </section>
      </div>
    )
}
export default Contact;