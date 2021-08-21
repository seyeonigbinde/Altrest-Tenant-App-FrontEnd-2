import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {



    return (
        <footer>
            <section className="footer_container">
                <div className="footer_items" >
                    <h1><b> ALTREST </b></h1>
                    <div className="footer_socials">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
                <div className="footer_items" >
                    <h4>Company</h4>
                    <Link to='/about'>About</Link>
                    <Link>Contact</Link>
                    <Link>Blog</Link>
                    <Link>Careers</Link>
                </div>
                <div className="footer_items" >
                    <h4>Resources</h4>

                    <Link>API Reference</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>FAQs</Link>
                    <Link>Privacy & Security</Link>

                </div>
                <div className="footer_items" >
                    <h3>About ALTREST</h3>
                    <p>ALTREST is a digital facility management App that helps tenants and landlords manage communications, maintenance requests and payments. </p>
                </div>
            </section>
            <hr />
            <section className="footer_copyright">
                <p>Copyright &copy; 2021 || Designed by Stevens Design Tech.</p>
            </section>
        </footer>
    )
}

export default Footer