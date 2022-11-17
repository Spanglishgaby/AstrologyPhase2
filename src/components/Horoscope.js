import React,{useState} from "react";
import { getRandomHoroscope } from "../data/dailyHoroscope";
import { Button, Form, Container, Divider, Label,Image, Header } from 'semantic-ui-react'



function Horoscope (){
    const [currentHoroscope, setCurrentHoroscope]= useState({Horoscope: ""})
    console.log(currentHoroscope)
    
    function handleChange() {
        const randomHoroscope = getRandomHoroscope();
        //   console.log("Horoscope", randomHoroscope)
        setCurrentHoroscope(randomHoroscope)
    }
      
    return(
        <div class="reviewSec">
           <h1 class="title">DISCOVER YOUR DAILY ✨HOROSCOPE✨</h1>
           <hr></hr>
           <Form >
            <Form.Field>
                <h3 class="label">Enter your SunSign</h3>
                <select onChange={handleChange} >
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
            <Container >   
                <p class="descript">{currentHoroscope.Horoscope}</p>
            </Container>
            </Form>
          
        
        </div>
    )
}

export default Horoscope;