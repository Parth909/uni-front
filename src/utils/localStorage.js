import store from "../store";
import { setUserTheme } from "../actions/user";

export const initUserTheme = () => {
  if (localStorage.getItem("__UniUserTheme__") === null) {
    localStorage.setItem("__UniUserTheme__", "light");
    document.body.setAttribute("data-theme", "light");
  } else {
    let thm = localStorage.getItem("__UniUserTheme__"); // str returned

    if (thm === "light") {
      store.dispatch(setUserTheme("light"));
      document.body.setAttribute("data-theme", "light");
    } else if (thm === "dark") {
      store.dispatch(setUserTheme("dark"));
      document.body.setAttribute("data-theme", "dark");
    } else {
      store.dispatch(setUserTheme("light"));
      document.body.setAttribute("data-theme", "light");
    }
  }
};
