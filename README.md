# cookieService-Angular
An Angular JS CookieService with default values

## Use
In your controller, inject the cookieService and then you can get and set accordingly.

Example:

```javascript
(function () {
	angular
    .module('appName.preferences')
    .controller('preferencesCtrl', preferences);

    preferences.$inject = ['$cookies','cookieService'];

    function preferences($cookies,cookieService) {
      var vm = this;
			// cookie expiration
			vm.curdate = new Date();
			vm.curdate.setMonth(vm.curdate.getMonth() + 1);

			vm.setPrefs = setPrefs;
			vm.getPrefs = getPrefs;

			vm.preferences = getPrefs();

			function getPrefs() {
				return cookieService.get("PREFS");
			}

			function setPrefs(name,value) {
				cookieService.set(name,value,"PREFS",vm.curdate);
			}
    }
})();
```

## Note:
The Object.assign() used in cookieService.service.js under setPrefs() will only work in Chrome, Safar, Firefox & MS Edge. MS Internet Explorer does not utilize this method; users will be unable to set new preferences in IE with this service unless you write a workaround.
