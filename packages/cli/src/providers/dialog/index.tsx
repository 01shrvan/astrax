import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { TextAttributes, RGBA } from "@opentui/core";
import { useKeyboard, useTerminalDimensions } from "@opentui/react";
import type { DialogConfig } from "./types";
import { useKeyboardLayer } from "../../providers/keyboard-layer";

export type DialogContextvalue = {
    open: (config: DialogConfig) => void;
    close: () => void;
};

const DialogContext = createContext<DialogContextvalue | null>(null);

export function useDialog(): DialogContextvalue {
    const value = useContext(DialogContext);
    if (!value) {
        throw new Error("useDialog must be used within a DialogProvider");
    }
    return value;
};

type DialogProviderProps = {
    children: ReactNode;
};

export function DialogProvider({ children }: DialogProviderProps) {
    const [currentDialog, setCurrentDialog] = useState<DialogConfig | null>(null);
    const { push, pop } = useKeyboardLayer();

    const close = useCallback(() => {
        setCurrentDialog(null);
        pop("dialog");
    }, [pop]);

    const open = useCallback((config: DialogConfig) => {
        setCurrentDialog(config);
        push("dialog", () => {
            close();
            return true;
        });
    }, [push, close]);
}