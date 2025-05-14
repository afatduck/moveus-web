import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { ContextProfileFragment } from "~/graphql/generated";

type ProfileContextType = {
  profile: ContextProfileFragment | null;
  setProfile: React.Dispatch<React.SetStateAction<ContextProfileFragment | null>>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [profile, setProfile] = useState<ContextProfileFragment | null>(
    JSON.parse(localStorage.getItem('profile') ?? "null")
  );

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [profile, setProfile])

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
