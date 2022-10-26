var houseKeeper1={
    name:'jane',
    age:20,
    experience:12,
    clean: function(){
        alert('starting cleaning process');
    }
}

// constructor function
function BellBoy(name,age,language){
    this.name=name;
    this.age=age;
    this.language=language;
    this.moveSuitCase=function(){
        alert('may i take your suitcase');
    }
}


var bellBoy1=new BellBoy('amrit',19,['nepali','english']);