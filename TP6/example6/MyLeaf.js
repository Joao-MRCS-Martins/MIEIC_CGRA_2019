class MyLeaf {
    constructor(scene) {
        this.leaf = new MyCone(scene,3);

        //green material
        this.green = new CGFappearance(scene);
        this.green.setDiffuse(0,.8,0,1);
        this.green.setSpecular(0,0.2,0,1);
        this.green.setShininess(15);
    }

    display() {
        this.green.apply();
        this.leaf.display();
    }

}