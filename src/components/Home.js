import React, { useContext, useEffect, useState } from 'react'
import {
  Card,
  Typography,
  CircularProgress,
  List,
  Paper
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import AppContext from '../AppContext'
import { getDistance } from '../utils'
import SuccinctTimeReport from './home/SuccinctTimeReport'

const Home = () => {
  const { 
    hotRoute, savedEtas, routeList, stopList
  } = useContext ( AppContext )

  const [selectedRoutes, setSelectedRoute] = useState(
    savedEtas.concat(
      Object.entries(hotRoute).filter(([route, count]) => count > 5)
      .sort((a,b) => b[1] - a[1])
      .map(([routeId]) => routeId)
    ).filter((routeId, index, self) => self.indexOf(routeId) === index)
    .slice(0,20)
  )
  const [doneGeoRoutes, setDoneGeoRoutes] = useState(false)

  useEffect (() => {
    let isMounted = true
    // to enhance performance, we used cached geolocation
    const geolocation = JSON.parse(localStorage.getItem('geolocation'))
    
    Object.entries(stopList).map(stop =>
      // potentially could be optimized by other distance function
      stop.concat(getDistance(stop[1].location, geolocation))
    ).filter(stop => 
      // keep only nearby 1000m stops
      stop[2] < 1000
    ).sort((a, b) => 
      a[2] - b[2]
    ).slice(0, 5).forEach(([stopId]) => {
      // keep only max. 5 stops
      let routeIds = []
      Object.entries(routeList).forEach(([key, route]) => {  
        ['kmb', 'nwfb', 'ctb'].forEach(co => {
          if (route.stops[co] && route.stops[co].includes(stopId)) {
            routeIds.push(key+'/'+route.stops[co].indexOf(stopId))
          }
        })
      })
  
      // add nearby routes to display
      if ( isMounted ) {
        setSelectedRoute(prevSelectedRoutes => 
          prevSelectedRoutes.concat(
            routeIds.map(routeId => {
              setDoneGeoRoutes(true)
              return routeId
            })
          ).filter( (v, i, s) => s.indexOf(v) === i ).slice(0,20)
        )
      }
    })
    
    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Paper className={classes.root}>
      <Card
        className={classes.upgradeContainer}
        onClick={() => {window.location.href = "https://hkbus.app"}}
      >
        <Typography variant="subtitle1">{t('升級最新介面')}</Typography>
        <Typography variant="caption">{t('秉持無廣告簡潔介面')} - <a href="https://hkbus.app">hkbus.app</a></Typography>
      </Card>
      <List className={classes.list}>
      {
        selectedRoutes.map( selectedRoute => (
          <SuccinctTimeReport key={selectedRoute} routeId={selectedRoute} />
         ) )
      }
      </List>
      {
        !doneGeoRoutes ? <CircularProgress size={20} /> : <></>
      }
    </Paper>
  )
}

export default Home

const useStyles = makeStyles ( theme => ({
  root: {
    background: 'white',
    height: 'calc(100vh - 120px)',
    overflowY: 'scroll',
    textAlign: 'center'
  },
  upgradeContainer: {
    width: "100%",
    flexDirection: "column",
    '& a': {
      textDecoration: 'none'
    },
    '& .MuiTypography-subtitle1': {
      fontWeight: '600'
    },
    '& .MuiTypography-caption': {
      fontWeight: '600'
    }
  }
}))

