import { useState, useContext, createContext, ReactNode, useEffect } from 'react';
import { create as createBackend } from '@bett3r-dev/pair-programming-interview-client-library';
import useAuth, { AuthContextType } from '../useAuth';

type Props = { children: ReactNode }
export type BackendType = any;
export type BackendContextType = { backend: ReturnType<typeof createBackend>, setBackend: (value: BackendType) => void }

export const backendContext = createContext<BackendContextType | null>(null);


export function ProvideBackend({ children }: Props) {
    const _backend = useProvideBackend() as BackendContextType;
    return <backendContext.Provider value={_backend}>{children}</backendContext.Provider>;
}

export default function useBackend() {
    return useContext(backendContext);
}

//TODO: Fake, reemplazar
const createBackend = ({ baseUrl, token }: { baseUrl: string, token: string | undefined }) => {
    return {
        baseUrl,
        token
    }
}

function useProvideBackend() {
    const [backend, setBackend] = useState<ReturnType<typeof createBackend> | null>();
    const { user } = useAuth() as AuthContextType;
    useEffect(() => {
        setBackend(createBackend({ baseUrl: import.meta.env.VITE_REACT_APP_BACKEND_URL || '', token: user?.token }));
        return () => {
            // backend.close();
        };
    }, [user]);

    return {
        backend,
        setBackend
    };
}
