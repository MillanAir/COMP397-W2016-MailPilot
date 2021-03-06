var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            // add the Background Image to the End scene
            this._end = new objects.Image("end", 75, 25, true);
            this.addChild(this._end);
            //added Scores to the scene
            this._scores = new objects.Image("scores", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 50, true);
            this.addChild(this._scores);
            //added ScoreLabel to the scene
            this._scoreLabel = new objects.Label("" + scoreValue, "40px Consolas", "#ff7474", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 45, true);
            this.addChild(this._scoreLabel);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 320, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));

//# sourceMappingURL=end.js.map
