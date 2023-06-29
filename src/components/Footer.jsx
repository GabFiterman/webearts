import '../scss/footer.scss';

export default function Footer({_t}) {
    const logoSrc = '/public/img/Logo-DarkMode.png'
    return(
        <div className="Footer">
            <img className='Footer__logo' src={logoSrc} alt="Logo WebeArts" />
            <h2 className='Footer__title title'>{_t.title}</h2>
            <p className='Footer__subtitle'>{_t.subtitle}</p>
        </div>
    )
}