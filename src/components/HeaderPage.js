import React, {useState} from 'react';
import {
    Button,
    Container,
    Header,
    Form,
    Segment,
    Grid,
    Dropdown,
    Message
  } from 'semantic-ui-react'
  
function HeaderPage (){
    
  const[birthday,setBirthday]=useState("")
  const[birthMth,setBirthMth]=useState("")
  // const[sign,setSign]=useState("")
  
  const findSign=(e)=>{
    e.preventDefault();
    let sign="";
          if (birthMth == "January") {
            if (birthday < 20)
              sign =  "♑ Capricorn";
            else
                sign = "♒ Aquarius";
          }
          else if (birthMth == "February") {
            if (birthday < 19)
                sign = "♒ Aquarius";
            else
                sign = "♓ Pisces";
          }
          else if(birthMth == "March") {
            if (birthday < 21)
                sign = "♓ Pisces";
            else
                sign = " ♈ Aries";
          }
          else if (birthMth == "April") {
            if (birthday < 20)
                sign = " ♈ Aries";
            else
                sign = "♉ Taurus";
          }
          else if (birthMth == "May") {
            if (birthday < 21)
                sign = "♉ Taurus";
            else
                sign = "♊ Gemini";
          }
          else if( birthMth == "June") {
            if (birthday < 21)
                sign = "♊ Gemini";
            else
                sign = "Cancer";
          }
          else if (birthMth == "July") {
            if (birthday < 23)
                sign = "Cancer";
            else
                sign = "♌ Leo";
          }
          else if( birthMth == "August") {
            if (birthday < 23)
                sign = "♌ Leo";
            else
                sign = "♍ Virgo";
          }
          else if (birthMth == "September") {
            if (birthday < 23)
                sign = "♍ Virgo";
            else
                sign = "♎ Libra";
          }
          else if (birthMth == "October") {
            if (birthday < 23)
                sign = "♎ Libra";
            else
                sign = "♏ Scorpio";
          }
          else if (birthMth == "November") {
            if (birthday < 22)
                sign = "♏ scorpio";
            else
                sign = "♐ Sagittarius";
          }
          else if (birthMth == "December") {
            if (birthday < 22)
                sign = "♐ Sagittarius";
            else
                sign ="♑ Capricorn";
          }
    
     alert(`🤗You are ${sign}✨🎈🎊🎉`)
   
  
  }

  return (
        <Container className= "header" 
        style={{ marginBottom:'50px',}} 
        textAlign='center'>
            <div id = "headerContiner">
              <h1 id="headerTop">ASTROLOGY FOR ALL</h1>
            </div>
            <Header
                as='h2'
                content='Are you ready to know more about yourself?'
                inverted
                style={{
                  fontSize:  '1.7em',
                  fontWeight: 'normal',
                  marginTop: '1.5em',
                }}
            />
          <hr></hr>
          {/* /////Enter your SunSign */}
          <br></br>
            <Grid textAlign='center'  verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 650 }}>
              <Form size='large' onSubmit={findSign}>
                <Segment stacked>
                <Header as='h3' color='Black' textAlign='center'>Discover your Sun Sign:</Header>
                <select class="ui dropdown" onChange={(e)=>{setBirthMth(e.target.value)}}>
                  <option value="" class="default text" disabled selected> Enter Month: August</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select> 
                <br></br>               
                  <Form.Input type="number" min="1" max="31" onChange={e=>{setBirthday(e.target.value)}} placeholder='Enter Day : 7 ' required/>
                 
                  <Button color='violet' fluid size='large'> Search</Button>
                </Segment>
              </Form>
            </Grid.Column>
            
          </Grid>
        </Container>

    )

}
export default HeaderPage;