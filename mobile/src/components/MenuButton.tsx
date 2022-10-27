import React from 'react';
import { Box, Menu, Pressable, HamburgerIcon } from 'native-base';

export default function MenuButton() {
   return(
      <Box w="20%" alignItems="center">
         <Menu width={50} trigger={triggerProps => {
         return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
               <HamburgerIcon />
               </Pressable>;
      }}>
         <Menu.Item>Arial</Menu.Item>
         <Menu.Item>Nunito Sans</Menu.Item>
         <Menu.Item>Roboto</Menu.Item>
         <Menu.Item>Poppins</Menu.Item>
         <Menu.Item>SF Pro</Menu.Item>
         <Menu.Item>Helvetica</Menu.Item>
         <Menu.Item isDisabled>Sofia</Menu.Item>
         <Menu.Item>Cookie</Menu.Item>
         </Menu>
      </Box>
   );
}