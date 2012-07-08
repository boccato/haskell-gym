// http://jsfiddle.net/egSYt/20/

// TODO: Doc / tutorial / example.
// TODO: Test on a real web page.
// TODO: Turn into a jQuery plug-in.
// TODO: Better OO style (use the prototype Luke).
// TODO: Splitter between widgets (does it belong here?).
// TODO: Refactor top/bottom, left/right code.
// TODO: Unit tests / automated tests.
// TODO: Add to github.com (convert hg to git).

if (stuff === undefined) {
  var stuff = {};
}

(function($, stuff) {

  // The parameters can be strings or jQuery objects.
  var move = function(el, to) {
    $(to).append($(el));
  };
  
  // selector: container (jQuery selector -> 1 element)
  // stack_from: top, bottom, left, right
  // elements: array of {id, [v_stretch], [h_stretch]}
  stuff.layout = function(selector, stack_from, elements) {

    var v_stretch = function(el) {
      el.css('height', '');
      el.css((stack_from == 'top') ? 'bottom' : 'top', 0);
    };

    var h_stretch = function(el) {
      el.css('width', '');
      el.css((stack_from == 'left') ? 'right' : 'left', 0);
    };

    var pos = 0;
    for (var i=0; i<elements.length; i++) {
      var el = $('#' + elements[i].id);
      move(el, selector);
      el.css('position', 'absolute');
      el.css(stack_from, pos);

      if ((stack_from == 'top') || (stack_from == 'bottom')) {
        // horizontal stretch if possible
        pos = pos + el.outerHeight(true);
        if (elements[i].h_stretch) {
          el.css({left: 0, right: 0});
          h_stretch(el);
        }
        if (i == elements.length-1) {
          if (elements[i].v_stretch) {
            v_stretch(el);
          }
        }
      }

      if ((stack_from == 'left') || (stack_from == 'right')) {
        // vertical stretch if possible
        pos = pos + el.outerWidth(true);
        if (elements[i].v_stretch) {
          el.css({top: 0, bottom: 0});
          v_stretch(el);
        }
        if (i == elements.length-1) {
          if (elements[i].h_stretch) {
            h_stretch(el);
          }
        }
      }
    }
  };
})(jQuery, stuff);
