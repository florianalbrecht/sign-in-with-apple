export enum ButtonType {
  default,
  signUp,
  continue
}

export enum ButtonStyle {
  white,
  whiteOutline,
  black
}

export enum AuthScope {
  email = "email",
  fullName = "full_name"
}

export interface ModuleConstants {
  authScopes: typeof AuthScope;
  buttonStyles: typeof ButtonStyle;
  buttonTypes: typeof ButtonType;
  isAvailable: boolean;
}

export interface PersonNameComponents {
  familyName: string;
  givenName: string;
  middleName?: string;
  namePrefix?: string;
  nameSuffix?: string;
  nickname?: string;
  phoneticRepresentation?: PersonNameComponents;
}

export type UserDetectionStatus = "unknown" | "unsopported" | "likelyReal";

export interface AuthorizationCredentials {
  user: string;
  state?: string;
  authorizedScopes: AuthScope[];
  authorizationCode: string;
  identityToken?: String;
  email: string;
  fullName: PersonNameComponents;
  realUserStatus: UserDetectionStatus;
}

export interface AuthorizationError {
  code: "ASAUTHORIZATION_ERROR";
  message: String;
}
