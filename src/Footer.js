import React, { useContext } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import TimerIcon from '@material-ui/icons/Timer'
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AppContext from './AppContext'
import {makeStyles} from "@material-ui/core/styles/index";

const Footer = () => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()
  const location = useLocation()
  const { selectedRoute } = useContext ( AppContext ) 
  
  return (
    <BottomNavigation
      value={location.pathname}
      showLabels={true}
      className={classes.footer}
    >
      <BottomNavigationAction
        label={t("常用")}
        component={Link}
        to={`/${i18n.language}`}
        value={`/${i18n.language}`}
        icon={<HomeIcon />}
      />
      <BottomNavigationAction 
        label={t("搜尋")}
        component={Link}
        to={`/${i18n.language}/search`}
        value={`/${i18n.language}/search`}
        icon={<SearchIcon />} 
      />
      <BottomNavigationAction
       label={selectedRoute.split('+')[0]}
       component={Link}
       to={`/${i18n.language}/route/${selectedRoute}`}
       value={`/${i18n.language}/route/${selectedRoute}`}
       icon={<TimerIcon />} 
      />
      <BottomNavigationAction
       label={t("設定")}
       component={Link}
       to={`/${i18n.language}/settings`}
       value={`/${i18n.language}/settings`}
       icon={<SettingsIcon />} 
      />
    </BottomNavigation>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
      backgroundColor: '#bbb',
      minHeight:'50px',
      height: '8vh'
  }
}))

export default Footer