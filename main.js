import { getAdat } from "./sync.js";
import { kerdesekOsszeallit, megjelenitKerdesek, jorosszValasz } from "./fuggvenyek.js";

getAdat("adatok.json", init);



export function init(adat) {
  megjelenitKerdesek(kerdesekOsszeallit(adat));
  jorosszValasz()
}



