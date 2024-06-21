import ProjectsCard from "../Utils/ProjectsCard"
import LoadingCard from "../Utils/LoadingCard"

function Projects() {
    const data = [
        {
            image: '/Reactivities.jpg',
            body: "A Full-Stack application (React, ASP.NET, PostgreSQL) with authentication features. Users can create, join, and comment on activities, as well as manage their profiles.",
            title: 'Reactivities',
            commingSoon: false,
            link: 'https://reactivitiesdabuleanu.fly.dev/',
        },
        {
            image: '/runGroop.jpg',
            body: 'A Full-Stack application (React, ASP.NET, PostgreSQL) for managing running clubs and races. Users can authenticate, store club&race details, and participate in events. ',
            title: 'RunGroop',
            commingSoon: false,
            link: 'https://runtoday.azurewebsites.net/',
        },
        {
            image: '/Jamming.jpg',
            body: 'A Front-End application (React, Spotify API) allowing users to authenticate via Spotify. Manage playlists by creating, deleting, and modifying tracks.',
            title: 'Jamming',
            commingSoon: false,
            link: 'null',
        },
        {
            image: '/reddit.jpg',
            body: 'A Front-End application ( React & Redux, Reddit API ) displaying the latest posts from Reddit. Users can interact with posts using like and dislike buttons, as well as choose different subreddits to explore.',
            title: 'Mini-Reddit',
            commingSoon: false,
            link: 'null',
        },
        {
            image: '/Ecommerce.jpg',
            body: 'Planned as a full-stack application (React & Redux, Express.js, PostgreSQL) with authentication. Users will be able to securely order items from our online marketplace.',
            title: 'E-Commerce',
            commingSoon: true,
            link: 'null',
        },
    ]
    return (
        <>
        <div className="projectsContainer">
            <div className="projectsText">
                <h2>Below, you will find a comprehensive list of both current and upcoming projects</h2>
            </div>
            <div className="cardContainer">
                {data.map(item => <ProjectsCard key={item.title} item={item}/>)}
            </div>
        </div>
        </>
    )
}

export default Projects