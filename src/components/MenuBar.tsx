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
import { Route } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  nested: { paddingLeft: theme.spacing(4), height: "12px" }

}))

interface Props {
  depthStep: number;
  depth: number;
  expanded: any;
  item: any;

}
//@ts-ignore
function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }: Props) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;
  const classes = useStyles();
  const history = useHistory();
  console.log({item});



  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }
  const handleClick = React.useCallback(() => {
    if (items) {
      history.push(items.url);
    }  

  }, [])


  function onClick(e: any) {
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
          onClick={handleClick}

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
interface MenuProps {
  depthStep: number;
  depth: number;
  expanded: any;
  items: any;

}
function MenuBar({ items, depthStep, depth, expanded }: MenuProps) {
  return (
    <div className="sidebar">

      <IonList >
        {items.map((sidebarItem: any, index: number) => (
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