import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import tiktokicon from '../tiktokicon.svg'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <BottomNavigation >
          <a href='https://twitter.com/icekarim786' target='_blank'>
          <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} /></a>
          <a href='https://www.instagram.com/icekarim786/' target='_blank'>
          <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: "#C13584"}}/>} /></a>
          <a href='https://www.youtube.com/channel/UCZHjCjfF2_MJtK8W2BbTBQQ' target='_blank'>
          <BottomNavigationAction label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>} /></a>
        </BottomNavigation>
)
}

export default Footer