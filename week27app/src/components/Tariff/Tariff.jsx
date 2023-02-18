import React from 'react'
import style from './style.module.scss';


export default  Tariff;
function Tariff(props, flag) {
  const c1 = props.color=="red" ? "active" : "";
  return (
    <div className={style.tariff_card + " " + style[c1]}>
        <div className={style.tariff_name + " " + style[props.color]}>{props.name}</div>
        <div className={style.tariff_price + " " + style[props.color]}><span className={style.fee}>руб.</span>{props.price}<span className={style.fee}>/мес.</span></div>
        <div className={style.tariff_speed}>{props.speed}</div>
        <div className={style.tariff_text}>{props.text}</div>
      </div>
  )
}
