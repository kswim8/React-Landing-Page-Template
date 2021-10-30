export const Experience = (props) => {
    return (
      <div id='experience' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Experience</h2>
            <p>
                Here is some of my experience, from internships to organizations.
            </p>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
            {/*<div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/portfolio/08-large.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src='img/portfolio/08-small.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div> */}
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://www.facebook.com/'
                      title='Facebook / Meta'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Software Engineer Intern</h4>
                        <h5>@ Facebook / Meta</h5>
                        <h6>Starting May 2022</h6>
                      </div>
                      <img
                        src='img/experience/fb-meta (1).gif'
                        className='img-responsive'
                        alt='Project Title'
                        height="333"
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://www.cs.cmu.edu/~15122/home.shtml'
                      title='15-122'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>15-122 (Principles of Imperative Computation) TA</h4>
                        <h5>@ Carnegie Mellon University: School of Computer Science</h5>
                        <h6>Aug 2021 - PRESENT</h6>
                      </div>
                      <img
                        src='img/experience/122-logo.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://www.cs.cmu.edu/~112/index.html'
                      title='15-112'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>15-112 (Fundamentals of Programming & CS) TA</h4>
                        <h5>@ Carnegie Mellon University: School of Computer Science</h5>
                        <h6>Jul 2021 - Aug 2021</h6>
                      </div>
                      <img
                        src='img/experience/112-logo.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://talkmeup.co/#/'
                      title='TalkMeUp'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>AI Research Intern</h4>
                        <h5>@ TalkMeUp</h5>
                        <h6>May 2021 - Aug 2021</h6>
                      </div>
                      <img
                        src='img/experience/tmu-logo.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://www.hcii.cmu.edu/'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Social AI Research Assistant</h4>
                        <h5>@ Carnegie Mellon University: Human Computer Interaction Institute</h5>
                        <h6>Feb 2021 - Aug 2021</h6>
                      </div>
                      <img
                        src='img/experience/hci.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://www.ece.cmu.edu/'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>18-100 (Introduction to Electrical & Computer Engineering) TA</h4>
                        <h5>@ Carnegie Mellon University: College of Engineering</h5>
                        <h6>Feb 2021 - May 2021</h6>
                      </div>
                      <img
                        src='img/experience/coe.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://www.creativexchange.io/'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Web Developer Intern</h4>
                        <h5>@ Creative Xchange</h5>
                        <h6>Jan 2021 - May 2021</h6>
                      </div>
                      <img
                        src='img/experience/cx.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='https://www.jnjmedicaldevices.com/en-US/companies/ethicon'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Data Analytics and Statistical Programming Intern</h4>
                        <h5>@ Ethicon Inc.</h5>
                        <h6>Jul 2020 - Aug 2020</h6>
                      </div>
                      <img
                        src='img/experience/ethicon.png'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
  