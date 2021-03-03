import { useContext, useEffect, useState } from 'react';
import style from '../styles/components/Countdown.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const { startNewChallange } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
        
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1*60);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout=setTimeout(()=>{
                setTime(time - 1);
            }, 1000);
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallange();
        }
    }, [isActive, time])

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