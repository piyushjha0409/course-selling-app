const {Router} = require('express')
const bcrypt = require('bcrypt')
const {adminModel, courseModel} = require('../db')
const jwt = require('jsonwebtoken')

const adminRouter = Router()

//for signup
adminRouter.post("/singup", async function (req, res) {
    const { email, firstName, lastName, password } = req.body;
  
    //hash the pass
    const hashedPass = await bcrypt.hash(password, 10);
  
    const register = await userModel.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPass,
    });
  
    if (register) {
      console.log("Signed up, successfully!");
    }
  });
  
  //signed in route
  adminRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;
  
    //search in the database
    const user = await userModel.findOne({
      email: email,
    });
  
    if (findUser) {
      const isPass = await bcrypt.compare(password, user.password);
    }
    if (isPass) {
      try {
        const token = jwt.sign(
          {
            id: user._id,
          },
          JWT_USER_PASS
        );
  
        res.json({
          token: token,
        });
      } catch (err) {
        console.log("Cannot store the json web token");
      }
    } else {
      res.status(400).json({
        message: "Incorrect credentials",
      });
    }
  });
  

  //make three new ones 

  /**
   * /course
   * @post 
   */

  /**
   * /course
   * @put 
   */

  /**
   * /course/bulk
   * @get
   */

