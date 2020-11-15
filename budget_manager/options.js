$(function() {
    chrome.storage.sync.get("limit", function(budget) {
        if (budget.limit) {
            $("#limit_disp").text(budget.limit);
        }
    })
    $("#saveLimit").click(function() {
        var amount = parseInt($("#limit").val());
        chrome.storage.sync.set({ "limit": amount }, function() {
            $("#limit_disp").text(amount);
            close();
        });
    });
    $("#resetTotal").click(function() {
        chrome.storage.sync.set({ "total": 0 }, function() {
            close();
        });
    });
})