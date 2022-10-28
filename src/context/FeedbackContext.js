import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc');
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchFeedback();
    }, []);

    const [feedbackEdit, setFeedbackEdit] = useState(
        [
            {
                item: {},
                edit: false
            }
        ]
    );
    // Delete item
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure to delete this item?")) {
            const req = await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' });
            if (req.status === 200) {
                setFeedback(feedback.filter((item) => item.id !== id));
            }
        }
    };
    // Add item

    const addFeddback = async (newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json();

        setFeedback([data, ...feedback]);
    };


    // Edit item
    const editItem = (itm) => {
        setFeedbackEdit({
            item: itm,
            edit: true
        })
    }

    // Update feedback
    const updateFeedback = async(id, updItem) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, 
            {
                 method: 'PUT', 
                 headers: { 'Content-Type': 'application/json'},
                 body:JSON.stringify(updItem) 
            });
        const data = await response.json();
        setFeedback(
            feedback.map((item) => item.id == id ? { ...item, ...data } : item)
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
                updateFeedback,
                isLoading
            }
        }
    >
        {children}
    </FeedbackContext.Provider>);
}

export default FeedbackContext;