import { useEffect, useState } from "react";
import UserLocalDB from "../utils/UserLocalDB";

const useUserDashboard = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = UserLocalDB.getUser();
    setUser(user);
  }, []);

  const handleSignOut = () => {
    UserLocalDB.saveUser(null);
    setUser(null);
  };

  return {
    user,
    handleSignOut,
  };
};

export default useUserDashboard;
