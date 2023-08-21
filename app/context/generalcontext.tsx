"use client"
import { ReactNode, createContext, useContext, useState } from "react";

const generalContextDefaultValues: generalContextType = {
    plpViewCol: true,
    setPlpViewCol: () => { },
};

const GeneralContext = createContext<generalContextType>(generalContextDefaultValues);

export function useGeneral() {
    return useContext(GeneralContext);
}

type Props = {
    children: ReactNode;
};

export function GeneralProvider({ children }: Props) {
    const [plpViewCol, setPlpViewCol] = useState(true);

    return (
        <GeneralContext.Provider value={{ plpViewCol, setPlpViewCol }}>
            {children}
        </GeneralContext.Provider>
    );
}