import express from 'express';
import mongoose from 'mongoose';
import router from './router';

const app = express();
app.use(express.json())

app.use('/api', router)

mongoose.connect('mongodb://127.0.0.1:27017/asm2').then(() => console.log('Kết nối mongodb thành công'));

app.listen(4000, () => {
    console.log(`Listening on port 4000`);
})