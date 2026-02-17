import './service.css'
import them_pattern from '../../../src/assets/theme_pattern.svg'
import service_data from'../../../src/assets/services_data'

import arrow_icon from'../../../src/assets/arrow_icon.svg'
export function ServicesIndex() {
    return (
        <div className=" text-white container-fluid">
            <div id="services">
                <div id="srvices-title">
                    <h1>My Services</h1>
                    <img src={them_pattern} />
                </div>
                <div id="Service-Container">
                {
                    service_data.map((item,index)=>{
                       return  <div key={index} id="service-formet">


                            <h3>{item.s_no}</h3>
                            <h2>{item.s_name}</h2>
                            <p>{item.s_desc}</p>
                            <div id="services-readmore">

                                <p>Read More</p>
                                <img src={arrow_icon}/>
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    )
}