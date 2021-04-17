import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export const QuizContext = createContext<{
  timer: number;
  setPaused: Dispatch<SetStateAction<boolean>>;

}>({
  timer: 0,
  setPaused: () => {},
});

export const QuizContextProvider: React.FC = ({ children }) => {
  const [timer, setTimer] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if(!paused) setTimer(t => t+1);
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [setTimer, paused])

  return (
    <QuizContext.Provider value={{ timer, setPaused }}>
      {children}
    </QuizContext.Provider>
  );
};
