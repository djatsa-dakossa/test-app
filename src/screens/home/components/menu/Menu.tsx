// somewhere in your app
import React, { useRef, useState } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmDeletion from '../../../../components/confirmDeletion/ConfirmDeletion';
import { deleteNoteBookEffect } from '../../../../store/effects/NoteBookEffects';
import { ApplicationState } from '../../../../types/types';
import EditNotebook from '../editeNotebook/EditNotebook';
import {styles} from '../styles/styles'



export default function CustomMenu ({notebook}) {
  const [visible, setVisible] = useState(false);

  const {loading: {
      delete_notebook_loading
  }} = useSelector((state: ApplicationState) => state.notebooks)

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  const menu = useRef();

  const dispatch = useDispatch();

  const handleDelete = (next: Function) => {

    dispatch(
      deleteNoteBookEffect(notebook._id, next)
    )
  }

  return (
      <Menu
        ref={menu}
        visible={visible}
        style={styles.dropdownMenu}
        anchor={
            <TouchableHighlight
                style={styles.more}
                underlayColor={'transparent'}
                onPress={() => showMenu()}
            >
                <Text>
                    <Icon tvParallaxProperties="" name="more-horiz"/>
                </Text>
            </TouchableHighlight>
        }
        onRequestClose={hideMenu}
      >
        <ConfirmDeletion text="Are you sure you want to delete this note book ?" loading={delete_notebook_loading} action={handleDelete} />
        <EditNotebook notebook={notebook} />
      </Menu>
  );
}
