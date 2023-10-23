import './rate.scss';

function Rate(props) {
    const { price, speed, showChoice } = props;
    const theme = props.theme;
    let rateCard = "";
    if (showChoice) rateCard = "choice";
    return (
        <div className={`box ${rateCard}`}>
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