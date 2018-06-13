// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

// Add a listener to the input
$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    // grabbing a new todo text from input
    var regex = /(<([^>]+)>)/gi,
      body = $("input").val(),
      result = body.replace(regex, "");
    // empty the input
    $(this).val("");
    // create a new li and add to ul
    $("ul").append(
      '<li><span class="trash"><i class="fa fa-trash"></i></span>' +
        result +
        "</li>"
    );
  }
});

$("#plus").click(function() {
  $('input[type="text"]').fadeToggle(0);
});
