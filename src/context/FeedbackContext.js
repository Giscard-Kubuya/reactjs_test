import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 500,
        rating: 10,
        text: 'Lorem opsum'
    }]);

    const [feedbackEdit, setFeedbackEdit] = useState(
        [
            {
                item: {},
                edit: false
            }
        ]
    )
    // Delete item
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure to delete this item?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    // Add item
    const addFeddback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    // Edit item
    const editItem = (itm) => {
        setFeedbackEdit({
            item: itm,
            edit: true
        })
    }
 
    // Update feedback
    const updateFeedback = (id,updItem)=>{
        setFeedback(
            feedback.map((item)=>item.id==id?{...item,...updItem}:item)
        );
    }

    return (<FeedbackContext.Provider
        value={
            {
                feedback,
                deleteFeedback,
                addFeddback,
                editItem,
                feedbackEdit,
                updateFeedback
            }
        }
    >
        {children}
    </FeedbackContext.Provider>);
}

export default FeedbackContext;