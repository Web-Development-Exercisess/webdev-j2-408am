// Function to calculate cost of purchase
function calculate_Purchase() {
    // Get values from input fields
    const cost_per_li = parseFloat(document.getElementById("cost_per_li").value);
    const purchased = parseFloat(document.getElementById("purchased").value);

    // Calculate total
    const total = cost_per_li * purchased;

    document.getElementById("cost").textContent = `Your Total Price: AED${total.toFixed(2)}`;
    // 2 decimal places since dealing with price
  } 