import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "start a new convo",
    value: "/new",
  },
  {
    name: "agents",
    description: "list the available agents",
    value: "/agents",
  },
  {
    name: "models",
    description: "list the available models",
    value: "/models",
  },
  {
    name: "sessions",
    description: "list the available sessions",
    value: "/sessions",
  },
  {
    name: "theme",
    description: "change the theme",
    value: "/theme",
  },
  {
    name: "login",
    description: "login to the current account",
    value: "/login",
  },
  {
    name: "logout",
    description: "logout from the current account",
    value: "/logout",
  },
  {
    name: "upgrade",
    description: "upgrade the current convo",
    value: "/upgrade",
  },
  {
    name: "usage",
    description: "show the usage",
    value: "/usage",
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
