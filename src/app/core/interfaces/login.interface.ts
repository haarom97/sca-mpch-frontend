
export interface LoginRequest {
  dni: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

