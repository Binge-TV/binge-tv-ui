
class TokenService {

  setToken(authToken, username, refreshToken, expiresAt) {
    localStorage.setItem("authenticationToken", authToken)
    localStorage.setItem("username", username)
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("expiresAt", expiresAt)
  }

 getToken() {
  return localStorage.getItem("authenticationToken")
 }

  getUserFromToken() {
   const token = localStorage.getItem("username");
   console.log("USER TOKEN", token)
    return token
      ? token
      : null;
  }

  removeToken() {
   localStorage.removeItem("authenticationToken")
    localStorage.removeItem("username")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("expiresAt");
  }
}
export default new TokenService();