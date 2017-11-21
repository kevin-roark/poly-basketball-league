import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import './index.css'
import Menu from '../components/menu'

const container = css`
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
    />

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
