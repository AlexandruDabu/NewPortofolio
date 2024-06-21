import { Link } from "react-router-dom";
import Card from "../Utils/Card";

function About() {
    const data = [
        {
            image: <i class="fa-solid fa-palette"></i>,
            title: 'Front-End',
            body: 'Crafting intuitive user interfaces with React and Redux for state management. Styling with Tailwind CSS ensures responsive, sleek, and modern designs.',
        },
        {
            image: <i class="fa-solid fa-server"></i>,
            title: 'Back-End',
            body: 'Building robust and scalable server-side applications with Node.js. Expertise in developing RESTful APIs and handling real-time data processing.',
        },
        {
            image: <i class="fa-solid fa-microscope"></i>,
            title: 'API Testing',
            body: 'Proficient in using Postman for efficient API testing and documentation. Facilitating seamless integration and smooth collaboration between frontend and backend teams',
        },
        {
            image: <i class="fa-solid fa-cloud"></i>,
            title: 'CloudServices',
            body: 'Deploying and managing applications on cloud platforms like AWS, Azure or Fly, ensuring high availability and scalability.',
        },
    ]
    return(
        <div className="containerAbout">
        <div className="mainContentAbout">
            <h3>Hi, I'm Alex!</h3>
            <p>As a student I'm aiming to advance my programming skills, currently seeking
                internship opportunities in the web development field.
                </p>
                <p>I am open to various roles
                and projects that would facilitate my learning journey and allow me to gain valuable
                experience and meet new opportunities.
                </p>
                <p>I approach tasks with professionalism and eagerness to learn, making me
                a committed candidate ready to contribute effectively to your team.</p>
            <h4>For more information about my skills, let's dive into <Link className="linkToResume" to='/resume'>My Resume!</Link></h4>
        </div>
        <hr className="hrAbout"/>
        <div className="aboutSkills">
            <h3>What I'm Doing</h3>
            <div className="cardContainer">
                {data.map(item => (
                    <Card key={item.title} item={item}/>
                ))}
            </div>
        </div>
        </div>
    )
}
export default About;