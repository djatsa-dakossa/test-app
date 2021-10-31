// somewhere in your app
import React, { useRef, useState } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import EditNote from '../editNote/EditNote';
import {styles} from '../styles/styles'



export default function CustomMenu (props: any) {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  const menu = useRef();

  const {note, notebook_id} = props


  return (
      <Menu
        ref={menu}
        visible={visible}
        style={styles.dropdownMenu}
        anchor={
            <TouchableHighlight
                underlayColor={'transparent'}
                style={styles.more}
                onPress={() => showMenu()}
            >
                <Text>
                    <Icon tvParallaxProperties="" name="more-horiz"/>
                </Text>
            </TouchableHighlight>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu} > 
            <Text style={{color: 'red'}}>
                Delete
            </Text>
        </MenuItem>
        <EditNote note={note} notebook_id={notebook_id} />
      </Menu>
  );
}
