import { declareEvent } from "./tvForm.js";
import  {doApi} from "./tvList.js" 
const init = () => {
  doApi("lego");
  declareEvent()
};

init();
