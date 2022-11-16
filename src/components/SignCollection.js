import SignCard from "./SignCard";
// import { Card, Button, Dimmer, Header, Image} from 'semantic-ui-react'
import { Card} from 'semantic-ui-react'

function SignCollection ({sunSign}){

    const renderSign= sunSign.map((signData)=>{
        return(
            <SignCard key ={signData.id} signData = {signData}/>
        )
    })

    return (

         <Card.Group itemsPerRow={4}>
          {renderSign}
          </Card.Group>

    )

}
export default SignCollection;
