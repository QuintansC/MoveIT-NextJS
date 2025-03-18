import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ChallengeBox.module.css';
import { useCountdownContext } from '@/contexts/CountdownContext';

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const resetCountdown = useCountdownContext((state) => state.resetCountdown);
    
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={style.challengeBoxContainer}>
            {activeChallenge? (
                <div className={style.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button" 
                            className={style.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button 
                            type="button" 
                            className={style.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >Completei</button>
                    </footer>
                </div>
            ):(
                <div className={style.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avançe de level completando desafios
                    </p>
                </div>
            )}
        </div>
    );
}