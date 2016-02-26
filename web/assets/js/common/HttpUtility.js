/* Simple HTTP Service for Vue.js
 * By Rexon A. De los Reyes
 * MIT Licensed.
 */
var vHttp = (function () {

    function _send (url, methods, data, successCallback, errorCallback, options) {

        var url = url,
            methods = methods || 'POST',
            oData = data || {},
            sCb = successCallback || function () {},
            eCb = errorCallback || function () {},
            opts = options || {};
            
            console.log(oData);
        Vue
            .http
            .post(url, oData, opts)
            .then(sCb, eCb);
    }

    // function _get () {
    //      Vue.http.get('/someUrl', [data], [options]).then(successCallback, errorCallback);
    // }

    // function _post () {
    //      Vue.http.post('/someUrl', [data], [options]).then(successCallback, errorCallback);
    // }

    // function _put () {
    //      Vue.http.put('/someUrl', [data], [options]).then(successCallback, errorCallback);
    // }

    // function _patch () {
    //      Vue.http.patch('/someUrl', [data], [options]).then(successCallback, errorCallback);
    // }

    // function _delete () {
    //      Vue.http.delete('/someUrl', [data], [options]).then(successCallback, errorCallback);
    // }

    // function _jsonp () {
    //      Vue.http.jsonp('/someUrl', [data], [options]).then(successCallback, errorCallback);
    // }

    return {
        send : _send
    }


})();

if (typeof module !== "undefined") {
	module.exports = vHttp;
}