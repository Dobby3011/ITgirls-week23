import './rate.scss';
import React, { useState } from "react";

function Rate(props) {
    const { price, speed, theme } = props;
    const [selected, setSelected] = useState(false);

    const handleChange = () => {
        setSelected(!selected);
    }
    return (
        <div className={selected ? 'choice' : 'box'} onClick={handleChange}>
            <div className={theme.box__rate}>Безлимитный {price}</div>
            <div className={theme.box__price}>
                {price}
                <span className='box__price_month'> руб/мес</span>
            </div>
            <div className="box__speed"> до {speed} Мбит/сек</div>
            <div className="box__traffic">Объем включенного трафика не ограничен</div>
        </div>
    )
}


export default Rate;