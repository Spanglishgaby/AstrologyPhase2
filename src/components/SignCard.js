import { Card, Icon, Image, Button } from 'semantic-ui-react';
import {useState} from "react";

function SignCard ({signData}){
  // console.log(signData.image)
    const [showDetail, setShowDetail] = useState (false)
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
              <Card.Header>{signData.sign}</Card.Header>
              {/* <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta> */}
              <Card.Description textAlign='center'>
              <p><b>Lucky Day:</b> {signData.luckyDay}</p>
              
              <b>Discover your Daily Horoscope</b>  
              <Button color='violet' primary size='small' circular centered>
                Click here!  
                {/* <Icon name='star' /> */}
              </Button>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            {/* // make this like and count */}
            <a>
            <Icon name='like' /> 
            22 Love it!
            </a>
            </Card.Content>
          </Card>)
      }
    </>
   )
 }

        // <div className="signCard">
        //     <img src="null" alt ="name" />
        //     <p>{signData.sign}</p>
        //     <div>
        //         <p>{signData.symbol}</p>
        //         <p>{signData.planet}</p>
        //         <p>{signData.luckDay}</p>
        //         <p>{signData.color}</p>
        //         <p>{signData.flower}</p>
        //         <p>{signData.animal}</p>
        //     </div>
        // </div>



export default SignCard;
