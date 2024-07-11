import {
  imageHandler,
  navigationHandler,
  scrollHandler,
} from "./utils/handler";
import { getIP } from "./utils/request";

const mount = () => {
  navigationHandler();
  scrollHandler();
  imageHandler();
  getIP();
};

mount();
