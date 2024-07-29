
import Plant from "./../models/Plant.js"
const Plants=[]

const postplant = async(req,res)=>{
    const{name,category,image,price,description}=req.body

    

    const newPlant=new Plant({
        
        name:name,
        category:category,
        image:image,
        price:price,
        description:description

       })

    const Savedplant=await newPlant.save();
   

  

    res.json({
        sucess:true,
        Data:Savedplant,
        message:"Plant added Sucessfully"
    })


    

}

const getplant=async(req,res)=>{

    const allPlant= await Plant.find()

    res.json({
        sucess:true,
        Data:allPlant,
        message:"Data Fetched Sucessfully"
    })

}

const getplantid=async (req,res)=>{
    const {id}=req.params

    const plant=await Plant.findOne({_id:id})
    res.json({
        success:plant ? true:false,
        data:plant || null,
        message:plant ? "Plant Fetched Sucessfully":"Cannot Be Found"
    })
}

const putplantid=async(req,res)=>{
    const{name,category,image,price,description}=req.body
    const {id}=req.params
    const updatedResult= await Plant.updateOne({_id:id},{
        $set:{
            name:name,
            category:category,
            image:image,
            price:price,
            description:description


        }
    })

    const updatedPlant=await Plant.findById(id)
    res.json({
        Success:true,
        message:"Plant Updated Successfully",
        data:updatedPlant
       
    })

   

    

   
    

}

const deleteplantid=async(req,res)=>{
   
    

    const {id}=req.params

    await Plant.deleteOne(
    {
        _id:id

    })

    
    res.json({
        success:true,
        message:"Plant Deleted Sucessfully",
        data:null
    })
}


export{
    postplant,
    getplant,
    getplantid,
    putplantid,
    deleteplantid
}