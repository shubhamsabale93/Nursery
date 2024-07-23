import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app=express()
app.use(express.json())

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
app.post("/plant",(req,res)=>{
    const{name,category,image,price,description}=req.body

    const Randomid=Math.round(Math.random()*10000)

    const newPlant={
        id:Randomid,
        name:name,
        price:price,
        description:description

    }
    if(!name){
        return res.json({
            success:true,
            Data:null,
            message:"name is required"


        })
    }
    if(!category){
        return res.json({
            success:true,
            Data:null,
            message:"Category is required"


        })
    }
    if(!image){
        return res.json({
            success:true,
            Data:null,
            message:"Image is required"


        })
    }
    if(!price){
        return res.json({
            success:true,
            Data:null,
            message:"price is required"


        })
    }
    if(!description){
        return res.json({
            success:true,
            Data:null,
            message:"description is required"


        })
    }

    Plants.push(newPlant)

    res.json({
        sucess:true,
        Data:newPlant,
        message:"Plant added Sucessfully"
    })


    

})



app.get("/plants",(req,res)=>{
    res.json({
        sucess:true,
        Data:Plants,
        message:"Data Fetched Sucessfully"
    })

})

app.get("/plant/:id",(req,res)=>{
    const {id}=req.params

    const plant=Plants.find((p)=>p.id == id)
    res.json({
        success:plant ? true:false,
        data:plant || null,
        message:plant ? "Plant Fetched Sucessfully":"Cannot Be Found"
    })
})

app.put("/plant/:id",(req,res)=>{
    const{name,category,image,price,description}=req.body
    const {id}=req.params

    let index=-1

    Plants.forEach((plant,i)=>{
        if(plant.id==id){
            index=i
        }

    })

    const newObj={
        id,name,category,image,price,description
    }

    if(index==-1){
        res.json({
            success:false,
            message:"Plant not Found this id",
            data:null
        })

    }else{
        Plants[index]=newObj
        return res.json({
            success:true,
            message:"Sucessfully updated new data",
            data:newObj
        })
    }


    

})

app.delete("/plant/:id",(req,res)=>{
   
    

    const {id}=req.params

    let index=-1

    Plants.forEach((plant,i)=>{
        if(plant.id==id){
            index=i
        }

    })


    if(index==-1){
        return res.json({
            success:false,
            message:`Plant not found with id ${id}`
        })
    }

    Plants.splice(index,1)

    
    res.json({
        success:true,
        message:"Plant Deleted Sucessfully",
        data:null
    })
})


app.use("*",(req,res)=>{
    res.send(`<div>
        <h1 style="text-align:center">404 Not Found</h1>
        
        </div>`
    
    )
})




const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT} Port` );
})
