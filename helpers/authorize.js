//take in session id and id req and compare
//if same return true
//if not then return false

const authChecker = (sessionUserId, requestUserId) => {
  return sessionUserId === requestUserId ? true : false
}

module.exports = authChecker
