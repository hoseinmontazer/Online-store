import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAmazon, faInstagram, faXTwitter, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"


const FooterPage = () => {
    
    return (
        <Card style={{backgroundColor: "#000000", color: "#fff"}}>
        <Card.Body>
          <Card.Title>Follow us here: </Card.Title>
          <Card.Text className="font-weight-bold">
           <span className="mx-3"><FontAwesomeIcon icon={faAmazon} /></span>
           <span className="mx-3"><FontAwesomeIcon icon={faInstagram} /></span>
           <span className="mx-3"><FontAwesomeIcon icon={faXTwitter} /></span>
           <span className="mx-3"><FontAwesomeIcon icon={faFacebook} /></span>
           <span className="mx-3"><FontAwesomeIcon icon={faLinkedin} /></span>

          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-light"> © 2024 Copyright Alright Recived</Card.Footer>
      </Card>
    )
}
export default FooterPage