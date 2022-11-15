import Reviews from "./Reviews";
import SignCard from "./SignCard";
import SignCollection from "./SignCollection";
import SignForm from "./SignForm";
import React,{useEffect, useState} from "react";

function PageContainer (){

  const [sunSign, setSunSign] = useState([])
  const [reviews, setReviews] = useState("")
    useEffect( () =>{
    fetch ('http://localhost:3001/sunsign')
    .then ( r => r.json())
    .then ( signData => setSunSign(signData) )
    },[])

    useEffect( () =>{
      fetch ('http://localhost:3001/Reviews')
      .then ( r => r.json())
      .then ( reviewData => setReviews(reviewData) )
      },[])
    
    const addReview=(newReview)=>{
      setReviews([...reviews, addReview])
    }
    console.log(reviews)
    const displayReview = () =>{
        return (
          <ul>
          {
          reviews.map(reviewData =>{
            <li>{reviewData.review}</li>
          })
          }
          </ul>
        )
    }
    return (
        <div>
          <SignCollection sunSign={sunSign}/>
          <SignForm/>
          <div>
            {displayReview}
          </div>
          <Reviews addReview = {addReview}/>

        </div>
    )

}
export default PageContainer;