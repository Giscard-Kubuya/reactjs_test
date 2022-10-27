import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About page</h1>
        <p>This is the about page for this project</p>
        <p>
          Go back to the home page <a href="/">Back home</a>{" "}
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
