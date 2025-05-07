import { DInstrumentCertificatesCatalogModelWithAuthUserOptions } from "../../../services/domain/instrument-certificates";
import { DSensorsGetServiceModel } from "../../../services/domain/sensors";

export interface DSensorsGetPayload {
  data: DSensorsGetServiceModel['sensor'];
  certificates: DInstrumentCertificatesCatalogModelWithAuthUserOptions[];
}