import './mywork.css'
import theme_pattern from '../../../src/assets/theme_pattern.svg'
import mywork from '../../../src/assets/mywork_data'
import arrow_icon from '../../../src/assets/arrow_icon.svg'

export function MyworkIndex() {
  return (
    <div className="container-fluid py-5">
      <div id="mywork" className="text-center">

        {/* Title */}
        <div id="mywork-title" className="mb-4 position-relative d-inline-block">
          <h1 className="fw-bold">My Latest Work</h1>
          <img src={theme_pattern} alt="pattern" className="img-fluid position-absolute" />
        </div>

        {/* Work Grid */}
        <div className="row g-4" id="mywork-container">
          {mywork.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <img 
                src={item.w_img} 
                alt={`Project ${index + 1}`} 
                className="img-fluid rounded shadow mywork-img"
              />
            </div>
          ))}
        </div>

        {/* Show More */}
        <div 
          id="mywork-showmore" 
          className="d-flex justify-content-center align-items-center gap-2 mt-4"
        >
          <p className="m-0 fw-semibold">Show More</p>
          <img src={arrow_icon} alt="arrow" />
        </div>

      </div>
    </div>
  )
}
