import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
function SignForm (){


    const handleSubmit= e =>{
        e.preventDefault()
        // console.log("submit")
    }
    return (
        <div class="reviewSec">
        <Form>
            <Form.Field>
                <label>Enter your sunsign</label>
                <select>
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
                <select>
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
            <Button type='submit'>Find your SoulMate!</Button>
        </Form>
        </div>
    )

}
export default SignForm;
