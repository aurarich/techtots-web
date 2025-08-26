export interface KYCModel {
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  phone: string;
}

export interface UserModel {
  phone: string;
  email: string;
  user_type: string;
  channel: string;
  id: number;
  created_at: Date;
  modified_at: Date;
  last_login_at: Date;
  is_kyc_completed: boolean;
  
}
