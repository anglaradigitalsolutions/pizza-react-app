import { Grow } from '@mui/material'
import React, { useState } from 'react'
import menus from '../common/menus'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MobileSelection = (props) => {


    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const setSelectedMenu = (key) => {
        props.onSelectmenu(key);
        setChecked(false);
    }


    return (
        <div>
            <div className='mobile-menu' onClick={() => setChecked(!checked)}>
                <div style={{ textTransform: 'capitalize' }}> {props.selectedMenu.replaceAll("_", " ")}</div>
                <ExpandMoreIcon />
            </div>
            <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0', display: checked ? 'block' : 'none' }}
                timeout={500}
                className="mobileMenuItems"
            >
                <ul>
                    {menus.map((ele, index) => {
                        return (
                            <li key={index} className={ele.value === props.selectedMenu ? "orange-btn" : ''} onClick={() => setSelectedMenu(ele.value)}>{ele.text}</li>
                        )
                    })}
                </ul>
            </Grow>

        </div>
    )
}
