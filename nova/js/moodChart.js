(function() {
  this.MoodChart = function() {
    // Define default options
    var defaults = {
      faceType: "happy",
      fillColor: "#1DE9B6",
      percentage: 50
    };

    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    if (this.options.id) {
      buildMoodChart(this.options);
    } else {
      throw new Error("No ID container defined for MoodChart");
    }
  };

  // Private Methods
  function buildMoodChart(options) {
    if (options.faceType === "happy") {
      sHappy = Snap("#" + options.id);
      var l = Snap.load("nova/img/happy-face.svg", configureSVG.bind(this, sHappy, options));
    } else {
      sSad = Snap("#" + options.id);
      var l = Snap.load("nova/img/sad-face.svg", configureSVG.bind(this, sSad, options));
    }
  }

  function configureSVG(svgContainer, options,data) {
    
    svgContainer.append(data);

    var gradientBG = svgContainer.select("#background");

    var bbox = gradientBG.getBBox();

    var height = bbox.height * options.percentage / 100;
    var y = bbox.height - height;

    gradientBG.attr({
      fill: options.fillColor
    });
    gradientBG.animate(
      {
        y: y,
        height: height
      },
      800,
      mina.easeinout
    );
  }

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }
})();
