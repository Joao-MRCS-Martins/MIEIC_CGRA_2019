class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, 1, 0,	//1
			1, 0, 0,	//2
			
			-1, 0, 0,	//0 / 3
			0, 1, 0,	//1 / 4
			1, 0, 0		//2 / 5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            3, 5, 4
		];

		this.normals = [];
		
		for (var i = 0; i < 3; i++) {
            this.normals.push(0, 0, -1);
		}
		
		for(var i = 0; i< 3;i++) {
			this.normals.push(0,0,1);
		}
		
		this.texCoords = [0.0, 0.0,
						0.25, 0.25, 
						0.0, 0.25, 
						0.0, 0.0,
						0.25, 0.25, 
						0.0, 0.25];
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}
