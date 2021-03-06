import React, { useState, useEffect } from 'react'
import {
  CircularProgress,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { fetchEtas } from 'hk-bus-eta'

const TimeReport = ( { route, routeStops, seq, bound, serviceType, co, nlbId } ) => {
  const { t, i18n } = useTranslation()
  const [ etas, setEtas ] = useState(null)

  useEffect( () => {
    let isMounted = true
    const fetchData = () => {
      fetchEtas({route, routeStops, seq, bound, serviceType, co, nlbId}).then(_etas => {
        if (isMounted) setEtas(_etas)
      })
    }
    fetchData()
    const fetchEtaInterval = setInterval(() => {
      fetchData()
    }, 30000)

    return () => {
      isMounted = false
      clearInterval(fetchEtaInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if ( etas == null ) {
    return (
      <CircularProgress size={20} style={{}} />
    )
  }

  const displayMsg = (eta) => {
    if ( eta === '' ) return ''
    else {
      const waitTime = Math.round(((new Date(eta)) - (new Date())) / 60 / 1000)
      if ( waitTime < 1 ) {
        return '- '+t('分鐘')
      } else if ( Number.isInteger(waitTime) ) {
        return waitTime+" "+t('分鐘')
      }
    }
  }

  return (
    <div>
      {
        etas.length === 0 ? t('未有班次資料') : (
          etas.map((eta, idx) => (
            <Typography variant="subtitle1" key={`route-${idx}`}>
              {displayMsg(eta.eta)} - { eta.remark[i18n.language] ? eta.remark[i18n.language] : '' } {t(eta.co)}
            </Typography>
          ))
        )
      }
    </div>
  )
}

export default TimeReport