import { CTAction, Footer, Header } from "../components";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import useUserDashboard from "../hooks/useUserDashboard";

function UserDashboard() {
  const { user, handleSignOut } = useUserDashboard();

  return (
    <div className=" ">
      <Header />
      <div className=" flex items-center justify-center my-6 md:my-9">
        <div className="w-full max-w-sm md:max-w-2xl bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col items-center gap-5 pb-10 pt-4 px-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={avatar}
              alt="avatar"
            />

            {user ? (
              <>
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  {user.firstName} &nbsp;
                  {user.lastName}
                </h5>
                <span className="text-base text-gray-500 ">{user.email}</span>
                <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 text-center text-gray-500 mt-5">
                  <div>
                    <h2 className=" pb-2">Movies Watched</h2>
                    <p>29</p>
                  </div>
                  <div>
                    <h2 className=" pb-2">Movie Watched List</h2>
                    <p>15</p>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  className="bg-[#BE123C] text-white px-4 py-2 rounded-md"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <h5 className="mb-5 text-xl font-medium text-gray-900 ">
                  You are not logged in
                </h5>

                <Link to="/login">
                  <button className="bg-[#BE123C] text-white px-4 py-2 rounded-md">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <CTAction />
      <Footer />
      <br />
    </div>
  );
}

export default UserDashboard;
