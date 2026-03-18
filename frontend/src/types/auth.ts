export type AuthResponse = {
  success: boolean;
  message: string;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
    };
    token: string;
  };
};