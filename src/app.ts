
import * as BABYLON from 'babylonjs';

let canvas : any = document.getElementById( "canvas" );

let engine = new BABYLON.Engine( canvas, true );
let scene = new BABYLON.Scene( engine );

//
// Camera
//
let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 4,-2), scene);
camera.setTarget( BABYLON.Vector3.Zero() ); 
camera.attachControl( canvas, false );

//
// Lighting
//
let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
let light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);

//
// Sphere
//
let sphere = BABYLON.MeshBuilder.CreateSphere( "sphere", {
   diameter: 2,
   segments: 16
}, scene );

let mat =  new BABYLON.StandardMaterial( "mat", scene );
mat.diffuseColor = new BABYLON.Color3( 0.8, 0, 0 );
sphere.material = mat;

engine.runRenderLoop( () => {
    scene.render();
})   

window.addEventListener( 'resize', () => {
    engine.resize();
})
