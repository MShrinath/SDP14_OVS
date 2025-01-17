const express = require('express');
const cors = require('cors');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/usersroute')

const port = process.env.PORT
const app = express()
app.use(cookieParser());
app.use(express.json())
//only for development
const furl = process.env.REACT_APP_FRONTEND_URL 
app.use(cors({
    origin: furl,  // <-- location of the react app were connecting to
    credentials: true,
}));
// app.use(cors());

const db = require("./db")

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.use('/api/user',userRouter)


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
