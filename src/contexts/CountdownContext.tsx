import { create } from "zustand";

type State = {
    minutes: number,
    seconds: number,
    time: number,
    hasFinished: boolean,
    isActive: boolean,
}

type Actions = {
  resetCountdown: () => Promise<any>
  updateTime: (time: State['time']) => void
  updateMinutes: (minutes: State['minutes']) => void,
  updateSeconds: (seconds: State['seconds']) => void
  updateHasFinished: (hasFinished: State['hasFinished']) => void,
  updateIsActive: (isActive: State['isActive']) => void  
}

const timer = 0.1;

export const useCountdownContext = create<State & Actions>((set)=>  ({
    time: timer*60,
    updateTime: (times) => set(() => ({ time: times })),
    minutes: Math.floor(timer*60 / 60),
    updateMinutes: (minute) => set(() => ({ minutes: minute })),
    seconds: (timer*60) % 60,
   

    updateSeconds: (second) => set(() => ({ seconds: second })),
    hasFinished: false,
    updateHasFinished: (state: boolean)=> set({ hasFinished: state }),
    isActive: false,
    updateIsActive: (state: boolean)=> set({ isActive: state, time: timer*60 }),

    resetCountdown: async () => set({
        isActive: false,
        hasFinished: false,

        time: timer * 60,
        minutes: Math.floor(timer * 60 / 60),
        seconds: (timer * 60) % 60,
    }),
}))
