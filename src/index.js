import { navigationHandler, scrollHandler } from "./utils/handler";
import { getIP } from "./utils/request";

const mount = () => {
  navigationHandler()
  scrollHandler();
  getIP();
};

mount();
