import { Link } from "react-router-dom";

function ErrorPage() {
    return (<>
        <div className="errorPageContainer">
            <div className="errorText">
                <h2>We apologize, but this content is currently unavailable.</h2>
            </div>
            <div className="errorBitmoji">
                <img src="/sad.png"/>
                <button><Link to ='/about'>Go Back</Link></button>
            </div>
        </div>
    </>)
}
export default ErrorPage;