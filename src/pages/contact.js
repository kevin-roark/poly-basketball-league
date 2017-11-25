import React from 'react'
import styled from 'react-emotion'

import { MobileBreakpoint } from '../layouts/util'

const Container = styled('div')`
  box-sizing: border-box;
  padding: 80px;
  color: #fff;

  @media (${MobileBreakpoint}) {
    padding: 10px;
  }
`

const ContactItem = styled('h2')`
  margin: 0 0 120px 20px;
  font-size: 100px;

  & a {
    color: inherit;
  }

  @media (${MobileBreakpoint}) {
    font-size: 28px;
    margin: 0 10px 60px 10px;
    text-align: center;
  }
`

const Contact = () => (
  <Container>
    <ContactItem>
      We are online on Instagram!! <br />
      <a href="https://instagram.com/poly_basketball" target="_blank">
        @poly_basketball
      </a>
    </ContactItem>
    <ContactItem>
      Sign up for our mailing list to receive announcements about new games and
      programs: <br />
      <a href="http://eepurl.com/dbIvWH" target="_blank">
        Right here!! Sign up!!
      </a>
    </ContactItem>

    <ContactItem>
      Email Inquiries: <br />
      <a
        href="mailto:kevin.e.roark@gmail.com?subject=Poly+Basketball+League"
        target="_blank"
      >
        kevin.e.roark@gmail.com
      </a>
    </ContactItem>

    <ContactItem>
      Phone Inquiries: <br />
      <a href="sms:1-985-718-8538">985-718-8538</a>
    </ContactItem>
  </Container>
)

export default Contact
