import React, { useContext } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppContext from '../AppContext'
import { useTranslation } from 'react-i18next'
import { FixedSizeList as List, areEqual } from 'react-window'
import memorize from 'memoize-one'
import RouteInputPad from './RouteInputPad'
import { Link } from  'react-router-dom'

const RouteRow = React.memo(( {data, index, style} ) => {
  const { t, i18n } = useTranslation()
  const { routeList } = data
  const route = routeList[index]
  const [routeNo, service_type] = route[0].split('+').slice(0,2)
  const classes = useStyles()

  return (
    <Link to={'/'+i18n.language+'/route/'+route[0]}>
      <Card variant="outlined" key={route[0]} style={style} square>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" display="inline">{routeNo}</Typography>
            <Typography variant="caption"> - {route[1].co.map(co => t(co)).join('+')}</Typography>
            <br/>
            <Typography variant="subtitle2" display="inline">{t('往')} {route[1].dest[i18n.language]}  </Typography>
            <Typography variant="caption">{service_type >= '2' ? t('特別班次') : '　'}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}, areEqual)

const createItemData = memorize((routeList) => ({routeList}))

const RouteList = () => {
  const { routeList, searchRoute } = useContext(AppContext)
  const targetRouteList = Object.entries(routeList).filter(
    element => element[0].startsWith(searchRoute.toUpperCase())
  )
  const classes = useStyles()

  const itemData = createItemData(targetRouteList)
  return (
    <List
      className={classes.searchTable}
      height={330}
      itemCount={targetRouteList.length}
      itemSize={69}
      width="100%"
      itemData={itemData}
    >
        {RouteRow}
    </List>
  )
}

const RouteBoard = () => {
  return (
    <>
      <RouteList />
      <hr/>
      <RouteInputPad />
    </>
  )
}

export default RouteBoard

const useStyles = makeStyles (theme => ({
  searchTable: {
    flex:1,
  },
  cardContent: {
    padding: '8px 16px',
  }
}))