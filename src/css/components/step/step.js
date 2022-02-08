import { makeStyles } from '@material-ui/core/styles'

const stepStyles = makeStyles(theme => ({
  stepBadge: {
    textTransform: 'uppercase',
    background: theme.palette.primary.main,
    color: 'white',
    fontSize: '13px',
    fontWeight: '700',
    padding: '7px 10px',
    fontFamily: `${theme.typography.fontFamily} !important`,
    borderRadius: '5px',
    marginRight: '1rem',
    whiteSpace: 'nowrap',
  },
  stepLabel: {
    textTransform: 'capitalize',
    color: '#0A0C23',
    fontSize: '21px',
    fontWeight: '600',
    fontFamily: `${theme.typography.fontFamily} !important`,
  },
}))
export default stepStyles
