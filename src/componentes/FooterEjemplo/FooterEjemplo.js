import './FooterEjemplo.css'
function FooterEjemplo() {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Daniel Steven Polo Lozano</strong>
    </footer>
}
export default FooterEjemplo