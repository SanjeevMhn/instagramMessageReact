import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleInfo, faEnvelope, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';


interface User {
    id: number,
    name: string,
    action: string,
    selected: boolean,
    messages?: String[]
}

const ChatContent: FC = () => {

    const users: User[] = [
        {
            id: 1,
            name: "Rabi Shiwakoti",
            action: "Rabi sent an attachment",
            selected: true,
            messages: [
                "Hello How are you?",
                "Lets play futsal in the evening",
                "Are there classes tomorrow?"
            ]

        },
        {
            id: 2,
            name: "Sneha Chamling Rai",
            action: "Sneha sent an attachment",
            selected: false,
        },
        {
            id: 3,
            name: "Anubhab Dhakal",
            action: "Anubhab sent an attachment",
            selected: false,
        },
        {
            id: 4,
            name: "Ram Shrestha",
            action: "Ram sent an attachment",
            selected: false,
        },
        {
            id: 5,
            name: "Shyam Rai",
            action: "Shyam sent an attachment",
            selected: false,
        },
        {
            id: 6,
            name: "Rishab Adhikari",
            action: "Rishab sent an attachment",
            selected: false,
        },
        {
            id: 7,
            name: "Sanu Kumari Maharjan",
            action: "Sanu Kumari sent a message",
            selected: false,
        },
        {
            id: 8,
            name: "Kiran Sharma",
            action: "Kiran sent a message",
            selected: false,
        }
    ];

    return (
        <section className="chat-content h-full flex w-full">
            <aside className="user-chat-list-container bg-black h-full border-r border-r-gray-600 flex-[0_0_30vw] max-w-[375px] relative">
                <header className="header-content pt-[20px] pb-[5px] px-[15px] absolute top-0 z-[999] bg-black w-full">
                    <div className="top-content flex justify-between items-center">
                        <a href="#" className="user-name text-base text-white">
                            <span className="user-name-text font-bold pr-[5px]">sanjeevmhn</span>
                            <span className="icon-container text-white text-[10px]">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </a>
                        <a href="#" className="new-message text-white">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                    <div className="bottom-content">
                        <span className="title-text text-xs font-bold text-white">Messages</span>
                    </div>
                </header>
                <ul className="chat-list h-full pt-[75px] overflow-y-auto">
                    {
                        users.map((user, index) => {
                            return (
                                <li className={`list-item px-[15px] ${user.selected ? 'bg-[#262626]' : ''}`} key={user.id}>
                                    <a href="#" className="list-link flex py-[10px]">
                                        <span className="user-profile-container w-[50px] h-[50px] flex-[0_0_50px] bg-gray-500 rounded-full"></span>
                                        <span className="user-data flex flex-col flex-grow justify-center pl-[12px]">
                                            <span className="user-name text-white text-[12px] py-[5px]">{user.name}</span>
                                            <span className="user-action text-gray-500 text-[10px]">{user.action}</span>
                                        </span>
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </aside>
            <article className="sender-chat-details-container w-full h-full bg-black">
                <header className="header-content p-[10px_15px] border-b border-b-gray-700 flex items-center justify-between">
                    <div className="sender-data flex items-center">
                        <span className="sender-img w-[45px] h-[45px] rounded-full bg-gray-500"></span>
                        <span className="sender-name pl-[10px] text-white text-sm">Rabi Shiwakoti</span>
                    </div>
                    <ul className="sender-options flex items-center">
                        <li className="list-item">
                            <a href="#" className="list-link flex items-center justify-center text-white text-lg p-[10px]">
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link flex items-center justify-center text-white text-lg p-[10px]">
                                <FontAwesomeIcon icon={faVideo} />
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link flex items-center justify-center text-white text-lg p-[10px]">
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </a>
                        </li>
                    </ul>
                </header>
                <div className="messages-container flex-1 h-[calc(100%-130px)] overflow-y-auto">
                    <div className="sender-message-content">
                        asdas
                    </div>
                </div>
                <footer className="footer-content bg-black p-[15px] w-full text-white">
                    asdasdasdasd
                </footer>
            </article>
        </section>
    )
}

export default ChatContent;