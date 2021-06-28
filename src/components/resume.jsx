export const Resume = (props) => {
  return (
    <div id='resume' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Resume and Professional Profiles</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  {' '}
                  {/*<i className={d.icon}></i>*/}
                  <a href={d.link}> <i className={d.icon}  ></i> </a>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
