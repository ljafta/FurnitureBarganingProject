import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToolbar,
  IonButton,
  IonTitle,
} from '@ionic/react';

import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuBar from './MenuBar';
import {AppMenuContext} from '../context/appMenuContext';
import {HeaderNameContext} from '../context/hearder';
import {camera, trash, close, create} from 'ionicons/icons';
import {AccessAlarm, ThreeDRotation} from '@material-ui/icons';
import {Icon} from 'semantic-ui-react';
import AccountCircle from '@material-ui/icons/AccountCircle';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import Employer from '../../images/employer.svg'

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginLeft: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const {hearder} = React.useContext(HeaderNameContext);
  // const [open, setOpen] = React.useState(false);

  const items = [
    {
      label: 'Employer',
      header: true,

      //icon: 'fa fa-database fa-fw',
      // <ion-icon name="arrow-forward"></ion-icon>
      Icon: <AccountBalanceIcon className={classes.icon} />,
      // <img src={Employer} alt="Employer" />

      items: [
        {label: 'Manage', url: '/employerbrowser'},
        {label: 'Reporting', url: '/employee-browse'},
      ],
    },
    {
      label: 'Employee',
      header: true,
      Icon: <AccessibilityIcon className={classes.icon} />,

      items: [
        {label: 'Manage', url: '/employee-browse'},
        {label: 'Reporting', url: '/load'},
        // { label: 'Reference Data', url: '/doctor-reference-data' },
      ],
    },
    {
      label: 'Doctors',
      header: true,
      Icon: <LocalHospitalIcon className={classes.icon} />,

      items: [
        {label: 'Manage', url: '/doctorbrowse'},
        {label: 'Reporting', url: '/load'},
        // { label: 'Reference Data', url: '/doctor-reference-data' },
      ],
    },
    
    {
      label: 'Financials',
      header: true,
      Icon: <MonetizationOnIcon className={classes.icon} />,

      items: [
        {label: 'Financials-Batch-Entry', url: '/financials-batch-entry'},
        {label: 'Unbalanced-Batch-Rev', url: '/load'},
        {label: 'Utilisation-Details', url: '/load'},
      ],
    },

    {
      label: 'Reference Data',
      header: true,

      Icon: <MenuBookIcon className={classes.icon} />,

      items: [
        {label: 'Employer', url: '/employer-reference-data'},
        {label: 'Employee', url: '/employee-reference-data'},
        {label: 'Doctor', url: '/doctor-reference-data'},
        {label: 'Financials', url: '/utilisationdetails'},
        {label: 'Shared', url: '/shared-reference-data'},
        ,
      ],
    },
  ];

  const depthStep = 0;
  const depth = 0;
  const expand = 0;

  const {open, handleAppMenuOpen} = React.useContext(AppMenuContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openAnchorEl = Boolean(anchorEl);
  console.log('open ', open);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleAppMenuOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            {hearder}
          </Typography>

          {/* <div text-center>
           <IconButton                  
              color="inherit" className="align-self: center">
             <img alt="Furniture B" height="40"   src="img/logo.png"/>
            </IconButton> 
            </div>
              */}

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openAnchorEl}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => handleAppMenuOpen(false)}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <MenuBar
          items={items}
          depthStep={depthStep}
          depth={depth}
          expanded={expand}
        />

        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
      </Drawer>
    </div>
  );
}
