import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];



const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#000' }}>
        NOME
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const use = useTheme();
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        laptop: 992,
        desktop: 1200,
      },
    },
  });

  console.log( theme.breakpoints )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{  bgcolor: 'white' }}>
      <Box id="top-bar" sx={{ display: { xs: 'none', md: 'block' } }}>
	      <Box id="top-bar-inner" className="wprt-container">
          <div className="top-bar-inner-wrap" style={{ alignItems: 'center', justifyContent: 'space-between', display: 'flex', marginInline: -10 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <MailOutlineIcon sx={{ fontSize: 16.4, color: '#b2924b', mb: 0.2 }}/>
              <span className='email-content'> CONTATO@EMPRESA.COM.BR </span>
              <hr className='divider-content'/>
              <CallIcon sx={{ fontSize: 16.4, color: '#b2924b', mb: 0.3 }}/>
              <span className='phone-content'> (12) 3456-7890 </span>
            </Box>
            <div className="top-bar-socials">
            <div className="inner"> 
              <span className="icons"> 
                <IconButton href="https://www.instagram.com/jurispm" title="Instagram">
                    <FacebookIcon sx={{ color: '#fff', fontSize: 17, m: -0.3 }}/>
                </IconButton> 
                <IconButton href="https://www.instagram.com/jurispm" title="Instagram">
                  <InstagramIcon sx={{ color: '#fff', fontSize: 17, m: -0.3 }}/>
                </IconButton> 
              </span>
            </div>
          </div>
        </div>
      </Box>
      </Box>
        <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: 'block', color: '#000' }}
          >
            NOME
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    )
}

export default Header;