// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _player: objects.Player;
        private _cloudCount: number;
        private _collision: managers.Collision;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._cloudCount = 6;
            
            // Added cloud array
            this._clouds = new Array<objects.Cloud>();
            
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island); 
            
            // added island to the scene
            this._player = new objects.Player();
            this.addChild(this._player);            

            // added cloud to the scene
            for(var cloud:number = 0; cloud < this._cloudCount ; cloud++){
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();
            this._player.update();
            for(var cloud in this._clouds){
                this._clouds[cloud].update();
                this._collision.check(this._clouds[cloud]);
            }
            
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}