import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.pl6l9.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;