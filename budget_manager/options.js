$(function() {
    $("#saveLimit").click(function() {
        var amount = $("#limit").val();
        chrome.storage.sync.set({ "limit": amount }, function() {
            close();
        });
    });
    $("#resetTotal").click(function() {
        chrome.storage.sync.set({ "total": 0 }, function() {
            close();
        });
    });
})