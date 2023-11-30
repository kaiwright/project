
var EaternityURL = "https://co2.eaternity.ch/api/recipes/id?indicators=true"

var ingredient = "eggplant";

var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + ingredient + "&app_id=2e4c3f7b&app_key=9937b42f06b25b17a8890d5216e8728a";

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(queryURL);
        console.log(data);


        // for loop to go through each of the returned recipes
        for (var i = 0; i < (data.hits).length; i++) {

            // applying the recipe name to a new card title
            var cardTitle = $("<h5>");
            cardTitle.text(data.hits[i].recipe.label);

            // applying information about the recipe to a new card text
            var cardBody = $("<p>").addClass(".card-text");
            cardBody.text(data.hits[i].recipe.cuisinetype);

            // append the card body to the card title
            $(cardTitle).append(cardBody);
            
            // append the title to the card div
            $("#mainCard").append(cardTitle);

            
            console.log(cardTitle)
        }

    });



