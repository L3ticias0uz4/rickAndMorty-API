import logoGitHub from '../../assets/images/logoGitHub.svg'

import './style.css'
export const Header = () => {
    return(
        <header>
            <div className="header-wrapper">
                <a href="">
                    <span>LeticiaSouza</span>
                    <img src={logoGitHub}alt="Logo GitHUb" />
                </a>
          </div>
        </header>
    )
}
