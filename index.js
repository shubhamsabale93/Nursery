import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import cors from "cors"


import { gethealth } from "./connections/health.js"
import { postplant,getplant,getplantid, putplantid, deleteplantid } from "./connections/plants.js"
import { Errorid } from "./connections/error.js"

const app=express()
app.use(express.json());
app.use(cors());


const dbConnection=async()=>{
    const conn=await mongoose.connect(process.env.MongoDB_URL)


    

    if(conn){
        console.log("MongoDB connected😊")
    }else{
        console.log("MongoDB not connected yet📞🏠")
    }
}

dbConnection();



const Plants=[
    {
        "id":2,
        "name":"Bamboo tree",
        "category":"indoor",
        "image":"https://www.google.com/search?q=image+bamboo+tree&oq=image+bamboo+tree&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCggDEAAYChgWGB4yCAgEEAAYFhgeMgoIBRAAGAoYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCTk4OTVqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8",
        "price":"200",
        "description":"Good to looking"
    },

    {
        "id":5,
        "name":"apple tree",
        "category":"outdoor",
        "image":"https://www.google.com/search?q=image+bamboo+tree&oq=image+bamboo+tree&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCggDEAAYChgWGB4yCAgEEAAYFhgeMgoIBRAAGAoYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCTk4OTVqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8",
        "price":"100",
        "description":"Good to health"
    },


    {
        
        "id":6,
        "name":"rose",
        "category":"outdoor",
        "image":"https://www.google.com/search?q=image+bamboo+tree&oq=image+bamboo+tree&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCggDEAAYChgWGB4yCAgEEAAYFhgeMgoIBRAAGAoYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCTk4OTVqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8",
        "price":"500",
        "description":"Good to propose"
    },
];

app.get("/health",gethealth)
app.post("/plant",postplant)
app.get("/plants",getplant)
app.get("/plant/:id",getplantid)
app.put("/plant/:id",putplantid)
app.delete("/plant/:id",deleteplantid)
app.use("*",Errorid)




const PORT=8000
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT} Port` );
    
})
