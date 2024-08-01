import Image from 'next/image'
import { Croissant } from 'lucide-react'
import FacebookIcon from '/public/icons/facebook.svg'
import TwitterIcon from '/public/icons/twitter.svg'
import InstagramIcon from '/public/icons/instagram.svg'

import s from './styles.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_container}>
        <div className={s.logo}>
          <h2>FeedMe</h2>
          <Croissant />
        </div>
        <div className={s.info}>
          <div>
            <span>About us</span>
            <span>Delivery</span>
            <span>Help & Support</span>
            <span>T&C</span>
          </div>
          <div className={s.social}>
            <Link href={'https://www.facebook.com/'}>
              <FacebookIcon
                width={24}
                height={24}
              />
            </Link>
            <Link href={'https://www.instagram.com/'}>
              <InstagramIcon
                width={24}
                height={24}
              />
            </Link>
            <TwitterIcon
              width={24}
              height={24}
            />
            <Link href={'https://twitter.com/'}></Link>
          </div>
        </div>
        <div className={s.phone}>
          <address>
            <a href='tel:+91 1234567899'>{'+91 1234567899'}</a>
          </address>
        </div>
      </div>
    </footer>
  )
}
export default Footer
