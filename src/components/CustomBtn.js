import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import CatchingPokemon from '@mui/icons-material/CatchingPokemon'





function CustomBtn(props) {
    return (
      <Button color="primary" size="large" startIcon={<CatchingPokemon />}>
      New and Hot
    </Button>
    )
}

export default CustomBtn