import express from "express";
const app = express();
app.get('/', (req, res) => {
    return res.json({
        message: "yo yo yo y!!!!!!"
    });
});
app.listen(3000, () => {
    console.log('the app is running on ', 3000);
});
//# sourceMappingURL=app.js.map