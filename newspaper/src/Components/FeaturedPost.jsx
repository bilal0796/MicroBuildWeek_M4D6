import {Card, CardDeck} from 'react-bootstrap'
// import news from '../Data/News.json'
const FeaturedPost = (props) => (    
    <CardDeck>
    <Card>
    <div style={{display:'flex', width:'80%'}}>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src='./logo192.png' />
    </div>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>{props.news.name}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" className='Container d-flex' src="holder.js/100px160" />
  </Card>

  </CardDeck>

)

export default FeaturedPost