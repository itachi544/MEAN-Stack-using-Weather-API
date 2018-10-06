import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zipcodes = new Schema({
ip:{
 type : String
},
zip:{
    type: String
}

});

export default mongoose.model('Zipcodes',Zipcodes);