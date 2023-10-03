const mongoose=require('mongoose');
const db="mongodb+srv://vaishnavisharma13003:momdad0601@cluster0.rd94tvn.mongodb.net/users1?retryWrites=true&w=majority";
const connectDB = async()=>{
    try{
// mongo db connection string
const con=await mongoose.connect(db,{
   
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
console.log(`connection to mogodb is succeful${con.connection.host}`)

    }
    catch(err){
        console.log(err);
process.exit(1);
    }
}

module.exports=connectDB;