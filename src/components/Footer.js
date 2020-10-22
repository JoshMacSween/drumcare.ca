import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h5 className="text-center py-3">Copyright &copy; 2020 DrumCare</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
