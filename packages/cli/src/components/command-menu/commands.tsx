import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "start a new convo",
    value: "/new",
  },
  {
    name: "exit",
    description: "exit the current convo",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
