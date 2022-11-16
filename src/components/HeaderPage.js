
import {
    Button,
    Container,
    Header,
    Icon,
    Image
  } from 'semantic-ui-react'
function HeaderPage (){
    return (
        <Container className= "header" 
        style={{ marginBottom:'50px',}} 
        textAlign='center'>
        <Header
        as='h1'
        content='ASTROLOGY FOR ALL'
        inverted
        style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop:  '50px',
            marginBottom:'50px',
        }}
        
        />
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
<Button primary size='huge'>
  Get Started
  <Icon name='right arrow' />
</Button>
</Container>
    )

}
export default HeaderPage;