// add burger
console.log("hello")
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
        burger_name: $("#addBurger").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
    });
});

// Update the burger
$(".update-devoured").on("click", () => {
    const id = $(this).data("id");
    const updateBurger = $(this).data("devoured");
    console.log(updateBurger)
    console.log(id)
    const devouredState = {
        devoured: updateBurger
    };
    console.log(devouredState)
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(() => {
        console.log("changed devoured to", updateBurger);
        // Reload the page to get the updated list
        location.reload();
    });
});
