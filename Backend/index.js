const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3003;
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

mongoose.connect("mongodb+srv://SujalNayak:Sujal1504@cluster0.6vhc6xf.mongodb.net", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connected Successfully...");
}).catch((err)=>{
    console.log("error..",err);
})

app.get("/", (req, res) => {
  res.send("app is working..");
});


app.listen(PORT, () => {
    console.log("server started on port 3003...");
  });