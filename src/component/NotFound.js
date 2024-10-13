import not_found_dark from "../img/not_found_dark.png"
import not_found_light from "../img/not_found_light.gif"
import bg_btn from "../img/bg_btn.png"
import switcher from "../img/switcher.png"
import { useState } from "react";

function NotFound () {
    const [isOn, setIsOn] = useState(false);

    const handleSwitchClick = () => {
        setIsOn(!isOn);
    };

    const font_light = "off";
    const font_dark = "on";
    return (
        <div className={`wadah_not_found ${isOn ? 'bg-lightt' : 'bg-darkk'}`}>
            <div className="margin_kanankiri">
                <div className="wadah_content">
                    <div className="wadah_button_and_thelight">
                        <div className={`wadah_turn_on_the_light ${isOn ? 'color-blackk' : 'color-whitee'}`}>
                            <span className="span_turn_on">{isOn ? 'Turn off' : 'Turn on'}</span>
                            <span className="span_the_light">the light</span>
                        </div>
                        <div className="wadah_button_dark_or_light" onClick={handleSwitchClick}>
                            <img src={bg_btn} className="img_button_dark_or_light" />
                            <img src={switcher} className={`switcherr ${isOn ? 'switcher-on' : 'switcher-off'}`} />
                        </div>
                    </div>
                    <div className="wadah_img_notfound">
                        <img className="img_not_found_dark" src={isOn ? not_found_light : not_found_dark} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;