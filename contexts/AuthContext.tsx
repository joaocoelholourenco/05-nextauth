import { createContext, ReactNode } from "react";

type SignInCredetials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentails: SignInCredetials): Promise<void>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({ email, password }: SignInCredetials) {
    console.log(email, password);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
