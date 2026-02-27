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

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

let isConnected = false;
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// add middleware
app.use((req, res,next) => {
  if (!isConnected) {
    connectToMongoDB()
  }
  next()
})



// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port} 🔥`);
// });
module.exports = app