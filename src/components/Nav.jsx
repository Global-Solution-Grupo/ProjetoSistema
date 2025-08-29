import {} from 'react-router-dom'
import Logo from "../assets/imagem.jpg"

const Nav = () => {
  return (
    <header>
        <nav>
            <img src={Logo} alt="logo"/>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    
                </li>
                <li>
                    <LInk to="/cliente">Cliente</LInk>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav