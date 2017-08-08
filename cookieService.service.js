/*
 * @author Mike Seiler <http://www.michaelseiler.net>
 */
(function() {
  angular
  .module('appName.cookieService')
  .factory('cookieService', cookieService);

  cookieService.$inject = ['$cookies'];

  function cookieService($cookies) {
    return {
      get: get,
      set: set,
      getDefaults: getDefaults
    }

    function get(cookieName) {
      var prefs = $cookies.getObject(cookieName);
      var defaults = getDefaults();
      var cookieObj = Object.assign(defaults,prefs);
      if(cookieObj) {
        return cookieObj;
      } else {
        return {};
      }
    }

    function set(name,value,cookieName,expiration) {
      var currentPrefs = get(cookieName);
      var newPref = {};
      newPref[name] = value;
      var newObj = Object.assign(currentPrefs,newPref);
      $cookies.put(cookieName,JSON.stringify(newObj), {
          expires:expiration
      });
    }

    function getDefaults() {
      var prefTypes = {
        'defaultItem1':'somestring'
        ,'defaultItem2':false
        ,'defaultItem3':true
        // etc...
      };
      return prefTypes;
    }
  }
})();
