const postplant = (req,res)=>{
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


    

}

const getplant=(req,res)=>{
    res.json({
        sucess:true,
        Data:Plants,
        message:"Data Fetched Sucessfully"
    })

}

const getplantid=(req,res)=>{
    const {id}=req.params

    const plant=Plants.find((p)=>p.id == id)
    res.json({
        success:plant ? true:false,
        data:plant || null,
        message:plant ? "Plant Fetched Sucessfully":"Cannot Be Found"
    })
}

const putplantid=(req,res)=>{
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


    

}

const deleteplantid=(req,res)=>{
   
    

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
}


export{
    postplant,
    getplant,
    getplantid,putplantid,deleteplantid
}