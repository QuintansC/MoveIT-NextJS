import Link from "next/link";
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
     const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inicio', 'Pomodoro', 'Financas', 'Configurações'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon>
              <MenuIcon/>
            </ListItemIcon>
            <ListItemButton>
              <Link href={`/${text.toLocaleLowerCase()}`}> {text}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

    return (
        <header> 
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon/>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </header>
    )
}

export default Header;