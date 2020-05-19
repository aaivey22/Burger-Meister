// Add a burger
console.log("hello")
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event
    event.preventDefault();

    const newBurger = {
        name: $("#addBurger").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
    });
});

// Update burger
$(".update-devoured").on("click", function() {
    const id = $(this).data("id");
    const updateBurger = $(this).data("devoured");
    console.log(updateBurger)
    const devouredState = {
        devoured: updateBurger
    };
    console.log(devouredState)

    // Send PUT request
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function() {
        console.log("changed devoured to", updateBurger);
        // Reload the page to get the updated list
        location.reload();
    });
});
