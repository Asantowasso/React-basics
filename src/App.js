// Writing functions in this file will allow us to write JSX meaning we can use HTML syntax in our JavaScript
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from './Components/FeedbackForm'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback ] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

const deleteFeedback = (id) => {
  if(window.confirm('are you sure?')){
    setFeedback(feedback.filter((item) => item.id !== id)) 

  }
 
}

  return (
    <>
    <Header  />
    <div className="container">
      <FeedbackForm handleAdd ={addFeedback}/>
      <FeedbackStats feedback = {feedback} />
      <FeedbackList feedback={feedback} 
      handleDelete={deleteFeedback}
      />
    </div>
    </>
  );
}





// function App() {
//   const title = "Blog Post";
//   const body = "This is my blog post";
//   const comments = [
//     { id: 1, text: "comment one" },
//     { id: 2, text: "comment two" },
//     { id: 3, text: "comment three" },
//   ];

//   const loading = false;
//   const showComments = false;

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div className="container">
//       <h1>{title}</h1>
//       <p>{body}</p>

//       {showComments && (
//         <div className="comments">
//           <h3>Comments ({comments.length})</h3>
//           <ul>
//             {comments.map((comment, index) => (
//               <li key={index}>{comment.text}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
