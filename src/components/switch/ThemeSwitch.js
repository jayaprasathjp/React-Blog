import React from "react";

import './ThemeSwitch.css';
import { useThemeContext } from './../../hooks/useThemeContext';

export default function ThemeSwitch() {




  const switchTheme = () => {
    if (theme === 'light') {
        dispatch({type:'DARK'})
    } else {
        dispatch({type:'LIGHT'})
    }
    console.log(theme)
  }

  return (
    <div className="container ">
      <div className="form-check form-switch toggle">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault" onClick={switchTheme}
        />
      </div>
    </div>
  );
}