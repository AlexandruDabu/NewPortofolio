function Education() {
    return (
        <>
        <div className="educationContainer">
        <h1>Highschool</h1>
            <div className="University">
            <img className="uniLogo" src="..\src\assets\sigla-1.webp"/>
            <div className="uniText">
                <h4>Alexandru Ioan Cuza National College, Corabia, Olt, Romania</h4>
                <h5>Mathematics and Informatics</h5>
            </div>
            </div>
            <hr/>
            <h1>University</h1>
            <div className ="University">
                <img className="uniLogo" src="..\src\assets\sigla-1.webp"/>
                <div className="uniText">
                <h4>University of Titu Maiorescu, Bucharest, Romania</h4>
                <h5>Faculty Of Informatics</h5>
                </div>
            </div>
            <hr/>
            <h1>Master (Comming Soon)</h1>
            <div className ="University">
                <img className="uniLogo" src="..\src\assets\tansilvania.png"/>
                <div className="uniText">
                <h4>Thinking of University of Transilvania, Brasov, Romania</h4>
                <h5>Master in Web Developing ( English )</h5>
                </div>
            </div>
        </div>
        </>
    )
}
export default Education;