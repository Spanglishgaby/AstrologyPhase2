import {useState} from "react";
import { Button, Comment, Form } from 'semantic-ui-react'

function Reviews ({reviews, addReview}){

//   const showreviews= reviews.map(reviewData => (
//                 return ( <li>{reviewData.review}</li>)
//               ))
      
    const [text, setText] = useState("")
    
    const handleInput = e =>{
        setText(e.target.value)    
    }

    const renderReview =()=>{
      const newReview = {
        review: text
      }
      fetch ('http://localhost:3001/Reviews',{
          method: 'POST',
          headers: {
         'Content-Type': 'application/json'
          },
          body: JSON.stringify(newReview)
          })
        .then ( r => r.json())
        .then ( addReview (newReview))
    }

    return (
        <div>
            <form onSubmit={renderReview}>
            <textarea placeholder="Enter your review..." onChange = {handleInput}></textarea>
            <button value = "submit">Add a review</button>
            </form>
        </div>
    )

}
export default Reviews;