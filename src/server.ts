import express, { Request, Response } from "express";
import { config as configDotenv } from "dotenv";
import axios from "axios";
import { createClient } from "redis";

configDotenv();
const app = express();
const redisClient = createClient();
const defaultExpiry = 3600; 

// Ensure Redis client is connected
redisClient.connect().catch(console.error);

redisClient.on("ready", () => {
  console.log("Redis client connected");
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});


app.get('/data', async (req: Request, res: Response): Promise<any> => {
    try {
        // Check for cached data in Redis
        const cachedData = await redisClient.get('photos');
        if (cachedData) {
            console.log("cached");
            return res.status(200).json(JSON.parse(cachedData));            
        }

        // If no cache, fetch from external API
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos");

        // Fake Delay 2sec
        setTimeout(async() => {
            // Store data in Redis
            await redisClient.setEx('photos', defaultExpiry, JSON.stringify(data));
            // Send fetched data
            return res.status(200).json(data);
        }, 2000);


    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
