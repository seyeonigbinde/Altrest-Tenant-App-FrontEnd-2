import React from 'react'


const DashFooter = () => {

    return (
        <footer>
            <hr/>
            <section className="footer_note" >
                <div className="footer_copyright">
                    <p>Copyright &copy; 2021 || Designed by Stevens Design Tech.</p>
                </div>
                <div className="footer_social">
                    <i class="fab fa-facebook-f fa-2x primary" style={{ color: '#185adb' }}></i>
                    <i class="fab fa-instagram fa-2x" style={{ color: '#fb3958' }}></i>
                    <i class="fab fa-twitter fa-2x" style={{ color: 'skyblue' }}></i>
                </div>
            </section>
        </footer>
    )
}

export default DashFooter
