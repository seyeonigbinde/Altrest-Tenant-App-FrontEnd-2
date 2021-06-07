import React from 'react';
import { Link } from 'react-router-dom';


const Footer = ()=> {

    return(
        <footer>
            <section className="modal-footer footer_body"> 
            <div className="footer_links">
                <h4>Company</h4>
                <br/>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Blog</Link>
                <Link>Careers</Link>
            </div>
            <div className="footer_links">
                <h4>Services</h4>
                <br/>
                <Link>Landlords</Link>
                <Link>Tenants</Link>
                <Link>Community Associations</Link>
                <Link>Service Providers</Link>
            </div>
            <div className="footer_links">
                <h4>Resources</h4>
                <br/>
                <Link>API Reference</Link>
                <Link>Terms & Conditions</Link>
                <Link>FAQs</Link>
                <Link>Privacy & Security</Link>
            </div>
            </section>
            <section>
            <p>Copyright &copy; 2021 || Designed by Stevens Design Tech.</p>
            <div className="footer_social">
            <i class="fab fa-facebook-f fa-2x primary"></i>
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-twitter fa-2x"></i>
            </div>
            </section>
        </footer>
    )
}

export default Footer;