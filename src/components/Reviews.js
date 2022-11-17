import {useState} from "react";
import { Button, Comment, Form, Header, Container, Icon} from 'semantic-ui-react'

function Reviews ({reviews, addReview}){

    const showReviews = reviews.map(reviewData => {
        return (
    
            <Container >
                <Comment >
                <Comment.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QTESaLQXNJDpokdt6XZd3CmvIevt1VKmGQ&usqp=CAU"/>
                    <Comment.Content>
                        <Comment.Author><p class="label">{reviewData.name}</p></Comment.Author>
                        <Comment.Metadata class="metadata">
                           <div>{reviewData.date}</div>
                        </Comment.Metadata>         
                        <Comment.Text ><p class="label">{reviewData.review}</p></Comment.Text>
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
                marginBottom: '30px'
            }}>
                <h1 className="title" >
                🌞WEBSITE REVIEWS🌝
                </h1>
                <hr></hr>
                <br></br>
                <div class="lable"> {showReviews}</div>
            
                <Form reply onSubmit={renderReview}>
                    <Form.Field onChange={handleInput2}>
                    <h5 class="label"> Name:</h5>
                    <input placeholder='First Name' />
                    </Form.Field>
                    <h5 class="label">Date:</h5>
                    <input onChange={handleInput3} type="date" id="start" name="trip-start"
                    value={Date}
                    min="2022-01-01" max="2025-12-31">
                    </input>
                    <h5 class="label">Comment:</h5>
                    <Form.TextArea placeholder="Enter your review..." onChange = {handleInput}/>
                    <Button color="violet" content='Add Review' labelPosition='left' icon='comments' />
                </Form>
            </Comment.Group>
        </div>
    )

}
export default Reviews;
