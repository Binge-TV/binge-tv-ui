
// manages tokens saved in front end local storage
class TokenService {
  setToken(authToken, username, refreshToken, expiresAt) {
    localStorage.setItem("authenticationToken", authToken);
    localStorage.setItem("username", username);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("expiresAt", expiresAt);
  }

  getToken() {
    return localStorage.getItem("refreshToken");
  }

  getUserFromToken() {
    const token = localStorage.getItem("username");
    return token ? token : null;
  }

  removeToken() {
    localStorage.removeItem("authenticationToken");
    localStorage.removeItem("username");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expiresAt");
  }
}
export default new TokenService();
