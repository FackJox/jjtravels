import express, { Request, Response, NextFunction } from "express";
import { MemoryStore } from "express-session";
import passport from "passport";

interface ReqResNextProps {
  req: RequestProps;
  res: ResponseProps;
  next: NextFunction;
}

interface RequestProps extends Request {
  session: MemoryStore
  user: {
    _id: string
  };
  body: {
    password: string;
    email: string;
  };
  statusCode: number;
}
interface ResponseProps extends Response {
  session: MemoryStore
  body: {
    password: string;
    email: string;
  };
  statusCode: number;
}

interface Error {
  status?: number;
}

const router = express.Router();

// User model
const User = require("../models/User");

// Parse Json
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// Get our authenticate module
const authenticate = require("../authenticate");

// Get Users
router.get(
  "/",
  authenticate.verifyUser,
  ({ req, res, next }: ReqResNextProps) => {
    // Get all records
    User.find({})
      .then(
        (users: ReqResNextProps) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          // format result as json
          res.json(users);
        },
        (err?: Error) => next(err)
      )
      .catch((err?: Error) => next(err));
  }
);

// Register User
router.post("/signup", ({ req, res, next }: ReqResNextProps) => {
  // Create User
  User.register(
    new User({ email: req.body.email }),
    req.body.password,
    (err?: Error, user?: ReqResNextProps) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        // Use passport to authenticate User
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
        });
      }
    }
  );
});

// Login
router.post(
  "/login",
  passport.authenticate("local"),
  ({ req, res }: ReqResNextProps) => {
    // Create a token
    const token = authenticate.getToken({ _id: req.user._id });

    // Response
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      token: token,
      status: "You are successfully logged in!",
    });
  }
);

// Logout
router.get("/logout", ({ req, res, next }: ReqResNextProps) => {
  if (req.session) {
    req.session.destroy(() => {
      res.clearCookie("session-id");
      res.redirect("/");
    });

  } else {
    const err: Error = new Error("You are not logged in!");
    err.status = 403;
    next(err);
  }
});

module.exports = router;
