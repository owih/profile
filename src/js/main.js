import '../styles/main.scss'
import Sidebar from "./sidebar";
import ThemeToggle from "./theme-toggle";
import './word-animated';

document.addEventListener('DOMContentLoaded', () => {
  [...document.getElementsByClassName('sidebar')].forEach((item) => new Sidebar(item));
  [...document.querySelectorAll('[data-toggle="theme"]')].forEach((item) => new ThemeToggle(item));
})