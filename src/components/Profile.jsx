import { Dropdown } from 'antd';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

function Profile() {
    return (
        <Dropdown
            menu={{
                items,
            }}
        >
            <a onClick={(e) => e.preventDefault()}>

                <div id="user" className="flex items-center justify-between mr-5">
                    <div  id="avatar" className="">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_4)">
                                <path d="M20 39.2C30.6039 39.2 39.2 30.6039 39.2 20C39.2 9.39612 30.6039 0.799988 20 0.799988C9.39612 0.799988 0.799988 9.39612 0.799988 20C0.799988 30.6039 9.39612 39.2 20 39.2Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                <path d="M23.9464 28.4224C23.8296 27.1328 23.8744 26.2328 23.8744 25.0544C24.4584 24.748 25.5048 22.7944 25.6816 21.144C26.1408 21.1064 26.8648 20.6584 27.0768 18.8896C27.1912 17.94 26.7368 17.4056 26.46 17.2376C27.2072 14.9904 28.7592 8.03841 23.5896 7.32001C23.0576 6.38561 21.6952 5.91281 19.9248 5.91281C12.8416 6.04321 11.9872 11.2616 13.54 17.2376C13.264 17.4056 12.8096 17.94 12.9232 18.8896C13.136 20.6584 13.8592 21.1064 14.3184 21.144C14.4944 22.7936 15.5824 24.748 16.168 25.0544C16.168 26.2328 16.212 27.1328 16.0952 28.4224C15.0864 31.1344 9.90561 31.3464 6.91681 33.9616C10.0416 37.108 15.1056 39.3584 20.4496 39.3584C25.7936 39.3584 32.0752 35.1392 33.1208 33.988C30.1504 31.3488 24.9576 31.144 23.9464 28.4224Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2_4">
                                    <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div id="arrowDown" className="ml-2">
                        <FontAwesomeIcon className="swap" icon={faAngleDown} />
                    </div>
                </div>
            </a>
        </Dropdown>
    );
}

export default Profile;