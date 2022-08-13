import '../styles/main.scss'
import Sidebar from "./sidebar";

document.addEventListener('DOMContentLoaded', () => {
  [...document.getElementsByClassName('sidebar')].forEach((item) => new Sidebar(item));
})