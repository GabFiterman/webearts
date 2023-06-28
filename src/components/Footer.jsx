import '../scss/Footer.scss';
import textData from '../data/text-main.json';
const _t = textData.Footer;

export default function Footer() {
    const logoSrc = '/public/img/Logo-DarkMode.png'
    return(
        <div className="Footer">
            <img className='Footer__logo' src={logoSrc} alt="Logo WebeArts" />
            <h2 className='Footer__title title'>{_t.title}</h2>
            <p className='Footer__subtitle'>{_t.subtitle}</p>
        </div>
    )
}