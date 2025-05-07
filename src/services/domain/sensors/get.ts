import { DInstrumentCertificatesCatalogModelWithAuthUserOptions } from "../instrument-certificates";
import { DSensorsSingleModel } from "./single";

export interface DSensorsGetServiceModel {
  sensor: DSensorsSingleModel;
  certificates: DInstrumentCertificatesCatalogModelWithAuthUserOptions[];
}