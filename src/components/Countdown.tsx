import { useContext, useEffect } from 'react';
import style from '../styles/components/Countdown.module.css';


import { ChallengesContext } from '@/contexts/ChallengesContext';
import { useCountdownContext } from '@/contexts/CountdownContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const minutes = useCountdownContext((state) => state.minutes)
    const seconds = useCountdownContext((state) => state.seconds)
    const isActive = useCountdownContext((state) => state.isActive)
    const time = useCountdownContext((state) => state.time)
    const hasFinished = useCountdownContext((state) => state.hasFinished)
    const resetCountdown = useCountdownContext((state) => state.resetCountdown)
    const updateHasFinished = useCountdownContext((state) => state.updateHasFinished)
    const updateIsActive = useCountdownContext((state) => state.updateIsActive)
    const updateTime = useCountdownContext((state) => state.updateTime)
    const updateSeconds = useCountdownContext((state) => state.updateSeconds)
    const updateMinutes = useCountdownContext((state) => state.updateMinutes)
    const { startNewChallange } = useContext(ChallengesContext);

     useEffect(()=>{
        if(isActive && time >= 0 && !hasFinished){

            if(countdownTimeout == undefined){
                countdownTimeout=setTimeout(()=>{
                    updateSeconds(time % 60)
                    updateMinutes(Math.floor(time / 60))
                    updateTime(time - 1);
                }, 1)
            } else{
                countdownTimeout=setTimeout(()=>{
                    updateSeconds(time % 60)
                    updateMinutes(Math.floor(time / 60))
                    updateTime(time - 1);
                }, 1000);
            }
            
        }else if(isActive && time === -1){
            updateHasFinished(true);
            updateIsActive(false);
            startNewChallange();
        }else if(!isActive && !hasFinished){
            resetCountdown()
        }
    }, [isActive, time])

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
            >
                Ciclo encerrado
            </button> : (
            <button 
                type="button" 
                className={`${style.countdownButton} ${isActive?style.countdownButtonActive: null}`}
                onClick={()=> isActive? resetCountdown() : updateIsActive(true)}
            >
                {isActive? 'Abandonar o ciclo': 'Iniciar um Ciclo'}
            </button>
            )
        }
        </div>
    );
}