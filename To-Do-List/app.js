let alert = require("alert");
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const _ =require('lodash');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://balibabuchauhan:8lAwlWPnUCY9Y39c@cluster0.6euvs6r.mongodb.net/todolistDB", {
    useNewUrlParser: true,
});
const itemSchema = {
    name: { type: String, required: [true, "cannot add empty string"] },
};
const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({ name: "Buy Book" });
const item2 = new Item({ name: "Buy Pen" });
const item3 = new Item({ name: "Buy Copy" });

const items = [item1, item2, item3];

app.get("/", function (req, res) {
    // let day = date.getDate();
    Item.find(
        {
            /*condition*/
        },
        function (err, result) {
            if (result.length === 0) {
                Item.insertMany(items, function (err) {
                    if (err) console.log(err);
                    else console.log("successfuly saved the default items");
                });
                res.redirect("/");
            } else {
                res.render("list", { listTitle: 'Today', items: result });
            }
        }
    );
});

const listSchema = { name: String, items: [itemSchema] };
const List = mongoose.model("List", listSchema);
app.get("/:customListName", function (req, res) {
    let customListName=_.capitalize(req.params.customListName);
    
    List.findOne({name:customListName},function(err,foundList){
        if(!err){
            if(foundList){
                res.render("list", { listTitle: customListName, items: foundList.items });
            } else{
                const list = new List({
                    name: customListName,
                    items: items,
                });
                list.save();
                res.redirect('/'+customListName);
            } 
        }
    });

});

app.post("/", function (req, res) {
    const listName=req.body.list;
    const itemName=req.body.item;
    const item=new Item({name:itemName});
    if(listName==='Today'){
        item.save();
        res.redirect('/');
    }else{
        List.findOne({name:listName},function(err,result){
            result.items.push(item);
            result.save();
            res.redirect('/'+listName);
        });
    }
});

app.post("/delete", function (req, res) {
    const listName=req.body.listName;
    const itemId=req.body.checkbox;
    if(listName==='Today'){
        Item.deleteOne({ _id: req.body.checkbox }, function (err) {
            if (err) console.log(err);
        });
        res.redirect("/");
    }else{
        List.findOneAndUpdate({name:listName},{$pull:{items:{_id:itemId}}},function(err,result){
            if(!err) res.redirect('/'+listName);
        });
    }
});



app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000.");
});
