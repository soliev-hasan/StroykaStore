import React from 'react'
import logo from './img/image 42 (Traced).png'
import logoText from './img/StroykaStore.png' 
import visa from './img/Vector.png'
import mastercard from './img/pngaaa.com-197536.png'
import maestro from './img/kisspng-maestro-debit-card-credit-card-v-pay-mastercard-5b449b08eecba2.3393511415312227929781.png'
import mir from './img/Combined-Shape.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons' 
import LinksFooter from './LinksFooter'
import links from './footerText'


export default function Footer() {

    let style = {
        img:{
            width:'50px',
            height:'40px'
        },
        margin:{
            marginTop:'15px'
        },
        width:{
            width:'55px'
        }
    }

  return (
    <div>
        <section class="footer-section">
        <div class="footer-row">
            <div class="footer-column">
                <div class="logo">
                    <div class="logos">
                        <img src={logo} alt=" " />
                    </div>
                    <div className='stroyka'>
                        <img src={logoText} alt="" />
                    </div>
                </div>
                <div class="links-footer" >
                    <p><FontAwesomeIcon icon="fa fa-envelope" /> info@stroykastore.ru</p>
                    <p><FontAwesomeIcon icon={faLocationDot}/> Москва, ул.Камушкина 10</p>
                </div>
            </div>

            <LinksFooter 
            first = {links.cabinet}
            second = {links.zakaz}
            third = {links.favorite}
            fourth = {links.cart}
            />
            <LinksFooter 
            first = {links.catalog}
            second = {links.stock}
            third = {links.brands}
            fourth = {links.contacts}
            />
            <LinksFooter 
            first = {links.stay}
            second = {links.delivery}
            third = {links.vozvrat}
            fourth = {links.document}
            />
            
            </div>
            <hr />
            <div class="footer-brands">
            <div style={style.margin}>
                <p>© СтройкаСтор</p>
            </div>
            <div class="brands-img">
                <img src={visa} alt="" />
                <img src={mastercard} style={style.img}  alt="" />
                <img src={maestro} style={style.width}  alt="" />
                <img src={mir} alt="" />
            </div>
            <div style={style.margin}>
                <p>Cделано в KRUGLOV STUDIO</p>
            </div>
        </div>
            
            </section>
    </div>
  )
}
