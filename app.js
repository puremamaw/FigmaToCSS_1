document.addEventListener("readystatechange", function() {
    if (document.readyState == "complete") {
        Program.Main();
    }
});

class Program {

    static Main() {
        var effects = new Effects();
    }
}