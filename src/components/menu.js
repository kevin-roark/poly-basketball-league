import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const menuWrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background-color: #000;
  color: #fff;
`

const menuList = css`
  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    margin: 0 5px;
    padding: 0;

    & a {
      color: inherit;
      text-decoration: none;
    }
  }
`

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'Join', link: '/join' },
  { title: 'Games', link: '/games' },
  { title: 'Contact', link: '/contact' }
]

const Menu = () => (
  <div className={menuWrapper}>
    <ul className={menuList}>
      {menuItems.map(({ title, link }) => (
        <li key={link}>
          <Link to={link}>
            { title }
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Menu
