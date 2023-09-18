import './footer.scss';
import { CopyToClipboard } from '@/components';

export default function Footer({ _t }) {
    const logoSrc = '/img/Logo-DarkMode.webp';
    const contactList = {
        whatsapp_link: 'https://api.whatsapp.com/send?phone=5562984602348',
        emailGabe: 'gabriel@webearts.com',
        emailKakau: 'kakau@webearts.com',
    };

    return (
        <div className="Footer">
            <div className="Footer__info">
                <img
                    className="Footer__logo"
                    src={logoSrc}
                    alt="Logo WebeArts"
                />
            </div>

            <div className="Footer__contact">
                <button className="CopyTo__button">
                    <a href={contactList.whatsapp_link} target="_blank">
                        Whatsapp
                    </a>
                </button>
                <CopyToClipboard textToCopy={contactList.emailKakau} />
                <CopyToClipboard textToCopy={contactList.emailGabe} />
            </div>

            <p className="Footer__subtitle">{_t.subtitle}</p>
        </div>
    );
}
