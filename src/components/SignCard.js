import { Card, Icon, Image, Button, CardContent } from 'semantic-ui-react';
import {useState} from "react";
import { Link } from "react-router-dom"

function SignCard ({signData}){
  // console.log(signData.image)
    const [showDetail, setShowDetail] = useState (false)

    const [likes, setLike]= useState(signData.like)
    
    const handlelike =()=>{
      setLike(likes + 1)
    }
    // let cardImage = require(signData.image)

    const handleShowDetail=()=>{
        setShowDetail(!showDetail)
    }
    return (
    <>
      {showDetail ? (
          <Card onClick={handleShowDetail}>
            <Card.Content >
                <Card.Header>{signData.sign}</Card.Header>
                <Card.Description>
                  <p><b>Symbol:</b> {signData.symbol}</p>
                  <p><b>Planet:</b> {signData.planet}</p>
                  <p><b>Color:</b> {signData.color}</p>
                  <p><b>Flower:</b> {signData.flower}</p>
                  <p><b>Animal:</b> {signData.animal}</p>
                </Card.Description>
            </Card.Content>
          </Card>

        ):(
          <Card>
            <Image onClick={handleShowDetail} src={require(`../images/${signData.sign.toLowerCase()}.png`)}  />
            <Card.Content>
              <Card.Header textAlign='center'>{signData.sign}</Card.Header>
              <Card.Meta textAlign='center'>
                <span>{signData.date}</span>
              </Card.Meta>
              <Card.Description textAlign='center'>
              <p><b>Lucky Day:</b> {signData.luckyDay}</p>
              </Card.Description>
            </Card.Content>
            <CardContent textAlign='center'>
           
              <Button color="violet"  size='small' circular centered>
                <a class="label" href="/horoscope">
                 Check Out Your Daily Horoscope 
                </a>
              </Button>
            </CardContent>
            <Card.Content extra>
            {/* // make this like and count */}
            <a onClick={handlelike}>
            <Icon name='like'/> 
             {likes} Love it!
            </a>
            </Card.Content>
          </Card>)
      }
    </>
   )
 }




export default SignCard;
