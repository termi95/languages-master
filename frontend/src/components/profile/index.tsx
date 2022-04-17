import "./profile.css";
import Navbar from "../navbar";
import { useProfile } from "./useProfile";

const Profile = () => {
  const { user } = useProfile();
  const { id, username, email } = user;

  return (
    <>
      <div className="grid-profile">
        <Navbar />
        <div className="profile">
          <p>Profile info</p>
          <div className="profile-card">
            <table>
              <tbody>
                <tr>
                  <td>User id: {id}</td>
                </tr>
                <tr>
                  <td>Username: {username}</td>
                </tr>
                <tr>
                  <td>Email: {email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
