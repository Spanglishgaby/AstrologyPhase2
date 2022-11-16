import {useState} from "react";
import { Button, Comment, Form, Header } from 'semantic-ui-react'

function Reviews ({reviews, addReview}){

    const showReviews = reviews.map(reviewData => {
        return (
            // <div>
            //     <p> {reviewData.name} </p>
            //     <p> {reviewData.review} </p>
            //     <p> {reviewData.date} </p>
            // </div>

            <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
            <Comment.Author as='a'>{reviewData.name}</Comment.Author>
            <Comment.Metadata>
                <div>{reviewData.date}</div>
            </Comment.Metadata>
            <Comment.Text>{reviewData.review}</Comment.Text>
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
            </Comment.Content>
            </Comment>
        )
    })

    const [text, setText] = useState("")

    const handleInput = e =>{
        setText(e.target.value)
        console.log(e.target)
    }

    const renderReview = () =>{
      const newReview = {
        name : "fake name",
        review: text,
        date: "Nov. 16"
      }
      fetch ('http://localhost:4000/Reviews',{
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
            <Comment.Group>
                <Header as="h2" dividing>
                    WEBSITE REVIEWS
                </Header>
                <> {showReviews}</>
                <Form reply onSubmit={renderReview}>
                    <Form.TextArea placeholder="Enter your review..." onChange = {handleInput}/>
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Group>
        </div>

        // <div class="reviewSec">
        //     <div id="showReview">{showReviews}</div>
        //     {/* <div id="showReview"> HI</div> */}
        //     <form onSubmit={renderReview}>
        //     <textarea placeholder="Enter your review..." onChange = {handleInput}></textarea>
        //     <button value = "submit">Add a review</button>
        //     </form>
        // </div>
    )

}
export default Reviews;
