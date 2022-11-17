
  import {
    Container,
    Grid,
    Header,
    Image,  
    List,
    Segment,
  } from 'semantic-ui-react'

function Footer() {
 return(
    <Segment  inverted vertical style={{ padding: '2em 0em' }}>
    <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Quick Links:' />
              <List link inverted>
                <List.Item as='a' href="/" >Home</List.Item>
                <List.Item as='a' href="/sunsign">Sun Signs</List.Item>
                <List.Item as='a' href="/horoscope">Horoscope</List.Item>
                <List.Item as='a' href="/compatibility">Compatibility</List.Item>
                <List.Item as='a' href="/reviews">Reviews</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column textAlign='center' width={7}> 
                <Image style={{position:'center'}}size='medium' src="https://i.pinimg.com/originals/3b/f8/31/3bf831be4f2a10daa1969c0fc8ada789.jpg"/> 
            </Grid.Column>
            <Grid.Column textAlign='center' width={5}>
              <Header style={{marginTop:'70px'}}/>
                Developed by Gabriela and Lianzi
            </Grid.Column>
          </Grid.Row>
        </Grid>

    </Container>
     </Segment>

 )
}
export default Footer;
