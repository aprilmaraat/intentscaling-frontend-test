export interface ContactAccess {
  $id: string;
  contactId: string;
  oneTimePassword: string;
  expiryDateTime: string | null;
  portalAccess: boolean;
  adminAccess: boolean;
  id: number;
}