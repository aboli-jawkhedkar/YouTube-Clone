import videoFiles from "../models/videoFiles.js";
export const uploadVideo = async (req, res, next) => {
  // console.log(req.body)
  if (req.file === undefined) {
    res.status(404).json({ message: "please Upload a '.mp4' video file only " });
  } else {
    try {
      const file = new videoFiles({
        videoTitle: req.body.title,
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: req.file.size,
        videoChannel: req.body.channel,
        Uploder: req.body.Uploder,
      });
    //   console.log(file);
      await file.save();
      res.status(200).send("File uploded successfully");
    } catch (error) {
      console.log(error)
      res.status(404).send(error.message);
    }
  }
}
export const getAllvideos= async (req, res)=>{
  try {
    const files= await videoFiles.find();
    res.status(200).send(files)
  } catch (error) {
    res.status(404).send(error.message)
  }
}