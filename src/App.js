// Writing functions in this file will allow us to write JSX meaning we can use HTML syntax in our JavaScript

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutIconLink from "./Components/AboutIconLink";

import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  

  

  

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
            <FeedbackForm  />
            <FeedbackStats />
            <FeedbackList  />
            
            </>

          }>
            
          </Route>
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
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
