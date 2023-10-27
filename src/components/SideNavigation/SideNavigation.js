import styles from "./sideNavigation.module.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export function SideNavigation(){


    return(
        <div className={styles.container}>
        <Sidebar>
        <Menu
        menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
            <MenuItem component={<Link to={"/"}/>}>Home</MenuItem>
            <MenuItem component={<Link to={"/blog"}/>}>Blog</MenuItem>
            <MenuItem component={<Link to={"/contacts"}/>}>Contacts</MenuItem>
        </Menu>
      </Sidebar>
      </div>
    )
}