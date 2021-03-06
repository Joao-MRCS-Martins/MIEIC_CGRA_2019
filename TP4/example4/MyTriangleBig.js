class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			0, 2, 0,	//1
			2, 0, 0,	//2

			-2, 0, 0,	//0 / 3
			0, 2, 0,	//1 / 4
			2, 0, 0	//2 / 5
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
						0.5, 0.5,
						1.0, 0.0,
						0.0, 0.0,
						0.5, 0.5,
						1.0, 0.0];
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}
