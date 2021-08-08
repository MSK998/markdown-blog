const IMAGE_URL = "http://localhost:3000/images/";

exports.getImage = async (req, res, next) => {};

exports.uploadImage = async (req, res, next) => {
  try {
    let data = [].concat(req.files);
    console.log(data);
    res.send(
      data.map((x) => ({
        filename: x.filename,
        url: IMAGE_URL.concat(x.filename),
      }))
    );
  } catch {
    res.sendStatus(400);
  }
};
