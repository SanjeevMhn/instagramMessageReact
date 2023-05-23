import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faHouseChimney, faMagnifyingGlass, faCompass, faClapperboard, faSquarePlus, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidenav: FC = () => {

    return (
        <aside className="sidenav-container bg-black border-r border-r-gray-600 absolute h-screen top-0 left-0 flex flex-col p-[12px_12px]">
            <a href="#" className="brand-logo text-white text-xl ">
                <FontAwesomeIcon icon={faInstagram} />
            </a>

            <ul className="nav-list text-[18px] mt-[15px] flex flex-col justify-between">
                <li className="list-item">
                    <a href="#" className="list-link text-white ">
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link text-white ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link text-white ">
                        <FontAwesomeIcon icon={faCompass} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link text-white ">
                        <FontAwesomeIcon icon={faClapperboard} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link text-white ">
                        <FontAwesomeIcon icon={faFacebookMessenger} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link text-white block">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link text-white ">
                        <FontAwesomeIcon icon={faSquarePlus} />
                    </a>
                </li>
            </ul>

            <a href="javascript:void(0)" role="button" className="profile-settings text-white text-base mt-auto">
                <FontAwesomeIcon icon={faBars} />
            </a>
        </aside>
    )
}

export default Sidenav;