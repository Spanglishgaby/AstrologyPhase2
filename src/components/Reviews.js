import {useState} from "react";
// import { Button, Comment, Form } from 'semantic-ui-react'

function Reviews ({reviews, addReview}){

  const showReviews = reviews.map(reviewData => {
                return (
                    <div>
                        <li> {reviewData.name} </li>
                        <h3> {reviewData.review} </h3>
                        <p> {reviewData.date} </p>
                    </div>
                    )
                })

// const renderSign= sunSign.map((signData)=>{
//     return(
//         <SignCard key ={signData.id} signData = {signData}/>
//     )
// })

    // const showReviews=()=>{
    //     return (
    //         <ul>
    //         {
    //             reviews.map(reviewData => (<li>{reviewData.review}</li>))
    //         }
    //         </ul>
    //    )
    // }

    const [text, setText] = useState("")

    const handleInput = e =>{
        setText(e.target.value)
    }

    const renderReview =()=>{
      const newReview = {
        name : "fake name",
        review: text,
        date: "Nov. 16"
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
        <div class="reviewSec">
            <div id="showReview">{showReviews}</div>
            <form onSubmit={renderReview}>
            <textarea placeholder="Enter your review..." onChange = {handleInput}></textarea>
            <button value = "submit">Add a review</button>
            </form>
        </div>
    )

}
export default Reviews;
