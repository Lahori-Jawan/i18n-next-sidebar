interface AcquisitionTypes {
  id: string;
  name: string;
}

interface Statuses {
  id: number;
  name: string;
  createdon: string;
  createdby: string;
  updatedon: string;
  updatedby: string;
}

interface Districts extends Statuses {}

interface SharedStore {
  statuses: Statuses[];
  propertyTypes: AcquisitionTypes[];
  districts: Districts[];

  //   actions
  // setStatuses: (s: string[]) => void;
  // setPropertyTypes: (s: AcquisitionTypes[]) => void;
  // setDistricts: (s: string[]) => void;

  // network calls
  fetchStatuses: () => void;
}
