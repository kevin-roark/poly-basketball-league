import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { keyframes } from 'react-emotion'

import './index.css'
import Basketball from '../components/basketball'
import Menu from '../components/menu'
import Footer from '../components/footer'
import data from '../data'

const rainbow = keyframes`
  0% {
    background-color: #f00;
  }
  25% {
    background-color: #f00;
  }
  33% {
    background-color: #0f0;
  }
  59% {
    background-color: #0f0;
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

const Background = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  animation: ${rainbow} 16s linear infinite;
`

const Content = styled('div')`
  box-sizing: border-box;
  padding-top: 72px;
  min-height: calc(100vh - 120px);
`

class Layout extends Component {
  componentDidMount() {
    data.init()
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet
          title="PBL — Poly Basketball League"
          meta={[
            {
              name: 'description',
              content:
                'PBL is a mixed-gender very fun basketball league in NYC.',
            },
            {
              name: 'keywords',
              content: 'pbl, poly basketball league, nyc pickup basketball',
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600"
            rel="stylesheet"
          />
        </Helmet>

        <Background />
        <Menu />
        <Basketball />

        <Content>{children()}</Content>

        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
