import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import logoUrl from '../assets/pbl_logo_2.png'

const container = css`
  box-sizing: border-box;
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px;

  & img {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 100%;
  }

  & p {
    margin: 0 auto 60px auto;
    max-width: 450px;
    color: #fff;
    text-shadow: 0 1px #000, 1px 2px #000;
    font-size: 28px;
    line-height: 1.5;
  }

  & a {
    background-color: #f00;
    color: #00f;
    text-transform: uppercase;
  }
`

const IndexPage = () => (
  <div className={container}>
    <img src={logoUrl} alt="Poly Basketball League Logo" />
    <p>
      Poly Basketball League (PBL) is a loosely organized
      series of all-gender fun + friendly basketball games in
      New York City. People of all kinds and skill levels are welcomed
      and we think it is a supportive environment to make friends and
      learn / play the game!!
    </p>
    <p>
      Upcoming scheduled play-dates are available <Link to="/play">here</Link>.
      You can sign up to play by registering with your phone number <Link to="/join">here</Link>.
      It is helpful for you to do that, but you can also "just show up" :).
    </p>
    <p>
      You can sign up for our mailing list <Link to="/contact">here</Link>, where new
      play-dates will be announced in a VERY TIMELY FASHION. Thank you!! Hope to play soon!!
    </p>
  </div>
)

export default IndexPage
