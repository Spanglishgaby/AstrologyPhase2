import {useState} from "react";
import { Button, Comment, Form, Header, Container} from 'semantic-ui-react'

function Reviews ({reviews, addReview}){

    const showReviews = reviews.map(reviewData => {
        return (
            <Container >
                <Comment >
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
            <Comment.Author as='a'>{reviewData.name}</Comment.Author>
            <Comment.Metadata>
                <div>{reviewData.date}</div>
            </Comment.Metadata>
            <Comment.Text>{reviewData.review}
            </Comment.Text>
            <Comment.Actions>
                <Comment.Action></Comment.Action>
            </Comment.Actions>
            </Comment.Content>
            </Comment>
            </Container>
            
        )
    })

    const [text, setText] = useState("")
    const [name, setName] = useState("")
    const [Date, setDate] = useState("")

    const handleInput = e =>{
        setText(e.target.value)
       // console.log(e.target)
    }
    const handleInput2 = e =>{
        setName(e.target.value)
        //console.log(e.target)
    }
    const handleInput3 = e =>{
        setDate(e.target.value)
        //console.log(e.target)
    }

    const renderReview = () =>{
      const newReview = {
        name : name,
        review: text,
        date: Date
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
            <Comment.Group style={{
                marginTop: '30px',
                marginBottom: '100px'
            }}>
                <Header color='yellow' as="h2" dividing >
                    WEBSITE REVIEWS
                </Header>
                <> {showReviews}</>
              
                <Form reply onSubmit={renderReview}>
                    <Form.Field onChange={handleInput2}>
                    <label>Name:</label>
                    <input placeholder='First Name' />
                    </Form.Field>
                    <label>Date:</label>
                    <input onChange={handleInput3} type="date" id="start" name="trip-start"
                    value={Date}
                    min="2022-01-01" max="2025-12-31">
                    </input>
                    <label>Comment:</label>
                    <Form.TextArea placeholder="Enter your review..." onChange = {handleInput}/>
                    <Button color="violet" content='Add Review' labelPosition='left' icon='edit' primary />
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
