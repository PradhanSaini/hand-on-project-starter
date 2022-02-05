const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
var fs = require("fs");
var FormData = require("form-data");
dotenv.config();

// eslint-disable-next-line no-unused-vars
// var FormData = require("form-data");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB is connected .......");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// eslint-disable-next-line no-unused-vars
const UserDetails = mongoose.model("UserDetails", UserSchema);

// const silence = new UserDetails({ email: "🤩", password: "Ptanhi@123" });

async function Saveuserdata(userdata) {
  const newuser = new UserDetails(userdata);
  const result = await newuser.save();
  return result;
}
// async function getdata() {
//   const response = await axios({
//     url: "https://dog.ceo/api/breeds/image/random",
//   });
//   return response;
// }

// eslint-disable-next-line no-unused-vars
app.post("/signupPage", (req, res) => {
  const Newuser = req.body;
  if (!Newuser.email) res.send({ message: "Please enter Email" });
  else if (!Newuser.password) res.send({ message: "Please enter Password" });
  else {
    UserDetails.findOne({ email: Newuser.email }, (err, user) => {
      if (user) {
        res.send({ message: "User Already Registered" });
      } else {
        try {
          Saveuserdata(Newuser);
          res.send({ message: "Succefully Registered 😎" });
        } catch (err) {
          res.send({ message: `Error : ${err}` });
        }
      }
    });
  }
});

app.post("/loginPage", (req, res) => {
  const Newuser = req.body;
  if (!Newuser.email) res.send({ message: "Please enter Email" });
  else if (!Newuser.password) res.send({ message: "Please enter Password" });
  else {
    UserDetails.findOne({ email: Newuser.email }, (err, user) => {
      if (user) {
        if (Newuser.password == user.password)
          res.send({ message: "Ur are logged in" });
        else res.send({ message: "Please Enter correct password" });
      } else {
        res.send({ message: `User does not exist` });
      }
    });
  }
});

// eslint-disable-next-line no-unused-vars
app.post("/bg-remover", async (req, res) => {
  const { image } = req.body;
  // res.send(req.body.data);
  const imageData = image.substring(image.indexOf(",") + 1);
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file_b64", imageData);
  
  // axios({
  //   method: "post",
  //   url: "https://api.remove.bg/v1.0/removebg",
  //   data: formData,
  //   responseType: "json",
  //   headers: {
  //     "X-Api-Key": "aFj9DYxWVTKpucxuwM21hs64",
  //     Accept: "application/json",
  //   },
  // })
  //   .then((response) => {
  //     return res.status(200).json({
  //       image: response.data.data.result_b64, // This variable returns base64 image result from remove.bg api
  //     });
  //   })
  //   .catch((error) => {
  //     return console.error("Request failed:", error);
  //   });

  // const formData = new FormData();
  // formData.append("size", "auto");
  // formData.append(
  //   "image_url",
  //   "https://www.whatsappimages.in/wp-content/uploads/2020/12/Cute-Girl-Images-For-Whatsapp-Dp-Free-Download-9.jpg",
  // );

  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    responseType: "json",
    headers: {
      ...formData.getHeaders(),
      "X-Api-Key": "wkaGohZucxHUgiEBokmiUiFS",
      Accept: "application/json",
    },
    encoding: null,
  })
    .then((response) => {
      if (response.status != 200)
        return console.error("Error:", response.status, response.statusText);
      // fs.writeFileSync(
      //   "C:/Users/pradh/Desktop/cuvette/no-bgg.png",
      //   response.data,
      // );
      res.send(response.data.data.result_b64);
    })
    .catch((error) => {
      return console.error("Request failed:", error);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`PORT ${process.env.PORT} is running ......`);
});
