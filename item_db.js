const items = {
    stick : {name:"Stick",img:"./img/items/weapons/swords/stick.png",id:"weapon:stick",atk:5,def:0,type:"weapon",rarity:"#a8a8a8"},
    wooden_helmet : {name:"Wooden Helmet",img:"./img/items/armor/wooden_helmet.png",id:"armor:wooden_helmet",atk:0,def:5,type:"armor.helmet",rarity:"#a8a8a8"}
};

exports.searchDB = function(query){
    for(_ in items){
        if(items[_].id == query){
            return items[_]
        }
    }
}