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
        getCatDetails: function (id) {
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
                anEle.setAttribute("href", "");
                anEle.innerHTML = cat.name;
                anEle.addEventListener("click", (function (catId) {
                    return function (e) {
                        octopus.listClick(catId);
                        e.preventDefault();
                    };
                })(id));
                liEle.appendChild(anEle);
                this.catList.appendChild(liEle);
            });
        }
    };

    var catDetailsView = {
        init: function () {
            this.picture = document.getElementById("catPicture");
            this.count   = document.getElementById("catCount");
            this.picture.catId = 0;
            this.picture.onclick = function (e) {
                octopus.clickPicture(this.catId);
                e.preventDefault();
            }
            this.render(0);
        },
        render: function (catId) {
            let cat = octopus.getCatDetails(catId);
            this.picture.setAttribute("src", cat.picture);
            this.picture.catId = catId;
            this.count.innerHTML = "Count: " + cat.count;
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
            catDetailsView.render(id);
        },
        clickPicture: function (id) {
            model.incrementCount(id);
            catDetailsView.render(id);
        },
        getCatDetails: function (id) {
            let details = model.getCatDetails(id);
            details.picture = "images/cat_picture" + (id+1) + ".jpeg";
            return details
        }
    };

    octopus.init();

};