import React from 'react'

const DashFooter = () => {
  return (
    <footer>
      <hr />
      <section className='dash_footer'>
        <div className='dash_copyright'>
          <p>
            Copyright &copy; 2021 || Designed by{' '}
            <a href='https://seyeonigbinde.vercel.app/'>Stevens Design Tech.</a>
          </p>
        </div>
        <div className='dash_socials'>
          <i class='fab fa-facebook-f' style={{ color: '#fff' }}></i>
          <i class='fab fa-instagram' style={{ color: '#fb3958' }}></i>
          <i class='fab fa-twitter' style={{ color: 'skyblue' }}></i>
        </div>
      </section>
    </footer>
  )
}

export default DashFooter
