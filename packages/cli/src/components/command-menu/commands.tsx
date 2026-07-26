import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "start a new convo",
    value: "/new",
    action: (ctx) => {
      ctx.toast.show({
        message: "new convo starting..."
      });
    }
  },
  {
    name: "agents",
    description: "list the available agents",
    value: "/agents",
    action: (ctx) => {
      ctx.toast.show({
        message: "switching agent..."
      });
    }
  },
  {
    name: "models",
    description: "list the available models",
    value: "/models",
    action: (ctx) => {
      ctx.toast.show({
        message: "selecting model..."
      });
    }
  },
  {
    name: "sessions",
    description: "list the available sessions",
    value: "/sessions",
    action: (ctx) => {
      ctx.toast.show({
        message: "listing sessions..."
      });
    }
  },
  {
    name: "theme",
    description: "change the theme",
    value: "/theme",
    action: (ctx) => {
      ctx.toast.show({
        message: "opening theme menu..."
      });
    }
  },
  {
    name: "login",
    description: "login to the current account",
    value: "/login",
    action: (ctx) => {
      ctx.toast.show({
        message: "opening browser to sign in..."
      });
    }
  },
  {
    name: "logout",
    description: "logout from the current account",
    value: "/logout",
    action: (ctx) => {
      ctx.toast.show({
        variant: "success",
        message: "signed out..."
      });
    }
  },
  {
    name: "upgrade",
    description: "upgrade the current convo",
    value: "/upgrade",
    action: (ctx) => {
      ctx.toast.show({
        message: "upgrading convo..."
      });
    }
  },
  {
    name: "usage",
    description: "show the usage",
    value: "/usage",
    action: (ctx) => {
      ctx.toast.show({
        message: "showing usage..."
      });
    }
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
