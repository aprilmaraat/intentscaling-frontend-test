import { ContactAccess } from "./contact-access";

export interface Contact {
  $id: string;
  contactId: string;
  locationId: string;
  contactName: string | null;
  firstName: string | null;
  lastName: string | null;
  firstNameRaw: string | null;
  lastNameRaw: string | null;
  companyName: string | null;
  email: string | null;
  phone: string | null;
  dnd: boolean;
  type: string;
  source: string;
  assignedTo: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
  address1: string | null;
  dateAdded: string; // ISO Date
  dateUpdated: string; // ISO Date
  dateOfBirth: string | null; // ISO Date or null
  businessId: string | null;
  country: string;
  website: string | null;
  createdDate: string; // ISO Date
  access: ContactAccess;
  id: number;
}