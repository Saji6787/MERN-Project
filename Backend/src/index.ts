import express from "express"; //pemanggilan variabel
import router from "./routes/api"


const app = express(); //instance

const PORT = 3000;

app.use('/api', router);


app.listen(PORT, () => {
    console.log('Server is running on https://localhost:${PORT}');
})