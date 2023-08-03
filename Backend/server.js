const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const app = express();


console.log("App listen at port 5000");
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
const getData = require("./connection");


const inserti = async (body) => {
  const db = await getData();
  var username = body.name;
  var email = body.email;
  var password=body.password;

  const res1 = await db.collection("users").find({ name: username }).toArray();

  const res4 = await db.collection("users").find({ email: email }).toArray();
  console.log(email);
  console.log(username);
  console.log(password);
  var l1 = res1.length;
  var l4 = res4.length;
  if (l1 || l4) return 0;
  const data = await db.collection("users").insertOne(body);
  if (data.acknowledged) {
    console.log("data is inserted");
    return 1;
  }
  return 0;
};
app.post("/insert", async (rq, rs) => {
  var res = rq.body;
  var email = res.email;
  console.log(email);
  var dt = await inserti(res);
  console.log(dt);
  if (dt === 1) {
    rs.status(200).send("inserted");
  } else {
    rs.status(400).send("error");
  }
});



//login

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Used for password hashing

app.use(bodyParser.urlencoded({ extended: true }));

const  validate_username= async (username)=>{
     const db= await getData();
     const res= await db.collection("users").find({}).toArray();
     const data=await db.collection("users").find({}).toArray();
     console.log(res.length);
     if(res[0])
     {  console.log(username);
        const arr= res.filter((item)=>{
          return item.name===username;
        })
        console.log(arr)
        // return "Himanshu123"
        if(arr.length>0)  return arr[0].password;
        return "";
     }
     else
     {
        return "";
     }
}

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // console.log(username,password);


  // Check if username and password are not empty
  if (!username || !password) 
  { 
    return res.status(400).send('Username and password are required');
  }

  var pass= await validate_username(username);
  console.log(pass);
  if(pass.length===0)
  {
    console.log(pass);
    return res.status(400).send('Username is not exist');
  }
  
  // Check if username exists and password matches;
  // This is where you would normally check your database for the user's information;
  // In this example, we'll just use a hardcoded username and password;
  const hashedPassword = bcrypt.hashSync(pass, saltRounds);

  if (bcrypt.compareSync(password, hashedPassword)) {
    console.log("same");
    return res.status(200).send('Login successful!');
  } else {
    res.status(401).send('Invalid username or password');
  }
});



//  Review 

app.post('/find', async (req, res) => {
  
  const { name, email } = req.body;
  console.log(name);
  res.send('Contact us at contact@example.com');
});


app.post("/insertReview", async (rq, rs) => {
  var res = rq.body;
  var dt = await inserti2(res);
  console.log(dt);
  if (dt === 1) {
    rs.status(200).send("inserted");
  } else {
    rs.status(400).send("error");
  }
});
const inserti2 = async (body) => {
  const db = await getData();
  var username = body.name;
  var review = body.review;
  console.log(username);
  const data = await db.collection("reviews").insertOne(body);
  if (data.acknowledged) {
    console.log("review is inserted");
    return 1;
  }
  return 0;
};

app.get("/fetchReview", async (req, res) => {

  const db = await getData();
  const data = await db.collection("reviews").find({}).toArray();
  res.json(data);
});


app.post("/inserttrip", async (rq, rs) => {
  var res = rq.body;
  var dt = await inserti3(res);
  console.log(dt);
  if (dt === 1) {
    rs.status(200).send("inserted");
  } else {
    rs.status(400).send("error");
  }
});
const inserti3 = async (body) => {
  const db = await getData();
  var username = body.name;
  var review = body.review;
  console.log(username);
  const data = await db.collection("trips").insertOne(body);
  if (data.acknowledged) {
    console.log("review is inserted");
    return 1;
  }
  return 0;
};
app.get("/fetchtrip", async (req, res) => {

  const db = await getData();
  const data = await db.collection("trips").find({}).toArray();
  res.json(data);
});

app.listen(5000);
