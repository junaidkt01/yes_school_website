import "@/components/layout/layout.scss"

const FoundersMessage = () => {
    return (
        <div className="found_message_section" >
            <div className="founder_details" >
                <div className="founder_img" ><img src="founder_img01.png" alt="" /></div>
                <div className="founder_details_text" >
                    <p className="founder_name" >Shoukath Naeemi Al Bukhari</p>
                    <p className="position" >Managing Director</p>
                </div>
            </div>
            <div className="message_box" >
                <h2>Founder's message</h2>
                <div>
                    <p>Mere education is not the solution for contemporary India, nor for the recent world. It solves problems, but only when it is alloyed with human values. Therefore, value-based education is the best development any country can fearlessly invest in. It is also the best service anyone can find everlasting satisfaction in.</p>
                    <p>Still, villages of our proud India miss it. This is because India is beyond calculations. YES India Foundation stands for value-based education, to bring up the best leaders of the next generation</p>
                    <p>Inviting you too to join us.</p>
                </div>
            </div>

            <svg className="qoutes_icon" width="189" height="129" viewBox="0 0 229 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.625 1.5H71.5625C78.7642 1.5 85.6658 4.31565 90.751 9.31934C95.8353 14.3222 98.6875 21.1024 98.6875 28.167V98.583C98.6875 116.853 91.3115 134.38 78.1748 147.307C65.0374 160.234 47.2143 167.5 28.625 167.5H14.3125C10.9067 167.5 7.64516 166.168 5.24414 163.806C2.84409 161.444 1.50009 158.246 1.5 154.917C1.5 151.588 2.84395 148.389 5.24414 146.027C7.64515 143.665 10.9067 142.333 14.3125 142.333H28.625C40.4028 142.333 51.7026 137.729 60.0381 129.527C68.3743 121.325 73.0625 110.194 73.0625 98.583V97.083H28.625C21.4234 97.083 14.5216 94.2681 9.43652 89.2646C4.35229 84.2618 1.50009 77.4814 1.5 70.417V28.167L1.50879 27.5049C1.68097 20.6799 4.51119 14.1658 9.43652 9.31934C14.5217 4.31565 21.4233 1.5 28.625 1.5ZM157.438 1.5H200.375C207.577 1.5 214.478 4.31564 219.563 9.31934C224.648 14.3222 227.5 21.1024 227.5 28.167V98.583C227.5 116.853 220.124 134.38 206.987 147.307C193.85 160.234 176.027 167.5 157.438 167.5H143.125C139.719 167.5 136.458 166.168 134.057 163.806C131.657 161.444 130.313 158.246 130.312 154.917C130.312 151.588 131.656 148.389 134.057 146.027C136.458 143.665 139.719 142.333 143.125 142.333H157.438C169.215 142.333 180.515 137.729 188.851 129.527C197.187 121.325 201.875 110.194 201.875 98.583V97.083H157.438C150.236 97.083 143.334 94.2681 138.249 89.2646C133.165 84.2618 130.313 77.4814 130.312 70.417V28.167C130.312 21.1024 133.165 14.3222 138.249 9.31934C143.334 4.31564 150.236 1.5 157.438 1.5Z" stroke="white" stroke-opacity="0.2" stroke-width="3" />
            </svg>

        </div>
    )
}

export default FoundersMessage
