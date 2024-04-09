class UserLocalDB {
  static saveUser(user) {
    if (!user) {
      return localStorage.removeItem("user");
    }

    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUser() {
    let user = localStorage.getItem("user");
    if (!user) {
      return null;
    }

    return JSON.parse(localStorage.getItem("user"));
  }
}

export default UserLocalDB;
