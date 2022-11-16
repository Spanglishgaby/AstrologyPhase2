import React from "react";
import { getRandomHoroscope } from "../data/dailyHoroscope";
import { Button, Form, Container, Divider, Label,Image, Header } from 'semantic-ui-react'

function Horoscope (){
    function handleClick() {
        const randomHoroscope = getRandomHoroscope();
        console.log("Horoscope", randomHoroscope)
        
    }
    return(
        <div class="reviewSec">
           <Form >
            <Form.Field>
                <label>Enter your sunsign</label>
                <select >
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
                <Button onClick={handleClick}> Search </Button>
            </Form.Field>
            </Form>
            
        

          
        </div>
    )
}

export default Horoscope;