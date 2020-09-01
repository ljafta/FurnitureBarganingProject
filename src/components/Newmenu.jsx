 import {
//     IonContent,
//     IonIcon,
//     IonItem,
//     IonLabel,
//     IonList,
//     IonListHeader,
//     IonMenu,
//     IonMenuToggle,
//     IonNote,
  } from '@ionic/react';

// import React, { Component } from 'react';
// import List from '@material-ui/core/List'
// import ListItem from 'material-ui/core/ListItem'
// import ListItemText from 'material-ui/core/ListItemText'
// import Collapse from 'material-ui/core/Collapse'
// import ExpandLess from 'material-ui/icons/ExpandLess'
// import ExpandMore from 'material-ui/icons/ExpandMore'
// import Drawer from 'material-ui/core/Drawer'
// import { withStyles } from 'material-ui/core/styles'
// import { Link } from 'react-router-dom'
// import menuItems from '../menuItems'
// const styles = {
//   list: {
//     width: 250,
//   },
//   links: {
//     textDecoration:'none',
//   },
//   menuHeader: {
//     paddingLeft: '30px'
//   }
// };
// class Newmenu extends Component {
//   constructor( props ) {
//     super( props )
//     this.state = {}
//   }
// // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
// handleClick( item ) {
//     this.setState( prevState => ( 
//       { [ item ]: !prevState[ item ] } 
//     ) )
//   }
// // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
// handler( children ) {
//     const { classes } = this.props
//     const { state } = this
// return children.map( ( subOption ) => {
//       if ( !subOption.children ) {
//         return (
//           <div key={ subOption.name }>
//             <ListItem 
//               button 
//               key={ subOption.name }>
//               <Link 
//                 to={ subOption.url }
//                 className={ classes.links }>
//                 <ListItemText 
//                   inset 
//                   primary={ subOption.name } 
//                 />
//               </Link>
//             </ListItem>
//           </div>
//         )
//       }
//       return (
//         <div key={ subOption.name }>
//           <ListItem 
//             button 
//             onClick={ () => this.handleClick( subOption.name ) }>
//             <ListItemText 
//               inset 
//               primary={ subOption.name } />
//             { state[ subOption.name ] ? 
//               <ExpandLess /> :
//               <ExpandMore />
//             }
//           </ListItem>
//           <Collapse 
//             in={ state[ subOption.name ] } 
//             timeout="auto" 
//             unmountOnExit
//           >
//             { this.handler( subOption.children ) }
//           </Collapse>
//         </div>
//       )
//     } )
//   }
// render() {
//     const { classes, drawerOpen, menuOptions } = this.props
//     return (
//       <div className={classes.list}>
//         <Drawer 
//           variant="persistent" 
//           anchor="left"
//           open
//           classes={ { paper: classes.list } }>
//           <div>
//             <List>
//               <ListItem 
//                 key="menuHeading"
//                 divider
//                 disableGutters
//               >
//                 <ListItemText
//                 className={ classes.menuHeader }
//                   inset
//                   primary="Nested Menu"
//                 />
//               </ListItem>
//             { this.handler( menuItems.data ) }
//             </List>
//           </div>
//         </Drawer>
//       </div>
//     )
//   }
// }
// export default withStyles(styles)(Newmenu)


// //export const Routes = [
//   //import home from '../App';
//   // {
//   //     path: "/", 
//   //     exact: true,
//   //     component: App,
//   //     pagename: "home",
//   // },
//   // {
//   //     path: "/load", 
//   //     exact: true,
//   //     component: EnhancedTable,
//   //     pagename: "load",
//   // },

//   // return(
//   //     <Switch>
//   //         <Redirect exact path="/" to="/home"/>     
//   //         <Route exact path={["/home"]} component={PersistentDrawerLeft}/>
//   //         <Route exact path={["/load"]} component={EnhancedTable}/>
//   //     </Switch>      
//   // )
// //]

// //export default Routes;


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
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, compassOutline } from 'ionicons/icons';

import ListItemText from '@material-ui/core/ListItemText'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
//import { useHistory } from "react-router";
import { Route } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  nested: { paddingLeft: theme.spacing(4), height: "12px" }

}))

// interface Props {
//   depthStep: number;
//   depth: number;
//   expanded: any;
//   item: any;

// }

//@ts-ignore
function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;
  const classes = useStyles();
  const history = useHistory();

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);    
  }
  
  
  const routeChange = () =>{ 
    console.log(items)
    let path = item.url; 
    history.push(path);
    
  }
    
  const handleClick = React.useCallback(() => {
    if (items) {
      
      history.push(items.url);
    
    }
    
   

  }, [items])
  

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
        <ExpandMoreIcon className="sidebar-item-expand-arrow" />
      );
  }
  return (
    <>
      <IonItem
        className="sidebar-item"
        onClick={onClick}
        button

        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          //onClick={history.push(items.url)}
          onClick= {routeChange }
          
          className="sidebar-item-content"
        >
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">{label}</div>
        </div>
        {/* <IonList>
            <IonItem className={classes.nested}>
              <Icon primary={label} />
            </IonItem>
          </IonList> */}
        {expandIcon}
      </IonItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <IonList >
            {items.map((subItem, index) => (
              
              <React.Fragment key={`${subItem.name}${index}`} >
                {/* <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel> */}
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                    <SidebarItem
                      depth={depth + 1}
                      depthStep={depthStep}
                      item={subItem}
                      expanded={expanded} 
                    />
                  )}

              </React.Fragment>
            ))}
          </IonList>
        ) : null}
      </Collapse>
    </>
  );
}
// interface MenuProps {
//   depthStep: number;
//   depth: number;
//   expanded: any;
//   items: any;

// }
function MenuBar({ items, depthStep, depth, expanded }) {
  return (
    <div className="sidebar">

      <IonList >
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
                <SidebarItem
                  depthStep={depthStep}
                  depth={depth}
                  expanded={expanded}
                  item={sidebarItem}
                />
              )}
          </React.Fragment>
        ))}
      </IonList>
    </div>
  );
}

export default MenuBar