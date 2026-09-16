function searchRestaurant() {
    const search = document.getElementById("searchBox").value.trim();
    const result = document.getElementById("result");

    if (search === "") {
        result.textContent = "Please enter a restaurant or food item.";
    } else {
        result.textContent = "Searching for: " + search;
    }
}