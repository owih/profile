import '../styles/main.scss'
import Sidebar from "./sidebar";
import ThemeToggle from "./theme-toggle";
import "./word-animated";
import ScrollTo from "./scrollTo";
import Section from "./section";

document.addEventListener('DOMContentLoaded', () => {
  [...document.getElementsByClassName('sidebar')].forEach((item) => new Sidebar(item));
  [...document.querySelectorAll('[data-toggle="theme"]')].forEach((item) => new ThemeToggle(item));
  [...document.querySelectorAll('[data-action="scrollTo"]')].forEach((item) => new ScrollTo(item));
  [...document.getElementsByClassName('section')].forEach((item) => new Section(item));
})