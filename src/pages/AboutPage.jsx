import {Link} from 'react-router-dom'
import Card from "../Components/shared/Card"

function AboutPage() {
  return(
    <Card>
      <div className="about">
        <h1>About this page</h1>
        <p>This is a react application where users can leave their feedback</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  )

}

export default AboutPage