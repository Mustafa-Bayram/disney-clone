import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import homeIcon from '../assets/images/home-icon.svg'
import searchIcon from '../assets/images/search-icon.svg'
import watchList from '../assets/images/watchlist-icon.svg'
import originalIcon from '../assets/images/original-icon.svg'
import movieIcon from '../assets/images/movie-icon.svg'
import seriesIcon from '../assets/images/series-icon.svg'

function Header() {
  return (
    <Nav>
      <Logo src={logo}/>
      <NavMenu>
        <a>
          <img src={homeIcon}/>
          <span>HOME</span>
        </a>
        <a>
          <img src={searchIcon} />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={watchList} />
          <span>WATCHLİST</span>
        </a>
        <a>
          <img src={originalIcon} />
          <span>ORİGİNALS</span>
        </a>
        <a>
          <img src={movieIcon} />
          <span>MOVİES</span>
        </a>
        <a>
          <img src={seriesIcon} />
          <span>SERİES</span>
        </a>
      </NavMenu>
      <UserImg src='https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329__340.jpg'/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
   display: flex;
   flex: 1;
   margin-left: 25px;
   align-items: center;

   a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img{
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right:0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
      &:hover{
        span:after{
          transform: scaleX(1);
          opacity: 1;    
      }
    }
   }
`
const UserImg = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   cursor: pointer
`