import {
  blogListHandler,
  imageHandler,
  navigationHandler,
  scrollHandler,
  timeAxisHandler,
} from "./utils/handler";
import { getIP } from "./utils/request";

const mount = () => {
  navigationHandler();
  scrollHandler();
  imageHandler();
  timeAxisHandler();
  blogListHandler();
  getIP();
};

mount();
