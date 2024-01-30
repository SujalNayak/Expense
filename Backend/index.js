const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const app = express();
<<<<<<< HEAD
const PORT = 3003;
=======
const PORT = 3002;
// app.use(cors());
>>>>>>> 9a295a5b45491d4ccf68dbdc998c7f1379a0c1a3
app.use(cors({
  origin: 'https://expense-fawn-chi.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
app.use('/user', userRoutes);
const expenseRoutes = require("./routes/ExpenseRoutes");
app.use('/expense', expenseRoutes);
const expenseSubCatRoutes = require("./routes/ExpenseSubCatRoutes");
app.use('/expenseSubCat', expenseSubCatRoutes);

<<<<<<< HEAD
mongoose.connect("mongodb+srv://SujalNayak:Sujal1504@cluster0.6vhc6xf.mongodb.net", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
=======
mongoose.connect("mongodb+srv://SujalNayak:Sujal1504@cluster0.6vhc6xf.mongodb.net/ExpenseManager", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
>>>>>>> 9a295a5b45491d4ccf68dbdc998c7f1379a0c1a3
}).then(()=>{
    console.log("Database Connected Successfully...");
}).catch((err)=>{
    console.log("error..",err);
})

app.get("/", (req, res) => {
  res.send("app is working..");
});


app.listen(PORT, () => {
<<<<<<< HEAD
    console.log("server started on port 3003...");
  });
=======
    console.log("server started on port 3002...");
  });
>>>>>>> 9a295a5b45491d4ccf68dbdc998c7f1379a0c1a3
