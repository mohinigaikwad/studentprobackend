import  express  from "express";
import  dotenv  from "dotenv";
import  cors  from "cors";
dotenv.config({path:"./config/.env"})
import  db  from "./config/db.js";
import studnetrouter from "./routes/studentroute.js";

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())
db()

app.use("/api/student/", studnetrouter  )

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});