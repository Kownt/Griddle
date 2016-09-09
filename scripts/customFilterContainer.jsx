/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/
var React = require('react');

var CustomFilterContainer = React.createClass({
  
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  getDefaultProps: function(){
    return {
      "placeholderText": "",
      "customFilterComponentOptions": {}
    }
  },
  render: function(){
      var that = this;

      if (typeof that.props.customFilterComponent !== 'function'){
        console.log("Couldn't find valid template.");
        return React.createElement("div", null);
      }

      return React.createElement(that.props.customFilterComponent, _extends({}, this.props.customFilterComponentOptions, { changeFilter: this.props.changeFilter, results: this.props.results, currentResults: this.props.currentResults, placeholderText: this.props.placeholderText}));
  }
});

module.exports = CustomFilterContainer;
