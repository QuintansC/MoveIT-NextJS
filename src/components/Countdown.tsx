import { useContext } from 'react';
import style from '../styles/components/Countdown.module.css';

import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown(){
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished?
            <button 
                disabled
                className={style.countdownButton}
            >Ciclo encerrado</button>:(
                <button 
                type="button" 
                className={`${style.countdownButton} ${isActive?style.countdownButtonActive: null}`}
                onClick={isActive? resetCountdown :startCountdown}
            >{isActive? 'Abandonar o ciclo': 'Iniciar um Ciclo'}</button>
            )
        }
        </div>
    );
}