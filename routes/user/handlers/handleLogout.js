function handleLogout (req, res) {
  req.session = null
  res.redirect('/')
}

module.exports = handleLogout
