import { declareLightBoxEvents } from "./lightbox.js";
import { declareEvent } from "./tvForm.js";
import {doApi} from "./tvList.js"

const init = () => {
  doApi("batman");
  declareEvent();
  declareLightBoxEvents()
}



init();