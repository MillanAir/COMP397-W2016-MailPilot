var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++++++++
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this._topBounds = -this._height;
            this._bottomBounds = config.Screen.HEIGHT + this._height;
            this._leftBounds = 0;
            this._rightBounds = config.Screen.WIDTH - this._width;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        GameObject.prototype._checkBounds = function (value) {
            // check if y value has met the reset criteria
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        // Reset the Object offscreen
        GameObject.prototype._reset = function (value) {
            var leftBounds;
            var rightBounds;
            this.y = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        GameObject.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));

//# sourceMappingURL=gameobject.js.map
