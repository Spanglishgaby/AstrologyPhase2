import React, {useState} from 'react'
import { Button, Form, Container, Divider, Label } from 'semantic-ui-react'

function SignForm (){
    const [oneSign, setOneSign] = useState("");
    const [partnerSign, setPartnerSign] = useState("");
    const [showResult, setShowResult] = useState(false)
    const [showMatch, setShowMatch] = useState(false)
    // console.log(oneSign)

    const handleClick= e =>{
        e.preventDefault()
        // console.log("submit")
        setShowResult(!showResult)
    }

    const togglePerfectMatch=()=>{
        setShowMatch(!showMatch)
        console.log(showMatch)
    }
    const displayMatch=()=>{
        switch(oneSign){
            case "Aries":
                return(
                    <>
                        <Label>Leo</Label>
                        <Label>Sagittarius</Label>
                        <Label>Aries</Label>
                    </>
                )
            break;
            case "Taurus":
                return(
                <>
                <Label>Virgo</Label>
                <Label>Capricorn</Label>
                <Label>Taurus</Label>
                </>
                )
            break ;
            case "Gemini":
                return(
                <>
                <Label>Libra</Label>
                <Label>Aquarius</Label>
                <Label>Gemini</Label>
                </>
                )
            break;
            case "Cancer":
                return(
                <>
                <Label>Scorpio</Label>
                <Label>Pisces</Label>
                <Label>Cancer</Label>
                </>
                )
            break;
            case "Leo":
                return(
                <>
                <Label>Aries</Label>
                <Label>Sagittarius</Label>
                <Label>Leo</Label>
                </>
                )
            break;
            case "Virgo":
                return(
                <>
                <Label>Taurus</Label>
                <Label>Capricorn</Label>
                <Label>Taurus</Label>
                </>
                )
            break;
            case "Libra" :
                return(
                <>
                <Label>Gemini</Label>
                <Label>Aquarius</Label>
                <Label>Libra</Label>
                </>
                )
            break;
            case "Scorpio":
                return(
                <>
                <Label>Cancer</Label>
                <Label>Pisces</Label>
                <Label>Scorpio</Label>
                </>
                )
            break;
            case "Sagittarius":
                return(
                <>
                <Label>Aries</Label>
                <Label>Leo</Label>
                <Label>Sagittarius</Label>
                </>
                )
            break;
            case "Capricorn":
                return(
                <>
                <Label>Taurus</Label>
                <Label>Virgo</Label>
                <Label>Capricorn</Label>
                </>
                )
            break;
            case "Aquarius":
                return(
                <>
                <Label>Gemini</Label>
                <Label>Libra</Label>
                <Label>Aquarius</Label>
                </>
            )
            break;
            case "Pisces":
                return(
                <>
                <Label>Cancer</Label>
                <Label>Scorpio</Label>
                <Label>Pisces</Label>
                </>
                )
            break;
            default:
                console.log( "You are the loved one!")
             }
    }

    return (
        <div class="reviewSec">
        <Form onSubmit={handleClick}>
            <Form.Field>
                <label>Enter your sunsign</label>
                <select value= {oneSign} onChange={(e)=>setOneSign(e.target.value)} required>
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
                <label>Enter your partner's sign</label>
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
            <Button color = "violet" type='submit' >Find your SoulMate!</Button>
        </Form>
            {showResult ? (
            <>
                <Divider />
                <Container class="ui container" textAlign='justified'>
                    <p>
                    These two Signs admire one another's dedication and strength, but,
                    while they have this in common as well as a dependable, realistic,
                    somewhat conservative approach to life ({oneSign} more than {partnerSign}),
                    a love relationship between them can go stale fast. The problem. They're
                    actually rather different at their cores. {partnerSign} may begin to find
                    {oneSign} too conservative and restrictive; {oneSign} may start to
                    think {partnerSign} is too lazy and doesn't care enough about career and status.
                    If {partnerSign} can encourage {oneSign} to relax a little and appreciate the fruits
                    of labor, and if {oneSign} can help motivate {partnerSign} to achieve goals and make
                    dreams a reality, their union can be smooth, happy and long-lasting.
                    </p>
                </Container>
            </>
            ) : null}
            <Divider />
            <div>
                <Button color = "pink" onClick={togglePerfectMatch}>FIND What's your perfect match?</Button>
                { showMatch ? <Container class="ui container" textAlign='justified'>{displayMatch()}</Container> : null }
            </div>
        </div>
    )

}
export default SignForm;


// switch({oneSign}){
//     case "Aries":
//         return(
//         <>
//         <Label>Leo</Label>
//         <Label>Sagittarius</Label>
//         <Label>Aries</Label>
//         </>
//         )
//     break;
//     case "Taurus":
//         return(
//         <>
//         <Label>Virgo</Label>
//         <Label>Capricorn</Label>
//         <Label>Taurus</Label>
//         </>
//         )
//     break ;
//     case "Gemini":
//         return(
//         <>
//         <Label>Libra</Label>
//         <Label>Aquarius</Label>
//         <Label>Gemini</Label>
//         </>
//         )
//     break;
//     case "Cancer":
//         return(
//         <>
//         <Label>Scorpio</Label>
//         <Label>Pisces</Label>
//         <Label>Cancer</Label>
//         </>
//         )
//     break;
//     case "Leo":
//         return(
//         <>
//         <Label>Aries</Label>
//         <Label>Sagittarius</Label>
//         <Label>Leo</Label>
//         </>
//         )
//     break;
//     case "Virgo":
//         return(
//         <>
//         <Label>Taurus</Label>
//         <Label>Capricorn</Label>
//         <Label>Taurus</Label>
//         </>
//         )
//     break;
//     case "Libra" :
//         return(
//         <>
//         <Label>Gemini</Label>
//         <Label>Aquarius</Label>
//         <Label>Libra</Label>
//         </>
//         )
//     break;
//     case "Scorpio":
//         return(
//         <>
//         <Label>Cancer</Label>
//         <Label>Pisces</Label>
//         <Label>Scorpio</Label>
//         </>
//         )
//     break;
//     case "Sagittarius":
//         return(
//         <>
//         <Label>Aries</Label>
//         <Label>Leo</Label>
//         <Label>Sagittarius</Label>
//         </>
//         )
//     break;
//     case "Capricorn":
//         return(
//         <>
//         <Label>Taurus</Label>
//         <Label>Virgo</Label>
//         <Label>Capricorn</Label>
//         </>
//         )
//     break;
//     case "Aquarius":
//         return(
//         <>
//         <Label>Gemini</Label>
//         <Label>Libra</Label>
//         <Label>Aquarius</Label>
//         </>
//     )
//     break;
//     case "Pisces":
//         return(
//         <>
//         <Label>Cancer</Label>
//         <Label>Scorpio</Label>
//         <Label>Pisces</Label>
//         </>
//         )
//     break;
//     default:
//     console.log( "You are the loved one!")
//     }
