import {createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer';
import './App.css';

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';


const theme = createTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });

  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
  })

function App() {
  const classes = styles();

  return (
    <div className="App">
     <ThemeProvider theme={theme}>
        <NavBar/>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             What is up guys IceKarim here!
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          If you love Pokemon cards, then you surely will love my Youtube videos. Definitely check it out!
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<CatchingPokemonIcon style={{fill: "#d10000", height:"125", width:"125"}}/>}  title="Fav Pokemon"/>
          <a href='https://www.pokeguardian.com/'   target='_blank'>
          <Grid icon={<AnnouncementIcon style={{fill: "#d10000", height:"125", width:"125"}}/>} title="Upcoming News"/></a>
          <a href='https://www.pokemoncenter.com/category/trading-card-game' target='_blank'>
          <Grid icon={<ShoppingCartIcon style={{fill: "#d10000", height:"125", width:"125"}}/>}  title="Buy Cards"/></a>
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>  
        <a href='https://www.youtube.com/watch?v=c9OlHlJksR8' target='_blank'>
          <Grid icon={<YouTubeIcon style={{fill: "#d10000", height:"125", width:"125"}}/>}  title="Favorite Video"/></a>
        <a href='https://youtu.be/gcOo9CzKc3Y'   target='_blank'>
          <Grid icon={<FiberNewIcon style={{fill: "#d10000", height:"125", width:"125"}}/>}  title="Latest Video"/></a>
        <a href='https://shop.tcgplayer.com/price-guide/pokemon' target='_blank'>  
          <Grid icon={<PriceCheckIcon style={{fill: "#d10000", height:"125", width:"125"}}/>} title="Price Guide"/></a>
        </div>
        <div className={classes.bigSpace}>
        <Footer/>
        </div>
     </ThemeProvider>
    </div>
  );
}

export default App;
