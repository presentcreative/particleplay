#pragma strict

public var coinParticle: ParticleSystem;
var coinParticleSystem;
//coinParticleSystem = coinParticle.GetComponent(ParticleSystem);

function Start () {
//coinParticleSystem.Stop();
coinParticle.GetComponent(ParticleSystem).Stop();

}

function Update () {

}

function OnMouseDown(){

//coinParticleSystem.Play();
coinParticle.GetComponent(ParticleSystem).Play();


}