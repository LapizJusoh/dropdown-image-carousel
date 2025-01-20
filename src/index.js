import "./styles.css";
import setVisible from "./setVisible.js";

const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdown > ul");

dropdownBtn.addEventListener("click", () => setVisible(dropdownMenu));