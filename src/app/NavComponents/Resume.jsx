import Card from "../Utils/Card";

function Resume() {
    const cardData = [
        {
            image: <i class="fa-solid fa-store"></i>,
            title: "E-Commerce App",
            body: "I am planning to develop an E-Commerece App, leveraging Node.js and PostgreSQL for the Server-Side architecture, complemented by React and Redux for the Client-Side implementation.",
        },
        {
            image: <i class="fa-solid fa-infinity"></i>,
            title: "DevOps Fundamentals",
            body: "I aim to gain a comprehensive understanding of DevOps practices, including continuous integration and continuous deployment (CI/CD), infrastructure as code (IaC), and monitoring tools, to streamline the development and deployment process.",
        },
        {
            image: <i class="fa-solid fa-shield-halved"></i>,
            title: "Web Security",
            body: "My goal is to enhance my knowledge of web security principles, covering topics such as secure coding practices, encryption, authentication, and vulnerability assessment to protect applications from threats and breaches.",
        },
        {
            image:  <i class="fa-solid fa-robot"></i>,
            title: 'AI and Machine Learning',
            body: 'As a last goal, I plan to explore the field of AI and machine learning, focusing on building intelligent systems using Python and popular frameworks like TensorFlow and PyTorch.',

        }
    ]
    return (
        <>
        <div className="resumeContainer">
            <div className="CourseContainer">
                    <h1>Courses</h1>
                    <h4>During my spare time between university courses, I dedicated myself to completing the following online courses:</h4>
                    <ul>
                        <a target="_blank" href='https://www.codecademy.com/resources/docs/javascript'><li><span>Complete JavaScript Course, at CodeAcademy</span></li></a>
                        <a target="_blank" href='https://www.codecademy.com/career-journey/front-end-engineer'><li><span>Front-End Engineer Course, at CodeAcademy</span></li></a>
                        <a target="_blank" href='https://www.codecademy.com/learn/paths/back-end-engineer-career-path'><li><span>Back-End Engineer Course, at CodeAcademy</span></li></a>
                        <a target="_blank" href='https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/?couponCode=KEEPLEARNING'><li><span>Complete Guide with .Net Core and React, at Udemy</span></li></a>
                        <a target="_blank" href='https://www.udemy.com/course/full-stack-crash-course/?couponCode=KEEPLEARNING'><li><span>Creating a full-stack Web-App with React, at Udemy</span></li></a>
                        <a target="_blank" href='https://www.udemy.com/course/the-complete-javascript-course/?couponCode=KEEPLEARNING'><li><span>JavaScript Course from Zero, at Udemy</span></li></a>
                        <a target="_blank" href='https://www.linkedin.com/learning/c-sharp-algorithms/improve-your-c-sharp-applications-with-efficient-algorithms'><li><span>C# Algorithms & Deubgging in C#, at Linkedin</span></li></a>
                    </ul>
            </div> 
            <hr/>
            <div>
                <h1>My Skills</h1>
                <h4>Skills gained through my past years of studying from University, Internet and Private Courses.</h4>
                <div className="skillsTable">
                    <p>JavaScript/React/Redux<span>90%</span></p>
                   <div className="container">
                        <div className="skills React"></div>
                   </div>
                    <p>Node.JS/Express<span>70%</span></p>
                   <div className="container">
                        <div className="skills Node"></div>
                   </div>
                   <p>Data Management (SQL, NoSQL)<span>60%</span></p>
                   <div className="container">
                        <div className="skills SQL"></div>
                   </div>
                    <p>Responsive Web Design<span>50%</span></p>
                   <div className="container">
                        <div className="skills Web"></div>
                   </div>
                    <p>Cloud Services (AWS, Azure, Fly)<span>40%</span></p>
                   <div className="container">
                        <div className="skills Cloud"></div>
                   </div>
                    
                </div>
            </div>
            <hr/>
            <div>
                <h1>What's next</h1>
                <h4>In the following section, We will talk about my upcoming projects and courses that I am preparing to undertake.</h4>
                <div className="cardContainer">
                {cardData.map(item => <Card item={item}/>)}
                </div>
            </div>
        </div>
        </>
    )
}
export default Resume;