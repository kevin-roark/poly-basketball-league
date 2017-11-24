import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const menuWrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  color: #fff;
  text-shadow: 0 1px #000;
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
    margin: 0 20px;
    padding: 0;
    font-size: 36px;
    font-weight: 600;
    transform-origin: 50% 0;
    transition: all 0.2s;

    & a {
      color: inherit;
      text-decoration: none;
    }

    &:hover {
      background-color: #00f;
      color: #f00;
      transform: scale(2, 25);
    }
  }
`

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'Join', link: '/join' },
  { title: 'Play', link: '/play' },
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
