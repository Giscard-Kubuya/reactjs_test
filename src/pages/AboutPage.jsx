import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About page</h1>
        <p>This is the about page for this project</p>
        <p>
          Go back to the home page <Link to="/">Back home</Link>{" "}
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
