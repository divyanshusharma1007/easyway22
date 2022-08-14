import mongoose from 'mongoose';
import UserSchema from './Schema/UserSchema'
import ProductSchema from './Schema/ProductSchema'
import OrderSchema from './Schema/OrderSchema'
export default function Models() {
    mongoose.models = {}
    const User = mongoose.model('User', UserSchema);
    const Product = mongoose.model('Product', ProductSchema);
    const Order = mongoose.model('Order', OrderSchema);
    return { User, Product, Order };
}