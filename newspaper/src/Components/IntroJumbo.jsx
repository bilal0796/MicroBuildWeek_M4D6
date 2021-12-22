import { Jumbotron, Button, Nav } from 'react-bootstrap'

const IntroJumbo = () => (
    <Jumbotron style={{backgroundColor:'#343a40',color:'White'}}>
      <div className='Container' style={{width:'600px'}}>
      <h1 style={{fontFamily:'"Times New Roman"',fontStyle:'Italic',fontWeight:'900'}}>Changing Geo-Politicial dynamics and U.S.</h1>
        <p>
        The evolving contours of modern geopolitics is still in a state of flux, and there is wisdom in accepting the notion that the end result is perhaps indeterminable. 
        </p>
    <p>
    <Nav.Link style={{color:'White'}}><h5><strong>Continue reading...</strong></h5></Nav.Link>
    </p>
    </div>
    </Jumbotron>
)

export default IntroJumbo