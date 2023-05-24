import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleInfo, faEnvelope, faHeart, faMicrophone, faMicrophoneAlt, faPhone, faPhotoFilm, faSmile, faVideo } from '@fortawesome/free-solid-svg-icons';


interface User {
    id: number,
    name: string,
    action: string,
    selected: boolean,
    messages: String[]
}

const ChatContent: FC = () => {


    const users: User[] = [
        {
            id: 1,
            name: "Rabi Shiwakoti",
            action: "Rabi sent an attachment",
            selected: true,
            messages: [
                "Hello, how are you?",
                "Dinner at 8pm tomorrow?",
                "I have to go to the hospital tomorrow afternoon.",
                "Hello, how are you?",
                "Dinner at 8pm tomorrow?",
                "I have to go to the hospital tomorrow afternoon.",
                "Hello, how are you?",
                "Dinner at 8pm tomorrow?",
                "I have to go to the hospital tomorrow afternoon.",
                "Hello, how are you?",
                "Dinner at 8pm tomorrow?",
                "I have to go to the hospital tomorrow afternoon.",
                "Hello, how are you?",
                "Dinner at 8pm tomorrow?",
                "I have to go to the hospital tomorrow afternoon.",
            ]

        },
        {
            id: 2,
            name: "Sneha Chamling Rai",
            action: "Sneha sent an attachment",
            selected: false,
            messages: [],
        },
        {
            id: 3,
            name: "Anubhab Dhakal",
            action: "Anubhab sent an attachment",
            selected: false,
            messages: [],
        },
        {
            id: 4,
            name: "Ram Shrestha",
            action: "Ram sent an attachment",
            selected: false,
            messages: [],
        },
        {
            id: 5,
            name: "Shyam Rai",
            action: "Shyam sent an attachment",
            selected: false,
            messages: [],
        },
        {
            id: 6,
            name: "Rishab Adhikari",
            action: "Rishab sent an attachment",
            selected: false,
            messages: [],
        },
        {
            id: 7,
            name: "Sanu Kumari Maharjan",
            action: "Sanu Kumari sent a message",
            selected: false,
            messages: [],
        },
        {
            id: 8,
            name: "Kiran Sharma",
            action: "Kiran sent a message",
            selected: false,
            messages: [],
        },

    ];

    const selectedUser: User = users[0];

    return (
        <section className="chat-content h-full flex w-full">
            <aside className="user-chat-list-container bg-black h-full border-r border-r-gray-600 flex-[0_0_30vw] max-w-[375px] relative">
                <header className="header-content pt-[20px] pb-[5px] px-[15px] sticky top-0 bg-black w-full">
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
                <ul className="chat-list h-[calc(100%-75.5px)] overflow-y-auto">
                    {
                        users.map((user, index) => {
                            return (
                                <li className={`list-item px-[15px] ${user.selected ? 'bg-[#262626]' : ''}`} key={user.id}>
                                    <a href="#" className="list-link flex py-[10px]">
                                        <span className="user-profile-container w-[45px] h-[45px] flex-[0_0_45px] bg-gray-500 rounded-full"></span>
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
                        <span className="sender-name pl-[10px] text-white text-sm">{selectedUser.name}</span>
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
                <div className="messages-container flex-1 h-[calc(100%-125.5px)] overflow-y-auto">
                    <ul className="selected-user-messages-list p-[10px_15px] flex flex-col">
                        {
                            selectedUser.messages?.length > 0 ? (
                                selectedUser.messages?.map(msg => {
                                    return (
                                        <li className="w-auto p-[5px] flex items-end group">
                                            <span className="sender-img flex-[0_0_30px] h-[30px] rounded-full bg-gray-600"></span>
                                            <span className="msg-content ml-[8px] inline-flex relative items-center max-w-[60%]">
                                                <span className="msg-text p-[5px_10px] bg-[#262626] text-white rounded-[12px] text-[12px] ">
                                                    {msg}
                                                </span>
                                                {/* <span className="emoji-container absolute right-[calc(-1*calc(100%-35px))] h-[175px] w-[100px] top-[-30px] bg-red-200"></span> */}
                                                <button className="reaction-emoji-display text-xs text-[#7c7c7c] absolute hidden group-hover:block right-[-30px] h-[30px] w-[30px]">
                                                    <FontAwesomeIcon icon={faSmile} />
                                                </button>
                                            </span>

                                        </li>
                                    )
                                })
                            ) : (
                                <li className="text-white text-center">No messages</li>
                            )
                        }
                    </ul>
                </div>
                <footer className="footer-content bg-black p-[10px_15px] w-full text-white">
                    <div className="add-message-bar border border-gray-700 rounded-full w-full px-[5px] flex items-center">
                        <button className="add-emojis text-lg text-white p-[5px_10px]">
                            <FontAwesomeIcon icon={faSmile} />
                        </button>
                        <input type="text" name="message" id="message" placeholder="Message..." className="text-white bg-transparent text-sm flex-grow" />
                        <ul className="message-options flex px-[5px]">
                            <li className="list-items">
                                <a href="#" className="list-link flex p-[5px_8px] text-white">
                                    <FontAwesomeIcon icon={faMicrophoneAlt} />
                                </a>
                            </li>
                            <li className="list-items">
                                <a href="#" className="list-link p-[5px_8px] text-white">
                                    <FontAwesomeIcon icon={faPhotoFilm} />
                                </a>
                            </li>
                            <li className="list-items">
                                <a href="#" className="list-link p-[5px_8px] text-white">
                                    <FontAwesomeIcon icon={faHeart} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </article>
        </section>
    )
}

export default ChatContent;