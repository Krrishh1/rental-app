import express from "express"
import 'dotenv/config'; // Loads .env variables
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import userRouter from "./routes/user.route.js"
import listingRouter from "./routes/listing.route.js"
import bookingRouter from "./routes/booking.route.js"
let port = process.env.PORT || 6000

let app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth", authRouter )
app.use("/api/user", userRouter )
app.use("/api/listing",listingRouter )
app.use("/api/booking",bookingRouter )



// Root route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Other routes (e.g., /api/users)
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.listen(port,()=>{
    connectDb()
    console.log(`server started at http://localhost:${port}`)
})