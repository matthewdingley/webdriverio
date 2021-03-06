/**
 *
 * Perform a drag left on an element.
 *
 * @param {String} selector   element to drag on
 * @param {Number} duration   time (in seconds) to spend performing the drag
 * @callbackParameter error
 *
 * @uses mobile/flick
 * @type mobile
 *
 */

module.exports = function flickLeft (selector, duration) {

    /*!
     * parameter check
     */
    if (typeof selector !== 'string') {
        selector = null;
    }

    /*!
     * set default duration if not set
     */
    if(typeof duration !== 'number') {
        duration = 0.3;
    }

    return this.flick(selector, 0.5, 0, duration);

};