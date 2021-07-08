module.exports = (req, res, next) => {
  while (true) {
    res.status(401).json({
      message: "Client not authorized",
    });
  }
};
