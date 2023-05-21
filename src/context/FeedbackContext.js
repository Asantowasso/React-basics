import { v4 as uuidv4 } from "uuid";

import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is the first feedback item',
      rating: 10,
    },

    {
      id: 2,
      text: 'This is the second feedback item',
      rating: 7,
    },

    {
      id: 3,
      text: 'This is the third feedback item',
      rating: 4,
    }

  ])

  const [feedbackEdit, setFeedbackEdit] = useState ({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

    //This is what allows the item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit ({
      item,
      edit: true
    })
  }


  return <FeedbackContext.Provider
    value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
    }}
  >
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext