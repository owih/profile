import '../styles/main.scss'
import Sidebar from "./sidebar";
import ThemeToggle from "./theme-toggle";
import "./word-animated";
import ScrollTo from "./scrollTo";
import Section from "./section";
import CoolSwiper from "./cool-swiper";
import Form from "./form";
import Description from "./description";
import Animation from "./animation";
import WorkGrid from "./work-grid";
import AboutSlider from "./about-slider";
import WorkCard from "./work-card";

document.addEventListener('DOMContentLoaded', () => {
  [...document.getElementsByClassName('sidebar')].forEach((item) => new Sidebar(item));
  [...document.querySelectorAll('[data-toggle="theme"]')].forEach((item) => new ThemeToggle(item));
  [...document.querySelectorAll('[data-action="scrollTo"]')].forEach((item) => new ScrollTo(item));
  [...document.getElementsByClassName('section')].forEach((item) => new Section(item));
  [...document.getElementsByClassName('cool-swiper')].forEach((item) => new CoolSwiper(item));
  [...document.getElementsByClassName('form')].forEach((item) => new Form(item));
  [...document.getElementsByClassName('work-grid')].forEach((item) => new WorkGrid(item));
  [...document.getElementsByClassName('about-slider')].forEach((item) => new AboutSlider(item));
  [...document.getElementsByClassName('work-card')].forEach((item) => new WorkCard(item));
  [...document.querySelectorAll('[data-description]')].forEach((item) => new Description(item));
  [...document.querySelectorAll('[data-animation]')].forEach((item) => new Animation(item));
})
