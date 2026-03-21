import express from "express";
import expressLayouts from "express-ejs-layouts";
import dotenv from "dotenv";
import session from "express-session";
import dbConnect from "./config/db.js";

import { authenticateAdmin } from "./middleware/auth.js";
import homeRouter from "./routes/homeRoute.js";
import interiorRouter from "./routes/interiorRoute.js";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import interiorstoreRouter from "./routes/interiorstoreRoute.js";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layout");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
    session({
        secret: process.env.SESSION_SECRET || "mysecret",
        resave: false,
        saveUninitialized: false,
    })
);

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.use((req, res, next) => {
    res.locals.url = req.path;
    next();
});


app.use("/auth", authRouter);
app.use("/interiorstore", interiorstoreRouter);
app.use("/", authenticateAdmin, homeRouter);
app.use("/interiors", authenticateAdmin, interiorRouter); // HTML pages
app.use("/api/interiors", interiorRouter); // JSON API
app.use("/users", authenticateAdmin, userRouter);

const startServer = async () => {
    try {
        await dbConnect();
        app.listen(5000, () => {
            console.log("Server running at http://localhost:5000");
        });
    } catch (err) {
        console.log("Database connection failed:", err);
    }
};

startServer();