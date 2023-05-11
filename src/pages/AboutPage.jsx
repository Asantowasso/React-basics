import Card from "../Components/shared/Card"

function AboutPage() {
  return(
    <Card>
      <div className="about">
        <h1>About this page</h1>
        <p>This is a react application where users can leave their feedback</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href="/">Back to home</a>
        </p>
      </div>
    </Card>
  )

}

export default AboutPage