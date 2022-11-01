const mongoose=require('mongoose');

// offline local
mongoose.connect("mongodb://localhost:27017/VlogDB", {useNewUrlParser: true});

//online machine
// mongoose.connect("mongodb+srv://balibabuchauhan:8lAwlWPnUCY9Y39c@cluster0.6euvs6r.mongodb.net/NoteDB2", {
//     useNewUrlParser: true,
// });


const vlogSchema={title:String,content:String};
const Vlog=mongoose.model("Vlog",vlogSchema);

module.exports.store=store;
function store(title,content){
    const vlog=new Vlog({title:title,content:content});
    vlog.save();
}

module.exports.read=read;
function read(homeCon,res){
    Vlog.find({},function(err,document){
        res.render("home", { startingContent: homeCon, posts: document });
    });
}