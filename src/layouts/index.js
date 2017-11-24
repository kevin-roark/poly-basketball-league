import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { css, keyframes } from 'emotion'

import './index.css'
import Basketball from '../components/basketball'
import Menu from '../components/menu'
import Footer from '../components/footer'

const rainbow = keyframes`
  0% {
    background-color: #f00;
  }
  25% {
    background-color: #f00;
  }
  33% {
    background-color: #ff0;
  }
  59% {
    background-color: #ff0;
  }
  67% {
    background-color: #00f;
  }
  92% {
    background-color: #00f;
  }
  100% {
    background-color: #f00;
  }
`

const bg = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  animation: ${rainbow} 16s linear infinite;
`

const container = css`
  box-sizing: border-box;
  padding-top: 72px;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="PBL — Poly Basketball League"
      meta={[
        { name: 'description', content: 'PBL is a mixed-gender very fun basketball league in NYC.' },
        { name: 'keywords', content: 'pbl, poly basketball league, nyc pickup basketball' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600" rel="stylesheet" />
    </Helmet>

    <div className={bg} />
    <Menu />
    <Basketball />

    <div className={container}>
      {children()}
    </div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
