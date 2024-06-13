const mongoose = require("mongoose");

// URL-encode your password if it contains special characters
const username = "Dushyant";
const password = encodeURIComponent("Dushyant@123");  // URL-encoded password
const dbName = "attendanceManagementSystem";

// Connect to MongoDB Atlas and specify the database name
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.t5ug9sv.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => console.log("Database connected successfully..."))
.catch((err) => console.log("Error connecting to database:", err));
 