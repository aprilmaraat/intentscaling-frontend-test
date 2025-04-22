export interface Property {
  $id: string;
  contactId: string;
  staffMembersName: string;
  entryDate: string; // ISO date string
  propertyAddress: string;
  propertyArea: string;
  propertyPrice: number;
  titleReference: string;
  propertyAcquisitionDate: string; // ISO date string
  propertyMarketValue: number;
  propertyCriteria: string;
  checklist: string;
  suburb: string;
  configuration: string;
  frontage: string;
  currentRental: number;
  rentalAppraisal: string;
  potentialYield: string;
  comparableSales: string;
  developmentPotential: string;
  propertyDocuments: any | null;
  id: number;
}