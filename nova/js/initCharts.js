$(document).ready(function() {
  var chart = new Chartist.Line(
    ".ct-chart",
    {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [[5, 9, 1, 4, 9, 3, 5, 4], [2, 1, 4, 8, 2, 7, 2, 9]]
    },
    {
      low: 0,
      showArea: true
    }
  );

  // Let's put a sequence number aside so we can use it in the event callbacks
  var seq = 0,
    delays = 80,
    durations = 500;

  // Once the chart is fully created we reset the sequence
  chart.on("created", function() {
    
    seq = 0;
  });

  // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
  chart.on("draw", function(data) {
    seq++;
    
    if (data.type === "line") {
      // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
      data.element.animate({
        opacity: {
          // The delay when we like to start the animation
          begin: seq * delays + 1000,
          // Duration of the animation
          dur: durations,
          // The value where the animation should start
          from: 0,
          // The value where it should end
          to: 1
        }
      });
    } else if (data.type === "label" && data.axis === "x") {
      data.element.animate({
        y: {
          begin: seq * delays,
          dur: durations,
          from: data.y + 100,
          to: data.y,
          // We can specify an easing function from Chartist.Svg.Easing
          easing: "easeOutQuart"
        }
      });
    } else if (data.type === "label" && data.axis === "y") {
      data.element.animate({
        x: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 100,
          to: data.x,
          easing: "easeOutQuart"
        }
      });
    } else if (data.type === "point") {
      data.element.animate({
        x1: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: "easeOutQuart"
        },
        x2: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: "easeOutQuart"
        },
        opacity: {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: "easeOutQuart"
        }
      });
    } else if (data.type === "grid") {
      // Using data.axis we get x or y which we can use to construct our animation definition objects
      var pos1Animation = {
        begin: seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + "1"] - 30,
        to: data[data.axis.units.pos + "1"],
        easing: "easeOutQuart"
      };

      var pos2Animation = {
        begin: seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + "2"] - 100,
        to: data[data.axis.units.pos + "2"],
        easing: "easeOutQuart"
      };

      var animations = {};
      animations[data.axis.units.pos + "1"] = pos1Animation;
      animations[data.axis.units.pos + "2"] = pos2Animation;
      animations["opacity"] = {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: "easeOutQuart"
      };

      data.element.animate(animations);
    }
  });

  
  var data = {
    labels: ['Mon', 'Tu', 'Wed', 'Th', 'Fr', 'Sa', 'Su'],
    series: [
      [1, 10, -4, 5, -10, 5, 0, ]
    ]
  };
  
  var options = {
    high: 10,
    low: -10,
    fullWidth: true,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      },
      showGrid: false
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  };
  
  new Chartist.Line('.ct-chart-2', data, options);


  var s = Snap('.ct-chart-line');
  console.log($('svg'));
  
});
