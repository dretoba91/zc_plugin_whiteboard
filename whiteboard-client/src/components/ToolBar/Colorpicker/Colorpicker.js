import React from "react";
import "./Color.css";

const ColorPicker = ({
  changeColor,
  changeColorToGrey,
  changeColorToBlue,
  changeColorToGreen,
  changeColorToYellow,
  changeColorToMaroon,
  changeColorToLime,
  changeColorToOlive,
  changeColorToNavy,
}) => {
  return (
    <div>
      <div className="colorpicker-container">
        <div className="color outerdiv1" onClick={changeColor}>
          <div className="inner-color-1"></div>
        </div>
        <div className="color color2" onClick={changeColorToGrey}></div>
        <div className="color color3" onClick={changeColorToBlue}></div>
        <div className="color color4" onClick={changeColorToGreen}></div>
        <div className="color color5" onClick={changeColorToYellow}></div>
        <div className="color color6"></div>
        <br />
        <div className="color color9" onClick={changeColorToMaroon}></div>
        <div className="color color10" onClick={changeColorToLime}></div>
        <div className="color color11" onClick={changeColorToOlive}></div>
        <div className="color color12" onClick={changeColorToNavy}></div>
        <div className="color-line"></div>
        <div className="color color7">
          <div className="inner-color-7"></div>
        </div>
        <div className="color color8"></div>
      </div>
    </div>
  );
};

export default ColorPicker;
