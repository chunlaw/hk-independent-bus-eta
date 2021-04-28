import React, { useContext } from "react"
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { useLocation, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRouteMatch } from 'react-router-dom'
import AppContext from '../AppContext'

const Ad = (props) => {
    const { searchRoute, setSearchRoute } = useContext( AppContext )

    const { path } = useRouteMatch()
    const { t, i18n } = useTranslation()
    const classes = useStyles()
    let location = useLocation()
    const history = useHistory()

    const handleLanguageChange = lang => {
        history.replace( location.pathname.replace('/'+i18n.language+'/', '/'+lang+'/') )
        i18n.changeLanguage(lang)
    }

    return (
        <div
            className={classes.ad}
        >
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    ad: {
        //display: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://picsum.photos/800/200)',
        height: 60,
    }
}))

export default Ad;