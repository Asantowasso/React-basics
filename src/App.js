// Writing functions in this file will allow us to write JSX meaning we can use HTML syntax in our JavaScript
import {useState} from 'react'
import Header from "./Components/Header"
import FeedbackItem from "./Components/FeedbackItem"

function App() {
  const [feedback, setFeedback ] = useState()
  return (
    <>
    <Header  />
    <div className="container">
      <FeedbackItem />
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
