## Welcome to js-performance-index
When developing browser based JS apps for a wide variety of devices, we often run into performance issues in some specific devices. In this case its helpful if we can get an idea about the performance of a device during runtime - so that, we can disable certain fancy-not-so-important features to deliver an optimal user experience. **js-performance-index** library is here to provide you a discrete index about the performance of a device.

## Usage
To include js-performance-index in a project. Add the following script in your index.html (or HTML) file.

    <script src="https://cdn.statically.io/gh/harihkh/js-performance-index/main/index.js"/>

## Working
The library will do some computations on page load and will calculate a `performanceIndex` value. This value can be accessed from `window.performanceIndex`  object in the app.

`window.performanceIndex`:  Its a value can be `high`, `medium` or `low`. It corresponds to the calculated performance of the particular device(and browser combination).

The calculation of performanceIndex is a bit expensive and synchronus operation. Hence by default performanceIndex is calculated only once when the library is first loaded. The value is cached to local storage and used for subsequent page visits.

If you want the value to be re-calculated on every page load you can disable the caching by passing `no-cache` parameter when loading the script.

**Loading Script with no-cache**

    <script no-cache src="https://cdn.statically.io/gh/harihkh/js-performance-index/main/index.js"/>

Also, if you want to re-calcualte the performance explicitly inside your app,  use the `window.computePerformance` function. This function will return the newly calculated performanceIndex as well as cache it.

## Debug Mode
You can also load the library in debug mode to get helpful / debugging console logs. You can do this by passing the debug parameter on loading the library.

**Loading Script in debug mode**

    <script debug src="https://cdn.statically.io/gh/harihkh/js-performance-index/main/index.js"/>
