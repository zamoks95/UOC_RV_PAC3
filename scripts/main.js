$(document).ready(function () {
  $("a-plane").click(function () {
    let text = $(this).attr("data-text");
    bootoast.toast({
      message: text,
    });
  });
});
