window.onload = function(){

    var model = {
        init: function () {
            this.catNames = [
                {
                    name: "Cat 1",
                    count:0
                },
                {
                    name: "Cat 2",
                    count:0
                },
                {
                    name: "Cat 3",
                    count:0
                },
                {
                    name: "Cat 4",
                    count:0
                },
                {
                    name: "Cat 5",
                    count:0
                }
            ];

        },
        getAllCats: function () {
            return this.catNames;
        },
        incrementCount: function (id) { 
            this.catNames[id].count += 1;
         },
         getCat: function (id) { 
             return this.catNames[id]
          }
    };

    var catListView = {
        init: function () { 
            this.catList = document.getElementById("catList");
            this.render();
         },
         render: function () { 
             var htmlStr = '';
            octopus.getAllCats().forEach((cat, id) => {
                let liEle = document.createElement("li");
                let anEle = document.createElement("a");
                anEle.catId = id;
                anEle.setAttribute("href", "");
                anEle.innerHTML = cat.name;
                anEle.onclick = function () { 
                    octopus.listClick(this.catId);
                 }
                liEle.appendChild(anEle);
                this.catList.appendChild(liEle);
            });
        }
    };

    var catDetailsView = {
        init: function () { 
            this.cat = octopus.getCat(0);
            this.picture = document.getElementById("catPicture");
            this.count   = document.getElementById("catCount");
         },
         render: function () { 
         }
    };

    var octopus = {
        getAllCats: function () {
            return model.getAllCats();
        },
        init: function () { 
            model.init();
            catListView.init();
            catDetailsView.init();
        },
        listClick: function (id) { 

        },
        getCat: function (id) { 
            return model.getCat(id);
         }
    };

    octopus.init();

};