import { createContext, ReactNode, useState, useEffect } from "react";
import { User } from "@/interface/user";

interface UserContextValue {
  user: User | null;
  token: string | null;
  login: ({ user, token }: { user: User; token: string }) => void;
  logout: () => void;
}
//글로벌 하게 사용할 데이터를 간직할 컴포넌트를 만든다. 데이터를 저장하는 저장소
export const UserContext = createContext<UserContextValue | null>(null);

// 컨텍스를 만들때는 항상 프로바이더도 만들어줘야한다. 우산을 만드는 곳
// 맡에있는 하위 컴포넌트를 감싸줄 수 있는 부모 컴포넌트다.
// children 을 매개변수로 받아온다.
// 리턴할때 UserContext.Provider로 감싸준다.
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const userStorageItem = window.localStorage.getItem("userInfo") ?? null;
    const token = window.localStorage.getItem("tokenInfo") ?? null;

    if (userStorageItem) {
      const user = JSON.parse(userStorageItem);
      console.log(user);
      if (user?._id && token) {
        setUser(user);
        setToken(token);
      }
    }
  }, []);

  const value = {
    user,
    token,
    login: ({ user, token }: { user: User; token: string }) => {
      setUser(user);
      setToken(token);
      window.localStorage.setItem("userInfo", JSON.stringify(user));
      window.localStorage.setItem("tokenInfo", JSON.stringify(token));
    },
    logout: () => {
      setUser(null);
      setToken(null);
      window.localStorage.removeItem("userInfo");
      window.localStorage.removeItem("tokenInfo");
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
