import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs', async (req, res) => {
    try {
        let blogs = await db.blogs.getAll();
        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;