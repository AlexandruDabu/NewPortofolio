import React from 'react';
function SideBar() {
    return (
        <>
        <div className="headerSideBar">
            <div className='bitmoji'>
            <img src='/smiling.png' />
            </div>
            <h1>Alexandru Dabuleanu</h1>
            <div className='webDev'><button>Web Developer</button></div>
        </div>
        <hr/>
        <div className="contentSideBar">
            <div className='contentPiece'>
                <i className="fa-regular fa-envelope"></i>
                <span>
                <label>EMAIL</label>
                <p><a href='mailto:alexandrufelix2020@gmail.com'>Alexandrufelix2020@gmail.com</a></p>
                </span>
            </div>

            <div className='contentPiece'>
                <i className="fa-solid fa-phone"></i>
                <span>
                <label>PHONE</label>
                <p><a href='tel:+40756361705'>(+40)756361705</a></p>
                </span>
            </div>

            <div className='contentPiece'>
                <i className="fa-solid fa-calendar-days"></i>
                <span>
                <label>BIRTHDAY</label>
                <p>22.04.2002</p>
                </span>
            </div>

            <div className='contentPiece'>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>
                <label>LOCATION</label>
                <p>Bucharest</p>
                </span>
            </div>
        </div>
        <hr/>
        <div className="footerSideBar">
            <a target="_blank" href='https://www.linkedin.com/in/alexandru-dabuleanu-b47065226/'><i class="fa-brands fa-linkedin"></i></a>
            <a target="_blank" href='https://github.com/AlexandruDabu?tab=repositories'><i class="fa-brands fa-github"></i></a>
            <a target="_blank" href='https://www.instagram.com/felix_alexandru1/'><i class="fa-brands fa-instagram"></i></a>
        </div>
        </>
    )
}

export default SideBar;