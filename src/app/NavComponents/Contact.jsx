"use client";
import mapStyle from './data';
import {
    APIProvider, InfoWindow, Map,
    Pin, Marker
} from '@vis.gl/react-google-maps'
import { useState } from 'react';
function Contact() {      
    const position = { lat: 44.4172325, lng: 26.1859026};
    const [open, setOpen] = useState(false);
    return(
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <div className='contactContainer'>
            <div className='googleMap'>
                <Map
                defaultCenter={position} 
                options={{styles: mapStyle}}
                defaultZoom={15}
                >
                    <Marker position={position} onClick={() => setOpen(!open)} >
                        <Pin 
                        background={'grey'}
                        borderColor={"black"}
                        glyphColor={"black"}
                        />
                    </Marker>
                    {open && <InfoWindow position={position}>
                            <p>Street: Drumul Gura Sirului</p>
                            <p>Number: 81-83</p>
                            <p>Building: 2, Floor.1 Ap.30</p>
                        </InfoWindow>}
                </Map>
            </div>
            <hr/>
            <div className='contactText'>
                <h2>You can reach me at any of the following contact options</h2>
                <div className='contactsForm'>
                    <a href='mailto:alexandrufelix2020@gmail.com'>
                    <div className='contactBloc'>
                    <a><span><i class="fa-regular fa-envelope"></i><p>Alexandrufelix2020@gmail.com</p></span></a>
                    </div>
                    </a>
                    <a href='tel:+40756361705'>
                    <div className='contactBloc'>
                    <a><span><i class="fa-solid fa-phone"></i><p>(+40)756361705</p></span></a>
                    </div>
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/alexandru-dabuleanu-b47065226/'>
                    <div className='contactBloc'>
                    <a><span><i class="fa-brands fa-linkedin"></i><p>Alexandru Dabuleanu</p></span></a>
                    </div>
                    </a>
                    <a target='_blank' href='https://www.google.ro/maps/place/Drumul+Gura+Siriului+83,+Bucure%C8%99ti/@44.4172325,26.1859026,17z/data=!3m1!4b1!4m5!3m4!1s0x40b1fc1b17f86919:0x7e1cf1b2fd02abeb!8m2!3d44.4172287!4d26.1884775?hl=ro&entry=ttu'>
                    <div className='contactBloc'>
                    <a><span><i class="fa-solid fa-location-dot"></i><p>Bucharest, Romania</p></span></a>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        </APIProvider>
    )
}

export default Contact;

