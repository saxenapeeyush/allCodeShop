const mongoose = require('../../connection');
const customerSchema = mongoose.Schema;
const customer = new customerSchema({
    google_id:{type:String},
    customerId:{type:String},
    customerName:{type:String},
    customerMailId:{type:String},
    customerImage:{type:String},
});
const Customer = mongoose.model('customers',customer);
module.exports=Customer;