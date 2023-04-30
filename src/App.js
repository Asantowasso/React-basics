// Writing functions in this file will allow us to write JSX meaning we can use HTML syntax in our JavaScript

// function App() {
//   return (
//     <div className="container">
//       <h1>My App</h1>
//     </div>
//   );
// }

function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];

  const loading = false;
  const showComments = false;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      {showComments && (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
