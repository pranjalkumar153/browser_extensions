$(function() {
    var totalAmountSpent = 0;
    chrome.storage.sync.get("total", function(bug) {
        if (bug.total) {
            totalAmountSpent = parseInt(bug.total);
            $("#total").text(totalAmountSpent);
        }
    });
    chrome.storage.sync.get("limit", function(lim) {
        if (lim.limit) {
            var limit_val = parseInt(lim.limit);
            $("#limit_disp").text(limit_val);
        }
    });
    $("#set_limit").click(function() {
        chrome.storage.sync.get("limit", function(lim) {
            var limit_val = parseInt(lim.limit);
            $("#limit_disp").text(limit_val);
            chrome.storage.sync.set({ "limit": limit_val });
            $("#limit_disp").text(limit_val);
            $("#limit").val("");
        })
    });
    $("#spentAmount").click(function() {
        chrome.storage.sync.get("total", function(budget) {
            var newTotal = 0;
            if (budget.total) {
                newTotal += parseInt(budget.total);
            }
            var amount = $("#amount").val();
            if (amount) {
                newTotal += parseInt(amount);
            }
            chrome.storage.sync.set({ "total": newTotal });
            $("#total").text(newTotal);
            $("#amount").val("");
        });
    });
});