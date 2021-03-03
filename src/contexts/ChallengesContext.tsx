import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challange {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallengeProviderProps{
    children: ReactNode;
}

interface ChallengesContextData{
    level: number,
    currentExperience: number,
    challengesCompleted: number, 
    experienceToNextLevel: number,
    activeChallenge: Challange,
    levelUp: () => void,
    startNewChallange: () => void,
    resetChallenge: () => void,
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengeProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallange(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    return(
        <ChallengesContext.Provider 
            value={{
                level, 
                currentExperience, 
                challengesCompleted,
                experienceToNextLevel, 
                activeChallenge,
                levelUp,
                startNewChallange,
                resetChallenge,
                
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}