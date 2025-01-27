import express from 'express';
import cors from 'cors';
import MainRouter from "./routes/main.route";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',MainRouter.router)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
