
import { AboutIndex } from './about/about'
import { ContactIndex } from './contact/contact'
import { FooterIndex } from './footer/footer'

import { HerioIndex } from './hero/hero'
import { MyworkIndex } from './mywork/mywork'
import { NavbarFolio } from './navbar/navbar'
import { ServicesIndex } from './service/service'
export function IndexPortFolio() {
    return (
        <div >
            <NavbarFolio/>
            <HerioIndex/>
            <AboutIndex/>
            <ServicesIndex/>
            <MyworkIndex/>
            <ContactIndex/>
            <FooterIndex/>
           
        </div>
    )
}