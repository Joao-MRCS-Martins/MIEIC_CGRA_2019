class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 1, 0,	//1
            	2, 0, 0,	//2
			3, 1, 0,     //3
			     
			0, 0, 0,	//0
			1, 1, 0,	//1
            	2, 0, 0,	//2
           		3, 1, 0     //3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 2, 1,
            3, 1, 2,
            0, 1, 2,
            3, 2, 1

		];
		this.normals = [];
		
		for (var i = 0; i < 4; i++) {
            this.normals.push(0, 0, 1);
		}
		
		for(var i = 0; i< 4;i++) {
			this.normals.push(0,0,-1);
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
