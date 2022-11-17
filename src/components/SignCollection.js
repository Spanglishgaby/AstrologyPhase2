import SignCard from "./SignCard";
// import { Card, Button, Dimmer, Header, Image} from 'semantic-ui-react'
import { Card, Container} from 'semantic-ui-react'

function SignCollection ({sunSign}){

    const renderSign= sunSign.map((signData)=>{
        return(
            <SignCard key ={signData.id} signData = {signData}/>
        )
    })

    return (
        <Container style={{marginTop:"50px"}}>
         <h1 class="title" center >Click in your ✨SUN SIGN✨ to learn more about:</h1>
         <Card.Group stackable itemsPerRow={4}
         style={{
            marginBottom:'100px',
            marginTop:'50px',
            marginRight:'50px',
            marginLeft:'50px'
         }}>
          {renderSign}
          </Card.Group>
          </Container>
    )

}
export default SignCollection;
