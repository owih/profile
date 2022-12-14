export type IconsId =
  | "bubble"
  | "bubbles"
  | "contrast"
  | "display"
  | "drawer"
  | "fire"
  | "git"
  | "github"
  | "home"
  | "html-five"
  | "laptop"
  | "mail"
  | "mobile"
  | "notification"
  | "steam"
  | "telegram"
  | "terminal"
  | "translate"
  | "user";

export type IconsKey =
  | "Bubble"
  | "Bubbles"
  | "Contrast"
  | "Display"
  | "Drawer"
  | "Fire"
  | "Git"
  | "Github"
  | "Home"
  | "HtmlFive"
  | "Laptop"
  | "Mail"
  | "Mobile"
  | "Notification"
  | "Steam"
  | "Telegram"
  | "Terminal"
  | "Translate"
  | "User";

export enum Icons {
  Bubble = "bubble",
  Bubbles = "bubbles",
  Contrast = "contrast",
  Display = "display",
  Drawer = "drawer",
  Fire = "fire",
  Git = "git",
  Github = "github",
  Home = "home",
  HtmlFive = "html-five",
  Laptop = "laptop",
  Mail = "mail",
  Mobile = "mobile",
  Notification = "notification",
  Steam = "steam",
  Telegram = "telegram",
  Terminal = "terminal",
  Translate = "translate",
  User = "user",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Bubble]: "61697",
  [Icons.Bubbles]: "61698",
  [Icons.Contrast]: "61699",
  [Icons.Display]: "61700",
  [Icons.Drawer]: "61701",
  [Icons.Fire]: "61702",
  [Icons.Git]: "61703",
  [Icons.Github]: "61704",
  [Icons.Home]: "61705",
  [Icons.HtmlFive]: "61706",
  [Icons.Laptop]: "61707",
  [Icons.Mail]: "61708",
  [Icons.Mobile]: "61709",
  [Icons.Notification]: "61710",
  [Icons.Steam]: "61711",
  [Icons.Telegram]: "61712",
  [Icons.Terminal]: "61713",
  [Icons.Translate]: "61714",
  [Icons.User]: "61715",
};
