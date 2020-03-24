$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Kneel before me, peasant.</li>");
    $("ul#dog").prepend("<li>That's okay. I love you anyway.</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#bark").click(function() {
    $("ul#cat").prepend("<li>I'm still better than you and couldn't be care less.</li>");
    $("ul#dog").prepend("<li>I just met you and you're my best friend.</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>HISS</li>");
    $("ul#dog").prepend("<li>GROWL</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
});

