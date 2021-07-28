import React, {useEffect, useState} from "react";
import s from './AnalogClock.module.scss'

type PropsType = {
}

export const AnalogClock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {

    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalID)
    }
  },[] )

  return <div className={s.clock}>

    <div
      className={s.hourHand}
      style={{
        transform: `rotateZ(${date.getHours() * 30}deg)`
      }}
    />
    <div
      className={s.minHand}
      style={{
        transform: `rotateZ(${date.getMinutes() * 6}deg)`
      }}
    />
    <div
      className={s.secHand}
      style={{
        transform: `rotateZ(${date.getSeconds() * 6}deg)`
      }}
    />

    <span className={s.twelve}>12</span>
    <span className={s.one}>1</span>
    <span className={s.two}>2</span>
    <span className={s.three}>3</span>
    <span className={s.four}>4</span>
    <span className={s.five}>5</span>
    <span className={s.six}>6</span>
    <span className={s.seven}>7</span>
    <span className={s.eight}>8</span>
    <span className={s.nine}>9</span>
    <span className={s.ten}>10</span>
    <span className={s.eleven}>11</span>
  </div>
}