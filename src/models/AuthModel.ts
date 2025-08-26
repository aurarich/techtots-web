// type DeviceIDType = "WEB" | "MOBILE";
export type OTPRequestType = "PASSWORDREST" | "SIGNUPVERIFY";

export type SessionType = "APP" | "KYC" | null;

export enum StoreKeys {
  AUTH_TOKEN = "authToken",
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  FIRST_LAUNCH = "firstLaunch",
  USER_ID = "userId",
  LOCK_SCREEN_INTERVAL = "lockScreenInterval",
  LOCK_SCREEN_TIME = "lockScreenTime",
  LOCK_SCREEN_CODE = "lockScreenCode",
  LOCK_SCREEN_ENABLED = "lockScreenEnabled",
  ENABLE_BIOMETRIC_LOCK = "enableBiometricLock"
}

interface AuthUser {
  accountNo: string
  email: string
  role: string[]
  exp: number
}

export interface AuthSession {
    session: AuthUser | null
    setSession: (user: AuthUser | null) => void
    reset: () => void
}

export interface LoginModel {
  username: string;
  password: string;
  // device_id: string;
  // device_type: DeviceIDType;
}

export interface LoginResponseModel {
  accessToken: string,
  refreshToken:string
}

export interface RegisterModel {
  phone: string;
  email: string;
  password: string;
  user_type: string;
  channel: string;
}

export interface ChangePasswordModel {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

export interface ResetPasswordModel {
  code: string;
  new_password: string;
  confirm_new_password: string;
}
