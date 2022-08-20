export type IconsId =
  | "bubble2"
  | "bubbles"
  | "bubbles2"
  | "contrast"
  | "display"
  | "drawer"
  | "fire"
  | "git"
  | "github"
  | "home"
  | "html-five"
  | "laptop"
  | "mobile"
  | "steam"
  | "telegram"
  | "terminal"
  | "translate";

export type IconsKey =
  | "Bubble2"
  | "Bubbles"
  | "Bubbles2"
  | "Contrast"
  | "Display"
  | "Drawer"
  | "Fire"
  | "Git"
  | "Github"
  | "Home"
  | "HtmlFive"
  | "Laptop"
  | "Mobile"
  | "Steam"
  | "Telegram"
  | "Terminal"
  | "Translate";

export enum Icons {
  Bubble2 = "bubble2",
  Bubbles = "bubbles",
  Bubbles2 = "bubbles2",
  Contrast = "contrast",
  Display = "display",
  Drawer = "drawer",
  Fire = "fire",
  Git = "git",
  Github = "github",
  Home = "home",
  HtmlFive = "html-five",
  Laptop = "laptop",
  Mobile = "mobile",
  Steam = "steam",
  Telegram = "telegram",
  Terminal = "terminal",
  Translate = "translate",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Bubble2]: "61697",
  [Icons.Bubbles]: "61698",
  [Icons.Bubbles2]: "61699",
  [Icons.Contrast]: "61700",
  [Icons.Display]: "61701",
  [Icons.Drawer]: "61702",
  [Icons.Fire]: "61703",
  [Icons.Git]: "61704",
  [Icons.Github]: "61705",
  [Icons.Home]: "61706",
  [Icons.HtmlFive]: "61707",
  [Icons.Laptop]: "61708",
  [Icons.Mobile]: "61709",
  [Icons.Steam]: "61710",
  [Icons.Telegram]: "61711",
  [Icons.Terminal]: "61712",
  [Icons.Translate]: "61713",
};
