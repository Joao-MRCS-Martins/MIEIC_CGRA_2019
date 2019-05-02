class MyBranch {
    constructor(scene) {
        this.branch = new MyCylinder(scene,3);

        //trunk material
        this.woodAppearance = new CGFappearance(scene);
        this.woodAppearance.setDiffuse(0.8,0.7,0,1);
        this.woodAppearance.setSpecular(0.2,0.1,0,1);
        this.woodAppearance.setShininess(15);
    }

    display() {
        this.woodAppearance.apply();
        this.branch.display();
    }

}