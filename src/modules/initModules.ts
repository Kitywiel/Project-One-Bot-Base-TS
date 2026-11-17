import { autoTotemMainhandModule } from "./main/AutoTotemMainhandModule.js";
import { autoTotemModule } from "./main/AutoTotemOffhandModule.js";


export function initModules(){
  autoTotemModule.int()
  autoTotemMainhandModule.int()
}
