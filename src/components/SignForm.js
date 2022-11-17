import React, {useState} from 'react'
import { Button, Form, Container, Divider, Label, Grid } from 'semantic-ui-react'

function SignForm (){
    const [oneSign, setOneSign] = useState("");
    const [partnerSign, setPartnerSign] = useState("");
    const [showMatch, setShowMatch] = useState(false)
    const [currentMatch, setCurrentMatch]= useState({choose:""})
    // console.log(oneSign)
  
    const togglePerfectMatch=()=>{
        setShowMatch(!showMatch)
        // console.log(showMatch)
    }
   
    const displayMatch=()=>{
        switch(oneSign){
            case "Aries":
                return(
                <>
                <br></br>
                <Label as='a' color='red' size="large"  image horizontal>
                    <img src={require("../images/leologo.jpg")}/> 
                        Leo
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                <Label as='a' color='red' size="large"  image horizontal>
                    <img src={require("../images/sagittariuslogo.jpg")}/> 
                    Sagittarius
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                <Label as='a' color='red' size="large"  image horizontal>
                    <img src={require("../images/arieslogo.jpg")}/> 
                    Aries
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                </>
                )
            break;
            case "Taurus":
                return(
                <>
                   <br></br>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/virgologo.jpg")}/> 
                    Virgo
                    <Label.Detail>earth</Label.Detail>  
                </Label>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/capricornlogo.jpg")}/> 
                    Capricorn
                    <Label.Detail>earth</Label.Detail>  
                </Label>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/tauruslogo.jpg")}/> 
                    Taurus
                    <Label.Detail>earth</Label.Detail>  
                </Label>
                </>
                )
            break ;
            case "Gemini":
                return(
                <>
                   <br></br>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/libralogo.jpg")}/> 
                    Libra
                    <Label.Detail>air</Label.Detail>  
                </Label>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/aquariuslogo.jpg")}/> 
                    Aquarius
                    <Label.Detail>air</Label.Detail>  
                </Label>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/geminilogo.jpg")}/> 
                    Gemini
                    <Label.Detail>air</Label.Detail>  
                </Label>
                </>
                )
            break;
            case "Cancer":
                return(
                <>
                   <br></br>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/scorpiologo.jpg")}/> 
                    Scorpio
                <Label.Detail>water</Label.Detail>
                </Label>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/pisceslogo.jpg")}/> 
                    Pisces
                <Label.Detail>water</Label.Detail>
                </Label>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/cancerlogo.jpg")}/> 
                    Cancer
                <Label.Detail>water</Label.Detail>
                </Label>
                </>
                )
            break;
            case "Leo":
                return(
                <>
                   <br></br>
                <Label as='a' color='red' size="large"  image>
                    <img src={require("../images/arieslogo.jpg")}/> 
                    Aries
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                <Label as='a' color='red' size="large"  image>
                    <img src={require("../images/sagittariuslogo.jpg")}/> 
                    Sagittarius
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                <Label as='a' color='red' size="large"  image>
                    <img src={require("../images/leologo.jpg")}/> 
                        Leo
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                </>
                )
            break;
            case "Virgo":
                return(
                <>
                   <br></br>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/tauruslogo.jpg")}/> 
                    Taurus
                    <Label.Detail >earth</Label.Detail>  
                </Label>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/capricornlogo.jpg")}/> 
                    Capricorn
                    <Label.Detail >earth</Label.Detail>  
                </Label>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/virgologo.jpg")}/> 
                    Virgo
                    <Label.Detail >earth</Label.Detail>  
                </Label>
                </>
                )
            break;
            case "Libra" :
                return(
                <>
                   <br></br>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/geminilogo.jpg")}/> 
                    Gemini
                    <Label.Detail>air</Label.Detail>  
                </Label>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/aquariuslogo.jpg")}/> 
                    Aquarius
                    <Label.Detail>air</Label.Detail>  
                </Label>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/libralogo.jpg")}/> 
                    Libra
                    <Label.Detail>air</Label.Detail>  
                </Label>
                </>
                )
            break;
            case "Scorpio":
                return(
                <>
                   <br></br>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/cancerlogo.jpg")}/> 
                    Cancer
                <Label.Detail>water</Label.Detail>
                </Label>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/pisceslogo.jpg")}/> 
                    Pisces
                <Label.Detail>water</Label.Detail>
                </Label>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/scorpiologo.jpg")}/> 
                    Scorpio
                <Label.Detail>water</Label.Detail>
                </Label>
                </>
                )
            break;
            case "Sagittarius":
                return(
                <>
                   <br></br>
                <Label as='a' color='red' size="large"  image>
                    <img src={require("../images/arieslogo.jpg")}/> 
                    Aries
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                <Label as='a' color='red' size="large"  image>
                    <img src={require("../images/leologo.jpg")}/> 
                        Leo
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                <Label as='a' color='red' size="large"  image>
                    <img src={require("../images/sagittariuslogo.jpg")}/> 
                    Sagittarius
                    <Label.Detail >fire</Label.Detail>  
                </Label>
                </>
                )
            break;
            case "Capricorn":
                return(
                <>
                   <br></br>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/tauruslogo.jpg")}/> 
                    Taurus
                    <Label.Detail >earth</Label.Detail>  
                </Label>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/virgologo.jpg")}/> 
                    Virgo
                    <Label.Detail >earth</Label.Detail>  
                </Label>
                <Label as='a' color='brown' size="large"  image>
                    <img src={require("../images/capricornlogo.jpg")}/> 
                    Capricorn
                    <Label.Detail >earth</Label.Detail>  
                </Label>
                </>
                )
            break;
            case "Aquarius":
                return(
                <>
                   <br></br>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/geminilogo.jpg")}/> 
                    Gemini
                    <Label.Detail>air</Label.Detail>  
                </Label>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/libralogo.jpg")}/> 
                    Libra
                    <Label.Detail>air</Label.Detail>  
                </Label>
                <Label as='a' color='blue' size="large"  image>
                    <img src={require("../images/aquariuslogo.jpg")}/> 
                    Aquarius
                    <Label.Detail>air</Label.Detail>  
                </Label>
                </>
            )
            break;
            case "Pisces":
                return(
                <>
                   <br></br>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/cancerlogo.jpg")}/> 
                    Cancer
                <Label.Detail>water</Label.Detail>  
                </Label>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/scorpiologo.jpg")}/> 
                    Scorpio
                <Label.Detail>water</Label.Detail>
                </Label>
                <Label as='a' color='teal' size="large"  image>
                    <img src={require("../images/pisceslogo.jpg")}/> 
                    Pisces
                <Label.Detail>water</Label.Detail>
                </Label>
                </>
                )
            break;
            default:
               return (
               <>
               <br></br>
               <Label color='yellow' size="huge">You are the loved one!</Label>
               </>
               )
             }
    }

    const arrayOfMatch = [
    {
       choose:`These two Signs admire one another's dedication and strength, but,
        while they have this in common as well as a dependable, realistic,
        somewhat conservative approach to life ${oneSign} more than ${partnerSign}),
        a love relationship between them can go stale fast. The problem. They're
        actually rather different at their cores. ${partnerSign} may begin to find
        ${oneSign} too conservative and restrictive; ${oneSign} may start to
        think ${partnerSign} is too lazy and doesn't care enough about career and status.
        If ${partnerSign} can encourage ${oneSign} to relax a little and appreciate the fruits
        of labor, and if ${oneSign} can help motivate ${partnerSign} to achieve goals and make
        dreams a reality, their union can be smooth, happy and long-lasting.`
    },{
       choose:`${oneSign} is a more cautious, rational outlook on life, while ${partnerSign} is insatiable,
        fostering an idealistic approach to nearly everything. On the surface, they may seem like total
        opposites, but once these two set eyes on one another, an unbreakable bond is formed. On the surface,
        they may seem like total opposites, but once these two set eyes on one another, an unbreakable bond 
        is formed. Both ${oneSign} and ${partnerSign} can be opinionated to the point of seeming unwilling to 
        compromise. ${oneSign} thrives on organization and is always looking for consequences. ${partnerSign}
        is modern and finds routine troublesome and boring. ${oneSign} will find wonder in Aquarius, but may 
        get frustrated trying to find a stitch of logic in their partner's desultory, mystical mind. Aquarius
        will not appreciate the domineering streak in their partner, but will find the solid base that ${oneSign} 
        provides to be a great support and will be relieved that someone will help them to take care of their 
        personal matters.` 
    }
    ]
    const getRandomMatch =()=> {
        return arrayOfMatch[Math.floor(Math.random() * arrayOfMatch.length)]
    }
       
    const handleClick= e =>{
        e.preventDefault()
        const renderMatch = getRandomMatch()
        setCurrentMatch(renderMatch )
    }

    return (
        <div class="reviewSec" >
                 <h1 className="title" >
                 💖 💌 LOVE COMPATIBILITY ❤️️💘
                </h1>
                <hr></hr>
                <br></br>
        <Form onSubmit={handleClick}>
            <Form.Field>
                <h4 class="label">Enter your sunsign</h4>
                <select value= {oneSign} onChange={e=>{setOneSign(e.target.value)}} required>
                {/* <select onChange={e=>{console.log(e.target.value)}}> */}
                    <option> </option>
                    <option>Aries</option>
                    <option>Taurus</option>
                    <option>Gemini</option>
                    <option>Cancer</option>
                    <option>Leo</option>
                    <option>Virgo</option>
                    <option>Libra</option>
                    <option>Scorpio</option>
                    <option>Sagittarius</option>
                    <option>Capricorn</option>
                    <option>Aquarius</option>
                    <option>Pisces</option>
                </select>
            </Form.Field>
            <Form.Field>
                <h4 class="label">Enter your partner's sign</h4>
                <select value= {partnerSign} onChange={(e)=>setPartnerSign(e.target.value)} required>
                    <option> </option>
                    <option>Aries</option>
                    <option>Taurus</option>
                    <option>Gemini</option>
                    <option>Cancer</option>
                    <option>Leo</option>
                    <option>Virgo</option>
                    <option>Libra</option>
                    <option>Scorpio</option>
                    <option>Sagittarius</option>
                    <option>Capricorn</option>
                    <option>Aquarius</option>
                    <option>Pisces</option>
                </select>
            </Form.Field>
            <br></br>
            <Button color = "violet" type='submit' >Find your SoulMate!</Button>
            <br></br>
            
        </Form>
        <Container class="ui container" textAlign='justified'>
        <br></br>
            <p class="description">  
            {currentMatch.choose}
            </p>
        </Container>
        
        <Divider />
        <div>
            <Grid.Column>
            <Button color = "pink" onClick={togglePerfectMatch}>FIND What's your perfect match?</Button>  
                { showMatch ? <Container class="ui container" textAlign='justified'>{displayMatch()}</Container> : null }
            </Grid.Column>   
            <br></br>
        </div>
        </div>
    )

}
export default SignForm;
