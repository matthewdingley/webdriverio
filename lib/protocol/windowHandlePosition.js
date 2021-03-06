/**
 *
 * Protocol bindings to receive or change the position of the browser window.
 * If the `windowHandle` URL parameter is falsy, the currently active window will be considered.
 *
 * <example>
    :windowHandlePosition.js
    // get the position of
    // a specified window
    client.windowHandlePosition('{dc30381e-e2f3-9444-8bf3-12cc44e8372a}', function(err,res) { ... });

    // the current window
    client.windowHandlePosition(function(err,res) { ... });

    // change the position of
    // a specified window
    client.windowHandlePosition('{dc30381e-e2f3-9444-8bf3-12cc44e8372a}', {x: 100, y: 200});

    // the current window
    client.windowHandlePosition({x: 100, y: 200});
 * </example>
 *
 * @param {String=} windowHandle the window to receive/change the position
 * @param {Object=} position     the X and Y coordinates to position the window at, relative to the upper left corner of the screen
 *
 * @returns {Object} the X and Y coordinates for the window, relative to the upper left corner of the screen (`{x: number, y: number}`)
 * @callbackParameter error, response
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/window/:windowHandle/position
 * @type protocol
 *
 */

module.exports = function windowHandlePosition (windowHandle, position) {

    var data = {},
        requestOptions = {
            method: 'POST'
        };

    if(typeof windowHandle !== 'string') {
        position = windowHandle;
        windowHandle = 'current';
    }

    requestOptions.path = '/session/:sessionId/window/' + windowHandle + '/position';

    // check if arguments provide proper position parameter
    if(typeof position === 'object' && typeof position.x === 'number' && typeof position.y === 'number') {
        data = position;
    } else {
        // otherwise fall back to get operation
        requestOptions.method = 'GET';
    }

    return this.requestHandler.create(
        requestOptions,
        data
    );

};