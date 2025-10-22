import express from "express";
import { connectDb } from "./db.js";
import { User } from "./db.js";
const app = express();
app.get('/', (req, res) => {
    return res.json({
        message: "yo yo yo yoo0oo"
    });
});
app.get('/user', (req, res) => {
    const user = User.create({
        name: "samay",
        password: "raja ji"
    });
    return res.json({
        message: "yo yo yo yoo0oo",
        user :user
    });
});
connectDb().then(() => {
    app.listen(3000, () => {
        console.log('the app is running on ', 3000);
    });
}).catch((error) => {
    console.log('something went wrong db not running');
});
//# sourceMappingURL=app.js.map