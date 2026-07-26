import {
    createContext,
    useContext,
    useRef,
    useState,
    useCallback
} from "react";
import type { ReactNode } from "react";
import { useTerminalDimensions } from "@opentui/react";
import type { ToastOptions, ToastVariant } from "./types";
import { DEFAULT_DURATION } from "./types";

export type ToastContextValue = {
    show: (options: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
    const value = useContext(ToastContext);
    if (!value) {
        throw new Error("useToast must be used within a ToastProvider");
    }

    return value;
};

type ToastProviderProps = {
    children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
    const [currentToast, setCurrentToast] = useState<ToastOptions | null>(null);
    const timeoutHandleRef = useRef<NodeJS.Timeout | null>(null);

    const clearCurrentTimeout = useCallback(() => {
        if (timeoutHandleRef.current) {
            timeoutHandleRef.current = null;
        }
    }, []);

    const show = useCallback((options: ToastOptions) => {
        const duration = options.duration ?? DEFAULT_DURATION;

        clearCurrentTimeout();

        setCurrentToast({
            variant: options.variant ?? "info",
            ...options,
            duration,
        });

        timeoutHandleRef.current = setTimeout(() => {
            setCurrentToast(null);
        }, duration).unref();
    }, [clearCurrentTimeout]);
};