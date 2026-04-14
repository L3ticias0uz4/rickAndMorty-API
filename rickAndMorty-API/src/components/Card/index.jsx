import './style.css'
import logoAlien from '../../assets/images/logoAlien.svg'
import logoHeart from '../../assets/images/logoHeart.svg'
import logoPlanet from '../../assets/images/logoPlanet.svg'

export const Card = ({image, name, specie, status, location}) => {

    return (
        <div className="card-characters">
            <img src={image} alt="{name}" />
            <h3>{name}</h3>
            <div className="description-characters">
                <ul>
                    <li>
                        <img src={logoAlien} alt="" />
                        {specie}
                    </li>
                    <li>
                        <img src={logoHeart} alt="" />
                        {status}
                    </li>
                    <li>
                        <img src={logoPlanet} alt="" />
                        {location}
                    </li>
                </ul>
            </div>
        </div>
    )
}
