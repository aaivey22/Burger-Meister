// add burger
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
        name: $("#addBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
    }
    );
});

// Update the burger
$(function () {
    $(".update-devoured").on("click", (event) => {
        const id = $(this).data("id");
        const updateBurger = ($(this).data("devoured"));

        const devouredState = {
            devoured: updateBurger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(() => {
            console.log("changed devoured to", devouredState);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});