$(function() {
    var totalAmountSpent = 0;
    chrome.storage.sync.get("total", function(bug) {
        if (bug.total) {
            totalAmountSpent = parseInt(bug.total);
            $("#total").text(totalAmountSpent);
        }
    });
    $("#spentAmount").click(function() {
        chrome.storage.sync.get(["total", "limit"], function(budget) {
            var newTotal = 0;
            if (budget.total) {
                newTotal += parseInt(budget.total);
            }
            var amount = parseInt($("#amount").val());
            if (amount) {
                newTotal += parseInt(amount);
            }
            chrome.storage.sync.set({ "total": newTotal }, function() {
                $("#total").text(newTotal);
                $("#amount").val("");
                if (amount && parseInt(budget.limit) <= parseInt(newTotal)) {
                    var notifyObject = {
                        type: "basic",
                        title: "Limit Reached!!",
                        message: "Seems like you have exceeded your limit!!",
                        iconUrl: "moneyicon.jpg"
                    }
                    chrome.notifications.create("limit_reached", notifyObject, function() {
                        console.log("Notified!!");
                    });
                }

            });
            // $("#total").text(newTotal);
            // $("#amount").val("");
        });
    });
});