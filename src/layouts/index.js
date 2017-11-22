import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { css, keyframes } from 'emotion'

import './index.css'
import Basketball from '../components/basketball'
import Menu from '../components/menu'

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

const container = css`
  box-sizing: border-box;
  padding-top: 72px;
  width: 100%;
  min-height: 100vh;

  animation: ${rainbow} 16s linear infinite;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="PBL — Poly Basketball League"
      meta={[
        { name: 'description', content: 'PBL is a mixed-gender very fun basketball league in NYC.' },
        { name: 'keywords', content: 'pbl, poly basketball league, nyc pickup basketball' },
      ]}
    />

    <Basketball />
    <Menu />

    <div className={container}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
