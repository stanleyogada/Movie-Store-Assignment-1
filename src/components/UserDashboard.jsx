import { useEffect, useState } from "react";
import UserLocalDB from "../utils/UserLocalDB";

const useUserDashboard = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = UserLocalDB.getUser();
    setUser(user);
  }, []);

  return {
    user,
  };
};

function UserDashboard() {
  const { user } = useUserDashboard();

  return (
    <div>
      Static (Header)
      <br />
      Static (Avatar)
      <br />
      {user?.firstName}
      <br />
      {user?.lastName}
      <br />
      {user?.email}
      <br />
      Static (Number of watched movies)
      <br />
      Static (Number of movies in the watchlist)
      <br />
      Static (Logout button)
      <br />
      Static (Footer)
      <br />
    </div>
  );
}

export default UserDashboard;
