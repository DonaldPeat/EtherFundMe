var onAuthorize = function() {

  //regex for story points in card titles contained in parens
  var regExp = /\(([^)]+)\)/;

  updateLoggedIn();
  $("#output").empty();

  Trello.members.get("me", function(member) {
    $("#fullName").text(member.fullName);

    var $boards = $("<select>")
      .attr("id", "boards")
      .text("Loading Boards...")
      .appendTo("#output");

    //get user boards
    Trello.get("members/me/boards", function(boards) {
      $boards.empty();
      $.each(boards, function(ix, board) {
        $("<option>")
          .attr({ href: board.url, target: "trello", value: board.id })
          .addClass("board")
          .text(board.name)
          .appendTo($boards);
      });

      //on board selection list all cards with external trello links
      $("select").on("change", function() {
        var resource = "boards/" + $("#boards").val() + "/cards";
        Trello.get(resource, function(cards) {
          $cards.empty();
          var total = 0;

          $.each(cards, function(ix, card) {
            $("<a>")
              .attr({ href: card.url, target: "trello" })
              .addClass("card")
              .text(card.name)
              .appendTo($cards);
            //add story points for selected board
            var matches = regExp.exec(card.name);
            if ( matches && !isNaN(matches[1])) {
              total += parseFloat(matches[1]);
            }
          });
          alert("total points for project: " + total);
        });
      });
    });

    var $cards = $("<div>")
      .appendTo("#outputCards");
  });
};

var updateLoggedIn = function() {
  debugger;
  var isLoggedIn = Trello.authorized();
  $("#loggedout").toggle(!isLoggedIn);
  $("#loggedin").toggle(isLoggedIn);
};

var logout = function() {
  Trello.deauthorize();
  updateLoggedIn();
};

Trello.authorize({
  interactive: false,
  success: onAuthorize
});

$("#connectLink").click(function() {
    alert("gobble gobble");
  Trello.authorize({
    type: "popup",
    success: onAuthorize
  });
});

$("#disconnect").click(logout);
