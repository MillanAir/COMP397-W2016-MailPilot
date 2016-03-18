var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Cloud() {
            _super.call(this, "cloud");
            this._speed.y = 5; //cloud speed
            this._reset(this._topBounds);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // has outside the viewport         
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        // reset the ocean offscreen
        Cloud.prototype._reset = function (value) {
            this._speed.y = Math.floor(Math.random() * 5) + 5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._bottomBounds);
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));

//# sourceMappingURL=cloud.js.map
