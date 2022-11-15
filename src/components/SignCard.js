import { Card, Icon, Image } from 'semantic-ui-react';
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
                  <p>Symbol: {signData.symbol}</p>
                  <p>Planet: {signData.planet}</p>
                  <p>Luck Color: {signData.color}</p>
                  <p>Flower: {signData.flower}</p>
                  <p>Animal: {signData.animal}</p>
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
              <Card.Description>
              <p>Lucky Day: {signData.luckyDay}</p> 
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
            <Icon name='like' />
            22 Friends
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
