import mongoose from "mongoose";
const schema = mongoose.Schema

const form = new schema({
    name: {
        type:String,
        required:true
    },
    rollnum: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phnum:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
})
export default mongoose.model('forms',form)