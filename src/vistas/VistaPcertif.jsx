import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from '@mui/material/Link';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ListItemButton from '@mui/material/ListItemButton';
import { List, ListItem, ListItemText } from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import VistaHorasPractica from '../certificacion/vistaHorasPractica';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        S&V Davelopers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

          
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

          <br/>
          <div >
          &nbsp;&nbsp;&nbsp;<img src="https://i.postimg.cc/gJHTptmr/userC.png" width="80%"/>
      </div>
          
      <nav aria-label="secondary mailbox folders">
      <List>

      <ListItem disablePadding>  
          <ListItemButton component="a" href="/Certif">
          &nbsp;&nbsp; <HomeIcon/>&nbsp;&nbsp;&nbsp; &nbsp;<ListItemText primary="Certificacion" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>  
          <ListItemButton component="a" href="/TeoCertif">
          &nbsp;&nbsp; <MenuBookIcon/>&nbsp;&nbsp;&nbsp; &nbsp;<ListItemText primary="Teoria" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>  
          <ListItemButton component="a" href="/PracCertif">
          &nbsp;&nbsp; <CarRentalIcon/>&nbsp;&nbsp;&nbsp; &nbsp;<ListItemText primary="Practica" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>  
          <ListItemButton component="a" href="/Home">
          &nbsp;&nbsp; <GroupIcon/>&nbsp;&nbsp;&nbsp; &nbsp;<ListItemText primary="Vista de usuarios" />
          </ListItemButton>
        </ListItem>



      </List>
    </nav>
    
     </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '85vh',
          overflow: 'auto',
        }}
      >
          <br/>
          <VistaHorasPractica/>
      
      
          <Copyright sx={{ pt: 4 }} />
         
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}




