(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pingo_atlas_1", frames: [[0,0,1651,1776]]},
		{name:"pingo_atlas_2", frames: [[0,0,1451,894],[0,896,1847,640]]},
		{name:"pingo_atlas_3", frames: [[742,1108,245,87],[906,0,1002,239],[1490,241,369,259],[1490,502,369,259],[1490,763,369,259],[0,721,369,259],[371,721,369,259],[742,847,369,259],[1113,847,369,259],[1484,1024,369,259],[1855,1024,55,259],[1910,0,55,259],[0,0,904,719],[906,241,582,301],[0,982,369,259],[371,982,369,259],[906,544,582,301]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_28 = function() {
	this.initialize(img.CachedBmp_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2559,1445);


(lib.CachedBmp_29 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["pingo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["pingo_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["pingo_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["pingo_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.streetview = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(3.85,1.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.streetview, new cjs.Rectangle(3.9,1.3,1279.5,722.5), null);


(lib.startbt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"start.btn":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(14,1,1).p("AXcAAQAAI7m3GUQm3GVpuAAQptAAm3mVQm3mUAAo7QAAo7G3mUQG3mUJtAAQJuAAG3GUQG3GUAAI7gAMOgxIykLBIAA2Dg");
	this.shape.setTransform(-107,-99.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApRrBISjLBIyjLCg");
	this.shape_1.setTransform(-88.275,-104.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AEjRrQgFgGgEgPQgMgwAMg4QADgPAGgHQAFgFAGgCQAGgCAFADQAHAEADAJQAOAeABAiQABAigNAfQgGAPgJADIgFABQgJAAgGgIgAwpL3QgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAI+LjQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAtDJXQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgA06HqQgMgCgFgTQgQg4ARg6QAFgQAIgCQAJgDAIAIQAFAFAEALQATA4gTA2QgCAJgFAHQgGAGgHAAIgDAAgAO2HQQgLgLgFgaQgHgrAKgsQADgOAGgIQAFgFAGgBQAGgCAGADQAGAEADAJQAOAdABAhQABAhgLAeQgIATgLABQgGAAgIgHgAUiFJQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAs5A7QgRg6ASg2QAGgVANAAQALABAHASQALAbAAAeQAAAfgKAcQgHATgMABQgOAAgGgWgAMknCQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAPsqyQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgACGruQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAqtuOQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgADTvZQgFgGgDgLQgNgxAJgwQADgRAFgJQAHgNAKAAQALAAAHAQQALAXAAAnQAAAtgNAYQgFAKgIACIgEABQgGAAgGgHg");
	this.shape_2.setTransform(-110.4938,-104.3167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ApdPaQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAhzPSQgIgCgEgHQgHgJgEgTQgNhCASgvQAFgNAIgCQAHgCAIAGQgEACgDAFQgHAJgDAQQgMAxANAyQAGAXANACQAEAAAEgBIgGAFQgEACgEAAIgHgBgAudOyQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAGoOoQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAPiJyQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgArLHSQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAvjDsQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAPkBRQgHgPgDghQgFhVAMgyQAGgYAOAAQALAAAIAQQAJAUACApQAFBRgOAuQgGASgLACIgCAAQgMAAgHgRgAwLmxQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAHGpvQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWgAkntpQgRg6ASg3QAGgVANAAQALABAHASQALAbAAAfQAAAfgKAcQgHATgMABQgOAAgGgWg");
	this.shape_3.setTransform(-98.4596,-104.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("Al3Q0QgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgALeQMQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAg9QJQgNgCgHgXQgNgyAMgxQAEgQAGgJQAEgFADgCQAFgEAGABQALAAAGAPQAJARACAjQACAwgMAZQgIAPgKADIgFABIgCAAgAgbOFQgGgGgEgOQgKgqAJgzQADgQAFgIQAKgNALAAQAQAJAHAcQAMAzgQAwQgHATgKADIgFAAQgIAAgHgIgAMWOLQgNgFgFgYQgIgmAFgoQAEglAUgMQAJgFAHADQAGACAFAJQAOAagBAuQgBAhgJAUQgGAMgHAFQgHAGgHAAIgGgBgAp7MIQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAyNH6QgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAQ8HIQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAqtEAQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgANKD7QgGgGgEgOQgKgqAJgzQADgQAFgIQAKgNALAAQARAJAHAcQAMAzgQAwQgHATgLADIgFAAQgIAAgHgIgAR4CmQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAEmnPQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAyhnjQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgArLpbQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAKErJQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAo/s3QgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWgAFOvDQgQg6ARg3QAHgVAMAAQALABAIASQALAbAAAfQAAAfgKAcQgIATgLABQgOAAgHgWg");
	this.shape_4.setTransform(-102.5254,-110.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AinSrQgGgGgEgOQgKgpAJg0QADgQAFgIQAKgNALABQARAIAHAdQAMAzgQAvQgHATgLADIgFAAQgIAAgHgIgAGIJ7QgGgGgEgOQgKgpAJg0QADgQAFgIQAKgNALABQARAIAHAdQAMAzgQAvQgHATgLADIgFAAQgIAAgHgIgAKsFUQgQg5ARg3QAHgVAMAAQALAAAIASQALAcAAAfQAAAegKAdQgIATgLAAQgOAAgHgWgA0ZCWQgQg5ARg3QAHgVAMAAQALAAAIASQALAcAAAfQAAAegKAdQgIATgLAAQgOAAgHgWgAw9jRQgQg5ARg3QAHgVAMAAQALAAAIASQALAcAAAfQAAAegKAdQgIATgLAAQgOAAgHgWgAPsk1QgQg5ARg3QAHgVAMAAQALAAAIASQALAcAAAfQAAAegKAdQgIATgLAAQgOAAgHgWgATwldQgQg5ARg3QAHgVAMAAQALAAAIASQALAcAAAfQAAAegKAdQgIATgLAAQgOAAgHgWgArXmUQgGgGgEgOQgKgpAJg0QADgQAFgIQAKgNALABQARAIAHAdQAMAzgQAvQgHATgLADIgFAAQgIAAgHgIgAGcs4QgHgHgEgRQgKgxAMgvQAFgTAJgGQAGgEAHAAQAIAAAGAFQAHAGADAMQAUA5gUA4QgHATgLADIgGABQgKAAgIgKgAgZwtQgQg5ARg3QAHgVAMAAQAKAAAIASQALAcAAAfQAAAegKAdQgIATgKAAQgOAAgHgWg");
	this.shape_5.setTransform(-111.5254,-98.451);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AwkPPQm3mTAAo8QAAo6G3mVQG4mUJsAAQJuAAG2GUQG4GVAAI6QAAI8m4GTQm2GVpuAAQpsAAm4mVgAjXQxQgFAIgDAQQgJA0AKApQAEAOAGAGQAIALALgDQAMgDAGgTQAQgvgLgzQgHgdgRgIIgBgBQgLAAgJANgAELOlQgGACgFAFQgGAHgDAQQgMA3AMAwQAEAQAFAFQAIALAMgDQAJgEAGgPQANgfgBgiQAAghgOgfQgEgJgGgEQgEgCgDAAIgFABgAlJNfQgSA3ARA5QAHAWANAAQAMgBAHgSQAKgdAAgfQAAgegLgcQgHgSgLgBQgMAAgHAWgAoHNAQgRA4AQA5QAHAWANAAQAMAAAHgUQALgcgBgeQABgggMgbQgHgSgLgBQgMABgHAUgAMMM2QgSA3ARA6QAGAWAOAAQAMAAAIgUQAJgcABgeQAAgggMgbQgHgSgLgBQgNABgGAUgAgjMFQgHABgGANQgRAwAMBBQAEATAHAJQAFAHAHACQAIADAHgEIAGgFQAJgCAHgQQAMgZgBgwQgDgjgIgRQgHgPgJAAQgGAAgFADQgGgEgFAAIgEABgAtHMYQgSA4ARA5QAGAWAOAAQAMgBAIgSQAJgdABgfQAAgfgMgbQgHgSgLAAQgNgBgGAVgAH+MPQgSA3ARA5QAGAWAOAAQAMgBAIgSQAJgdABgfQAAgegMgcQgHgSgLAAQgNgBgGAWgAAOKXQgFAIgDAQQgIA0AJApQAEAOAFAGQAJAKAMgCQAKgDAIgTQAQgwgNgzQgGgcgRgJIgBAAQgLAAgJANgANGKKQgUAMgFAmQgEAnAHAmQAGAZAMAEQALADAKgIQAHgEAFgNQAKgTABgiQABgugOgaQgFgIgGgDIgFgBQgFAAgGADgAxLJbQgRA3AQA5QAGAWAPAAQALgBAIgSQAJgdABgfQgBgegKgcQgIgSgLAAQgNgBgGAWgAIcJHQgRA2AQA6QAGAWAPAAQALAAAIgUQAKgcgBgeQABgfgLgcQgIgSgLgBQgMAAgHAWgApNIyQgSA4ARA5QAHAWANAAQAMAAAHgUQAKgcAAgeQAAgggLgbQgHgSgLgBQgNABgGAUgAFYIBQgFAIgDAQQgJAzAKAqQAEAOAFAGQAJAKALgCQAMgDAGgTQARgwgMgyQgIgdgQgIIgBgBQgLAAgJANgAmWKQISjrBIyjrCgAQ4HYQgRA4AQA5QAGAWAPAAQALAAAIgUQAKgcgBgeQABgggLgbQgIgSgLgBQgMABgHAUgAtlG6QgSA4ARA5QAHAWANAAQAMgBAHgSQAKgdAAgfQAAgfgLgbQgHgSgLAAQgMAAgHAUgAp1E5QgRA2AQA6QAGAWAPAAQALAAAIgUQAKgcgBgeQABgfgLgcQgIgSgLgBQgMAAgHAWgA1fElQgJACgFAQQgRA6AQA4QAFATAMADQAJABAHgIQAFgGADgKQASg2gTg4QgEgLgEgFQgGgGgHAAIgEABgAOaEMQgGABgEAFQgHAIgDAPQgKArAIAsQAFAZAKAMQAIAGAGAAQAMAAAHgUQAMgdgCgiQgBghgOgdQgDgJgGgEQgDgCgEAAIgFABgAxfEkQgSA4ARA5QAGAWAOAAQAMAAAHgUQALgcAAgeQAAgggMgbQgHgSgLgBQgNABgGAUgARqDzQgSA3ARA5QAGAWAOAAQAMgBAHgSQALgdAAgfQAAgegMgcQgHgSgLAAQgNgBgGAWgAKADzQgRA3AQA5QAHAWAOAAQALgBAHgSQALgdgBgfQABgegLgcQgIgSgLAAQgMgBgHAWgAUACsQgRA4AQA5QAHAWANAAQAMgBAHgSQALgdgBgfQABgfgLgbQgIgSgLAAQgMAAgHAUgAuNBSQgRA4AQA5QAGAWAPAAQALgBAIgSQAKgdAAgfQgBgfgKgbQgIgSgLAAQgNAAgGAUgA1FA1QgRA3AQA5QAGAWAPAAQALgBAIgSQAKgdgBgfQABgegLgcQgIgSgLgBQgMAAgHAWgAp/ArQgRA2AQA6QAGAWAPAAQALAAAIgUQAKgcAAgeQgBgfgKgcQgIgSgLgBQgNAAgGAWgAN0ANQgFAIgDAQQgJAzAKAqQAEAOAFAGQAJAKALgCQAMgDAGgTQARgwgMgzQgIgcgQgJIgBAAQgLAAgJANgASmguQgRA1AQA6QAHAWANAAQAMAAAHgUQALgcgBgeQABgegLgcQgIgSgLgBQgMAAgHAWgAQ2iPQgMAyAGBWQADAgAGAPQAIATANgCQALgCAGgSQAOgtgFhRQgBgpgKgVQgIgQgKAAQgPABgGAXgAtbhhQgSA4ARA4QAHAWANAAQAMgBAHgSQAKgcAAgfQAAgfgLgbQgHgSgLAAQgNAAgGAUgAxpkyQgSA3ARA5QAHAWANAAQAMgBAHgSQAKgdAAgfQAAgegLgcQgHgSgLgBQgNAAgGAWgAPAmWQgSA2ARA6QAGAWAOAAQAMAAAIgUQAJgcABgeQAAgfgMgcQgHgSgLgBQgNAAgGAWgATEm/QgSA3ARA6QAGAWAOAAQAMgBAHgTQALgcAAgfQAAgfgMgbQgHgSgLAAQgNAAgGAUgAsHoOQgFAIgDAQQgJAzAKAqQAEAOAGAGQAIAKAMgCQAKgDAIgTQAPgwgMgzQgHgcgQgJIgBAAQgLAAgJANgAu1pKQgSA2ARA6QAHAWANAAQAMAAAHgUQAKgcAAgeQAAgfgLgcQgHgSgLgBQgNAAgGAWgAMCpfQgSA4ARA5QAGAWAOAAQAMAAAHgUQALgcAAgeQAAgggMgbQgHgSgLgBQgNABgGAUgAFUqkQgRA2AQA6QAGAWAPAAQALAAAIgUQAJgcABgeQgBgfgKgcQgIgSgLgBQgNAAgGAWgAxzq5QgSA4ARA5QAHAWANAAQAMAAAHgUQAKgcAAgeQAAgggLgbQgHgSgLgBQgMABgHAUgAIcsIQgRA2AQA6QAGAWAPAAQALAAAIgUQAKgcgBgeQABgggLgbQgIgSgLgBQgMAAgHAWgAqdsxQgSA4ARA5QAGAWAOAAQAMgBAHgSQALgdAAgfQAAgfgMgbQgHgSgLAAQgNAAgGAUgAPKtOQgRA3AQA5QAGAWAPAAQALgBAIgSQAJgdABgfQgBgegKgcQgIgSgLgBQgNAAgGAWgABkuLQgRA4AQA5QAHAWAOAAQALgBAHgSQALgdgBgfQABgfgLgbQgIgSgLAAQgMAAgHAUgAKyueQgSA3ARA5QAGAWAOAAQAMgBAIgSQAJgdABgfQAAgegMgcQgHgSgLAAQgNgBgGAWgAF0u6QgJAFgGAUQgLAvAKAwQAEASAGAHQALANANgEQAMgDAHgUQATg3gTg5QgEgMgGgGQgGgFgIAAIgCAAQgGAAgFAEgAjRwCQgSA3ARA5QAGAWAOAAQAMgBAIgSQAJgdABgfQAAgegMgcQgHgSgLgBQgNAAgGAWgAoRwMQgRA2AQA6QAHAWAOAAQALAAAHgUQALgcgBgeQABgfgLgcQgIgSgLgBQgMAAgHAWgArPwrQgRA3AQA6QAGAWAPAAQALAAAIgUQAKgcgBgeQABgggLgbQgIgSgLgBQgMABgHAUgACtyRQgGAJgCARQgKAxANAwQADALAFAHQAIAIAIgDQAIgCAFgKQANgYAAgtQAAgngLgXQgHgPgKAAQgLAAgGAMgAhFyPQgRA3AQA6QAHAWANAAQAMgBAHgTQALgcgBgfQABgfgMgbQgHgSgLAAQgMAAgHAUgAF8yZQgRA4AQA5QAHAWANAAQAMgBAHgSQALgdgBgfQABgfgMgbQgHgSgLAAQgMAAgHAUg");
	this.shape_6.setTransform(-107,-99.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startbt, new cjs.Rectangle(-264,-244.9,314,290), null);


(lib.sleepeyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiDAAQAAAvggAhQgfAhgtAAQgtAAggghQggghAAgvQAAgtAggiQAgghAtAAQAtAAAfAhQAgAiAAAtgAAAADQAABqhIBKQhIBMhoAAQhoAAhJhMQhIhLAAhsQAAhrBIhMQBJhLBoAAQBoAABIBLQBIBLAABqgAAAgCQABhqBIhLQBIhLBoAAQBoAABIBLQBJBMAABrQAABshJBLQhIBMhoAAQhoAAhIhMQhIhKgBhqAF6AAQAAAvggAhQggAhgsAAQgtAAggghQggghAAgvQAAgtAggiQAgghAtAAQAsAAAgAhQAgAiAAAtg");
	this.shape.setTransform(-112.55,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABIC3QhHhLgBhpIAAgFQABhpBHhMQBJhLBoAAQBnAABJBLQBJBMAABrQAABrhJBMQhJBMhnAAQhoAAhJhMgADBhOQggAgAAAuQAAAvAgAhQAgAgAtAAQAsAAAgggQAfghABgvQgBgugfggQgggigsAAQgtAAggAigAmoC3QhJhMAAhrQAAhrBJhMQBIhLBoAAQBnAABJBLQBIBMAABpIAAAFQAABphIBLQhJBMhnAAQhoAAhIhMgAk8hOQgfAggBAuQABAvAfAhQAgAgAsAAQAuAAAfggQAgghAAgvQAAguggggQgfgiguAAQgsAAggAigAAAgCIAAAAg");
	this.shape_1.setTransform(-112.55,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACzBQQggghgBgvQABguAgggQAfgiAtAAQAtAAAgAiQAfAgAAAuQAAAvgfAhQggAggtAAQgtAAgfgggAlLBQQgfghAAgvQAAguAfggQAhgiAsAAQAtAAAfAiQAhAgAAAuQAAAvghAhQgfAggtAAQgsAAghggg");
	this.shape_2.setTransform(-111.1,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("An1haQgQgVAAgXQAAgzBKglQBJgjBmgBIAGAAQACAAACAAQAEAAAEAAIAMAAQBaAEBCAgQBLAlAAAzQAAATgLARQgRAcgvAWQgbAOgeAIQACANAAANQAAAvghAhQggAhgvAAQgvAAggghQgighAAgvQAAgKACgKQgtgJgmgTQgogTgSgXgAAAADQAABqhLBKQhMBMhrAAQhsAAhMhMQhLhLAAhsQAAgwAQgqAiLgaQg4APhDAAQg1AAgtgJAAQhaQgQgVAAgXQAAgzBKglQBJgjBlgBIAHAAQACAAACAAQAEAAAEAAIAMAAQBaAEBDAgQBKAlAAAzQAAATgLARQgRAcguAWQgXALgYAIQg8AShKAAQguAAgogHQg1gJgqgVQgogTgSgXgAAAgCIAAAFAGFgdQAEAOAAAPQAAAvghAhQghAhgvAAQgvAAghghQggghAAgvQAAgJABgJAgShiQASAsAAA0QAAgvAQgpAHzhiQATAuAAA0QAABshMBLQhLBMhsAAQhrAAhNhMQhKhKgBhq");
	this.shape_3.setTransform(-112.5,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABMBnQhLhKgBhoIAAgHQAAgvAQgpQASAXAoAUQAqAUA1AJQgBAJgBAKQAAAvAiAgQAhAhAuAAQAvAAAgghQAigggBgvQAAgQgDgOQAYgIAXgKQAugXARgcQATAuAAA1QAABrhMBLQhLBMhsAAQhrAAhMhMgAm6BnQhLhLAAhrQAAgxAQgqQASAXAoAUQAmASAtAJQgCAKAAALQAAAvAiAgQAgAhAvAAQAvAAAhghQAgggAAgvQAAgOgCgNQAegIAbgNQAvgXARgcQASAsAAA0IAAAHQAABohLBKQhMBMhrAAQhsAAhMhMgAAAhSIAAAAg");
	this.shape_4.setTransform(-112.5,-8.0125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AC6AmQgighAAgtQABgKABgJQAoAHAuAAQBKAAA8gSQADAOAAAQQABAtgiAhQggAhgvAAQguAAghghgAlXAmQgighAAgtQAAgLACgKQAtAJA1AAQBDAAA4gPQACANAAAOQAAAtggAhQghAhgvAAQgvAAggghg");
	this.shape_5.setTransform(-111,-11.8875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC99CC").s().p("ACtB1Qg0gJgrgVQgogTgSgYQgQgUAAgYQAAgyBKglQBJgiBmgCIAGAAIAEAAIAIAAIAMABQBaAEBDAfQBKAlAAAyQAAAUgLAQQgRAdguAWQgWALgZAHQg7AThLAAQguAAgogHgAljBzQgugKgmgSQgogTgSgYQgQgUAAgYQAAgyBKglQBJgiBmgCIAGAAIAEAAIAIAAIAMABQBaAEBDAfQBKAlAAAyQAAAUgKAQQgSAdguAWQgbANgfAIQg3APhEABQg0AAgtgJg");
	this.shape_6.setTransform(-112.925,-29.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AoFAMIAAgCQAAgCAAgDQAAhyBKhUQBIhPBngDIAGAAQACAAACAAQAEAAAEAAIAMACQBaAIBCBIQAtAyASA+QAMApAAAtQAAArgKAmQgSBAgvAzQgWAYgZARQgFADgFAEQgOAIgVAGQgnANgtAAQgnAAgigKQgOgCgPgBQgugUglgqQgRgTgMgTQgthAAAhSQAAgDAAgCgAnYCjQgTgcgKgeQgPgsgBgxAAAAKQAAhyBKhUQBJhPBlgDIAHAAQACAAACAAQAEAAAEAAIAMACQBaAIBDBIQAsAyASA+QAGAUADAWQADAWAAAWQAAArgKAmQgSBAguAzQgUAVgVAQQgEACgDACQgFAEgFADQgPAIgUAGQgbAGgmABQgBAAgBAAQgGAAgHABQgCAAgCAAQgKgBgJAAQgZgBgdgDQgOgBgOgCQgugUgmgqQgQgSgNgUQgSgcgLgeQgBgEgBgDQgNgpgBgtIAAgCQAAgBAAAAQAAgCAAgCgAAAARIAAADQAABphLBLQgZAZgdARAAOBnQgOgnAAgsAgThRQATAqAAAxAIGAcQAAAFAAAFQAAAlgKAhQgRA2gvArQgWAWgYAOQgCABgBABAHzhRQATAtAAA1QAAAFAAAGAH7giQAJAeACAgAEUETQgRAAgTAAAiuEHQg3ANhmgK");
	this.shape_7.setTransform(-112.5,-17.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC99CC").s().p("AD0ETQgZgBgdgDIgcgDQgugUgmgqQgQgSgNgUQgSgcgLgeIgCgHQgNgpgBgtIAAgCIAAgBIAAgEQAAhyBKhUQBJhPBmgCIAGAAIAEAAIAIAAIAMABQBaAIBDBIQAsAyASA+QAGAVADAVQADAWAAAWQAAArgKAmQgSBAguAzQgUAVgVAQIgGAEIgLAHQgOAIgVAGQgbAGgmABIgCAAIgOAAIgWAAgAlHEKIgcgDQgugUgmgqQgQgTgNgTQgSgcgLgeQgPgsgBgxIAAgCIAAgFQAAhyBKhUQBJhPBmgCIAGAAIAEAAIAIAAIAMABQBaAIBDBIQAsAyASA+QAMApAAAtQAAArgKAmQgSBAguAzQgXAYgZARIgKAHQgOAIgVAGQgfAHgvAAQgjAAgsgEg");
	this.shape_8.setTransform(-112.925,-17.6651);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},7).to({state:[{t:this.shape_8},{t:this.shape_7}]},7).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.3,-46.2,105.60000000000001,57.1);


(lib.sadeyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhEAAQAAAagVATQgVATgeAAQgeAAgWgTQgUgTAAgaQAAgaAUgTQAWgTAeAAQAeAAAVATQAVATAAAagAkEB2QgJgHgIgHQgwgrAFgpQAGgpAzgmQAygmA+gZQA+gaAwArQAuArACA7QABg7AvgrQAxgrAfACQAfABA8AuQA9AuAZA5QAbA4gwArAAHACIAAgFABHB1QgJgGgHgHQgvgqgBg8QgCA8guAqQgXAUgcALAEPAAQAAAagVATQgVATgeAAQgeAAgVgTQgVgTAAgaQAAgaAVgTQAVgTAeAAQAeAAAVATQAVATAAAagADtCJQgeALgiAAQgoAAghgP");
	this.shape.setTransform(-113.5538,-15.5544);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABkCFIgCgDQgEgHgJgDQgHgEgHABIgQgNQgvgqgBg8IAAgFIAAAFQgCA8guAqQgXAUgcALIgrACQgmACgUgGIgcgLQgRgGgLgBIgJABIgCACIgRgOQgwgrAFgpQAGgpAzgmQAygmA+gZQA+gaAwArQAuArACA7QABg7AvgrQAxgrAfACQAfABA8AuQA9AuAZA5QAbA4gwArQADgOgEgNQgFAFgEANQgFAOgEAEQgEAFgTALQgIAEgEAFQgeALgiAAQgoAAghgPgACUgtQgVATAAAaQAAAaAVATQAVATAeAAQAeAAAVgTQAVgTAAgaQAAgagVgTQgVgTgeAAQgeAAgVATgAjAgtQgUATAAAaQAAAaAUATQAWATAeAAQAeAAAVgTQAVgTAAgaQAAgagVgTQgVgTgeAAQgeAAgWATg");
	this.shape_1.setTransform(-113.5538,-15.5544);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("ABoAsQgMgBgFgFQgDgDgDgIQgDgFgMgFQgMgEgEgFQgDgEABgEQABgFAFgBIADAAQAHgBAHAEQAJADAEAGIACADIACADQABAEADABQAFAEALABQA1AEA3gDQACgFAFgFQAEgFAIgEQATgKAEgFQAEgEAFgOQAEgNAFgFQAEANgDAOIgCAHQgFAQgPALIgVAPQgMAJgBAJIgkABQgnAAgqgEgAixAkIgUgBQgKgCgcgLQgYgKgQABQgFgNAGgFIACgCIAJgBQALABARAGIAcAKQAUAGAmgCIArgCIAQABQAEAHgBAHQgBAIgGACIgJABg");
	this.shape_2.setTransform(-112.1618,-3.1859);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AB3AuQgVgUAAgaQAAgaAVgSQAVgUAeAAQAeAAAVAUQAVASAAAaQAAAagVAUQgVASgeABQgegBgVgSgAjdAuQgUgUAAgaQAAgaAUgSQAWgUAeAAQAeAAAVAUQAVASAAAaQAAAagVAUQgVASgeABQgegBgWgSg");
	this.shape_3.setTransform(-110.675,-15.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Aj0B1QgJgHgHgHQgugrAGgpQAAgBAAgBQgBgIAAgIQAAgbAcgJQAKgMAPgMQAvgmA6gZQA6gZAuArQAZAXAMAeQgLAOgZALQgNAGgPAEQAAACABABQABAGAAAHQAAAZgUATQgUATgcAAQgLAAgKgDQgPgFgMgLQgUgTAAgZQAAgFABgEQADgVAQgPQAUgTAcAAQAcAAAUATQAOANAEAQAjOgKQgcgFgWgLQgKgEgHgFAjzB0QgGgFgGgGQgoglgFgzQAEgaAXgaAhBgNQACAAACgBQACAIAAAHQAAAagUATQgUATgcAAQgOAAgMgFACsiSIgLAAQgDAAgCAAQALAEARAWQACACACADQATAbAbASQAXAPAPAUIABACQABABABACQABABABACQgCAAgCABQgDABgDACQgHADgIACQABACAAACQACAHAAAHQAAAZgUATQgUATgcAAQgMAAgKgDQgOgFgMgLQgUgTAAgZQAAgEABgEQACgVARgQQAUgTAcAAQAcAAAUATQANAMAEAPABjiLQAPgHAMAAQAEABAFAAQAKAAALgBACHiRQATAFAeAUQANAJAPAMQAkAeAYAiABxgJQgggFgagMQgYgLgLgNQgCgDgBgCQALgbAXgWQAbgaAVgJQARgEATgCAAIgbQgDgOgFgOQgBACgBACQAHAXABAaQAAgNACgMQACAMABANQAAgZAJgXAALAEIAAgGAAGgCIAAAFAAIgbQADgPAGgNAAJAbQgJAtgiAhQgUATgXAKABFB0QgHgFgGgGQgsgqgBg7QgBAMgBALQgDgLAAgNQgCA6grAqQgVAUgaALABCB0QgHgGgIgHQgighgIgrAEBgPQACAIAAAIQAAAagTATQgUATgcAAQgPAAgMgFAEBgPQgCAAgCABAELgXQgFAEgFAEQAOgDALgBQAGALAGALQADAIACAHQAAABAAAAQAEApgNAXQgBABAAABQgHAJgJAJAEWgaQANgIgOAHQAAAAABABQACADACAEQANgEAEApQAKAjgTAeAEBgPQAOgIAHgDAETgeQgEADgEAEAEhBVQgPAXgDADADeCIQgcAKggAAQgeAAgZgJQgHgCgGgDADbCMQgPAFgPACACNCSQgSgCgQgHQgHgDgHgD");
	this.shape_4.setTransform(-113.3572,-13.4767);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABrBaIgNgGIgCgCQgEgHgIgEQgFgCgGAAIgMgLQgtgqgBg6IAAgHQABgaAJgXQALAOAYALQAZALAgAGIAHAAIgBAJQAAAaAUATQAMAKAPAFQAMAEAOAAQAcABAUgTQAUgSAAgbQAAgJgCgIQANgCALgBIAMAXIAFAPIAAABQAEAogNAWIgBACQgGAKgJAIQADgOgFgNQgFAFgDAMQgFAPgDAEQgEAFgTALQgHAEgDAEQgcALggAAQgeAAgagJgAi2BVIgagLQgPgGgLgBIgIABIAAABIgNgLQgngmgFgxQADgcAXgZIARAJQAXAKAcAGIAGABIAAAJQAAAaAUATQALAKAPAFQAMAEAOAAQAcABAUgTQAUgSAAgbQAAgHgCgIIgEABIAAgDQAOgEANgGQAZgLALgOQAIAWAAAbIAAAFQgBA6gsAqQgVAUgaALIgpABIgQABQgYAAgPgEg");
	this.shape_5.setTransform(-113.4279,-8.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AEeBHQgCgCgBgFIgBgQIAAgEIACgMIABgDIABABIADgDIADgCIAFgCIAAgCQAFACAAAGQADATgDASQAAADgCACQgCABgEABQgGgBgCgBgAEkAwIAAAAIABgBIgBABgAkmAwQgEgCgCgHQgCgEAAgNQAAgKABgFQADgHAHgDIADgCQADAAADABQADACABACQACAEABAHQABAZgEAMIgBACIgDABQgIAAgEgDgABSATQgMgBgEgFQgCgDgDgIQgDgEgMgFQgLgEgEgGQgCgDABgFQABgFAEgBIADAAIACAAQAGAAAFADQAIADAEAIIACABIAAABIACAEIADAEQAFAEAKABIAcACQAXAAAYAAIAcgBIACgGIAEgEQADgEAHgEQATgMAEgEQADgFAFgOQADgMAFgFQAFANgDAOIgCAGIgBACQgFAPgNAMIgUANQgLAJgCAJIghABQglAAgngEgAi1ALIgTgCQgLgBgagKQgWgKgPABQgFgOAGgFIACgBIAAgBIAIgBQALACAPAFIAaALQAUAGAjgCIApgCIAJAAIAGABQADAIAAAFQgBAHgGADQgCABgGAAg");
	this.shape_6.setTransform(-110.5125,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC99CC").s().p("ABwBEQgggFgZgMQgYgLgLgNIgEgFQALgaAYgWQAbgaAVgJQARgEASgCQAUAFAeAUIADAFQATAbAbARQAYAPAOAUIACACIACADIgJAHIgOAFQgFgPgNgMQgUgTgcAAQgcAAgUATQgRAQgCAVIgHgBgAjOBDQgcgFgXgLIgRgJQALgMAPgMQAvglA6gZQA6gZAtArQAaAXALAdQgLAOgZALQgNAGgOAEQgFgQgNgNQgUgTgcAAQgcAAgUATQgRAPgDAVIgGgBgAAQAWQgGgKAAgKQAAgcAtgVQAUgJAYgFQgVAJgbAaQgYAWgLAaIAAAAgACGhDIAWgBQALAEARAWQgegUgUgFg");
	this.shape_7.setTransform(-113.325,-21.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACIA8QgPgFgMgLQgTgSgBgaIABgIQACgVARgQQAVgTAcAAQAcAAATATQANAMAFAPIABAEIABAOQABAagVASQgTAUgcAAQgMAAgKgEQAKAEAMAAQAcAAATgUQAVgSgBgaIgBgOIAEgBQACAIAAAIQAAAbgTASQgVATgcAAQgOAAgMgFgAi2A8QAKAEALAAQAcAAAUgUQAUgSAAgaIgBgNIABANQAAAagUASQgUAUgcAAQgLAAgKgEQgPgFgMgLQgUgSAAgaIABgJQACgVARgPQAUgTAcAAQAcAAAUATQAOANAEARIABACIADAAQACAHAAAHQABAbgVASQgTATgcAAQgOAAgMgFg");
	this.shape_8.setTransform(-110.45,-13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AkrAFIAAAAQAAgCAIgVQAIgXA3geQA3gfASgcIASABQA0ADAmAjQAaAXAKAeQALAVAAAWQAAg2ArgoQAqgmA7gBIAEAAQABAAABAAQACAAADAAIAHABQAXAIAaAeQAbAdAbARQAbARABAKQABAEABAFQABABACAEQACAEAAAGQAAACAAADQAAADAAACQAAASgGAPQgKAagbAVQgNAKgOAHQAAAAgBABQgCAAgCACQgDABgDACQgIAEgMADQgQADgWAAIgBAAQgEAAgDAAIgDAAQgGAAgFAAQgPAAgQgCQgIgBgJAAQgagKgWgUQgKgJgHgJQgLgNgGgPQAAgBgBgCQgIgSAAgWQAAAygrAkQgPAMgQAIQgDACgDABQgJAFgLACQgXAGgaAAQgWAAgUgFQgIAAgJgBQgbgJgVgVQgKgIgHgJQgagfAAgnQAAgCAAgBgAkRBOQgLgNgGgPQgJgVAAgYAibiCIAEAAQABAAABAAQACAAADAAIAHABAAAAIIAAgCQAAAAAAgBAgLgmQAHATAAAWQAAAUgGASQgKAegbAYQgNAMgOAIAAAAIIAAABAAIAxQgHgUgBgVAEqgCQACAGAAAJAElgQQADAHACAHAEngHQAAAGAAAGQAAAVgGASQgKAegbAYQgLAJgLAIAEAgfQAcAJALAPAhkB9QggAHg7gG");
	this.shape_9.setTransform(-112.525,-8.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("AkXBgIgFgBQgCgCAAgEIgCgVIABgLQAEgLALgFQAFADAHAAQAEAHABAKIAAARQgBANgFAFgAEKBeQgDgCgBgFIAAgiQAAgJAEgCIACgDIAQACQAFALgBANQgBANgHALIgGAFIgEABIgEgBgAkUAJIABgUQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIACgCIAKABQAHAMgDAQQgBAFgDACIgEACIgEACIgCADQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgDgGAAgMgAENARIAAgFIgBgEIABgIIABgDIALgMIACgBQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIADAGIAAAIIgBAGQgBAFgCADQgCACgEABIgEAAIgFAAgAEQgjIgGgDQgDgCAAgGIgBgfQAAgMADgFQAEABABAFQABALAAAOQAAAEACACQABgGAAgOQgBgMAEgGQAFABAAAHIAAAkQABANgFAFIgGgCgAkFglQgEgGACgGQABgDAEgFIAFgIQABgIADgEQACABABAEQADAHgBAKIgDAHIgEAEIgFAFIgEACIgBAAg");
	this.shape_10.setTransform(-111.0923,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC99CC").s().p("ACjCDIgIAAIgCAAIgLAAIgggCIgQgBQgbgKgWgUQgJgJgIgJQgKgNgGgPIgBgDQgIgUgBgVIAAgCIAAgBQAAg2ArgoQAqglA7gCIAEAAIADAAIAEAAIAHABQAXAIAbAeQAaAdAbASQAbAQACALIABAIIABAMQAAAUgGATQgKAdgbAZQgLAJgLAHIgCACIgDACIgHACQgIAEgMAEQgPADgWAAgAEpgHQgKgPgdgJQAdAJAKAPgAi9B/IgQgCQgbgKgWgUQgJgIgIgKQgKgNgGgOQgJgVgBgYIAAAAIAIgXQAJgXA3geQA3geARgdIASABQA0ADAnAjQAZAYALAdQAHATAAAVQAAAVgGASQgKAegbAYQgNAMgPAIIgGADQgIAFgMACQgSAEgbAAQgUAAgagCgAiHiBgAiZiCIAEAAIACAAIAFAAIAHABg");
	this.shape_11.setTransform(-112.775,-8.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Ak0AQQgBgIAAgIQAAgZAdgIAj7BtQgIgGgIgHQgvgoAGgmQAAgBAAgBQAEgZAYgYAieA4QgPgEgMgLQgUgRAAgYQAAgFAAgEQAEgTAQgPQAVgRAcAAQAdAAAVARQAOANAEAPQABABAAACQABAGAAAGQAAAYgUARQgVASgdAAQgLAAgLgDgAjTgKQgdgFgXgKQgKgEgHgEQAKgLAQgLQAwgkA8gXQA7gYAvAoQAaAWAMAcQgMANgZAKQgOAGgPAEAj5BsQgHgFgGgFQgogjgGgvAhDgMQACgBACAAQACAHAAAGQAAAZgUASQgVARgdAAQgOAAgNgEACwiJIgLAAQgCAAgDAAQAMAEARAUQANAJAQALQAlAcAYAgIACACQABABABACQgFADgEADQgFAEgFADQAOgCALgBQAHALAFAKQAEAHACAHQAAAAAAABQAEAmgNAVQgBABgBABQgGAJgJAIABmiDQAPgGANAAQAEAAAFABQAKgBALAAACLiIQAUAEAeATQACADACACQAUAZAbARQAYAOAPATAARg0QAMgZAYgVQAbgYAWgJQARgDAUgCAB0gJQghgFgagLQgZgKgLgMAAIgZQgDgOgFgMQgBABgBACQAHAVABAYIAAAFQgBA3gtAnQgWATgaALAAIgZQADgOAGgNAALACQAAAMgCALQgDgLAAgMAALAAIAAACAAIgZQADAMAAANQAAgZAKgWQgCgDgCgCAAGgDQAAgLACgLAAJAZQgJAqgjAfQgVASgXAKABEBsQgIgFgHgHQgkgegIgpABtCAQgGgCgHgDABtCAQgHgCgGgDABHBsQgHgFgGgFQgugogBg4AEcgaQABABAAAAQAOgHgPAGgAEbgcQAAABABABQgBABgCAAQgEACgDABQgHADgIACQABACAAABQABAHAAAHQAAAYgUARQgUASgdAAQgMAAgKgDQgPgEgMgLQgVgRAAgYQAAgEABgEQACgUASgPQAUgRAdAAQAdAAAUARQANAMAFAOAEdgZQACADACAEQAOgDAEAmQAKAhgTAbAEIgPQACAIAAAHQAAAZgUASQgUARgdAAQgPAAgMgEAEIgPQgCABgCAAAEIgPQAOgGAHgEAEoBPQgOAWgEACADkB/QgcAKgiAAQgeAAgbgJADhCDQgPAFgQACACRCJQgTgDgRgG");
	this.shape_12.setTransform(-113.3067,-17.0769);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABuBVIgOgGIgBgCQgEgGgJgEQgFgCgGAAIgNgLQgugogBg2IAAgEQABgZAJgWQALANAZAKQAbAKAgAFIAHACIAAAHQAAAZAUARQAMAKAPAEQANAFAOgBQAdAAAUgQQAVgSAAgYQAAgJgCgHIAZgEQAHALAFALIAFAOIAAABQAFAmgOAUIgBACQgHAJgJAIQADgNgEgNQgGAGgDALQgFANgDAEQgEAFgTALQgHADgEAEQgdAKghAAQgfAAgagIgAi7BPIgagJQgQgGgLgBIgIABIgBABIgNgLQgogjgGguQAFgZAXgYIARAIQAYAJAcAFIAHABIgBAJQAAAZAVARQAMAKAPAEQAMAFAPgBQAdAAAUgQQAVgSAAgYQAAgIgCgHIgFABIAAgCQAPgFANgFQAagKALgOQAIAVAAAYIAAAGQAAA2guAnQgWAUgaAKIgqACIgPAAQgZAAgRgFg");
	this.shape_13.setTransform(-113.3937,-12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FF").s().p("AElBDQgCgCgBgFIAAgPIgBgEIADgLIABgCIAAAAIADgDIADgCIAFgBIABgCQAFABAAAHQADARgDAQIgCAGQgCABgFAAQgGAAgCgBgAEsAtIAAAAIABgBIgBABgAkuAtQgEgCgCgGQgCgEgBgMQAAgJACgGQADgGAHgDQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQADgBADACIAFADQACAEAAAHQACAXgEALIgCACIgDABQgIAAgEgDgABUASQgMgBgEgEIgGgLQgDgEgMgEQgLgFgEgEQgDgDABgFQABgEAFgCIADAAIACAAQAGAAAFACQAJAEAEAGIABADIABAAIABADQACAEACABQAFADAKABIAdABIAwABIAdgBIACgFIAEgFQAEgDAHgEQATgLAEgEQADgEAFgNQADgMAGgFQAEANgDANIgCAFIAAACQgGAPgNAKIgVANQgLAIgCAJIgkAAQglAAgngDgAi6ALIgUgCQgKgCgbgJQgXgIgPAAQgGgOAHgFIABAAIABgBIAIAAQALAAAQAHIAaAJQAVAGAkgCIAqgCIAJAAIAGABQADAHAAAFQgBAHgGADIgJABg");
	this.shape_14.setTransform(-110.3875,-3.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC99CC").s().p("ABzA/QgggFgbgKQgZgKgLgNIgEgFQAMgYAYgVQAbgYAWgJQgWAJgbAYQgYAVgMAYQgGgJAAgJQAAgaAugVQAUgIAZgFQASgDATgCQAUAEAeAUIAEAEQAUAZAcAQQAXAPAPASIACACIACADIgJAGIgPAGQgEgPgNgLQgVgSgdAAQgdAAgUASQgSAOgCAVIgHgCgAjUA+QgcgFgYgJIgRgIQAKgMAQgLQAwgjA8gXQA8gYAuAoQAaAXAMAaQgMAOgZAKQgNAFgQAFQgEgQgOgMQgVgSgcAAQgdAAgVASQgQAOgEATIgGgBgAC8gnIAAAAgACKg/IAWgBQALAEARAVQgegUgUgEg");
	this.shape_15.setTransform(-113.25,-24.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ACMA4QgPgEgMgKQgVgSAAgYIABgHQACgUASgPQAUgSAdAAQAdAAAUASQANALAFAPIABADQABAGAAAHQAAAYgUASQgUARgdAAQgMAAgKgDQAKADAMAAQAdAAAUgRQAUgSAAgYQAAgHgBgGIAEgBQACAHAAAIQAAAZgUARQgUASgdAAQgPAAgMgFgAi8A4QALADALAAQAdAAAVgRQAUgSAAgYQAAgGgBgFQABAFAAAGQAAAYgUASQgVARgdAAQgLAAgLgDQgPgEgMgKQgUgSAAgYIAAgIQAEgUAQgOQAVgSAcAAQAdAAAVASQAOAMAEAQIABADIAEgCQACAHAAAHQAAAZgUARQgVASgdAAQgOAAgNgFg");
	this.shape_16.setTransform(-110.325,-17.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkCCIgcgKQgQgGgMgBIgIABIgCABIgSgNQgwgsAGgpQAFgoA0gmQAxgmA9gaQA+gaAwAsQAwAqABA8IAAAFQgBA7gwArQgXAUgbALIgsACIgOAAQgbAAgQgFgAgigwQgVATAAAbQAAAZAVATQAVATAdAAQAeAAAWgTQAUgTAAgZQAAgbgUgTQgWgTgeAAQgdAAgVATg");
	this.shape_17.setTransform(-129.3033,-15.3463);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},4).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},4).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_17},{t:this.shape}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.7,-31.8,67.49999999999999,53.6);


(lib.eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiDAAQAAAvggAhQgfAhgtAAQgtAAggghQggghAAgvQAAgtAggiQAgghAtAAQAtAAAfAhQAgAiAAAtgAAAADQAABqhIBKQhIBMhoAAQhoAAhJhMQhIhLAAhsQAAhrBIhMQBJhLBoAAQBoAABIBLQBIBLAABqQABhqBIhLQBIhLBoAAQBoAABIBLQBJBMAABrQAABshJBLQhIBMhoAAQhoAAhIhMQhIhKgBhqgAF6AAQAAAvggAhQggAhgsAAQgtAAggghQggghAAgvQAAgtAggiQAgghAtAAQAsAAAgAhQAgAiAAAtgAAAgCIAAAF");
	this.shape.setTransform(-112.55,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABIC3QhHhLgBhpIAAgFQABhpBHhMQBJhLBoAAQBnAABJBLQBJBMAABrQAABrhJBMQhJBMhnAAQhoAAhJhMgADBhOQggAgAAAuQAAAvAgAhQAgAgAtAAQAsAAAgggQAfghABgvQgBgugfggQgggigsAAQgtAAggAigAmoC3QhJhMAAhrQAAhrBJhMQBIhLBoAAQBnAABJBLQBIBMAABpIAAAFQAABphIBLQhJBMhnAAQhoAAhIhMgAk8hOQgfAggBAuQABAvAfAhQAgAgAsAAQAuAAAfggQAgghAAgvQAAguggggQgfgiguAAQgsAAggAigAAAADg");
	this.shape_1.setTransform(-112.55,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACzBQQggghgBgvQABguAgggQAfgiAtAAQAtAAAgAiQAfAgAAAuQAAAvgfAhQggAggtAAQgtAAgfgggAlLBQQgfghAAgvQAAguAfggQAhgiAsAAQAtAAAfAiQAhAgAAAuQAAAvghAhQgfAggtAAQgsAAghggg");
	this.shape_2.setTransform(-111.1,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("An1haQgQgVAAgXQAAgzBKglQBJgjBmgBIAGAAQACAAACAAQAEAAAEAAIAMAAQBaAEBCAgQBLAlAAAzQAAATgLARQgRAcgvAWQgbAOgeAIQACANAAANQAAAvghAhQggAhgvAAQgvAAggghQgighAAgvQAAgKACgKQgtgJgmgTQgogTgSgXgAAAADQAABqhLBKQhMBMhrAAQhsAAhMhMQhLhLAAhsQAAgwAQgqAiLgaQg4APhDAAQg1AAgtgJAAQhaQgQgVAAgXQAAgzBKglQBJgjBlgBIAHAAQACAAACAAQAEAAAEAAIAMAAQBaAEBDAgQBKAlAAAzQAAATgLARQgRAcguAWQgXALgYAIQg8AShKAAQguAAgogHQg1gJgqgVQgogTgSgXgAAAgCIAAAFAGFgdQAEAOAAAPQAAAvghAhQghAhgvAAQgvAAghghQggghAAgvQAAgJABgJAgShiQASAsAAA0QAAgvAQgpAHzhiQATAuAAA0QAABshMBLQhLBMhsAAQhrAAhNhMQhKhKgBhq");
	this.shape_3.setTransform(-112.5,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC99CC").s().p("ACtB1Qg0gJgrgVQgogTgSgYQgQgUAAgYQAAgyBKglQBJgiBmgCIAGAAIAEAAIAIAAIAMABQBaAEBDAfQBKAlAAAyQAAAUgLAQQgRAdguAWQgWALgZAHQg7AThLAAQguAAgogHgAljBzQgugKgmgSQgogTgSgYQgQgUAAgYQAAgyBKglQBJgiBmgCIAGAAIAEAAIAIAAIAMABQBaAEBDAfQBKAlAAAyQAAAUgKAQQgSAdguAWQgbANgfAIQg3APhEABQg0AAgtgJg");
	this.shape_4.setTransform(-112.925,-29.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AC6AmQgighAAgtQABgKABgJQAoAHAuAAQBKAAA8gSQADAOAAAQQABAtgiAhQggAhgvAAQguAAghghgAlXAmQgighAAgtQAAgLACgKQAtAJA1AAQBDAAA4gPQACANAAAOQAAAtggAhQghAhgvAAQgvAAggghg");
	this.shape_5.setTransform(-111,-11.8875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AoFAMIAAgCQAAgCAAgDQAAhyBKhUQBIhPBngDIAGAAQACAAACAAQAEAAAEAAIAMACQBaAIBCBIQAtAyASA+QAMApAAAtQAAArgKAmQgSBAgvAzQgWAYgZARQgFADgFAEQgOAIgVAGQgnANgtAAQgnAAgigKQgOgCgPgBQgugUglgqQgRgTgMgTQgthAAAhSQAAgDAAgCgAnYCjQgTgcgKgeQgPgsgBgxAAAAKQAAhyBKhUQBJhPBlgDIAHAAQACAAACAAQAEAAAEAAIAMACQBaAIBDBIQAsAyASA+QAGAUADAWQADAWAAAWQAAArgKAmQgSBAguAzQgUAVgVAQQgEACgDACQgFAEgFADQgPAIgUAGQgbAGgmABQgBAAgBAAQgGAAgHABQgCAAgCAAQgKgBgJAAQgZgBgdgDQgOgBgOgCQgugUgmgqQgQgSgNgUQgSgcgLgeQgBgEgBgDQgNgpgBgtIAAgCQAAgBAAAAQAAgCAAgCgAAAARIAAADQAABphLBLQgZAZgdARAAOBnQgOgnAAgsAgThRQATAqAAAxAIGAcQAAAFAAAFQAAAlgKAhQgRA2gvArQgWAWgYAOQgCABgBABAHzhRQATAtAAA1QAAAFAAAGAH7giQAJAeACAgAEUETQgRAAgTAAAiuEHQg3ANhmgK");
	this.shape_6.setTransform(-112.5,-17.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC99CC").s().p("AD0ETQgZgBgdgDIgcgDQgugUgmgqQgQgSgNgUQgSgcgLgeIgCgHQgNgpgBgtIAAgCIAAgBIAAgEQAAhyBKhUQBJhPBmgCIAGAAIAEAAIAIAAIAMABQBaAIBDBIQAsAyASA+QAGAVADAVQADAWAAAWQAAArgKAmQgSBAguAzQgUAVgVAQIgGAEIgLAHQgOAIgVAGQgbAGgmABIgCAAIgOAAIgWAAgAlHEKIgcgDQgugUgmgqQgQgTgNgTQgSgcgLgeQgPgsgBgxIAAgCIAAgFQAAhyBKhUQBJhPBmgCIAGAAIAEAAIAIAAIAMABQBaAIBDBIQAsAyASA+QAMApAAAtQAAArgKAmQgSBAguAzQgXAYgZARIgKAHQgOAIgVAGQgfAHgvAAQgjAAgsgEg");
	this.shape_7.setTransform(-112.925,-17.6651);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAAADQAABqhLBKQhMBMhrAAQhsAAhMhMQhLhLAAhsQAAgwAQgqQgQgVAAgXQAAgzBKglQBJgjBmgBIAGAAQACAAACAAQAEAAAEAAIAMAAQBaAEBCAgQBLAlAAAzQAAATgLARQASAsAAA0gAiLgaQACANAAANQAAAvghAhQggAhgvAAQgvAAggghQgighAAgvQAAgKACgKQgtgJgmgTQgogTgSgXAiLgaQg4APhDAAQg1AAgtgJAAQhaQgQgVAAgXQAAgzBKglQBJgjBlgBIAHAAQACAAACAAQAEAAAEAAIAMAAQBaAEBDAgQBKAlAAAzQAAATgLARQATAuAAA0QAABshMBLQhLBMhsAAQhrAAhNhMQhKhKgBhqAGFgdQAEAOAAAPQAAAvghAhQghAhgvAAQgvAAghghQggghAAgvQAAgJABgJQg1gJgqgVQgogTgSgXAGFgdQg8AShKAAQguAAgogHAAAgCQAAgvAQgpAgShiQgRAcgvAWQgbAOgeAIAHzhiQgRAcguAWQgXALgYAI");
	this.shape_8.setTransform(-112.5,-16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AiJAAQAAAvghAhQggAhgvAAQgvAAggghQgighAAgvQAAgtAigiQAgghAvAAQAvAAAgAhQAhAiAAAtgAAAADQAABqhLBKQhMBMhrAAQhsAAhMhMQhLhLAAhsQAAhrBLhMQBMhLBsAAQBrAABMBLQBLBLAABqQABhqBKhLQBNhLBrAAQBsAABLBLQBMBMAABrQAABshMBLQhLBMhsAAQhrAAhNhMQhKhKgBhqgAAAgCIAAAFAGJAAQAAAvghAhQghAhgvAAQgvAAghghQggghAAgvQAAgtAggiQAhghAvAAQAvAAAhAhQAhAiAAAtg");
	this.shape_9.setTransform(-112.5,-16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AC6BQQgighAAgvQAAguAiggQAhgiAuAAQAvAAAgAiQAiAggBAuQABAvgiAhQggAggvAAQguAAghgggAlXBQQgighAAgvQAAguAiggQAggiAvAAQAvAAAhAiQAgAgAAAuQAAAvggAhQghAggvAAQgvAAggggg");
	this.shape_10.setTransform(-111,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},7).to({state:[{t:this.shape_7},{t:this.shape_6}]},8).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_8}]},7).to({state:[{t:this.shape_10},{t:this.shape_9}]},7).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.3,-46.2,105.60000000000001,57.1);


(lib.donut1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("Ak8D+QiDhpAAiVQAAiUCDhoQCDhqC5AAQC6AACEBqQCCBoAACUQAACViCBpQiEBpi6AAQi5AAiDhpgAAGE0IAdgBIAYgiIgWAAgAhqEhIARgCIAOghgAh3EXIARgCIAPghgAicENIARgCIAOghgACcDuIARgBIAOgigAiQDkIARgBIAPgigAASDaIARgBIAPgigAkADaIARgBIAOgigAEZDRIARgCIAOgigAiwiNQhGA3AABOQAABNBGA3QBFA3BhAAQBhAABGg3QBEg3AAhNQAAhOhEg3QhGg3hhAAQhhAAhFA3gAk+CzIARgCIAOghgADnCoIARgBIAPghgADnCKIARgBIAPgigAlkBtIARgCIAOghgAFLBOIARgBIAPghgAE/AdIARgCIAOghgAl9ATIARgCIAOgggAEMgLIARgBIAPghgAlkhGIARgCIAOghgAEyhaIARgCIAPghgADziDIARgBIAPgigAlLiDIARgBIAOgigAEAiqIARgCIAOghgAjniqIARgCIAOghgAkci0IASAAIAagpIgQAAgACci0IARgCIAOghgABejnIARgBIANgigAgWkTQgHAEgOALQgeAUAiACIAZgfIACgEIAYgjIgZAgIgEAAQgDAAgCABgAh3jwIARgCIAPgig");
	this.shape.setTransform(-30.25,-110.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhzDuIgOAhIgRACgAA7C8IgOAhIgRACgAkVCUIgPAhIgRACgAEQCKIgOAhIgRACgAE2gpIgPAhIgRACgAkSiwIAcgoIAPAAIgZAogAghkAQANgLAIgEQADgCAGABIABABIAAACIgCAEIgaAfQghgBAegVg");
	this.shape_1.setTransform(-31.225,-110.4917);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAoDjIAWAAIgXAiIgdABgAhUDGIgOAhIgRACgAlBAcIgPAhIgRACgAFig0IgPAiIgRACgAFVirIgOAhIgRACgAkojUIgOAiIgSABgAC/kFIgPAhIgRACg");
	this.shape_2.setTransform(-30.6,-105.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("ADFDeIgOAiIgRABgAhmDUIgPAiIgRABgAFCDAIgOAiIgRACgAF0A/IgOAhIgRABgAlUADIgOAhIgRACgAEpi6IgOAhIgRACgAi+i6IgOAhIgRACgACGj3IgOAiIgRABgAhNkBIgPAiIgRACg");
	this.shape_3.setTransform(-31.225,-111.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgiEIIgOAhIgRACgAi4DCIgOAhIgRACgAEwByIgPAhIgRACgAkchfIgOAhIgRACgAE8ibIgPAhIgRACgAAckJIgBgBIAaggIgZAjIAAgCg");
	this.shape_4.setTransform(-34.35,-111.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AimCFQhFg3AAhOQAAhNBFg3QBFg3BhAAQBhAABGA3QBFA3AABNQAABOhFA3QhGA3hhAAQhhAAhFg3g");
	this.shape_5.setTransform(-31.3,-110.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.donut1, new cjs.Rectangle(-75.1,-145.9,89.69999999999999,71.80000000000001), null);


(lib.donut_shop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(556.95,-272.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_26();
	this.instance_1.setTransform(381.45,-668.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.donut_shop, new cjs.Rectangle(381.5,-668.6,825.5,888), null);


(lib.banch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("APMjqIKUAAIAAAgICxI0IAOAsIAUAKAPMpwIJ2AAIAAEYIp2AAIAABuIkYAAIAAhuIAAkYIAAi0IAAlKAcRFqIANArIABABIAOAsIAFAPIAHAAAceGVIAPAtAPMxuIJsAAIAAFKIpsAAIAAC0IAAEYAPMxuIAAiCIkYAAIAACCA2IxuIAAh4IgLAAIAABkA2dyMIAAAKAx7xuIAAh4IkNAAA60xuIEsAAAx7skIAAC0IAAEYIAABuIkNAAIAAhuIksAAA2IpwIAAi0IAAlKA60pwIEsAAA60skIEsAAA9UHRID6q7IDSAAA2IlYIAAkYA9UHRIAAB4IF8AAIDmAAIC9AAIAADmIi9AAIAAjmAPCMlIjIAAIAAjcIDIAAgAw1JJIcvAAAx7jqIcvAAAPMxuIAAFKAK0lYI8vAAAx7xuIAAFKIcvAAAx7xuIcvAAAx7pwIcvAAAdVJJIqtAAIAAKKIjmAAIAAmuAzyMvIAAHCIjmAAIAAqoAcyHRMg6GAAA");
	this.shape.setTransform(-134.2125,-94.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("A3YTxIAAqoIl8AAIAAh4ID6q7IDSAAIENAAIkNAAIAAhuIksAAIAAkYIEsAAIAAEYIAAkYIAAi0IAAlKIAAh4IENAAIAAB4IcvAAIAAFKI8vAAIAAlKIAAFKIAAC0IcvAAIAAi0IAAlKIAAiCIEYAAIAACCIJsAAIAAFKIpsAAIAAlKIAAFKIAAC0IJ2AAIAAEYIp2AAIAAkYIAAEYIAABuIKUAAIAAAgICxI0IANArIAPAtIAFAPIAHAAQAFA2AHAYQAGAWAKAUIqtAAIAAKKIjmAAIAAmuIAAjcIjIAAIDIAAIAADcIjIAAIAAjcI8vAAIi9AAIC9AAIAADmIi9AAIAAjmIjmAAIDmAAIAADmIAAHCgAcyHRMg6GAAAgAx7jqIcvAAIEYAAIkYAAIAAhuI8vAAIAAkYIAAEYgAK0lYIAAkYgAzyJJgA60skIAAlKIEsAAIAAFKg");
	this.shape_1.setTransform(-134.2125,-94.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.banch, new cjs.Rectangle(-322.9,-221.9,377.5,255), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Scene_1_street_view = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// street_view
	this.instance = new lib.streetview();
	this.instance.setTransform(640.75,359.25,1,1,0,0,0,639.3,360.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF33").s().p("APKFuQgSgIgNgRQgMgRgDgUQgFgiAVgbQAKgMAPgHQAPgHAQABQAHAAgBgEQAbACAVASQAVASAFAZQAFASgHAUQgKAigfAPQgOAIgRAAIgDAAQgPAAgOgGgApOFuQgSgIgNgRQgMgRgDgUQgFgiAVgbQAKgMAPgHQAPgHAQABQAHAAgBgEQAbACAVASQAVASAFAZQAFASgHAUQgKAigfAPQgOAIgRAAIgDAAQgPAAgOgGgAUQjbQgSgIgMgRQgMgRgDgUQgFgiAUgbQALgMAOgHQAQgHAPABQAIAAgCgEQAbACAVASQAWASAFAZQAEASgGAUQgLAigeAPQgPAIgRAAIgCAAQgQAAgOgGgAJ9jbQgSgIgMgRQgMgRgDgUQgFgiAUgbQALgMAOgHQAQgHAPABQAIAAgCgEQAbACAVASQAWASAFAZQAEASgGAUQgLAigeAPQgPAIgRAAIgCAAQgQAAgOgGgA1NjbQgSgIgNgRQgMgRgDgUQgFgiAVgbQAKgMAPgHQAPgHAQABQAHAAgBgEQAbACAVASQAVASAFAZQAFASgHAUQgKAigfAPQgOAIgRAAIgDAAQgPAAgOgGg");
	this.shape.setTransform(748.368,449.5768);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993399").s().p("AQdJKQhKgEgmgoQgHgHgFgJQghAVgpgBQgvgBgigdQgXgTgMgcQgNgcABgeQACgtAfgjIADgEQgMgNgJgRQgUgmAGgpQAEgZANgXQAUghAkgSQAhgQAiADQAEgZAOgVQASgcAegQQAegQAhAAQAbAAAZALQAkAQAWAkQAWAkgCAoIAAADQAjgEAjAPQArATAUAnQAVAngJAvQgIAugiAdQgLAKgNAHIAAABQARAggBAiQgCAjgTAfQgTAegfAQQgjASgvAAIgQAAgAO0DdQgPAHgKAMQgVAbAFAiQADAUAMARQANARASAIQAPAHARgBQARAAAOgIQAfgPAKgiQAHgUgFgSQgFgZgVgSQgVgSgbgCQABAEgHAAIgEAAQgOAAgNAGgAn7JKQhKgEgmgoQgHgHgFgJQghAVgpgBQgvgBgigdQgXgTgMgcQgNgcABgeQACgtAfgjIADgEQgMgNgJgRQgUgmAGgpQAEgZANgXQAUghAkgSQAhgQAiADQAEgZAOgVQASgcAegQQAegQAhAAQAbAAAZALQAkAQAWAkQAWAkgCAoIAAADQAjgEAjAPQArATAUAnQAVAngJAvQgIAugiAdQgLAKgNAHIAAABQARAggBAiQgCAjgTAfQgTAegfAQQgjASgvAAIgQAAgApkDdQgPAHgKAMQgVAbAFAiQADAUAMARQANARASAIQAPAHARgBQARAAAOgIQAfgPAKgiQAHgUgFgSQgFgZgVgSQgVgSgbgCQABAEgHAAIgEAAQgOAAgNAGgAVkAAQhKgDgmgoQgHgHgGgJQggAVgpgBQgwgBghgdQgXgTgNgcQgMgcABgeQABgtAfgjIAEgEQgNgNgIgRQgUgmAGgpQADgZAOgXQATghAlgSQAggQAiADQAFgZANgVQASgcAfgQQAegRAhABQAaAAAZALQAlAQAWAkQAWAkgDAoIAAADQAjgEAjAPQArATAVAnQAUAngIAvQgJAughAdQgMAKgNAHIAAABQARAggBAiQgBAjgUAfQgTAegeAQQgjARgvAAIgQAAgAT6lsQgOAHgLAMQgUAbAFAiQADAUAMARQAMARASAIQAPAHARgBQARAAAPgIQAegPALgiQAGgUgEgSQgFgZgWgSQgVgSgbgCQACAEgIAAIgEAAQgNAAgOAGgALRAAQhKgDgmgoQgHgHgGgJQggAVgpgBQgwgBghgdQgXgTgNgcQgMgcABgeQABgtAfgjIAEgEQgNgNgIgRQgUgmAGgpQADgZAOgXQATghAlgSQAggQAiADQAFgZANgVQASgcAfgQQAegRAhABQAaAAAZALQAlAQAWAkQAWAkgDAoIAAADQAjgEAjAPQArATAVAnQAUAngIAvQgJAughAdQgMAKgNAHIAAABQARAggBAiQgBAjgUAfQgTAegeAQQgjARgvAAIgQAAgAJnlsQgOAHgLAMQgUAbAFAiQADAUAMARQAMARASAIQAPAHARgBQARAAAPgIQAegPALgiQAGgUgEgSQgFgZgWgSQgVgSgbgCQACAEgIAAIgEAAQgNAAgOAGgAz6AAQhKgDgmgoQgHgHgFgJQghAVgpgBQgvgBgigdQgXgTgMgcQgNgcABgeQACgtAfgjIADgEQgMgNgJgRQgUgmAGgpQAEgZANgXQAUghAkgSQAhgQAiADQAEgZAOgVQASgcAegQQAegRAhABQAbAAAZALQAkAQAWAkQAWAkgCAoIAAADQAjgEAjAPQArATAUAnQAVAngJAvQgIAugiAdQgLAKgNAHIAAABQARAggBAiQgCAjgTAfQgTAegfAQQgjARgvAAIgQAAgA1jlsQgPAHgKAMQgVAbAFAiQADAUAMARQANARASAIQAPAHARgBQARAAAOgIQAfgPAKgiQAHgUgFgSQgFgZgVgSQgVgSgbgCQABAEgHAAIgEAAQgOAAgNAGg");
	this.shape_1.setTransform(750.0803,449.8743);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AL1OWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQiyAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAhAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgAQPKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgAoJKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgAVWA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgALDA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgA0IA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgA5ihdIAQAOIgCgfIgOARg");
	this.shape_2.setTransform(740.2864,440.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:640.75,regX:639.3,regY:360.7,scaleX:1,scaleY:1,y:359.25}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:640.75,regX:639.3,regY:360.7,scaleX:1,scaleY:1,y:359.25}}]},169).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:643,regX:639.3,regY:360.7,scaleX:1,scaleY:1,y:359.25}}]},101).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:643,regX:639.5,regY:360.4,scaleX:0.9997,scaleY:0.9997,y:364}}]},23).wait(197));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {replay:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(-399.9,-260.65,0.5,0.5);

	this.instance_1 = new lib.donut1();
	this.instance_1.setTransform(-336.75,-233.9,1.4693,1.3566,0,0,0,-30.3,-110.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.replay, new cjs.Rectangle(-402.6,-282.5,131.8,97.4), null);


(lib.pingowalk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eyes();
	this.instance.setTransform(102.7,120.2,0.691,0.6679,-14.9982,0,0,-112.2,-15.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJ2HCQAICUANB5QAPCOBBgJQBBgLARi1QARi3gkjsQgjjthDiDQhDiGhPARQg8ANAlB9QAfBCAXBHQAYBqANBpQAKBNADBNQACAbABAbQgBCkgsCTQgWBNgkBIQgmBNguA9QgJALgJALQAGgBAIgCQB5gSBbAVQBaAWAIAwQADASgKASQgHANgNAMQgSARgdARQhQAvh5ASQhRAMhCgFQgjgCgfgHQg4gOgYgXQgNgNgDgOQgPAEgQACAoRkSQgKgHgKgHQgHgFgGgEQjNiWglj7QgIgzAAgyQABiiBXiOQAQgZASgXQCXjMD7gmQD9gmDMCWQDNCXAlD6QAmD6iYDLQgEAGgEAGAjct3QAIBFgqA4QgqA5hIAMQhHALg7gsQg5gqgLhHQgKhHAqg6QArg5BHgMQBJgKA5AqQA5ArAMBGQgKhHAqg5QAsg6BHgKQBHgLA5AqQA6AsALBHQALBHgrA5QgsA6hGAKQhHALg7gqQg5gqgKhEgAl2nTQg9gPgbgZQgRgQgDgVQgIg2BZg0QBag0CHgUQCHgVBjAYQBmAYAIA1QADAVgLAUQgRAegxAfQgDACgFACQhZA0iGAUQiHAUhlgXgAqABEQAWihBGiQQACgEADgFQAHgOAHgOQBCh5BZhIAjdt8IAAAEQAAAAABABABeocQA9AXA6AoQAmAbAmAjQAXAVAWAYQA4A7AsBDQCKDMAqEaQAQBrAABlAIAE4QAtEuhxDrQhxDrjNAeQjMAfixi/Qhuh2g6igQglhjgRh0QgYieAUiMQARh+A2hvQBxjrDNgeQDNggCwDAQCxC+AuEtgAqKDYQgPDAA5CtQA5CuAdCNQAeCLhBAKQhAAKhGioQhGiqgkjsQgjjtAZiTQAZiSBQgHQA9gGABCCQAAAngFA1QgEAbgBAdQAAhMAKhIAjSSNQhLgvhGhMQiKiShJjHQgvh8gWiPQgQhvABhnAAIVJIhrAgIgfAGQgEABgFABQAAAAgBAAQgBAAgBAAQh6AThbgVQg4gOgYgYQgQgOgDgRQgHgxBRgvQAGgEAIgDIAmgSAGpQuQhtCAiXAk");
	this.shape.setTransform(125.0197,209.0742);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlhQgQg4gOgZgYQgPgOgCgSQgHgxBQguIAMgHIAmgRIBWgdIAggHIACAAQCgBlCvgZIAHgCIAAABQAAANgHAPQgQAdgzAeIgOAIIgmARIhrAhIgfAGIgJABIgBABQg5AIgzAAQg5AAgwgLgAFHPNQgjgDgfgHQg4gNgYgYQgNgMgDgOQCXgkBtiAIAOgDQB5gSBbAVQBaAVAIAxQADARgKASQgHANgNANQgSARgdARQhQAvh5ASQg6AIgyAAIgngBgAqzIoQhGipgkjtQgjjrAZiTQAZiTBQgHQA9gGABCDQgKBHAABMQgPDAA5CsQA5CvAdCMQAeCMhBAKIgHABQg9AAhCiggAKLGBQgNh5gIiUIAAgGQAAhigQhnQAQBnAABiIAAAGIgDg3QgDhMgKhMQgNhqgYhpQgXhJgfhCQglh9A8gMQBPgRBDCGQBDCEAjDtQAkDrgRC2QgRC2hBAKIgIABQg6AAgOiFgAqKh2IAAAAgAqAkJQAAAngFA1QgEAbgBAcQAAhMAKhHgAl1siIgBAAQg9gOgbgaQgRgQgDgUQgIg2BZg1QBagzCHgUQCHgVBjAXQBmAYAIA2QADAUgLAVQgRAegxAfIgIADQhZA0iGAVQg+AJg3AAQhBAAg2gNg");
	this.shape_1.setTransform(125.0197,242.5003);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjpOtQhuh2g6ihQglhjgRh0QgYidAUiMQARh/A2huQBxjrDNgfQDNgfCwDAQCxC/AuErQAtEvhxDqQhxDrjNAfQgcAEgdAAQisAAiYikgAncrjQg5gqgLhHQgKhHAqg7QArg5BHgLQBJgLA5ArQA5AqAMBGIAAAEIABABIgBgBIAAgEQgKhGAqg5QAsg6BHgLQBGgKA6AqQA6ArALBHQALBIgrA5QgsA6hGAKQhHALg7gqQg5grgKhEQAIBFgqA4QgqA6hIALQgOACgOAAQg3AAgvgigAltuvQgfAEgSAZQgTAZAFAfQAEAeAaAUQAZASAfgEQAfgFASgZQATgagEgeQgFgfgZgTQgUgOgYAAIgNABg");
	this.shape_2.setTransform(122.821,210.4364);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC99CC").s().p("Ah0TbIgDAAQhKgvhHhMQiKiShJjHQguh8gWiPQgQhvAAhnQACgdAEgbQAEg1AAgnQAXihBFiQIAFgJIAPgcIgVgOIgMgJQjNiWgmj7QgIgzABgyQABiiBXiOQAQgZARgXQCYjMD7gmQD7gmDNCWQDNCXAmD6QAlD6iXDLIgIAMQgmgjgmgbQg7gog9gXQAxgfASgeQALgUgDgVQgIg1hmgYQhlgYiFAVQiHAUhaA0QhZA0AHA2QAEAVAQAQQAbAZA+APIAAAAQBlAXCHgUQCGgUBag0IAHgEQA9AXA7AoQAmAbAmAjQAXAVAVAYQA4A7AsBDQCKDLArEbQAJBNAEBNIACA2QAACkgsCTQgXBNgkBIQgmBNguA9IgRAWQhuCAiXAkQgPAEgPACIAAgBIgHACQgkAFgjAAQiKAAh+hRgAAAkFQjNAehxDqQg3BwgRB+QgUCMAYCeQASB0AkBjQA7CgBtB2QCwC/DOgfQDNgeBwjrQByjrgukuQguktiwi+QiYilitAAQgcAAgcAFgAm1jEQBCh5BZhIQhZBIhCB5gAlIu/QhIAMgrA5QgqA6ALBHQALBHA5AqQA6AsBIgLQBIgMAqg5QAqg4gJhFQALBEA5AqQA6AqBGgLQBIgKArg6QArg5gLhHQgKhHg6gsQg6gqhIALQhGAKgrA6QgrA5AKBHQgLhGg6grQgtgig4AAQgOAAgOACg");
	this.shape_3.setTransform(115.8735,201.2811);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AlYl8QgIgKgIgJQgFgGgFgGQifjGAdj8QAGg0ANgvQAridB5hyQAVgUAXgTQDHieD8AdQD+AdCfDGQCfDGgdD8QgcD7jHCdQgGAFgFAFQARAaAOAdQAnBHAZBMQBQDoggEcQgMBsgaBhQgrCehRCDQgqBEg1A8Qg5BCg8AuQgLAJgLAIQAGAAAHABQB6AOBSAsQBTAsgGAxQgCARgOAPQgKALgQAJQgVAMggAIQhaAZh6gOQhRgJg/gWQghgMgcgPQgygbgRgdQgJgPAAgPQgPAAgPgCAochOQBAiXBoh4QADgEAEgEQAKgMALgLQBghkBogvQg4gegTgfQgMgUACgVQAHg2BjgcQBlgaCGAPQCHAPBcAxQBcAxgHA2QgCAVgQAQQgYAZg3ARQgEABgFABQhkAbiHgPQiHgQhbgxIgBAAABwuCIAAAEAFHncQA0AmAuA2QAeAkAcAsAH9HHQgiEwiqDFQipDGjOgXQjOgYh6jmQhLiOgPirQgKhpANh0QASifA4iCQAxh1BRhdQCqjGDNAYQDPAXB5DmQB5DmgiEugAochOQgKAmgSAxQgLAZgJAbQAUhIAchDgAmZREQg7hBgxhbQhfixgUjTQgMiEAQiQQAMhvAchkQhAC2ALC2QAJC3gICPQgHCPhBgHQhBgHgYi1QgYi2AbjuQAbjtA+iHQA+iHBPAOQA9AKghB+Aj1UyIhyAEIgfgDQgGgBgGAAQh7gOhSgsQgzgbgRgdQgLgSACgSQAFgxBagYQAIgCAHgBIAqgIADmSNQiLBgibgFAJMJrQgfCSgTB3QgWCOBCAHQBBAHA/irQBAisAbjtQAbjugfiRQgeiShRgEQg9gDAECBQAMBIAEBMQgEBsgPBpQgKBNgRBLQgFAagGAbg");
	this.shape_4.setTransform(115.1886,209.4868);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADZQmQhRgJg/gWQghgMgcgPQgygbgRgdQgJgPAAgPQCbAFCLhgIANABQB6AOBSAsQBTAsgGAxQgCARgOAPQgKALgQAJQgVALggAJQg6AQhGAAQgoAAgsgFgAmGPhIgKgBQh7gOhSgsQgzgbgRgeQgLgSACgRQAGgxBZgYIANgDIAqgIIBagFIAhABIADABQCACMCxAUIAHAAIAAABQgEANgLAMQgXAZg5APIgPAEIgpAHIhyAEgAJGK3QhCgHAWiOQATh3AfiSQAahhAMhsQAPhoAEhsQgEhMgMhIQgEiCA9ADQBRAEAeCTQAfCRgbDtQgbDthACsQg9Ckg+AAIgFAAgArIIlQhBgHgYi1QgYi2AbjtQAbjtA+iIQA+iHBPAOQA9AKghB+QgcBDgUBJQAUhJAchDQgKAmgSAyQgLAZgJAbQhAC2ALC1QAJC3gICPQgHCIg7AAIgGAAgAJXDkQARhLAKhNQgMBsgaBhIALg1gAJyBMIAAAAgABTsgQiHgQhbgxIgBAAQg4gegTgfQgMgUACgVQAHg2BjgcQBlgaCGAPQCHAPBcAxQBcAxgHA2QgCAVgQAQQgYAZg3ARIgJACQhBARhOAAQgsAAgwgFg");
	this.shape_5.setTransform(115.1886,243.2935);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSRVQjOgXh6jnQhLiOgPiqQgKhpANh1QASieA4iCQAxh1BRheQCqjFDNAXQDPAXB5DnQB5DlgiEvQgiEviqDGQiXCxi1AAQgVAAgWgDgAD+rWQhIgIgtg4Qgtg4AIhFIAAgFQAJhGA3gsQA5gtBIAIQBIAJAtA3QAtA5gIBIQgIBHg5AsQgvAmg7AAIgWgBgAhcr9QhIgIgtg5Qgsg3AIhIQAIhHA4guQA4gsBIAIQBIAIAsA4QAsA4gHBGIAAAFQgJBFg4AsQguAmg7AAIgWgBgABkuTg");
	this.shape_6.setTransform(116.3543,211.6084);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC99CC").s().p("AhrUyIgfgCIAAgBIgHAAQixgUiAiMIgCgBQg8hBgxhbQhfixgTjTQgNiEAQiQQANhvAbhkQAJgbALgZQASgyALglQA/iXBoh4IAIgIIAVgXQBfhkBpgvIAAAAQBcAxCGAQQCHAPBlgbIAIgCQA3gRAZgZQAQgQACgVQAGg2hcgxQhbgxiHgPQiHgPhkAaQhkAcgGA2QgCAVAMAUQATAfA4AeQhpAvhfBkIgQgTIgKgMQifjGAcj8QAGg0ANgvQAridB5hyQAWgUAXgTQDHieD8AdQD9AdCfDGQCfDGgcD8QgdD7jHCdIgLAKQARAaAPAdQAmBHAaBMQBQDoggEcQgLBNgQBLIgMA1QgrCehQCDQgqBEg1A8Qg5BCg8AuIgXARQiFBciTAAIgNgBgAlEhSQhRBcgyB2Qg3CCgSCfQgNB0AKBpQAOCrBMCOQB6DmDOAYQDNAXCpjGQCrjFAikwQAikuh6jmQh5jmjOgXQgWgDgWAAQi0AAiXCxgAF+k2QAeAkAbAsQgbgsgegkQgug2g1gmQA1AmAuA2gABpq3QAuA4BHAIQBIAJA5gtQA4gsAIhIQAIhHgtg5Qgtg4hIgIQhHgIg5AsQg4AtgIBGQAHhGgtg4Qgrg4hIgIQhIgIg5AsQg4AtgIBIQgIBHAtA4QAtA4BIAIQBIAIA3gsQA3gsAJhGQgHBGAsA3g");
	this.shape_7.setTransform(119.5425,202.0673);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AJ2HCQAICUANB5QAPCOBBgJQBBgLARi1QARi3gkjsQgjjthDiDQhDiGhPARQg8ANAlB9QAfBCAXBHQAYBqANBpQAKBNADBNQACAbABAbQgBCkgsCTQgWBNgkBIQgmBNguA9QgJALgJALQAGgBAIgCQB5gSBbAVQBaAWAIAwQADASgKASQgHANgNAMQgSARgdARQhQAvh5ASQhRAMhCgFQgjgCgfgHQg4gOgYgXQgNgNgDgOQgPAEgQACAoRkSQgKgHgKgHQgHgFgGgEQjNiWglj7QgIgzAAgyQABiiBXiOQAQgZASgXQCXjMD7gmQD9gmDMCWQDNCXAlD6QAmD6iYDLQgEAGgEAGQAXAVAWAYQA4A7AsBDQCKDMAqEaQAQBrAABlAjct3QAIBFgqA4QgqA5hIAMQhHALg7gsQg5gqgLhHQgKhHAqg6QArg5BHgMQBJgKA5AqQA5ArAMBGQgKhHAqg5QAsg6BHgKQBHgLA5AqQA6AsALBHQALBHgrA5QgsA6hGAKQhHALg7gqQg5gqgKhEgAqABEQAWihBGiQQACgEADgFQAHgOAHgOQBCh5BZhIQg9gPgbgZQgRgQgDgVQgIg2BZg0QBag0CHgUQCHgVBjAYQBmAYAIA1QADAVgLAUQgRAegxAfQgDACgFACQhZA0iGAUQiHAUhlgXIgBAAAjdt8IAAAEQAAAAABABABeocQA9AXA6AoQAmAbAmAjAIAE4QAtEuhxDrQhxDrjNAeQjMAfixi/Qhuh2g6igQglhjgRh0QgYieAUiMQARh+A2hvQBxjrDNgeQDNggCwDAQCxC+AuEtgAqKDYQAAhMAKhIQAAAngFA1QgEAbgBAdQgPDAA5CtQA5CuAdCNQAeCLhBAKQhAAKhGioQhGiqgkjsQgjjtAZiTQAZiSBQgHQA9gGABCCAjSSNQhLgvhGhMQiKiShJjHQgvh8gWiPQgQhvABhnAAIVJIhrAgIgfAGQgEABgFABQAAAAgBAAQgBAAgBAAQh6AThbgVQg4gOgYgYQgQgOgDgRQgHgxBRgvQAGgEAIgDIAmgSAGpQuQhtCAiXAk");
	this.shape_8.setTransform(125.0197,209.0742);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AlhQgQg4gOgZgYQgPgOgCgSQgHgxBQguIAMgHIAmgRIBWgdIAggHIACAAQCgBlCvgZIAHgCIAAABQAAANgHAPQgQAdgzAeIgOAIIgmARIhrAhIgfAGIgJABIgBABQg5AIgzAAQg5AAgwgLgAFHPNQgjgDgfgHQg4gNgYgYQgNgMgDgOQCXgkBtiAIAOgDQB5gSBbAVQBaAVAIAxQADARgKASQgHANgNANQgSARgdARQhQAvh5ASQg6AIgyAAIgngBgAqzIoQhGipgkjtQgjjrAZiTQAZiTBQgHQA9gGABCDQgKBHAABMQgPDAA5CsQA5CvAdCMQAeCMhBAKIgHABQg9AAhCiggAKLGBQgNh5gIiUIAAgGQAAhigQhnQAQBnAABiIAAAGIgDg3QgDhMgKhMQgNhqgYhpQgXhJgfhCQglh9A8gMQBPgRBDCGQBDCEAjDtQAkDrgRC2QgRC2hBAKIgIABQg6AAgOiFgAqAkJQAAAngFA1QgEAbgBAcQAAhMAKhHgAqAkJIAAAAgAl1siIgBAAQg9gOgbgaQgRgQgDgUQgIg2BZg1QBagzCHgUQCHgVBjAXQBmAYAIA2QADAUgLAVQgRAegxAfIgIADQhZA0iGAVQg+AJg3AAQhBAAg2gNg");
	this.shape_9.setTransform(125.0197,242.5003);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjpOtQhuh2g6ihQglhjgRh0QgYidAUiMQARh/A2huQBxjrDNgfQDNgfCwDAQCxC/AuErQAtEvhxDqQhxDrjNAfQgcAEgdAAQisAAiYikgAncrjQg5gqgLhHQgKhHAqg7QArg5BHgLQBJgLA5ArQA5AqAMBGIAAAEIABABIgBgBIAAgEQgKhGAqg5QAsg6BHgLQBGgKA6AqQA6ArALBHQALBIgrA5QgsA6hGAKQhHALg7gqQg5grgKhEQAIBFgqA4QgqA6hIALQgOACgOAAQg3AAgvgigAglvmQgfAEgTAZQgSAZAEAgQAFAeAZASQAZATAfgEQAfgFASgZQASgagEgeQgFgfgZgTQgTgOgXAAIgNABg");
	this.shape_10.setTransform(122.821,210.4364);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC99CC").s().p("Ah0TbIgDAAQhKgvhHhMQiKiShJjHQguh8gWiPQgQhvAAhnQACgdAEgbQAEg1AAgnQAXihBFiQIAFgJIAPgcIgVgOIgMgJQjNiWgmj7QgIgzABgyQABiiBXiOQAQgZARgXQCYjMD7gmQD7gmDNCWQDNCXAmD6QAlD6iXDLIgIAMQAXAVAVAYQA4A7AsBDQCKDLArEbQAJBNAEBNIACA2QAACkgsCTQgXBNgkBIQgmBNguA9IgRAWQhuCAiXAkQgPAEgPACIAAgBIgHACQgkAFgjAAQiKAAh+hRgAAAkFQjNAehxDqQg3BwgRB+QgUCMAYCeQASB0AkBjQA7CgBtB2QCwC/DOgfQDNgeBwjrQByjrgukuQguktiwi+QiYilitAAQgcAAgcAFgAm1jEQBCh5BZhIIAAAAQBlAXCHgUQCGgUBag0IAHgEQAxgfASgeQALgUgDgVQgIg1hmgYQhlgYiFAVQiHAUhaA0QhZA0AHA2QAEAVAQAQQAbAZA+APQhZBIhCB5gAExmPQAmAbAmAjQgmgjgmgbQg7gog9gXQA9AXA7AogAlIu/QhIAMgrA5QgqA6ALBHQALBHA5AqQA6AsBIgLQBIgMAqg5QAqg4gJhFQALBEA5AqQA6AqBGgLQBIgKArg6QArg5gLhHQgKhHg6gsQg6gqhIALQhGAKgrA6QgrA5AKBHQgLhGg6grQgtgig4AAQgOAAgOACg");
	this.shape_11.setTransform(115.8735,201.2811);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AHjkwQARAaAOAdQAnBHAZBMQBQDoggEcQgKBNgRBLQgFAagGAbQgrCehRCDQgqBEg1A8Qg5BCg8AuQgLAJgLAIQAGAAAHABQB6AOBSAsQBTAsgGAxQgCARgOAPQgKALgQAJQgVAMggAIQhaAZh6gOQhRgJg/gWQghgMgcgPQgygbgRgdQgJgPAAgPQgPAAgPgCAlYl8QgIgKgIgJQgFgGgFgGQifjGAdj8QAGg0ANgvQAridB5hyQAVgUAXgTQDHieD8AdQD+AdCfDGQCfDGgdD8QgcD7jHCdQgGAFgFAFAochOQBAiXBoh4QADgEAEgEQAKgMALgLQBghkBogvQg4gegTgfQgMgUACgVQAHg2BjgcQBlgaCGAPQCHAPBcAxQBcAxgHA2QgCAVgQAQQgYAZg3ARQgEABgFABQhkAbiHgPQiHgQhbgxIgBAAABwuCIAAAEAFHncQA0AmAuA2QAeAkAcAsAH9HHQgiEwiqDFQipDGjOgXQjOgYh6jmQhLiOgPirQgKhpANh0QASifA4iCQAxh1BRhdQCqjGDNAYQDPAXB5DmQB5DmgiEugAmZREQg7hBgxhbQhfixgUjTQgMiEAQiQQAMhvAchkQAUhIAchDQgKAmgSAxQgLAZgJAbQhAC2ALC2QAJC3gICPQgHCPhBgHQhBgHgYi1QgYi2AbjuQAbjtA+iHQA+iHBPAOQA9AKghB+Aj1UyIhyAEIgfgDQgGgBgGAAQh7gOhSgsQgzgbgRgdQgLgSACgSQAFgxBagYQAIgCAHgBIAqgIADmSNQiLBgibgFAJMJrQgfCSgTB3QgWCOBCAHQBBAHA/irQBAisAbjtQAbjugfiRQgeiShRgEQg9gDAECBQAMBIAEBMQgEBsgPBpQgMBsgaBhg");
	this.shape_12.setTransform(115.1886,209.4868);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ADZQmQhRgJg/gWQghgMgcgPQgygbgRgdQgJgPAAgPQCbAFCLhgIANABQB6AOBSAsQBTAsgGAxQgCARgOAPQgKALgQAJQgVALggAJQg6AQhGAAQgoAAgsgFgAmGPhIgKgBQh7gOhSgsQgzgbgRgeQgLgSACgRQAGgxBZgYIANgDIAqgIIBagFIAhABIADABQCACMCxAUIAHAAIAAABQgEANgLAMQgXAZg5APIgPAEIgpAHIhyAEgAJGK3QhCgHAWiOQATh3AfiSIALg1QARhLAKhNQgMBsgaBhQAahhAMhsQAPhoAEhsQgEhMgMhIQgEiCA9ADQBRAEAeCTQAfCRgbDtQgbDthACsQg9Ckg+AAIgFAAgArIIlQhBgHgYi1QgYi2AbjtQAbjtA+iIQA+iHBPAOQA9AKghB+QgcBDgUBJQhAC2ALC1QAJC3gICPQgHCIg7AAIgGAAgAocmgQgKAmgSAyQgLAZgJAbQAUhJAchDgAocmgIAAAAgABTsgQiHgQhbgxIgBAAQg4gegTgfQgMgUACgVQAHg2BjgcQBlgaCGAPQCHAPBcAxQBcAxgHA2QgCAVgQAQQgYAZg3ARIgJACQhBARhOAAQgsAAgwgFg");
	this.shape_13.setTransform(115.1886,243.2935);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC99CC").s().p("AhrUyIgfgCIAAgBIgHAAQixgUiAiMIgCgBQg8hBgxhbQhfixgTjTQgNiEAQiQQANhvAbhkQAJgbALgZQASgyALglQA/iXBoh4IAIgIIAVgXQBfhkBpgvIAAAAQBcAxCGAQQCHAPBlgbIAIgCQA1AmAuA2QAeAkAbAsQARAaAPAdQAmBHAaBMQBQDoggEcQgLBNgQBLIgMA1QgrCehQCDQgqBEg1A8Qg5BCg8AuIgXARQiFBciTAAIgNgBgAlEhSQhRBcgyB2Qg3CCgSCfQgNB0AKBpQAOCrBMCOQB6DmDOAYQDNAXCpjGQCrjFAikwQAikuh6jmQh5jmjOgXQgWgDgWAAQi0AAiXCxgAG3jmQgbgsgegkQgug2g1gmQA3gRAZgZQAQgQACgVQAGg2hcgxQhbgxiHgPQiHgPhkAaQhkAcgGA2QgCAVAMAUQATAfA4AeQhpAvhfBkIgQgTIgKgMQifjGAcj8QAGg0ANgvQAridB5hyQAWgUAXgTQDHieD8AdQD9AdCfDGQCfDGgcD8QgdD7jHCdIgLAKIAAAAgABpq3QAuA4BHAIQBIAJA5gtQA4gsAIhIQAIhHgtg5Qgtg4hIgIQhHgIg5AsQg4AtgIBGQAHhGgtg4Qgrg4hIgIQhIgIg5AsQg4AtgIBIQgIBHAtA4QAtA4BIAIQBIAIA3gsQA3gsAJhGQgHBGAsA3gAEbmSIAAAAg");
	this.shape_14.setTransform(119.5425,202.0673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:-112.2,regY:-15.7,rotation:-14.9982,x:102.7,y:120.2}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regX:-112,regY:-15.6,rotation:14.9989,x:127.35,y:119.6}}]},4).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance,p:{regX:-112.2,regY:-15.7,rotation:-14.9982,x:102.7,y:120.2}}]},6).to({state:[{t:this.shape_14},{t:this.shape_6},{t:this.shape_13},{t:this.shape_12},{t:this.instance,p:{regX:-112,regY:-15.6,rotation:14.9989,x:127.35,y:119.6}}]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.9,67.9,175,283.1);


(lib.pingosit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sleepeyes();
	this.instance.setTransform(-245.55,-288.95,0.6707,0.6139,0,0,0,-112.5,-16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("A2dyMIAAAKA2JzmIgKAAIAABkA2JxuIAAh4A2JskIAAlKAx7xuIAAh4IkOAAAx7xuIAAFKIDDAAA61xuIEsAAA61skIEsAAAv+lYIh9AAIAABuIkOAAIAAhuIAAkYIAAi0Ax7pwIAAEYAx7pwICPAAA9VHRID6q7IDSAAAx7jqICBAAA9VHRIAAB4IF8AAIDmAAIC+AAIAADmIi+AAIAAjmA61pwIEsAAA2JlYIksAAAx7skIAAC0APMxuIAAFKIAAC0IJ2AAIAAEYIp2AAIAABuIKUAAIAAAgICyI0IAOAsIAOAtIAEAOIAHAAAPMxuIAAiCIkYAAIAACCAPMxuIJsAAIAAFKIpsAAAshskIAFAAAofskIAGAAAG5skIAJAAAKOskIAhAAAGoxuIEMAAAK0tMIAAkiAK0rDIAAgpAIapwIAJAAAJUlYIgKAAAJEjqIAKAAALZjqIgDAAAp/pwIAHAAAqolYIgIAAAqrjqIAIAAAiFJJIDUAAAPMpwIAAEYAPMjqIhEAAAL6JJIDIAAIAADcIjIAAgAceGVIACABIATALAcSFqIAMArIAQAuAdWJJIquAAIAAKKIjmAAIAAmuAI8JJIC+AAAcyHRIzyAAAx7xuIJQAAAw1JJIHEAAAp1HRIzgAAAzzMvIAAHCIjmAAIAAqo");
	this.shape.setTransform(-238.2,-122);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AsDLUQADAWADAWQAHBDAEA9QAICPhBAAQhCAAgsiyQgfh/gJifQgBgXgBgZQgBgegBggQAAgKAAgLQAAiUAShvQALhEASg1QALgiANgZQAphRA+AEQAvADABBKQAAAGAAAFQgBADAAAEAslGEQgBAZABAaIAAAUAnZkqQgIgHgGgHQgFgGgFgGQiVioAAjmQAAg0AIgxQAZigBrh/QATgXAVgVQBshrCHgrQBagdBmAAQBmAABaAdQCHArBrBrQC1CzAAD9QAADciICkAj+muQg7gXgXgeQgOgSAAgVQAAg2BhgnQBggmCIAAQCHAABhAmQBhAnAAA2QAAAVgPASQgVAcg1AWQgEACgEABQgkAPgqAJIiZAPAmJQQQgXgWgWgZQgKgNgLgNQgTgYgSgaQgNgUgMgVQgxhWgahhQgPg5gGg9QgDgXgBgZQgCgbAAgbQAAgEAAgEQACiXAviBQABgEABgDQAVg4Aeg0QATghAXggQATgaAWgZQBUhhBjg2IDWg+QAUgCAVgBAgVmHQgSAAgSgBIiZgXQgXgGgUgJIgBAAAj/mtQAAAAABgBADbmxQABABABAAAAKkGID0A2QBvA2BdBsQAWAZATAaQA9BUAjBgQAvCBACCXQAAAEAAAEQAAA0gGAyQgZDfiGCpQgKANgLANQgXAagYAXAL8LLQgIBggDBVQgHCPBCAAQBCAAAriyQAgh/AJifQADg/AAhEQAAjvguiNQguiNhRAFQggACgLAkQgEARAAAWQAAAYAEAfQAAABAAAAQAVBFALBKQABAJABAJAhKStIhSgYAAES5QgUAAgUgCIgZgKADkSJIilAkAAvStIgqAMAAZU1QgQABgQAA");
	this.shape_1.setTransform(-243.95,-203.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("A3ZTxIAAqoIl8AAIAAh4ID6q7IDSAAIEOAAICBAAQAJCfAfB+QAsCxBBAAQBCAAgIiPQgFg8gHhCQA7CiB3CGQAfAjAgAeQgQAagMAgQgOAqgFAtIzgAAITgAAQgGA6AKA+InEAAIi+AAIC+AAIAADmIi+AAIAAjmIAADmIAAHCgAzzJJIjmAAgAPCTTIAAmuIjIAAIAAjcIDIAAIAADcIAAjcIjIAAIi+AAQAJg4gEgzIgBgNITyAAIzyAAQgGgsgNgoQgahHgtglIAQgSQApgvAjgzQAOgUAMgUIATggQAvhWAcheQANgrAJgtIAGgzIABgDQAGgwAEgvQgDAvgFAwIAAADIgDAAIADAAIgGAzQgGAtgLArQgHBggEBUQgGCPBCAAQBBAAAsixQAfh+AJifQAEg/AAhEQAAjvguiOQgviNhRAFQggACgKAkIAAkiIAAEiQgFARAAAXIggAAQgPgggRgeIgTghQgqhGg3g/IgFgGIgEgEIgcgeIgJAAQgCgjgVgSQgFgFgJgEIEMAAIAAiCIEYAAIAACCIAAFKIAAlKIJsAAIAAFKIpsAAIAAC0IAAEYIAAkYIJ2AAIAAEYIp2AAIAABuIhEAAIBEAAIKUAAIAAAgICyI0IAMArIAPAtIAFAPIAHAAQAEA1AIAZQAGAWAKAUIqtAAIAAKKgAiFJJQgEgjgJglIAnAJIAkABIAHAAIAggBIABAAQBEgFA/gYIgGAUQgKAlgEAjgAw1JJgAJAHRgAGQC3IAWgaQCGioAYjfIAKAAQgYDfiICoIgXAaQgWAagXAXIgIAAQAYgXAWgagAn1C3IgVgaQgTgZgSgZIgUgdQg3hagbhoQgPg5gHg9IAIAAQAHA9APA5QAaBhAwBVIAaApQARAZATAZIAWAaQAWAZAXAWIgFABQgXgXgXgZgALZjqgA2JjqIAAhuIksAAIAAkYIEsAAIAAi0IAAlKIAAh4IEOAAIAAB4IAAFKIAAlKIJQAAIALAMIANAOQgZgCgGgCQgbAHgRAXIgFAKIgBAAIgZAaIgEAEIgEAEQheBsg5B+IgFAAQgBhLgvgDQg9gEgqBSIjDAAIAAC0ICPAAQgSBvAACUIAAAVIh9AAIAAkYIAAEYIAABugA2JlYIAAkYgA2JjqgAJKlYQgBiXgviBIAJAAQAwCBABCXgAqxlYQACiXAwiBIAHAAQgvCBgBCXgALSpLQgLg+gTg6IAAgpQAUBFAMBKIABASQAJA6ADA/QgFg/gKg6gAG6skQgUgbgWgZQhdhshug2QB0A1BeBtQAXAZAUAbgAofskQAUgbAWgZQBWhjBmg0QhjA1hTBiQgWAZgUAbgA61skIAAlKIEsAAIAAFKgAK0tMgA2Jxug");
	this.shape_2.setTransform(-238.2,-122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFOnQgUAAgVgCIgZgKIgMAAIhTgYQgcgpgmggQhUhIhXAMQgXgWgWgZIgVgaQgTgYgRgaIgagpQgxhWgZhhQgQg5gGg9IgEgwQgBgbAAgbIAAgIQABiXAviAIACgHQAWg4Adg0QATgiAXgfQATgbAWgZQBUhhBjg2IDWg+QAVgCAVgBIAJAAID0A2QBvA2BdBsQAWAZATAbQA9BUAjBgQAvCAABCXIAAAIQABA0gGAyQgZDfiGCpIgVAaQgXAagXAXQgmAEgmAUQgbAOgaAWQgfAbgYAgIilAkIgQAAIgpAMgABvufIAsgDQgPADgRAAIgMAAgAj1ugIAtgEIAagCQgYAHgbAAIgUgBg");
	this.shape_3.setTransform(-242.95,-175.6125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC99CC").s().p("AgIU2IgkgBIgngKIgBgDQgWhUgsg/IBSAYIANAAIAZAKQAUACAUAAIABAAIAqgMIAQAAIClgkIgFAHQgiAvgWA7IgKAdQg/AYhEAGIgBAAIggABgApGQqQh3iHg6ijIgGgsIgHgfQgMg5gHg9IgEgwIgDg7IgBgJIAAgUQgBgaABgZIABgYQADhTAMhNIAFgTIAJgjQANgzAGgnIAMglIAAgHIAFgLQA5h8BehtIAEgEIAFgEIAYgaIABAAIAFgKQARgXAbgGQAHACAYABIgNgOIgKgMQiVioAAjmQAAg0AIgxQAZigBrh/QATgXAVgVQBshrCGgrQBbgdBmAAQBmAABaAdQCHArBrBrQC1CzAAD9QAADciICkIAUAJIANAFQAJAEAFAFQAVASADAjIAJAAIAbAeIAEAEIAFAGQA3BAAqBFIATAhQARAeAPAfQAVAvAQAyQATA6ALA+QALA7AEA+IAACGQgEAvgGAwIAAADIgHAzQgJAtgNAsQgbBegwBWIgTAhQgMAUgNATQgkAzgpAwIgQARQgWgSgbgKIgDgCIgQgGQgcgHgcACQAXgXAXgaIAWgaQCIipAZjfQAFgyAAg0IAAgIQgBiXgwiBQgjhgg+hUQgUgagWgZQhfhth0g1Ij0g2IgKAAQgVABgUACIjWA+QhmA1hWBiQgXAZgUAaQgTAagQAbQgjA5gXA/IgDAHQgwCBgBCXIAAAIQAAAbACAbIAEAwQAGA9AQA5QAbBoA3BbIATAdQASAaATAYIAWAaQAWAaAYAWIgRAEQhFATgqBCQgggegfgigAj4pnQhgAnAAA2QAAAVAOASQAXAeA7AXIgBABQAVAIAYAGICZAXIAkABIABAAICZgPQAsgJAlgPIAHgCIgCgBQA1gWAVgcQAOgSAAgVQAAg2hggnQhhgmiHAAQiIAAhhAmgAB/qNIAMAAQARAAAPgDIgsADgAi4qSIgtAEIAUABQAbAAAXgGIgZABg");
	this.shape_4.setTransform(-244.5333,-203.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AEmShQhhgZgqh2QgehWAMhjQAEgjALglIAFgUIAKgdQAWg7AigvIAFgHQAYggAfgbQAagWAbgOQAmgUAmgEIAHAAQAcgCAcAHIAQAGIAEACQAaAKAWASQAtAmAaBGQAOAoAFAsIABANQAFA0gJA3QgFAagHAbIgBADQgKAlgNAgQgoBahEA7QhIA9hJAAQgXAAgYgHgAmoRoQhfhRgliMQgHgZgEgZQgLg+AGg6QAFgtAPgqQAMggAQgaQAphCBGgTIAQgEIAEgBQBXgMBUBIQAmAgAcApQAsA/AXBUIAAADQAKAlAEAjQALBhgeBWQgqB1hhAaQgXAGgYAAQhIAAhIg9gALxFmQAEhVAHhgQAKgsAHgtIAFgzIAAgDQAFgvADgvIAAiGQgCg+gJg7IgBgSQgMhKgVhFIAAgBQgEgfAAgYQAAgXAEgRQALgkAggCQBQgFAvCOQAuCNAADvQABBEgEA+QgJCfggB/QgrCyhCAAQhCAAAHiPgAuYFDQggh/gJifIgCgvIgBg+IAAgVQgBiUAThvQAKhEASg1QALgiANgZQAphSA+AEQAvADAABLIAAALIAAAHIgMAlQgGAngNAzIgJAjIgFATQgMBNgCBTIgCAYQgBAZABAaIAAAUIABAJIADA7IAEAvQAHA9AMA5IAHAfIAGAsQAHBDAEA9QAICPhBAAQhCAAgriygAgUuhIgkgBIiagXQgXgGgUgJIgBAAQg7gXgWgeQgOgSgBgVQABg2BggnQBggmCJAAQCHAABgAmQBgAnAAA2QABAVgOASQgWAcg1AWIgIADQgkAPgpAJIiaAPg");
	this.shape_5.setTransform(-243.95,-149.2234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pingosit, new cjs.Rectangle(-426.9,-337.4,377.5,342.9), null);


(lib.pingo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eyes();
	this.instance.setTransform(116.45,119.5,0.6731,0.6687,0,0,0,-112.5,-16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGTlPQAUAYASAcQAuBCAiBIQBqDfAAEdQAABtgQBjQgYCjhCCLQgiBHguBDQgxBHg3A1QgKAKgKAJQh/BvibANQgRABgQAAQgCAOgJANQgUAbg3AWQhWAih7AAQgxAAgrgFQhCgJg0gUQg1gWgVgbQgNgQAAgTQAAgwBXgjQA1gVBBgIQAdgEAfgBQgfgagdghQgigmghguQhxilgsjQQgRhQgGhWQgEg1AAg4QAAhvAQhnQAMhLAUhGQgGAngMAzQgIAcgGAbQglCkASCfQADAXAEAWQAdC0AJCQQAJCPhBAAQhCAAgsiyQgkiSgHi8QgBgpAAgqQAAjvAuiOQAviMBRAFQA9AEgTB/QAuicBaiDQAEgEADgFQAJgNAJgMQgJgJgJgIQgFgGgGgFQi0iyAAj+QAAg0AHgxQAZihBsh/QATgWAVgVQC1izD+AAQD+AAC0CzQC1CzAAD9QAAD+i1CyQgFAFgFAFgAgetzQAAhHAxgyQA0gzBIAAQBIAAAzAzQAzAzAABIQAABIgzAzQgzAyhIAAQhIAAg0gyQgxgzAAhGQgCBGgyAzQgyAyhJAAQhIAAgzgyQg0gzAAhIQAAhIA0gzQAzgzBIAAQBJAAAyAzQAyAyACBHIAAAEADatrQAAAfgWAWQgWAWgfAAQgfAAgXgWQgWgWAAgfQAAgfAWgWQAXgWAfAAQAfAAAWAWQAWAWAAAfgAhwtmQAAAfgXAXQgWAWgfAAQggAAgWgWQgWgXAAgfQAAgfAWgWQAWgWAgAAQAfAAAWAWQAXAWAAAfgAj0nlQg7gXgXgeQgOgTAAgUQAAg3BggmQBhgmCIAAQCHAABhAmQBgAmAAA3QAAAUgOATQgVAbg1AXQgEABgEACQhhAmiHAAQiIAAhhgmgAIDGiQAAExiTDXQiSDYjQAAQjOAAiTjYQgZglgVgnQg2hngZh5QgQhPgEhXQgBgbAAgbQAAigAoiHQAkh7BGhmQCTjXDOAAQDQAACSDXQCTDXAAExgADlnoQA5AgAzAxQAiAgAgAoAmrk9QBUhuBjg6AE9SCQAGAAAHAAQB7AABXAiQBXAjAAAwQAAATgNAQQgUAbg2AWQhXAih7AAQh6AAhXgiQg2gWgUgbQgLgNgBgPAACT/QgDAAgDAAQiyAAiPh9AJjI7QgNCUgGB6QgGCPBCAAQBBAAAsiyQAsiyAAjvQAAjvguiOQgviMhQAFQg+AEATB/QAUBGAMBLQAIBtgCBpQgCBOgIBMQgDAbgDAbg");
	this.shape.setTransform(119.6,207.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlhN5QgZglgVgnQg3hngYh5QgRhPgEhXIgBg3QAAifApiIQAkh6BGhmQCTjXDOAAQDQAACSDXQCTDXAAEwQAAEyiTDXQiSDXjQABQjOgBiTjXgAAFsoQgxgxgBhHIAAgEQABhHAxgyQAzgyBIAAQBJAAAzAyQAzAzAABIQAABIgzAyQgzAzhJAAQhIAAgzgzgABLvRQgWAWAAAgQAAAfAWAVQAWAXAfAAQAgAAAWgXQAWgVAAgfQAAgggWgWQgWgWggAAQgfAAgWAWgAlXsoQgzgyAAhIQAAhIAzgzQAzgyBJAAQBIAAAzAyQAyAyABBHIAAAEQgBBHgyAxQgzAzhIAAQhJAAgzgzgAkAvMQgWAXAAAeQAAAfAWAXQAWAWAfAAQAgAAAWgWQAWgXAAgfQAAgegWgXQgWgVggAAQgfAAgWAVg");
	this.shape_1.setTransform(121.025,212.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AB5RvQg3gVgTgbQgLgOgCgOQCcgNB/hvIANAAQB7AABWAiQBYAiAAAxQAAASgNARQgUAbg3AVQhWAjh7AAQh7AAhWgjgAmBSNQhCgJg0gVQg2gVgUgbQgMgRAAgSQgBgxBXgiQA1gVBBgIQAdgEAegBQCQB9CyAAIAGAAQgCAOgJANQgVAbg2AVQhXAjh6AAQgxAAgrgFgAJQJtQAFh5AOiUQAQhkAAhsQAChqgIhrQgMhLgUhGQgTiAA+gEQBQgFAvCOQAuCNAADuQAADvgsCyQgsCxhBAAQhCABAGiQgAr4JLQgkiSgHi8QgBgpAAgqQAAjuAuiNQAviOBQAFQA+AEgTCAQgFAogNAyQgIAbgGAcQAMhLAUhGQgUBGgMBLQglCjASCfIAHAtQAeC0AICPQAJCQhBgBQhCAAgsixgAJpEqQAHhNADhNQAABsgQBkIAGg2gAJzCQIAAAAgAj0rAIgBAAQg7gXgWgeQgOgSAAgVQAAg2BggnQBggmCJAAQCHAABhAmQBgAnAAA2QAAAVgOASQgWAbg0AXIgIADQhhAmiHAAQiJAAhggmgAjywLQgWgXAAgfQAAgeAWgXQAWgVAfAAQAgAAAWAVQAWAXABAeQgBAfgWAXQgWAWggAAQgfAAgWgWgABZwRQgWgVAAgfQAAggAWgWQAWgWAfAAQAgAAAWAWQAWAWABAgQgBAfgWAVQgWAXggAAQgfAAgWgXg");
	this.shape_2.setTransform(119.6,229.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC99CC").s().p("AAAU2QixAAiPh9QgfgagdggQgignggguQhyilgsjQQgQhQgHhWQgEg1AAg3QAAhwAQhnQAGgbAIgbQANgzAGgnQAuidBaiDIAGgIIATgaIgTgRIgLgLQi0iyAAj+QAAg0AIgxQAZigBrh/QATgXAVgVQC1izD+AAQD+AAC0CzQC1CzAAD9QAAD+i1CyIgKALQgggogighQgzgxg5ggQA1gWAVgcQAOgSAAgVQAAg2hggnQhhgmiHAAQiIAAhhAmQhgAnAAA2QAAAVAOASQAXAeA7AXQhjA6hTBuQBThuBjg6IAAAAQBhAnCIAAQCHAABhgnIAIgDQA5AgAzAxQAiAhAgAoQAUAYASAbQAuBCAiBJQBqDeAAEeQgCBNgIBMIgGA2QgYCjhCCLQgiBIguBCQgxBHg3A1IgUATQh/BvibANIghABIgHAAgAlOguQhGBlgkB7QgoCHAACgIABA2QAEBXAQBPQAZB5A2BnQAVAnAZAlQCTDYDOAAQDQAACSjYQCTjXAAkxQAAkxiTjWQiSjYjQAAQjOAAiTDYgAAYq/QA0AyBIAAQBIAAAzgyQAzgzAAhIQAAhIgzgzQgzgyhIAAQhIAAg0AyQgxAzAABGQgBhGgzgzQgygyhJAAQhIAAgzAyQgzAzAABIQAABIAzAzQAzAyBIAAQBJAAAygyQAzgyABhGQAABGAxAygADqmxIAAAAg");
	this.shape_3.setTransform(119.075,202.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pingo_1, new cjs.Rectangle(38.1,67.9,163,279.79999999999995), null);


(lib.happyeyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.donut1();
	this.instance.setTransform(-84.5,-16.15,0.2832,0.3315,0,0,0,-30.2,-110.1);

	this.instance_1 = new lib.donut1();
	this.instance_1.setTransform(-137.05,-16,0.2832,0.3315,0,0,0,-30.2,-110.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAADQAABqhLBKQhMBMhrAAQhfAAhHg8QgJgHgJgJQhLhLAAhsQAAgJABgJQAGhfBEhGQAJgIAJgIQBHg7BfAAQBrAABMBLQBFBGAGBfQAAAIAAAIQAAgIAAgIQAHhfBEhGQBNhLBrAAQBsAABLBLQBMBMAABrQAABshMBLQgDADgEAEQhJBFhnAAQhrAAhNhMQhKhKgBhqgAiJAAQAAAvghAhQggAhgvAAQgvAAggghQgighAAgvQAAgJACgJQAGgjAagaQAgghAvAAQAvAAAgAhQAaAaAGAjQABAJAAAJgAAAgCIAAAFAGJAAQAAAvghAhQghAhgvAAQgvAAghghQggghAAgvQAAgJABgJQAGgjAZgaQAhghAvAAQAvAAAhAhQAZAaAGAjQACAJAAAJg");
	this.shape.setTransform(-112.5,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABMC3QhLhLgBhpIAAgFIABgQQAGhfBFhGQBMhLBrAAQBsAABLBLQBMBMAABrQAABrhMBMIgHAHQhJBFhnAAQhrAAhMhMgADJhOQgaAZgGAjQgBAJgBAJQAAAvAiAhQAhAgAuAAQAvAAAgggQAighgBgvQABgJgCgJQgGgjgagZQgggigvAAQguAAghAigAmoDHIgSgQQhLhMAAhrIABgSQAGhfBEhGIASgPQBHg8BfAAQBrAABMBLQBFBGAGBfIAAAQIAAAFQAABphLBLQhMBMhrAAQhfAAhHg8gAlIhOQgaAZgGAjQgBAJgBAJQAAAvAiAhQAgAgAvAAQAvAAAhggQAgghAAgvQABgJgCgJQgGgjgZgZQghgigvAAQgvAAggAigAAAADg");
	this.shape_1.setTransform(-112.5,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AC6BQQgighAAgvQABgJABgJQAGgjAagZQAhgiAuAAQAvAAAgAiQAaAZAGAjQACAJgBAJQABAvgiAhQggAggvAAQguAAghgggAlXBQQgighAAgvQABgJABgJQAGgjAagZQAggiAvAAQAvAAAhAiQAZAZAGAjQACAJgBAJQAAAvggAhQghAggvAAQgvAAggggg");
	this.shape_2.setTransform(-111,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.3,-42.9,105.60000000000001,53.8);


(lib.fullpingowalk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eyes();
	this.instance.setTransform(116.45,119.5,0.6731,0.6687,0,0,0,-112.5,-16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnalhQgGgHgHgHQifisAAjuQAAg0AIgxQAZihBsh/QASgWAWgVQC0izD/AAQD+AAC0CzQC0CzAAD9QAADciICkAgotzQABhHAxgyQAzgzBIAAQBIAAAzAzQA0AzAABIQAABIg0AzQgzAyhIAAQhIAAgzgyQgxgzgBhGADRtrQAAAfgXAWQgVAWggAAQgfAAgWgWQgWgWAAgfQAAgfAWgWQAWgWAfAAQAgAAAVAWQAXAWAAAfgAgotzIAAAEQgBBGgzAzQgyAyhIAAQhJAAgzgyQgzgzAAhIQAAhIAzgzQAzgzBJAAQBIAAAyAzQAzAyABBHgAh6tmQAAAfgWAXQgXAWgfAAQgfAAgXgWQgWgXAAgfQAAgfAWgWQAXgWAfAAQAfAAAXAWQAWAWAAAfgAj+nlQg7gXgWgeQgPgTAAgUQAAg3BggmQBhgmCJAAQCHAABgAmQBhAmAAA3QAAAUgOATQgWAbg0AXQAAAAABABAgUm/QgTAAgSAAIiZgXQgXgHgVgIIAAAAAj/nlQABAAAAAAAhKR2Ii1g1Qhjg2hThhQgMgNgKgNQgUgYgQgaQgOgVgMgUQgxhWgahhQgVhPgEhXQgCgbAAgbQAAigAziHQAWg4Adg1QAkg8Awg4QBThgBjg2IDXg/QAUgCAUAAADcnoQgFABgEACQgkAOgqAKIiZAOAAKk9ID1A2QBuA2BdBrQC6DXAAExQAAEeilDQQgKANgLANQhdBshuA3Ii/ApAsDKdQADAWADAWQAHBDAEA9QAICPhBAAQhCAAgsiyQgkiTgGi7QgCgoAAgrQAAjvAviOQAuiMBRAFQAyADgDBWQAAADAAADAslFNQgBAZABAZIAAAUAgOT/IAHAAQgCAOgKANQgUAbg3AWQhWAih6AAQgxAAgsgFQhBgJg1gUQg1gWgVgbQgMgQAAgTQAAgwBWgjQA1gVBBgIQAbgDAdgCAE4SCQAEAAAFAAQB7AABWAiQBXAjAAAwQAAATgMAQQgVAbg2AWQhWAih7AAQh7AAhXgiQg2gWgUgbQgKgNgCgPQgQAAgQABAAFSCQgVAAgUgDIgZgJAgOT/IAAAAQgSAAgSgCAAvR2IgqAMAL8KTQgIBhgDBVQgHCPBCAAQBCAAAriyQAtiyAAjvQAAjvgviOQguiMhRAFQg9AEASB/QAVBGALBLQABAJABAJ");
	this.shape.setTransform(120.55,207.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFRRQgVAAgUgDIgZgJIgMAAIi2g1Qhjg2hUhhIgVgaQgTgYgRgaIgagpQgxhWgZhhQgVhPgFhXQgBgbAAgcQAAifAyiIQAWg4AdgzQAkg9Avg4QBUhhBjg1IDWg+QAVgCAVgBIAJAAID0A1QBvA3BdBrQC6DXgBEwQAAEfikDQIgVAaQhdBshvA2Ii+AqIgRAAIgpAMgAAAsoQgygxAAhHIAAgEQAAhHAygyQAzgyBIAAQBJAAAyAyQAzAzAABIQAABIgzAyQgyAzhJAAQhIAAgzgzgABGvRQgXAWAAAgQAAAfAXAVQAWAXAfAAQAgAAAWgXQAWgVAAgfQAAgggWgWQgWgWggAAQgfAAgWAWgAlcsoQgzgyAAhIQAAhIAzgzQAzgyBIAAQBJAAAzAyQAyAyABBHIAAAEQgBBHgyAxQgzAzhJAAQhIAAgzgzgAkFvMQgXAXAAAeQAAAfAXAXQAWAWAfAAQAgAAAWgWQAWgXAAgfQAAgegWgXQgWgVggAAQgfAAgWAVg");
	this.shape_1.setTransform(121.55,212.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABvRvQg2gVgUgbQgLgOgBgOIABAAQCdgNCBhvIAAAAIAJAAQB7AABWAiQBXAiAAAxQAAASgNARQgUAbg2AVQhWAjh7AAQh7AAhXgjgAmLSNQhBgJg0gVQg2gVgUgbQgNgRAAgSQAAgxBXgiQA0gVBBgIQAbgDAdgCQBCA5BKAeICVAkIAkACIAAAAIAAAAIAHAAQgCAOgJANQgVAbg3AVQhWAjh7AAQgwAAgsgFgALxJtQAEhUAHhhQAKgrAHgtIAFg2QAGgwACgwIACg6IgChLQgDg+gIg7IgBgRQgNhLgUhGQgTiAA+gEQBQgFAvCOQAuCNAADuQABDvgtCyQgrCxhCAAQhCABAHiQgAuYJLQgkiSgHi8QgBgoAAgrQAAjuAuiNQAuiOBRAFQAyADgDBWIAAAGIgMAlQgGAogNAyIgOA3QgMBMgCBTIgCAYQgBAZABAZIAAAVIABAJIADA7QAHBWAQBQIAHAeIAGAtQAHBDAEA8QAICQhBgBQhCAAgrixgAgUqaIglAAIiZgXQgXgHgUgIIgBAAQg7gXgWgeQgOgSgBgVQABg2BggnQBggmCJAAQCHAABgAmQBgAnAAA2QABAVgOASQgWAbg1AXIgIADQgkAOgqAKIiZAOgAj7wLQgXgXAAgfQAAgeAXgXQAWgVAfAAQAgAAAWAVQAWAXAAAeQAAAfgWAXQgWAWggAAQgfAAgWgWgABQwRQgXgVAAgfQAAggAXgWQAWgWAfAAQAgAAAWAWQAWAWAAAgQAAAfgWAVQgWAXggAAQgfAAgWgXg");
	this.shape_2.setTransform(120.55,229.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC99CC").s().p("AgCU2IgHAAIAAAAIAAAAIgkgBIiWglQhJgehCg5IAAAAIgOgMIhaAAQgegVgdgZQgsgngqguQh3iHg6ijIgGgsIgHgfQgRhQgGhWIgDg7IgBgJIAAgUQgBgaABgZIABgYQADhTAMhNIAOg2QANgzAGgnIAMglIAAgHQA6iDBihxIAEgEIAFgEIAYgaIABAAIAFgKQARgXAbgGQAHACAYABIgNgOQifisAAjuQAAg0AIgxQAZigBrh/QATgXAVgVQC1izD+AAQD+AAC0CzQC1CzAAD9QAADciICkIAUAJQATAHAIAHQAVASADAjIAJAAIAbAeIAEAEIAFAGQA3BAAqBFIATAhQBICAAbCWQALA7AEA+IACBMIgCA6QgEAvgGAwIgHA2QgJAtgNAsQgbBegwBWIgTAhQgMAUgNATQgkAzgpAwQhABHhGA1IgJAHIhbAAIgNAMIAAAAQiBBvidANIgBAAIggABgAgkkDIjWA+QhmA1hWBiQgtAxghA3QgjA5gXA/Qg0CHAACgQAAAbACAbQAEBXAWBPQAbBoA3BbIATAdQASAaATAYIAWAaQBWBiBmA1IC1A1IANAAIAZAJQAUADAUAAIABAAIAqgMIAQAAIC/gpQB0g2BfhtIAWgaQCmjPAAkfQAAkxi8jWQhfhth0g1Ij0g2IgKAAQgVABgUACgAj5pnQhgAnAAA2QAAAVAOASQAXAeA7AXIgBABQAVAIAYAGICZAXIAkABIABAAICZgPQAsgJAlgPIAHgCIgCgBQA1gWAVgcQAOgSAAgVQAAg2hggnQhhgmiHAAQiIAAhhAmgAAOq/QA0AyBIAAQBIAAAzgyQAzgzAAhIQAAhIgzgzQgzgyhIAAQhIAAg0AyQgxAzAABGQgBhGgzgzQgygyhJAAQhIAAgzAyQgzAzAABIQAABIAzAzQAzAyBIAAQBJAAAygyQAzgyABhGQAABGAxAyg");
	this.shape_3.setTransform(120.0667,202.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AMZILQAGBhAIBVQANCOBBgJQBBgJATi2QATi2ghjtQghjshCiGQhBiGhQARQg8AMAkB9QAeBCAXBIQABAIADAJAo9kzQgIgGgHgGQi1iVghjrQgIg0ABgxQADijBYiNQAQgYASgYQCajKD8gkQD8gjDLCYQDLCYAjD7QAfDahwC0AjZt4QAJBFgrA5QgrA5hIAKQhIAKg5grQg6grgKhHQgKhHAsg6QArg5BIgKQBIgKA5ArQA5ArAKBGQgJhGArg5QAsg5BHgKQBHgLA6ArQA5AsAKBHQAKBHgrA5QgsA6hHAKQhHAKg6grQg5grgKhFgAl2nVQg+gOgagbQgRgQgDgUQgHg2Bag0QBagzCHgTQCHgSBkAYQBlAYAHA2QADAVgLAUQgSAegxAeQgDACgEACQgaAOgdANIgTAHIiWAkAAfuXQAEAfgUAZQgSAZgfAEQgeAEgagSQgYgTgEgeQgFggATgZQATgZAfgEQAfgEAYATQAZASAFAfgAjat8IABAEAkptjQAFAegUAaQgSAYgfAFQggAEgYgSQgZgUgFgeQgEgfATgZQASgZAggEQAfgFAYATQAaATAEAfgAiKnPQgSADgRABIibgBQgYgDgVgGIgBAAAl3nUQABAAAAgBAAdReIi5gcQhqgohghUQgNgLgMgMQgXgVgUgXQgQgSgPgTQg9hOgnheQgfhKgRhWQgFgbgEgbQgWieAgiNQANg6AWg4QAahBAog9QBGhsBahCIDMhcQATgFAWgEABeoZQABAAABAAAhYlTID4ATQB1AnBrBeQDWC7AqEtQAoEciGDkQgIAOgKAPQhMB3hmBGIi4BEArVLqQAGAVAFAWQAQBBANA8QAcCMhBAJQhBAJhEiqQg4iMghi4QgHgpgGgqQghjsAbiTQAbiRBQgHQAygEAJBVQAAADAAADAsmGhQADAaAEAZIADAUABITgQARgBASgCIABAAIAGgBQAAAOgHAPQgRAdgzAdQhQAuh5ARQgxAHgrAAQhCABg3gNQg4gOgYgXQgPgPgCgSQgHgxBRguQAxgcBAgRQAagHAdgFABuReQgVADgVABIgagGAGfQ0QAEgBADgBQB6gRBaAWQBcAWAGAxQADASgKASQgRAdgzAdQhQAuh6ASQh5ARhbgWQg5gOgXgYQgNgMgDgPQgQADgQADACWRNIgoAR");
	this.shape_4.setTransform(126.0787,210.1184);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdRMIgMABIi6gbQhpgohhhUIgYgXQgXgVgVgYIgfglQg8hOgnhdQgfhLgRhVIgJg2QgWieAfiOQANg5AXg4QAahBAog+QBFhrBbhDIDLhcQAUgFAVgDIAKgBID5ATQB1AmBqBeQDWC8AqEsQAoEciGDlIgRAdQhNB3hmBGIi4BDIgQACIgnARIgBAAIgqAFgAn8roQg5grgKhHQgKhIArg5QAsg6BIgKQBHgKA5ArQA5ArALBGIAAAFIAAgFQgJhGAqg5QAsg5BIgKQBIgKA4ArQA6ArAKBIQAKBHgsA5QgrA5hHALQhIAKg6gsQg4gqgLhFQAJBFgrA4QgrA6hHAKQgOACgNAAQg4AAgvgjgAmLu0QgfAEgTAaQgTAYAFAfQAEAfAZATQAZASAfgEQAfgEATgZQATgZgEgfQgFgfgZgSQgUgQgYAAIgMABgAhDvnQgeAEgUAZQgSAZAEAfQAEAfAZASQAZATAfgEQAfgFASgYQATgagEgeQgEgggZgSQgUgPgYAAIgMABg");
	this.shape_5.setTransform(127.3324,211.772);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Al3SdQg4gOgYgYQgPgPgCgSQgHgwBRguQAxgcBAgSQAagHAdgFQBIAvBOAUICYAPIAjgEIABAAIAGgBQAAAPgHAOQgRAegzAdQhQAuh5ARQgxAGgrABIgKAAQg8AAgzgMgADzRGQg5gOgXgYQgNgMgDgOIABgBQCZgiBxiAIABAAIAHgBQB6gSBaAXQBcAWAGAwQADASgKATQgRAdgzAdQhQAuh6ARQg1AIgvAAQg9AAgzgNgAtXK2Qg4iMghi5IgNhSQghjtAbiRQAbiTBQgGQAygEAJBWIAAAGQgEATgCAUQgBAngFA0QgEAcgDAbQgBBOAJBTIACAXQADAZAEAZIADAUIACAJIALA7QASBUAcBMIAMAeIALArQAQBCANA7QAcCNhBAJIgHAAQg9AAhBihgAMnHwQgIhUgGhhQAEgsABguIgDg2QgBgwgFgwIgSiDQgLg+gQg5IgEgRQgXhJgehBQgkh+A8gMQBQgQBBCGQBCCGAhDrQAhDtgTC2QgTC2hBAJIgHABQg7AAgMiGgAlIqcQgYgEgVgFIgBAAQg+gPgagaQgRgQgDgVQgHg2BagzQBagzCHgTQCHgTBkAYQBlAZAHA2QADAUgLAUQgSAfgxAdIgHAEQgaAPgdAMIgTAIIiWAjIgBAAIgjAFgAmhvtQgZgTgFgfQgEgfATgYQASgaAggEQAfgEAYATQAaASAEAfQAFAfgUAZQgSAZgfAEIgMABQgYAAgUgPgAhawhQgYgSgEgfQgFgfATgZQATgZAfgEQAfgFAYATQAZASAFAgQAEAegUAaQgSAYgfAFIgKABQgZAAgVgQg");
	this.shape_6.setTransform(126.0787,230.9605);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC99CC").s().p("AhFUeQhNgUhJgvIAAAAIgPgKIhaANQgggSghgUQgxghgvgoQiJh0hRiaIgLgrIgLgeQgchMgThUIgLg7IgCgJIgDgUQgEgZgCgZIgDgXQgJhTAChOQACgcAEgcQAGg0AAgnQADgUAEgTIAAgGQAmiKBSh+IAEgEIADgGIAUgcIABAAIAEgLQAOgZAagKQAHABAYgCIgPgMQi1iUghjsQgHgzABgyQACiiBZiNQAQgZASgYQCZjKD8gjQD9gkDKCZQDLCYAkD6QAeDahwC1IAWAGQATAEAJAGQAXAPAIAjIAJgBIAgAZIAEAEIAGAFQA/A4AzA+QANAOALAQQBYB2AxCQQASA4ANA+IASCEQADAwABAwIAAA3QgCAtgHAtQgOBhgjBdIgOAiIgUArQgcA3gjA1Qg1BQg+A+IgIAIIhaANIgLANIAAAAQhxCAiaAiIgBABIggAFIAAAAIgHABIAAAAIgjAEgABPSvIAqgFIABAAIAngRIAQgCIC4hDQBshFBOh6IATgdQCHjkgokcQgqkujYi6Qhthfh6gkIj5gTIgKABQgVADgUAFIjLBcQheBChIBsQglA4gZA7QgbA+gOBAQghCOAWCeQAEAbAGAbQARBVAfBLQAqBjBDBTIAXAaQAVAXAXAWIAZAXQBjBUBsAnIC6AbIAMgBgAiiqFQiHAThbAzQhaAzAIA2QADAVAQAQQAbAaA+APIgBABQAWAFAYADICbABIAkgFIAAAAICWgjIAUgIQAfgMAbgPIAFgDIgBgBQAxgdARgfQAMgUgDgUQgIg2hlgZQg5gNhCAAQg1AAg6AIgAmSvCQhIAKgsA6QgrA5AKBIQAKBHA5ArQA6ArBIgKQBHgKArg6QArg4gJhFQALBFA4AqQA6AsBIgKQBHgLArg5QAsg5gKhHQgKhIg6grQg5grhHAKQhIAKgsA5QgqA5AJBGQgLhGg5grQgugjg4AAQgNAAgNACg");
	this.shape_7.setTransform(124.9143,202.4648);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AIXs9QgIAegcAQQgaAPgfgIQgegIgQgbQgPgbAIgeQAIgeAbgQQAbgPAeAIQAfAIAPAbQAQAbgIAegAEouFQAThFA9gjQA/gkBFATQBGASAkA/QAkA+gSBGQgTBFg+AkQg+AjhGgSQhGgTglg+Qgjg9AShEQgTBDg+AjQg+AkhGgTQhGgSgjg+Qglg+AThGQAShGA+gjQA+gkBHASQBGATAjA+QAkA+gRBFIgBAEAkDn2QgFgIgEgIQhtjQA9jmQAOgyAUguQBCiUCIhfQAYgRAagOQDch/D2BCQD2BCB/DcQCADbhBD0Qg5DViuB7AgNo8QgzgngOgiQgJgVAGgUQAOg0BlgNQBogMCDAkQCEAjBTA9QBTA/gOA0QgFAUgSAOQgdAVg4AJQABAAAAABAsrGYQgDAWgDAWQgKBDgMA7QgdCNg/gRQg/gRADi3QADiXAqi3QAJgnALgpQA+jmBRh9QBSh9BNAaQAvAQgYBTQgCACgBAEAkEQWIiihjQhRhOg4hyQgHgQgHgPQgMgdgKgdQgIgXgGgXQgZhgAAhlQAAhRAShVQAGgbAHgaQApiaBVh1QAigwAqgrQAzgyA9gqQBphIBugaIDegFQAUAEAVAFADVuOQgIAegbAQQgcAQgegIQgegIgQgcQgPgbAIgeQAIgeAbgQQAbgPAeAIQAeAIAQAbQAQAbgIAegADJnbQgRgFgRgFIiPg9QgTgNgSgNIAAAAAgOo8QAAAAABAAAG9nEQgEAAgFAAQgmAFgrgCIiZgaADHlWIDeBzQBcBSA+B/QB8EAhPEmQhKEVjVCeQgNAKgOAKQh1BPh5AZIjCgJAr0BLQgIAYgGAZIgFATAkQSfQARAFARAFIABAAIAGACQgGANgMAKQgbAVg6AHQhdALh2ggQgvgMgogRQg+gZgtgiQgugigNggQgIgTAFgRQANgwBcgLQA4gGBCAJQAbAEAcAGABuSGQAEAAAEABQB3AgBKA3QBLA4gMAwQgFARgQANQgbAVg6AGQhcAMh3ggQh2gghLg4QgugjgNgfQgGgQACgPQgQgDgQgEAiOQ1IgsABAi6Q1QgVgFgTgHIgWgQAKiMcQghBcgZBQQgrCJBAARQA/ARBYigQBZigA9jnQA+jngIiVQgIiVhPgQQg9gMgPCBQABBIgHBMQgCAJgCAI");
	this.shape_8.setTransform(109.9444,211.5706);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA5SgQh2gghLg4QgugigNggQgGgPACgPIABAAQCbAcCYhJIABAAIAIACQB3AgBKA3QBLA4gMAvQgFASgQAMQgbAVg6AHQgYADgbAAQhJAAhXgYgAohP/QgvgNgogRQg+gYgtgiQgugjgNgfQgIgTAFgSQANgvBcgLQA4gGBCAIQAbAEAcAHQAxBHA/AwICHBKIAiAKIABAAIAGACQgGAOgMAKQgbAVg6AGQgYADgaAAQhJAAhYgXgAJ9OXQhAgRAriIQAZhQAhhcQAVgnASgqIATgzQASgtAOgtIASg3IAShKQANg9AGg7IAEgSQAHhLgBhHQAPiCA9ANQBPAQAICUQAICUg+DnQg9DnhZChQhQCQg7AAQgGAAgGgCgAujHzQg/gRADi2QADiYAqi1QAJgoALgpQA+jnBRh8QBSh9BNAaQAvAQgYBSIgDAGIgVAhQgQAkgZAuQgPAYgNAZQgfBHgYBQIgHAWQgIAZgGAYIgFAUIgCAIIgMA6QgQBUgEBSIgCAgIgGAsQgKBCgMA8QgaB9g1AAQgHAAgGgCgAFjqLIiZgaIgBAAIgigKIiPg+IglgaIAAAAQgzgmgOgiQgJgWAGgTQAOg1BlgNQBogLCDAjQCEAjBTA+QBTA+gOA1QgFATgSAPQgdAVg4AIIgJABQgcADgdAAIgYAAgAG6vSQgegIgQgcQgPgaAIgeQAIgfAbgPQAbgQAeAIQAfAIAPAcQAQAagIAfQgIAegcAPQgRALgUAAQgKAAgKgDgAB4wjQgegIgQgbQgPgbAIgeQAIgeAbgQQAbgPAeAIQAeAIAQAbQAQAbgIAeQgIAegbAQQgTAKgTAAQgKAAgKgDg");
	this.shape_9.setTransform(109.9444,231.8129);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiGRIIgQgEIgsAAIAAAAQgVgGgTgHIgWgPIgMgEIiihjQhRhNg4hzIgOgfQgMgcgKgdIgOgvQgZhgAAhkQAAhSAShVQAGgaAHgbQApiaBVh0QAigxAqgrQAzgyA9gpQBphIBugaIDegFIApAIIAKADIDeBzQBcBRA+CAQB8D/hPEmQhKEVjVCeIgbAUQh1BQh5AYgAGbqhQhGgSglg/Qgjg9AShEIABgEIgBAEQgTBEg+AjQg+AkhGgTQhGgTgjg+Qglg+AThFQAShGA+gkQA+gkBHATQBGATAjA+QAkA9gRBFQAThEA9gkQA/gjBFASQBGATAkA+QAkA+gSBGQgTBGg+AjQgpAYgsAAQgXAAgYgHgAGguDQgbAPgIAfQgIAeAPAaQAQAcAeAIQAfAIAagQQAcgPAIgeQAIgfgQgaQgPgcgfgIQgKgCgKAAQgTAAgSAKgABevUQgbAQgIAeQgIAeAPAbQAQAbAeAIQAeAIAcgPQAbgQAIgeQAIgegQgbQgQgbgegIQgLgDgKAAQgTAAgRAKg");
	this.shape_10.setTransform(110.7248,210.111);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC99CC").s().p("AjsUWIgBAAIgggHIAAAAIgGgCIgBAAIgigKIiHhKQg/gxgxhHIgBAAIgJgPIhXgYQgYgcgWggQgggxgcg3QhRihgOitIAGgsIACggQAEhRAQhVIAMg6IACgJIAFgTQAGgZAIgYIAHgXQAYhPAfhIQANgYAPgYQAZguAQgkIAVggIADgGQBZhxB9hUIAFgDIAFgDIAegSIABAAIAIgIQAWgSAcABQAGAEAXAHIgJgQQhtjQA9jmQAOgyAUguQBCiUCIhfQAYgRAagOQDch/D2BCQD2BCB/DcQCADbhBD0Qg5DViuB7IARAOQARALAGAJQAQAXgHAjIAJACIATAlIACAEIAEAHQAkBLAXBNIAKAlQAkCPgNCYQgFA8gLA+IgSBJIgSA4QgPAsgTAtIgVAzQgUApgYAmQgyBUhFBHIgaAbQgRAQgSAPQgwApg0AjQhQA0hRAhIgLAFIhXgYIgQAJIgBgBQhtA1hwAAQgrAAgrgIgAikSeIDCAJQB+gWB3hQIAdgUQDVieBLkVQBOkmh+kBQg/iAhihSIjehzIgKgCIgpgJIjeAFQhxAZhsBIQg4AlgvAtQgvAugoA1QhVB2gpCaQgHAagFAbQgTBVABBRQgBBsAeBmIAKAiQALAdANAcIAOAfQA6B1BUBNICiBjIAMADIAWAQQATAHAVAFIAAABIAsgBgAgNm+ICOA9IAiAKIABAAICZAaQAsADAogFIAHAAIgBgBQA4gJAdgVQASgOAFgUQAOg0hTg/QhTg9iEgjQiDgkhnAMQhmANgOA0QgGAUAJAVQAOAiAzAnIgBAAQATAOAUAMgAESqcQAlA+BGATQBGASA+gjQA+gkAThFQAShGgkg+Qgkg/hGgSQhFgTg/AkQg9AjgTBFQARhFgkg+Qgjg+hGgTQhHgSg+AkQg+AjgSBGQgTBGAlA+QAkA+BFASQBGATA+gkQA+gjAThDQgSBEAjA9g");
	this.shape_11.setTransform(113.7336,201.5667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:-112.5,regY:-16,rotation:0,x:116.45,y:119.5}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regX:-112.4,regY:-15.8,rotation:-12.7215,x:104.65,y:121.4}}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance,p:{regX:-112.4,regY:-15.8,rotation:19.7245,x:140.25,y:122.1}}]},10).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,67.9,215,285.70000000000005);


(lib.fullpingo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eyes();
	this.instance.setTransform(116.45,119.5,0.6731,0.6687,0,0,0,-112.5,-16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnalhQgGgHgHgHQifisAAjuQAAg0AIgxQAZihBsh/QASgWAWgVQC0izD/AAQD+AAC0CzQC0CzAAD9QAADciICkAgotzQABhHAxgyQAzgzBIAAQBIAAAzAzQA0AzAABIQAABIg0AzQgzAyhIAAQhIAAgzgyQgxgzgBhGQgBBGgzAzQgyAyhIAAQhJAAgzgyQgzgzAAhIQAAhIAzgzQAzgzBJAAQBIAAAyAzQAzAyABBHIAAAEADRtrQAAAfgXAWQgVAWggAAQgfAAgWgWQgWgWAAgfQAAgfAWgWQAWgWAfAAQAgAAAVAWQAXAWAAAfgAh6tmQAAAfgWAXQgXAWgfAAQgfAAgXgWQgWgXAAgfQAAgfAWgWQAXgWAfAAQAfAAAXAWQAWAWAAAfgAj+nlQg7gXgWgeQgPgTAAgUQAAg3BggmQBhgmCJAAQCHAABgAmQBhAmAAA3QAAAUgOATQgWAbg0AXQAAAAABABAgUm/QgTAAgSAAIiZgXQgXgHgVgIIAAAAAj/nlQABAAAAAAAhKR2Ii1g1Qhjg2hThhQgMgNgKgNQgUgYgQgaQgOgVgMgUQgxhWgahhQgVhPgEhXQgCgbAAgbQAAigAziHQAWg4Adg1QAkg8Awg4QBThgBjg2IDXg/QAUgCAUAAADcnoQgFABgEACQgkAOgqAKIiZAOAAKk9ID1A2QBuA2BdBrQC6DXAAExQAAEeilDQQgKANgLANQhdBshuA3Ii/ApAsDKdQADAWADAWQAHBDAEA9QAICPhBAAQhCAAgsiyQgkiTgGi7QgCgoAAgrQAAjvAviOQAuiMBRAFQAyADgDBWQAAADAAADAslFNQgBAZABAZIAAAUAgOT/IAHAAQgCAOgKANQgUAbg3AWQhWAih6AAQgxAAgsgFQhBgJg1gUQg1gWgVgbQgMgQAAgTQAAgwBWgjQA1gVBBgIQAbgDAdgCAE4SCQAEAAAFAAQB7AABWAiQBXAjAAAwQAAATgMAQQgVAbg2AWQhWAih7AAQh7AAhXgiQg2gWgUgbQgKgNgCgPQgQAAgQABAAFSCQgVAAgUgDIgZgJAgOT/IAAAAQgSAAgSgCAAvR2IgqAMAL8KTQgIBhgDBVQgHCPBCAAQBCAAAriyQAtiyAAjvQAAjvgviOQguiMhRAFQg9AEASB/QAVBGALBLQABAJABAJ");
	this.shape.setTransform(120.55,207.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFRRQgVAAgUgDIgZgJIgMAAIi2g1Qhjg2hUhhIgVgaQgTgYgRgaIgagpQgxhWgZhhQgVhPgFhXQgBgbAAgcQAAifAyiIQAWg4AdgzQAkg9Avg4QBUhhBjg1IDWg+QAVgCAVgBIAJAAID0A1QBvA3BdBrQC6DXgBEwQAAEfikDQIgVAaQhdBshvA2Ii+AqIgRAAIgpAMgAAAsoQgygxAAhHIAAgEQAAhHAygyQAzgyBIAAQBJAAAyAyQAzAzAABIQAABIgzAyQgyAzhJAAQhIAAgzgzgABGvRQgXAWAAAgQAAAfAXAVQAWAXAfAAQAgAAAWgXQAWgVAAgfQAAgggWgWQgWgWggAAQgfAAgWAWgAlcsoQgzgyAAhIQAAhIAzgzQAzgyBIAAQBJAAAzAyQAyAyABBHIAAAEQgBBHgyAxQgzAzhJAAQhIAAgzgzgAkFvMQgXAXAAAeQAAAfAXAXQAWAWAfAAQAgAAAWgWQAWgXAAgfQAAgegWgXQgWgVggAAQgfAAgWAVgAgyukIAAAAg");
	this.shape_1.setTransform(121.55,212.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABvRvQg2gVgUgbQgLgOgBgOIABAAQCdgNCBhvIAAAAIAJAAQB7AABWAiQBXAiAAAxQAAASgNARQgUAbg2AVQhWAjh7AAQh7AAhXgjgAmLSNQhBgJg0gVQg2gVgUgbQgNgRAAgSQAAgxBXgiQA0gVBBgIQAbgDAdgCQBCA5BKAeICVAkIAkACIAAAAIAAAAIAHAAQgCAOgJANQgVAbg3AVQhWAjh7AAQgwAAgsgFgALxJtQAEhUAHhhQAKgrAHgtIAFg2QAGgwACgwIACg6IgChLQgDg+gIg7IgBgRQgNhLgUhGQgTiAA+gEQBQgFAvCOQAuCNAADuQABDvgtCyQgrCxhCAAQhCABAHiQgAuYJLQgkiSgHi8QgBgoAAgrQAAjuAuiNQAuiOBRAFQAyADgDBWIAAAGIgMAlQgGAogNAyIgOA3QgMBMgCBTIgCAYQgBAZABAZIAAAVIABAJIADA7QAHBWAQBQIAHAeIAGAtQAHBDAEA8QAICQhBgBQhCAAgrixgAgUqaIglAAIiZgXQgXgHgUgIIgBAAQg7gXgWgeQgOgSgBgVQABg2BggnQBggmCJAAQCHAABgAmQBgAnAAA2QABAVgOASQgWAbg1AXIgIADQgkAOgqAKIiZAOgAj7wLQgXgXAAgfQAAgeAXgXQAWgVAfAAQAgAAAWAVQAWAXAAAeQAAAfgWAXQgWAWggAAQgfAAgWgWgABQwRQgXgVAAgfQAAggAXgWQAWgWAfAAQAgAAAWAWQAWAWAAAgQAAAfgWAVQgWAXggAAQgfAAgWgXg");
	this.shape_2.setTransform(120.55,229.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC99CC").s().p("AgCU2IgHAAIAAAAIAAAAIgkgBIiWglQhJgehCg5IAAAAIgOgMIhaAAQgegVgdgZQgsgngqguQh3iHg6ijIgGgsIgHgfQgRhQgGhWIgDg7IgBgJIAAgUQgBgaABgZIABgYQADhTAMhNIAOg2QANgzAGgnIAMglIAAgHQA6iDBihxIAEgEIAFgEIAYgaIABAAIAFgKQARgXAbgGQAHACAYABIgNgOQifisAAjuQAAg0AIgxQAZigBrh/QATgXAVgVQC1izD+AAQD+AAC0CzQC1CzAAD9QAADciICkIAUAJQATAHAIAHQAVASADAjIAJAAIAbAeIAEAEIAFAGQA3BAAqBFIATAhQBICAAbCWQALA7AEA+IACBMIgCA6QgEAvgGAwIgHA2QgJAtgNAsQgbBegwBWIgTAhQgMAUgNATQgkAzgpAwQhABHhGA1IgJAHIhbAAIgNAMIAAAAQiBBvidANIgBAAIggABgAgkkDIjWA+QhmA1hWBiQgtAxghA3QgjA5gXA/Qg0CHAACgQAAAbACAbQAEBXAWBPQAbBoA3BbIATAdQASAaATAYIAWAaQBWBiBmA1IC1A1IANAAIAZAJQAUADAUAAIABAAIAqgMIAQAAIC/gpQB0g2BfhtIAWgaQCmjPAAkfQAAkxi8jWQhfhth0g1Ij0g2IgKAAQgVABgUACgAj5pnQhgAnAAA2QAAAVAOASQAXAeA7AXIgBABQAVAIAYAGICZAXIAkABIABAAICZgPQAsgJAlgPIAHgCIgCgBQA1gWAVgcQAOgSAAgVQAAg2hggnQhhgmiHAAQiIAAhhAmgAAOq/QA0AyBIAAQBIAAAzgyQAzgzAAhIQAAhIgzgzQgzgyhIAAQhIAAg0AyQgxAzAABGQgBhGgzgzQgygyhJAAQhIAAgzAyQgzAzAABIQAABIAzAzQAzAyBIAAQBJAAAygyQAzgyABhGQAABGAxAyg");
	this.shape_3.setTransform(120.0667,202.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fullpingo, new cjs.Rectangle(23,67.9,195.1,279.79999999999995), null);


(lib.Scene_1_pingo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pingo
	this.instance = new lib.pingowalk();
	this.instance.setTransform(1402.35,436.2,1,1,0,0,0,119.6,207.8);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(650.5,237.2,0.5,0.5);

	this.instance_2 = new lib.pingo_1();
	this.instance_2.setTransform(984.6,456.6,1,1,0,0,0,119.6,207.8);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(613.6,236.7,0.5,0.5);

	this.instance_4 = new lib.donut1();
	this.instance_4.setTransform(719.5,293.55,1,1,0,0,0,-30.3,-110);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(683.75,237.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_5();
	this.instance_6.setTransform(613.6,236.7,0.5,0.5);

	this.instance_7 = new lib.sadeyes();
	this.instance_7.setTransform(982.7,369.4,1,1,0,0,0,-113.5,-14.6);

	this.instance_8 = new lib.CachedBmp_6();
	this.instance_8.setTransform(613.6,236.7,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACCq4QAxAKAqAQQBgAmAAA3QAAAUgOATQgVAbg1AXQgEABgEACQhhAmiHAAQiIAAhhgmIAAAAQg7gXgXgeQgOgTAAgUQAAg3BggmQBUghBygEAmqk9QgKgJgJgIQgFgGgGgFQi0iyAAj+QAAg0AIgxQAZihBrh/QATgWAVgVQC1izD+AAQD+AAC0CzQC1CzAAD9QAAD+i1CyQgFAFgFAFAmqk9QARgWARgVQAFgGAGgGQBAhGBJgrApLAEQAuicBaiDQADgEADgFQAJgNAKgMAlFSCQhDg6g7hVQhyilgsjRQgbiBAAiRQAAhwAQhmQAMhLAVhGQgGAngNAzQgIAbgGAcQgqC7AeC1QAeC0AJCQQAICOhBAAQhCAAgsixQgsiyAAjvQAAjvAviOQAuiMBRAFQA9AEgSB/AIDGiQAAEwiTDYQiSDXjQAAQjOAAiTjXQhbiFgiioQgVhnAAh0QAAigAoiHQAkh7BGhmQCTjXDOAAQDQAACSDXQCTDXAAExgAACT+QgCAPgJANQgUAbg3AWQhWAih7AAQh7AAhXgiQg1gWgVgbQgMgQAAgSQAAgyBWgiQBMgeBmgEADlnoQA5AgAzAxQAiAgAgAoQAUAYASAcQAuBCAiBIQBqDfAAEdQgCBOgIBMQgDAbgDAbQgNCUgGB6QgGCOBCAAQBBAAAsixQAsiyAAjvQAAjvguiOQgviMhQAFQg+AEATB/QAUBGAMBLQAIBtgCBpQAABsgQBkQgYCihCCLQgiBIguBDQgxBHg3A1QgKAKgKAJQAGgBAHAAQB7AABXAjQBXAiAAAyQAAASgNAQQgUAbg2AWQhXAih7AAQh6AAhXgiQg2gWgUgbQgLgOgBgPQgRABgQAAQgDAAgDAAQiyAAiPh8AE9SCQh/BvibAM");
	this.shape.setTransform(984.6,456.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlhIIQhbiFgiinQgWhnAAh1QAAifApiHQAkh7BGhmQCTjYDOAAQDQAACSDYQCTDXAAEwQAAExiTDXQiSDYjQAAQjOAAiTjYg");
	this.shape_1.setTransform(986.025,498.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC99CC").s().p("AAAU2QixAAiPh9QhDg6g7hVQhyilgsjQQgbiBAAiRQAAhwAQhnQAGgbAIgbQANgzAGgnQAuidBaiDIAGgIIATgaQARgWARgVIALgLQBAhHBJgrQhJArhABHIgLALQgRAVgRAWIgTgRIgLgLQi0iyAAj+QAAg0AIgxQAZigBrh/QATgXAVgVQC1izD+AAQD+AAC0CzQC1CzAAD9QAAD+i1CyIgKALQgggogighQgzgxg5ggQA5AgAzAxQAiAhAgAoQAUAYASAbQAuBCAiBJQBqDeAAEeQgCBNgIBMIgGA2QgYCjhCCLQgiBIguBCQgxBHg3A1IgUATQh/BvibANIghABIgHAAgAlOguQhGBlgkB7QgoCHAACgQAAB1AVBnQAiCnBbCFQCTDYDOAAQDQAACSjYQCTjXAAkxQAAkxiTjWQiSjYjQAAQjOAAiTDYgAjvpnQhgAnAAA2QAAAVAOASQAXAeA7AXIAAAAQBhAnCIAAQCHAABhgnIAIgDQA1gWAVgcQAOgSAAgVQAAg2hggnQgqgQgxgKIg4gDIh4gIQhyAEhUAhg");
	this.shape_2.setTransform(984.075,451.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AB5P2Qg3gVgTgbQgLgOgCgPQCbgNCAhuIANgBQB7AABWAjQBYAigBAxQAAASgMARQgVAbg2AVQhWAjh7AAQh7AAhWgjgAn3P2Qg2gVgUgbQgMgRAAgSQAAgxBWgiQBMgeBlgEQCQB8CyAAIAGAAQgCAPgJANQgVAbg2AVQhXAjh6AAQh7AAhXgjgAJQH0QAFh5AOiUQAPhkAAhsQADhpgIhsQgMhLgUhGQgTiBA+gDQBQgFAvCNQAuCOAADuQAADvgsCyQgsCxhBAAQhCAAAGiPgAr4HSQgsiyAAjvQAAjuAuiOQAviNBQAFQA+ADgTCBQgFAngOAzQgHAbgGAcQAMhLAUhGQgUBGgMBLQgrC7AfC0QAeC0AICPQAJCPhCAAQhBAAgsixgAJpCxQAIhNABhNQAABsgPBkIAGg2gAJyAXIAAAAgAj0s5IgBAAQg7gYgWgdQgOgTAAgUQAAg3BggmQBUghBygFIB4AJIA4ADQAxAJAqARQBgAmAAA3QAAAUgOATQgWAbg0AXIgIADQhhAmiHAAQiIAAhhgmg");
	this.shape_3.setTransform(984.6,490.5875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,204,0.4)").s().p("EhFeANaQhNAAgfg3QgvhQBbiHQC/kYDmh9QCHhJCSgRQCbgTCGAyQBGAZBpBAQCEBRAnATQBiAyBtAYQBtAYBtgEQDQgJD5hxQBagpB9hEQBIgnCMhOQD6iIDFgxQEChBDPBEQA2ARBTApQBnAwAhAPQDxBfE0ggQDzgZE0huQC1hCBMgSQCTghByAcQBJASBvBAQCCBKAxATQCYA8DAgYQCCgQDghFQEIhTBegUQDKgrCcAcQBMAPCXAsQCGAfBZgdQAzgQBIgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBhAHBMgJQivgGitgeQiQgZgqgDQhpgJhOAXQgyAQheA1QhcA2g0APQhWAZhngQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiGgCQi6gBhkgOQidgVhvg9IiShhQhYg6hDgPQhXgTh0AgQiGAuhCAVQiXAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEivAIQiWAHinA/QhbAijMBiQi7BZhuAlQj3BRlbAGQiaADhsgRQiNgXhmg8QgwgdhwhcQhhhRhCgfQiRhDiqAvQilAuhqCBQgcAig0BJQgwBAgsAeQg6AohIgGQhLgHgbg5QgphTBmh/QDUkJDwhqQCLg/CTgFQCcgHCCA8QBFAfBjBIQB9BbAkAWQBfA6BrAgQBqAgBuAEQDQAJEAheQBegiCCg6IDbhkQEFh1DJgiQEFgsDKBUQAzAVBRAwQBiA4AhARQDoBzE1gIQD1gGE7hXQC7gzBMgMQCWgWBvAlQBIAYBpBIQB8BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCaApQBKAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB0ACQBWABCFAbQDHApAXADQCAAUBfgMQCPgRAsACQBnAHAfBHQAUAugYA1QgXAygwAcIgJAGQA5AOAZAvQAYAtgUA2QgSA0guAfQgmAcg5ANQgpAIg/AFQjhARjggUQiRgMgqgBQhqAAhLAcQgxAUhZA8QhYA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhUALQhOALhvAxQihBHgXAIQhUAdhwAPQhDAJiFAJQi6ANhkgGQifgJhzg0IiZhVQhcgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhVgygrgSQiMg6iuAWQiUATijBLQhWAqjFBxQizBohrAtQjwBllaAhQiZAOhsgIQiPgMhrg0QgxgZh3hTQhohJhEgaQiWg4imA9QigA7hgCJQgZAkguBNQgqBDgrAiQg1ArhFAAIgDAAg");
	this.shape_4.setTransform(-233.2502,440.8806);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,204,0.4)").s().p("EhFfANaQhLAAghg3QgthQBaiHQC/kYDnh9QCGhJCSgRQCbgTCGAyQBHAZBpBAQCDBRAnATQBiAyBtAYQBtAYBugEQDPgJD5hxQBbgpB8hEQBHgnCNhOQD6iIDGgxQEBhBDPBEQA2ARBUApQBlAwAjAPQDwBfE0ggQDzgZE0huQC2hCBLgSQCTghByAcQBKASBuBAQCDBKAwATQCYA8DAgYQCBgQDhhFQEIhTBegUQDKgrCcAcQBMAPCWAsQCHAfBZgdQAygQBJgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBhAHBMgJQivgGitgeQiQgZgqgDQhpgJhOAXQgyAQheA1QhcA2g0APQhWAZhngQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiGgCQi7gBhjgOQiegVhug9IiThhQhXg6hDgPQhWgTh1AgQiGAuhDAVQiWAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEivAIQiWAHioA/QhaAijMBiQi7BZhuAlQj3BRlbAGQiaADhsgRQiNgXhmg8QgxgdhuhcQhihRhCgfQiRhDiqAvQimAuhqCBQgcAigzBJQgwBAgtAeQg5AohHgGQhMgHgbg5QgohTBkh/QDVkJDwhqQCMg/CSgFQCcgHCCA8QBEAfBkBIQB9BbAlAWQBeA6BrAgQBqAgBuAEQDQAJEBheQBdgiCCg6IDchkQEEh1DJgiQEGgsDJBUQAzAVBRAwQBiA4AhARQDoBzE1gIQD1gGE6hXQC7gzBNgMQCWgWBvAlQBHAYBqBIQB8BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCZApQBLAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB1ACQBVABCFAbQDHApAYADQB/AUBfgMQCPgRArACQBoAHAfBHQAUAugYA1QgXAygvAcIgKAGQA5AOAZAvQAXAtgTA2QgSA0guAfQgmAcg5ANQgoAIhAAFQjhARjggUQiRgMgqgBQhqAAhLAcQgxAUhZA8QhYA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhUALQhOALhvAxQihBHgXAIQhVAdhuAPQhDAJiGAJQi6ANhkgGQifgJhzg0IiahVQhbgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhUgygtgSQiKg6ivAWQiUATiiBLQhXAqjFBxQizBohqAtQjxBllaAhQiZAOhsgIQiOgMhrg0QgzgZh2hTQhnhJhFgaQiWg4ilA9QihA7hgCJQgZAkguBNQgrBDgqAiQg1ArhFAAIgEAAg");
	this.shape_5.setTransform(-69.4002,440.8806);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,204,0.4)").s().p("EhFeANaQhMAAggg3QgvhQBbiHQC/kYDmh9QCHhJCSgRQCbgTCGAyQBGAZBqBAQCDBRAnATQBiAyBtAYQBtAYBtgEQDQgJD5hxQBagpB9hEQBIgnCMhOQD6iIDGgxQEBhBDPBEQA2ARBUApQBmAwAiAPQDwBfE0ggQDzgZEzhuQC3hCBLgSQCTghByAcQBKASBtBAQCDBKAxATQCYA8DAgYQCCgQDghFQEHhTBfgUQDKgrCbAcQBMAPCYAsQCGAfBZgdQAzgQBIgzQBag/AcgOQBZgvB1gHQBVgFCHARIDhAaQBhAHBMgJQivgGitgeQiRgZgpgDQhqgJhNAXQgyAQheA1QhcA2g0APQhVAZhogQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiHgCQi5gBhkgOQidgVhvg9IiShhQhYg6hEgPQhVgTh1AgQiGAuhCAVQiXAvjFANQh4AIjsgDQiXgChPgKQh/gRhbguQgsgWhPg4QhRg4gqgWQiGhEivAIQiWAHinA/QhbAijMBiQi7BZhuAlQj3BRlbAGQibADhrgRQiNgXhmg8QgwgdhvhcQhihRhCgfQiRhDiqAvQilAuhqCBQgcAig0BJQgwBAgsAeQg6AohIgGQhLgHgbg5QgohTBlh/QDUkJDwhqQCLg/CTgFQCcgHCCA8QBFAfBjBIQB8BbAmAWQBeA6BqAgQBrAgBuAEQDPAJECheQBdgiCCg6IDbhkQEFh1DJgiQEGgsDJBUQAzAVBRAwQBhA4AiARQDoBzE1gIQD1gGE7hXQC7gzBMgMQCWgWBvAlQBIAYBpBIQB8BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCaApQBKAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB1ACQBUABCGAbQDHApAYADQB/AUBfgMQCOgRAtACQBnAHAfBHQAUAugYA1QgXAygwAcIgJAGQA5AOAZAvQAYAtgUA2QgSA0guAfQgmAcg5ANQgoAIhAAFQjhARjggUQiSgMgpgBQhqAAhLAcQgxAUhaA8QhXA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhVALQhMALhwAxQihBHgXAIQhUAdhwAPQhCAJiGAJQi6ANhkgGQifgJhzg0IiZhVQhcgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhUgygsgSQiMg6iuAWQiUATijBLQhWAqjFBxQizBohqAtQjxBllaAhQiZAOhsgIQiPgMhqg0QgygZh3hTQhohJhEgaQiWg4imA9QihA7hfCJQgaAkgtBNQgqBDgrAiQg1ArhFAAIgDAAg");
	this.shape_6.setTransform(99.6498,440.8806);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,204,0.4)").s().p("EhFeANaQhNAAgfg3QguhQBaiHQC/kYDnh9QCGhJCSgRQCbgTCGAyQBHAZBpBAQCDBRAmATQBjAyBtAYQBtAYBugEQDPgJD5hxQBbgpB8hEQBIgnCMhOQD6iIDGgxQEBhBDPBEQA2ARBUApQBlAwAjAPQDwBfE0ggQDzgZE0huQC1hCBMgSQCTghByAcQBKASBuBAQCDBKAwATQCYA8DAgYQCCgQDfhFQEJhTBegUQDKgrCcAcQBLAPCYAsQCGAfBZgdQAygQBJgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBhAHBMgJQiwgGisgeQiQgZgqgDQhpgJhOAXQgzAQhdA1QhdA2gzAPQhVAZhogQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhzAoQimA6gYAGQhWAXhwAGQhDAEiGgCQi6gBhkgOQidgVhvg9IiShhQhYg6hDgPQhWgTh1AgQiGAuhCAVQiXAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEiwAIQiVAHinA/QhbAijNBiQi7BZhtAlQj3BRlcAGQiZADhsgRQiNgXhmg8QgwgdhvhcQhjhRhCgfQiQhDirAvQikAuhqCBQgcAig1BJQgvBAgsAeQg6AohHgGQhMgHgcg5QgnhTBlh/QDUkJDvhqQCNg/CSgFQCcgHCCA8QBFAfBjBIQB9BbAlAWQBeA6BrAgQBqAgBuAEQDQAJEBheQBdgiCBg6IDdhkQEEh1DJgiQEGgsDIBUQA0AVBRAwQBiA4AhARQDoBzE1gIQD1gGE7hXQC7gzBMgMQCWgWBvAlQBHAYBqBIQB8BVAvAXQCSBHDCgIQCDgGDkg0QEOg+BfgNQDNgbCaApQBKAUCTA4QCDApBbgWQA0gMBMgtQBfg3AdgNQBdgnB1ACQBVABCFAbQDHApAYADQB/AUBegMQCQgRAsACQBnAHAfBHQATAugXA1QgXAygvAcIgKAGQA5AOAZAvQAYAtgUA2QgTA0gtAfQgmAcg5ANQgoAIhAAFQjhARjggUQiRgMgqgBQhqAAhLAcQgyAUhYA8QhZA9gzATQhSAfhogIQhJgFh4gfQiZgogqgHQhvgVhUALQhNALhwAxQihBHgYAIQhTAdhvAPQhDAJiHAJQi5ANhkgGQifgJhzg0IiZhVQhcgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhUgygsgSQiLg6ivAWQiUATiiBLQhYAqjEBxQi0BohpAtQjxBllaAhQiZAOhtgIQiNgMhrg0QgygZh3hTQhnhJhFgaQiWg4ilA9QihA7hgCJQgZAkgvBNQgpBDgrAiQg1ArhFAAIgDAAg");
	this.shape_7.setTransform(280.9498,440.8806);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,204,0.4)").s().p("EhFeANaQhMAAggg3QguhQBaiHQC/kYDnh9QCGhJCSgRQCbgTCGAyQBHAZBpBAQCDBRAnATQBiAyBtAYQBtAYBugEQDPgJD5hxQBbgpB8hEQBHgnCNhOQD6iIDGgxQEBhBDPBEQA2ARBUApQBlAwAjAPQDwBfE0ggQDzgZE0huQC2hCBLgSQCTghByAcQBKASBuBAQCDBKAwATQCXA8DBgYQCBgQDhhFQEIhTBegUQDKgrCcAcQBMAPCWAsQCHAfBZgdQAygQBJgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBgAHBNgJQivgGitgeQiQgZgqgDQhpgJhOAXQgyAQheA1QhcA2g0APQhWAZhngQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiGgCQi7gBhjgOQiegVhug9IiThhQhXg6hDgPQhWgTh1AgQiGAuhDAVQiWAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEivAIQiWAHioA/QhaAijMBiQi7BZhuAlQj3BRlbAGQiaADhsgRQiNgXhmg8QgxgdhuhcQhihRhCgfQiRhDiqAvQimAuhqCBQgcAigzBJQgwBAgtAeQg5AohHgGQhMgHgbg5QgohTBkh/QDVkJDwhqQCMg/CSgFQCcgHCCA8QBEAfBkBIQB9BbAlAWQBeA6BrAgQBqAgBuAEQDQAJEBheQBdgiCCg6IDchkQEEh1DJgiQEGgsDJBUQAzAVBRAwQBiA4AhARQDoBzE1gIQD1gGE6hXQC7gzBNgMQCWgWBvAlQBHAYBqBIQB8BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCZApQBLAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB1ACQBVABCFAbQDHApAYADQB/AUBfgMQCPgRArACQBoAHAeBHQAVAugYA1QgXAygvAcIgKAGQA5AOAZAvQAXAtgTA2QgSA0guAfQgmAcg5ANQgoAIhAAFQjhARjggUQiSgMgpgBQhqAAhLAcQgxAUhZA8QhYA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhUALQhOALhvAxQiiBHgWAIQhVAdhuAPQhDAJiGAJQi6ANhkgGQifgJhzg0IiahVQhbgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhUgygtgSQiKg6ivAWQiUATiiBLQhXAqjFBxQizBohqAtQjxBllaAhQiZAOhsgIQiOgMhrg0QgzgZh2hTQhnhJhFgaQiWg4ilA9QihA7hgCJQgZAkguBNQgrBDgqAiQg1ArhFAAIgDAAg");
	this.shape_8.setTransform(459.7998,440.8806);

	this.instance_9 = new lib.CachedBmp_9();
	this.instance_9.setTransform(769.45,206.7,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_8();
	this.instance_10.setTransform(781.7,174.8,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_7();
	this.instance_11.setTransform(-7.85,206.7,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006600").s().p("AhzOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgTgLQhGgGglgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAOguQgOgrAPgpQALghAcgXQALgJAMgHQAMgSANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAkAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAaQAeAIAaAWQAiAdAJAoQAdAHAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAJAGQAKgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgCAKQAMAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMQgOADgRACIgNAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgAr5hdIAQAOIgCgfIgOARg");
	this.shape_9.setTransform(613.684,508.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006600").s().p("AhzOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAkAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgAr5hdIAQAOIgCgfIgOARg");
	this.shape_10.setTransform(746.8864,508.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCFF33").s().p("APKFuQgSgIgNgRQgMgRgDgUQgFgiAVgbQAKgMAPgHQAPgHAQABQAHAAgBgEQAbACAVASQAVASAFAZQAFASgHAUQgKAigfAPQgOAIgRAAIgDAAQgPAAgOgGgApOFuQgSgIgNgRQgMgRgDgUQgFgiAVgbQAKgMAPgHQAPgHAQABQAHAAgBgEQAbACAVASQAVASAFAZQAFASgHAUQgKAigfAPQgOAIgRAAIgDAAQgPAAgOgGgAUQjbQgSgIgMgRQgMgRgDgUQgFgiAUgbQALgMAOgHQAQgHAPABQAIAAgCgEQAbACAVASQAWASAFAZQAEASgGAUQgLAigeAPQgPAIgRAAIgCAAQgQAAgOgGgAJ9jbQgSgIgMgRQgMgRgDgUQgFgiAUgbQALgMAOgHQAQgHAPABQAIAAgCgEQAbACAVASQAWASAFAZQAEASgGAUQgLAigeAPQgPAIgRAAIgCAAQgQAAgOgGgA1NjbQgSgIgNgRQgMgRgDgUQgFgiAVgbQAKgMAPgHQAPgHAQABQAHAAgBgEQAbACAVASQAVASAFAZQAFASgHAUQgKAigfAPQgOAIgRAAIgDAAQgPAAgOgGg");
	this.shape_11.setTransform(-114.482,518.1768);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#993399").s().p("AQdJKQhKgEgmgoQgHgHgFgJQghAVgpgBQgvgBgigdQgXgTgMgcQgNgcABgeQACgtAfgjIADgEQgMgNgJgRQgUgmAGgpQAEgZANgXQAUghAkgSQAhgQAiADQAEgZAOgVQASgcAegQQAegQAhAAQAbAAAZALQAkAQAWAkQAWAkgCAoIAAADQAjgEAjAPQArATAUAnQAVAngJAvQgIAugiAdQgLAKgNAHIAAABQARAggBAiQgCAjgTAfQgTAegfAQQgjASgvAAIgQAAgAO0DdQgPAHgKAMQgVAbAFAiQADAUAMARQANARASAIQAPAHARgBQARAAAOgIQAfgPAKgiQAHgUgFgSQgFgZgVgSQgVgSgbgCQABAEgHAAIgEAAQgOAAgNAGgAn7JKQhKgEgmgoQgHgHgFgJQghAVgpgBQgvgBgigdQgXgTgMgcQgNgcABgeQACgtAfgjIADgEQgMgNgJgRQgUgmAGgpQAEgZANgXQAUghAkgSQAhgQAiADQAEgZAOgVQASgcAegQQAegQAhAAQAbAAAZALQAkAQAWAkQAWAkgCAoIAAADQAjgEAjAPQArATAUAnQAVAngJAvQgIAugiAdQgLAKgNAHIAAABQARAggBAiQgCAjgTAfQgTAegfAQQgjASgvAAIgQAAgApkDdQgPAHgKAMQgVAbAFAiQADAUAMARQANARASAIQAPAHARgBQARAAAOgIQAfgPAKgiQAHgUgFgSQgFgZgVgSQgVgSgbgCQABAEgHAAIgEAAQgOAAgNAGgAVkAAQhKgDgmgoQgHgHgGgJQggAVgpgBQgwgBghgdQgXgTgNgcQgMgcABgeQABgtAfgjIAEgEQgNgNgIgRQgUgmAGgpQADgZAOgXQATghAlgSQAggQAiADQAFgZANgVQASgcAfgQQAegRAhABQAaAAAZALQAlAQAWAkQAWAkgDAoIAAADQAjgEAjAPQArATAVAnQAUAngIAvQgJAughAdQgMAKgNAHIAAABQARAggBAiQgBAjgUAfQgTAegeAQQgjARgvAAIgQAAgAT6lsQgOAHgLAMQgUAbAFAiQADAUAMARQAMARASAIQAPAHARgBQARAAAPgIQAegPALgiQAGgUgEgSQgFgZgWgSQgVgSgbgCQACAEgIAAIgEAAQgNAAgOAGgALRAAQhKgDgmgoQgHgHgGgJQggAVgpgBQgwgBghgdQgXgTgNgcQgMgcABgeQABgtAfgjIAEgEQgNgNgIgRQgUgmAGgpQADgZAOgXQATghAlgSQAggQAiADQAFgZANgVQASgcAfgQQAegRAhABQAaAAAZALQAlAQAWAkQAWAkgDAoIAAADQAjgEAjAPQArATAVAnQAUAngIAvQgJAughAdQgMAKgNAHIAAABQARAggBAiQgBAjgUAfQgTAegeAQQgjARgvAAIgQAAgAJnlsQgOAHgLAMQgUAbAFAiQADAUAMARQAMARASAIQAPAHARgBQARAAAPgIQAegPALgiQAGgUgEgSQgFgZgWgSQgVgSgbgCQACAEgIAAIgEAAQgNAAgOAGgAz6AAQhKgDgmgoQgHgHgFgJQghAVgpgBQgvgBgigdQgXgTgMgcQgNgcABgeQACgtAfgjIADgEQgMgNgJgRQgUgmAGgpQAEgZANgXQAUghAkgSQAhgQAiADQAEgZAOgVQASgcAegQQAegRAhABQAbAAAZALQAkAQAWAkQAWAkgCAoIAAADQAjgEAjAPQArATAUAnQAVAngJAvQgIAugiAdQgLAKgNAHIAAABQARAggBAiQgCAjgTAfQgTAegfAQQgjARgvAAIgQAAgA1jlsQgPAHgKAMQgVAbAFAiQADAUAMARQANARASAIQAPAHARgBQARAAAOgIQAfgPAKgiQAHgUgFgSQgFgZgVgSQgVgSgbgCQABAEgHAAIgEAAQgOAAgNAGg");
	this.shape_12.setTransform(-112.7697,518.4743);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("EB80AOWQhYAAgugDQhKgFg6gQIhFgVQgcgJgUgFQgaAIgfADQgiAEg9gEQgwgCgagGQgYgGgTgLQhGgGgmgdQgYgTgOgdQgFgMgDgMIgigeQjOi+gzi+QgThIgDhbQgCg6AGhrQACgzAHgdQAJgsAYgbQAZgdA6gXQBIgeATgMIARgNQgIgPgDgQQgFgUADgVQAEgvAlgjQAkgiAvgCIAJgBIAHAAQAPgfAIgVIAPguQgOgrAOgpQAMghAbgXQAMgJAMgGQALgTANgNQA0g1BygcQB5gdB8gDQAIgOALgMQASgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAiAkQAJAJAHALQAXgJAZAAQAsABAkAdQAlAdAKArIADASQAHgeAXgZQAjgnAvgDQAOgBADgCQApABAhAbQAeAHAaAWQAiAdAKApQAdAGAZAVIABABQAOgEAPABQAJAAACgEQAkABAgASIAKAGQAJgBAKAAQA0AEArAeQAmAaASAmIAMADQAQgEARAAQArAFAlAZQAlAZATAlQAUAngDAsQgCAagKAVQAGAMAEANQAKAhgIAjQAnAAAXAEIAMACIALAAQAHAAAAgEQAiACAeASQAeATARAdQARAeABAjQAAAegLAaIAFAFQAXAaAPAzQAXBNgMAxQADALACANQANAJAJAMQArA2gOBcIgCAKQALAsgMA5QgLA2gZAgQgQAUgWAOQADAOgBAOIgCAVQAOALALAOQAZAigDAsQgDAtgcAfQgfAgg3AMIgeAFIgNAMQgZAVgoAKQgaAHgvAEQizAPjhAFQiHADkNAAgEByvgBdIAPAOIgCgfIgNARgEhlKAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQizAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAiAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEhgwAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEh5JAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhbpAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEhl8AA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEiFIAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEiKigBdIAQAOIgCgfIgOARg");
	this.shape_13.setTransform(600.6114,508.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006600").s().p("EBzTAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEBpNgBdIAQAOIgCgfIgOARgEhboAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQizAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAiAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEhXOAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhvnAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhSHAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEhcaAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEh7mAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEiBAgBdIAQAOIgCgfIgOARg");
	this.shape_14.setTransform(661.5864,508.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006600").s().p("EBoTAOWQhYAAgugDQhKgFg6gQIhFgVQgcgJgUgFQgaAIgfADQgiAEg9gEQgwgCgagGQgYgGgTgLQhGgGgmgdQgYgTgOgdQgFgMgDgMIgigeQjOi+gzi+QgThIgDhbQgCg6AGhrQACgzAHgdQAJgsAYgbQAZgdA6gXQBIgeATgMIARgNQgIgPgDgQQgFgUADgVQAEgvAlgjQAkgiAvgCIAJgBIAHAAQAPgfAIgVIAPguQgOgrAOgpQAMghAbgXQAMgJAMgGQALgTANgNQA0g1BygcQB5gdB8gDQAIgOALgMQASgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAiAkQAJAJAHALQAXgJAZAAQAsABAkAdQAlAdAKArIADASQAHgeAXgZQAjgnAvgDQAOgBADgCQApABAhAbQAeAHAaAWQAiAdAKApQAdAGAZAVIABABQAOgEAPABQAJAAACgEQAkABAgASIAKAGQAJgBAKAAQA0AEArAeQAmAaASAmIAMADQAQgEARAAQArAFAlAZQAlAZATAlQAUAngDAsQgCAagKAVQAGAMAEANQAKAhgIAjQAnAAAXAEIAMACIALAAQAHAAAAgEQAiACAeASQAeATARAdQARAeABAjQAAAegLAaIAFAFQAXAaAPAzQAXBNgMAxQADALACANQANAJAJAMQArA2gOBcIgCAKQALAsgMA5QgLA2gZAgQgQAUgWAOQADAOgBAOIgCAVQAOALALAOQAZAigDAsQgDAtgcAfQgfAgg3AMIgeAFIgNAMQgZAVgoAKQgaAHgvAEQizAPjhAFQiHADkNAAgEBeOgBdIAPAOIgCgfIgNARgEhQpAOWQhYAAgugDQhKgFg6gQIhFgVQgcgJgUgFQgaAIgfADQgiAEg9gEQgpgCgZgFQgVAOgeAHQgaAHgvAEQizAPjhAFQiHADkNAAIjVAAQhYAAgugDQhKgFg6gQIhFgVQgcgJgUgFQgaAIgfADQgiAEg9gEQgwgCgagGQgYgGgTgLQhGgGgmgdQgYgTgOgdQgFgMgDgMIgigeQjOi+gzi+QgThIgDhbQgCg6AGhrQACgzAHgdQAJgsAYgbQAZgdA6gXQBIgeATgMIARgNQgIgPgDgQQgFgUADgVQAEgvAlgjQAkgiAvgCIAJgBIAHAAQAPgfAIgVIAPguQgOgrAOgpQAMghAbgXQAMgJAMgGQALgTANgNQA0g1BygcQB5gdB8gDQAIgOALgMQASgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAiAkQAJAJAHALQAXgJAZAAQAsABAkAdQAlAdAKArIADASQAHgeAXgZQAjgnAvgDQAOgBADgCQApABAhAbQAeAHAaAWQAiAdAKApQAdAGAZAVIABABQAOgEAPABQAJAAACgEQAkABAgASIAKAGQAJgBAKAAQA0AEArAeQAmAaASAmIAMADQAQgEARAAQArAFAlAZQAiAWATAhIAFgOIAPguQgOgrAOgpQAMghAbgXQAMgJAMgGQALgTANgNQA0g1BygcQB5gdB8gDQAIgOALgMQASgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAiAkQAJAJAHALQAXgJAZAAQAsABAkAdQAlAdAKArIADASQAHgeAXgZQAjgnAvgDQAOgBADgCQApABAhAbQAeAHAaAWQAiAdAKApQAdAGAZAVIABABQAOgEAPABQAJAAACgEQAkABAgASIAKAGQAJgBAKAAQA0AEArAeQAmAaASAmIAMADQAQgEARAAQArAFAlAZQAlAZATAlQAUAngDAsQgCAagKAVQAGAMAEANQAKAhgIAjQAnAAAXAEIAMACIALAAQAHAAAAgEQAiACAeASQAeATARAdQARAeABAjQAAAegLAaIAFAFQAXAaAPAzQAXBNgMAxQADALACANQANAJAJAMQArA2gOBcIgCAKQALAsgMA5QgLA2gZAgQgQAUgWAOQADAOgBAOIgCAVQAOALALAOQAZAigDAsQgDAtgcAfQgfAgg3AMIgeAFIgNAMQgZAVgoAKQgaAHgvAEQizAPjhAFQiHADkNAAgEhMOAKAQAmAoBKADQA5AEApgVQAegQATgfQAUgeABgjQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAdAXATQAhAcAwABQApABAggUQAGAIAHAIgEhknAKAQAmAoBKADQA5AEApgVQAegQATgfQAUgeABgjQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAdAXATQAhAcAwABQApABAggUQAGAIAHAIgEhHIAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhRbAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhwmAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEh2AgBdIAPAOIgCgfIgNARg");
	this.shape_15.setTransform(731.9364,508.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006600").s().p("EBdbAOWQhYAAgugDQhKgFg6gQIhFgVQgcgJgUgFQgaAIgfADQgiAEg9gEQgwgCgagGQgYgGgTgLQhGgGgmgdQgYgTgOgdQgFgMgDgMIgigeQjOi+gzi+QgThIgDhbQgCg6AGhrQACgzAHgdQAJgsAYgbQAZgdA6gXQBIgeATgMIARgNQgIgPgDgQQgFgUADgVQAEgvAlgjQAkgiAvgCIAJgBIAHAAQAPgfAIgVIAPguQgOgrAOgpQAMghAbgXQAMgJAMgGQALgTANgNQA0g1BygcQB5gdB8gDQAIgOALgMQASgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAiAkQAJAJAHALQAXgJAZAAQAsABAkAdQAlAdAKArIADASQAHgeAXgZQAjgnAvgDQAOgBADgCQApABAhAbQAeAHAaAWQAiAdAKApQAdAGAZAVIABABQAOgEAPABQAJAAACgEQAkABAgASIAKAGQAJgBAKAAQA0AEArAeQAmAaASAmIAMADQAQgEARAAQArAFAlAZQAlAZATAlQAUAngDAsQgCAagKAVQAGAMAEANQAKAhgIAjQAnAAAXAEIAMACIALAAQAHAAAAgEQAiACAeASQAeATARAdQARAeABAjQAAAegLAaIAFAFQAXAaAPAzQAXBNgMAxQADALACANQANAJAJAMQArA2gOBcIgCAKQALAsgMA5QgLA2gZAgQgQAUgWAOQADAOgBAOIgCAVQAOALALAOQAZAigDAsQgDAtgcAfQgfAgg3AMIgeAFIgNAMQgZAVgoAKQgaAHgvAEQizAPjhAFQiHADkNAAgEBTWgBdIAPAOIgCgfIgNARgEhFxAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQizAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAiAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEhBXAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhZwAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEg8QAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEhGjAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEhlvAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhrJgBdIAQAOIgCgfIgOARg");
	this.shape_16.setTransform(801.5114,508.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006600").s().p("EBPRAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEBFLgBdIAQAOIgCgfIgOARgEg3mAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgZgFQgVAOgdAHQgaAHgwAEQizAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAiAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEgzMAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhLlAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEguFAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEg4YAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEhXkAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhc+gBdIAQAOIgCgfIgOARg");
	this.shape_17.setTransform(892.1864,508.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006600").s().p("EBIGAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEA+AgBdIAQAOIgCgfIgOARgEgwbAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQizAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAiAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEgsBAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhEaAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEgm6AA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEgxNAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEhQZAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhVzgBdIAQAOIgCgfIgOARg");
	this.shape_18.setTransform(938.0864,508.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006600").s().p("EA7TAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEAxNgBdIAQAOIgCgfIgOARgEgjoAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQizAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAiAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgA/OKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEg3nAKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgA6HA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEgkaAA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEhDmAA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEhJAgBdIAQAOIgCgfIgOARg");
	this.shape_19.setTransform(1019.9864,508.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006600").s().p("EAupAOWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgEAkjgBdIAQAOIgCgfIgOARgA2+OWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQizAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAiAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgAykKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgEgq9AKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgAtdA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgA3wA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgEg28AA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgEg8WgBdIAQAOIgCgfIgOARg");
	this.shape_20.setTransform(1100.9864,508.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006600").s().p("AL1OWQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgpgCgYgFQgWAOgdAHQgaAHgwAEQiyAPjgAFQiHADkOAAIjUAAQhYAAgvgDQhKgFg6gQIhFgVQgbgJgVgFQgaAIgfADQgiAEg9gEQgvgCgagGQgZgGgSgLQhGgGgmgdQgZgTgNgdQgGgMgDgMIghgeQjOi+gzi+QgThIgDhbQgCg6AFhrQADgzAGgdQAKgsAXgbQAZgdA6gXQBJgeATgMIARgNQgIgPgEgQQgEgUACgVQAFgvAkgjQAlgiAvgCIAIgBIAHAAQAQgfAIgVIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAhAWATAhIAGgOIAPguQgPgrAPgpQALghAcgXQALgJAMgGQAMgTANgNQA0g1BygcQB4gdB9gDQAHgOAMgMQARgTAXgKQAYgKAYACQAEAAADgCQAEgCgCgDQA7AJAjAkQAJAJAGALQAXgJAZAAQAsABAlAdQAkAdAKArIADASQAIgeAXgZQAignAwgDQANgBAEgCQApABAhAbQAeAHAaAWQAiAdAKApQAcAGAZAVIABABQAOgEAPABQAKAAABgEQAkABAhASIAKAGQAJgBAKAAQAzAEArAeQAmAaASAmIAMADQAQgEARAAQAsAFAkAZQAmAZATAlQAUAngEAsQgCAagJAVQAGAMAEANQAKAhgIAjQAmAAAXAEIANACIAKAAQAIAAgBgEQAiACAfASQAeATARAdQARAeAAAjQABAegMAaIAGAFQAXAaAPAzQAXBNgMAxQADALABANQANAJAKAMQArA2gPBcIgBAKQALAsgMA5QgMA2gZAgQgPAUgWAOQACAOAAAOIgCAVQAOALAKAOQAZAigDAsQgCAtgdAfQgeAgg3AMIgeAFIgOAMQgZAVgnAKQgaAHgwAEQizAPjgAFQiHADkOAAgAQPKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgAoJKAQAmAoBKADQA6AEAogVQAfgQATgfQATgeACgjQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAdAXATQAiAcAvABQApABAhgUQAFAIAHAIgAVWA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgALDA2QAmAoBKADQA5AEApgVQAegQATgfQAUgeABgiQABgjgRggIAAAAQANgHAMgLQAhgdAJguQAIgugUgnQgVgngrgTQgjgQgjAFIAAgEQADgogWgkQgWgkglgQQgZgLgaAAQghAAgeAQQgfAQgSAcQgNAWgFAYQgigCggAQQglARgTAhQgOAYgDAYQgGApAUAnQAIARANANIgEADQgfAkgBAsQgBAeAMAcQANAcAXATQAhAcAwABQApABAggUQAGAIAHAIgA0IA2QAmAoBKADQA6AEAogVQAfgQATgfQATgeACgiQABgjgRggIAAAAQANgHALgLQAigdAIguQAJgugVgnQgUgngrgTQgjgQgjAFIAAgEQACgogWgkQgWgkgkgQQgZgLgbAAQghAAgeAQQgeAQgSAcQgOAWgEAYQgigCghAQQgkARgUAhQgNAYgEAYQgGApAUAnQAJARAMANIgDADQgfAkgCAsQgBAeANAcQAMAcAXATQAiAcAvABQApABAhgUQAFAIAHAIgA5ihdIAQAOIgCgfIgOARg");
	this.shape_21.setTransform(1126.5864,508.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,204,0.4)").s().p("EhFfANaQhLAAghg3QgthQBaiHQC/kYDnh9QCGhJCSgRQCbgTCGAyQBGAZBqBAQCDBRAnATQBiAyBtAYQBtAYBugEQDPgJD5hxQBbgpB8hEQBIgnCMhOQD6iIDGgxQEBhBDPBEQA2ARBUApQBmAwAiAPQDwBfE0ggQDzgZEzhuQC3hCBLgSQCTghByAcQBKASBuBAQCDBKAwATQCYA8DAgYQCBgQDhhFQEHhTBfgUQDKgrCcAcQBMAPCWAsQCGAfBagdQAzgQBIgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBgAHBNgJQivgGitgeQiQgZgqgDQhpgJhOAXQgyAQheA1QhcA2g0APQhVAZhogQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiHgCQi6gBhjgOQiegVhug9IiThhQhXg6hEgPQhVgTh1AgQiGAuhDAVQiWAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEivAIQiWAHioA/QhaAijMBiQi7BZhuAlQj3BRlbAGQibADhrgRQiNgXhmg8QgwgdhvhcQhihRhCgfQiShDipAvQimAuhpCBQgcAig0BJQgwBAgtAeQg6AohGgGQhMgHgbg5QgohTBkh/QDVkJDwhqQCLg/CTgFQCcgHCCA8QBFAfBjBIQB8BbAmAWQBeA6BqAgQBrAgBuAEQDQAJEBheQBdgiCCg6IDchkQEEh1DIgiQEHgsDJBUQAzAVBRAwQBhA4AiARQDoBzE1gIQD1gGE6hXQC8gzBMgMQCWgWBvAlQBIAYBoBIQB9BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCZApQBLAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBcgnB2ACQBVABCFAbQDHApAYADQB/AUBfgMQCOgRAsACQBoAHAeBHQAVAugYA1QgXAygvAcIgKAGQA5AOAZAvQAYAtgUA2QgSA0guAfQgmAcg5ANQgoAIhBAFQjgARjggUQiSgMgpgBQhqAAhLAcQgxAUhZA8QhYA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhUALQhNALhwAxQiiBHgWAIQhUAdhvAPQhDAJiGAJQi6ANhkgGQifgJhzg0IiZhVQhcgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgugThTgxQhUgygtgSQiKg6ivAWQiUATiiBLQhXAqjFBxQizBohqAtQjxBllaAhQiZAOhsgIQiOgMhrg0QgygZh3hTQhnhJhFgaQiWg4ilA9QiiA7hfCJQgaAkgtBNQgqBDgrAiQg1ArhFAAIgEAAg");
	this.shape_22.setTransform(-460.3502,491.2306);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,204,0.4)").s().p("EhFfANaQhLAAghg3QgthQBaiHQC/kYDnh9QCGhJCSgRQCbgTCGAyQBGAZBqBAQCDBRAnATQBiAyBtAYQBtAYBugEQDPgJD5hxQBbgpB8hEQBIgnCMhOQD6iIDGgxQEBhBDPBEQA2ARBUApQBlAwAjAPQDwBfE0ggQDzgZE0huQC2hCBLgSQCTghByAcQBKASBuBAQCDBKAwATQCYA8DAgYQCBgQDhhFQEHhTBfgUQDKgrCcAcQBMAPCWAsQCGAfBagdQAzgQBIgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBgAHBNgJQivgGitgeQiQgZgqgDQhpgJhOAXQgyAQheA1QhcA2g0APQhVAZhogQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiGgCQi7gBhjgOQiegVhug9IiThhQhXg6hDgPQhWgTh1AgQiGAuhDAVQiWAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEivAIQiWAHioA/QhaAijMBiQi7BZhuAlQj3BRlbAGQibADhrgRQiNgXhmg8QgwgdhvhcQhihRhCgfQiShDipAvQimAuhpCBQgcAig0BJQgwBAgtAeQg6AohGgGQhMgHgbg5QgohTBkh/QDVkJDwhqQCLg/CTgFQCcgHCCA8QBFAfBjBIQB8BbAmAWQBeA6BqAgQBrAgBuAEQDQAJEBheQBdgiCCg6IDchkQEEh1DIgiQEHgsDJBUQAzAVBRAwQBhA4AiARQDoBzE1gIQD1gGE6hXQC8gzBMgMQCWgWBvAlQBIAYBoBIQB9BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCZApQBLAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB1ACQBVABCFAbQDHApAYADQB/AUBfgMQCOgRAsACQBoAHAeBHQAVAugYA1QgXAygvAcIgKAGQA5AOAZAvQAYAtgUA2QgSA0guAfQgmAcg5ANQgoAIhBAFQjgARjggUQiSgMgpgBQhqAAhLAcQgxAUhZA8QhYA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhUALQhNALhwAxQiiBHgWAIQhUAdhvAPQhDAJiGAJQi6ANhkgGQifgJhzg0IiZhVQhcgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgugThTgxQhUgygtgSQiKg6ivAWQiUATiiBLQhXAqjFBxQizBohqAtQjxBllaAhQiZAOhsgIQiOgMhrg0QgygZh3hTQhnhJhFgaQiWg4ilA9QiiA7hfCJQgaAkgtBNQgqBDgrAiQg1ArhFAAIgEAAg");
	this.shape_23.setTransform(-147.1502,491.2306);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,204,0.4)").s().p("EhFeANaQhMAAggg3QguhQBaiHQC/kYDnh9QCGhJCSgRQCbgTCGAyQBHAZBpBAQCDBRAnATQBiAyBtAYQBtAYBugEQDPgJD5hxQBbgpB8hEQBHgnCNhOQD6iIDGgxQEBhBDPBEQA1ARBVApQBlAwAjAPQDwBfE0ggQDzgZE0huQC2hCBLgSQCTghByAcQBKASBuBAQCDBKAwATQCYA8DAgYQCCgQDfhFQEJhTBegUQDKgrCcAcQBMAPCXAsQCGAfBZgdQAygQBJgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBhAHBMgJQiwgGisgeQiQgZgqgDQhpgJhOAXQgzAQhdA1QhdA2gzAPQhVAZhogQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gYAGQhWAXhwAGQhDAEiGgCQi7gBhjgOQiegVhug9IiShhQhYg6hDgPQhWgTh1AgQiGAuhCAVQiXAvjFANQh5AIjqgDQiYgChPgKQh/gRhbguQgsgWhPg4QhRg4gqgWQiGhEiwAIQiVAHinA/QhbAijNBiQi6BZhuAlQj3BRlcAGQiZADhsgRQiNgXhmg8QgxgdhuhcQhjhRhCgfQiQhDirAvQikAuhrCBQgcAig0BJQgvBAgtAeQg5AohHgGQhMgHgcg5QgnhTBkh/QDVkJDvhqQCNg/CSgFQCcgHCCA8QBFAfBjBIQB9BbAlAWQBeA6BrAgQBqAgBuAEQDQAJEBheQBdgiCBg6IDdhkQEEh1DJgiQEGgsDJBUQAzAVBRAwQBiA4AhARQDoBzE1gIQD1gGE7hXQC6gzBNgMQCWgWBvAlQBHAYBqBIQB8BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BfgNQDNgbCaApQBKAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB1ACQBVABCFAbQDHApAYADQB/AUBegMQCQgRAsACQBnAHAfBHQAUAugYA1QgXAygvAcIgKAGQA5AOAZAvQAXAtgTA2QgTA0gtAfQgmAcg5ANQgoAIhAAFQjhARjggUQiRgMgqgBQhqAAhLAcQgxAUhZA8QhZA9gyATQhTAfhogIQhJgFh4gfQiZgogqgHQhvgVhUALQhNALhwAxQihBHgXAIQhVAdhuAPQhEAJiFAJQi6ANhkgGQifgJhzg0IiahVQhbgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhUgygsgSQiLg6ivAWQiUATiiBLQhYAqjEBxQizBohqAtQjxBllaAhQiZAOhtgIQiNgMhrg0QgzgZh2hTQhnhJhFgaQiWg4ilA9QihA7hgCJQgZAkgvBNQgpBDgrAiQg1ArhFAAIgDAAg");
	this.shape_24.setTransform(68.6498,491.2306);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,204,0.4)").s().p("EhFeANaQhMAAggg3QgvhQBbiHQC/kYDmh9QCHhJCSgRQCbgTCGAyQBGAZBqBAQCDBRAnATQBiAyBtAYQBtAYBtgEQDQgJD5hxQBagpB9hEQBIgnCMhOQD6iIDFgxQEChBDPBEQA2ARBUApQBmAwAhAPQDxBfE0ggQDzgZE0huQC1hCBMgSQCTghByAcQBJASBvBAQCCBKAxATQCYA8DAgYQCCgQDghFQEIhTBegUQDJgrCdAcQBMAPCXAsQCGAfBZgdQAzgQBIgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBhAHBMgJQivgGitgeQiQgZgqgDQhqgJhNAXQgyAQheA1QhcA2g0APQhWAZhngQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiGgCQi6gBhkgOQidgVhvg9IiShhQhYg6hDgPQhXgTh0AgQiGAuhCAVQiXAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEivAIQiWAHinA/QhbAijMBiQi7BZhuAlQj3BRlbAGQiaADhsgRQiNgXhmg8QgwgdhvhcQhihRhCgfQiRhDiqAvQilAuhqCBQgcAig0BJQgwBAgsAeQg6AohIgGQhLgHgbg5QgphTBmh/QDUkJDwhqQCLg/CTgFQCcgHCCA8QBFAfBjBIQB8BbAmAWQBeA6BrAgQBqAgBuAEQDPAJECheQBdgiCCg6IDbhkQEFh1DJgiQEFgsDKBUQAzAVBRAwQBiA4AhARQDoBzE1gIQD1gGE7hXQC7gzBMgMQCWgWBvAlQBIAYBpBIQB8BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCaApQBKAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB0ACQBWABCFAbQDHApAXADQCAAUBfgMQCPgRAsACQBnAHAfBHQAUAugYA1QgXAygwAcIgJAGQA5AOAZAvQAYAtgUA2QgSA0guAfQgmAcg5ANQgpAIg/AFQjhARjggUQiRgMgqgBQhqAAhLAcQgxAUhZA8QhYA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhUALQhOALhvAxQihBHgXAIQhUAdhwAPQhCAJiGAJQi6ANhkgGQifgJhzg0IiZhVQhcgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhVgygrgSQiMg6iuAWQiUATijBLQhWAqjFBxQizBohqAtQjxBllaAhQiZAOhsgIQiPgMhrg0QgxgZh3hTQhohJhEgaQiWg4imA9QigA7hgCJQgZAkguBNQgqBDgrAiQg1ArhFAAIgDAAg");
	this.shape_25.setTransform(155.5498,491.2306);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("A6RNfQgdgLgFgYIAAgGQh6ADh6hCQiFhIheiBQhmiMAIh4QAFhIAshDQAqg/BCgrQBphFCzgZQBHgKAZgHQA1gPAegeQApgpAIhOIAEiLQAHiPBVh7QBUh8CDg6QBJggBhgPQBHgLBqgCQBCgCApAEQA7AEAtAPQBaAeBvBnQCRCGAqAcQCIhdBkg0QCFhFB6gbQBJgQBdgFQA3gEBwgBQD5gCCJAXQDTAkCDBrQBXBHAZBTQAOAwgKAwQgLAzghAgQBVAPCAgEQCPgHBHABQENABCACAQBEBDAmByQAZBIAXCLQALBEAAAmQAAApgLAhQAOAIAJANQAKAPAAAQQABAUgRAZIgfAqQgJAQgPAkQgPAegUALQgVAMgegGQgPgCgIgHIgCgCQgxANg6AHQg1AFhnACIiMADQg1ABgcAEQgtAFggAPIgmAVQgXANgPAGQgTAIggAGIg0AKQgsAKhdAvQhWAsg0AIQgcAEg6gBIjjgDQgfAQgTgNIgFgEIgYgBQgYAAgPgEQgVgFgKgOQgFgHgBgIIqeAkQjdAMhxADQheADi9ADIu6APIgEAAQgeAAgWgHg");
	this.shape_26.setTransform(187.518,105.304);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,204,0.4)").s().p("EhFeANaQhMAAggg3QgvhQBbiHQC/kYDmh9QCHhJCSgRQCbgTCGAyQBGAZBqBAQCDBRAnATQBiAyBtAYQBtAYBtgEQDQgJD5hxQBagpB9hEQBIgnCMhOQD6iIDFgxQEChBDPBEQA2ARBUApQBmAwAhAPQDxBfE0ggQDzgZE0huQC1hCBMgSQCTghByAcQBJASBvBAQCCBKAxATQCYA8DAgYQCCgQDghFQEIhTBegUQDKgrCcAcQBMAPCXAsQCGAfBZgdQAzgQBIgzQBag/AcgOQBagvB0gHQBVgFCHARIDhAaQBhAHBMgJQivgGiugeQiPgZgqgDQhqgJhNAXQgyAQheA1QhcA2g1APQhVAZhngQQhIgMh1goQiWgzgpgLQhtgehVAFQhOAFhyAoQinA6gXAGQhXAXhwAGQhDAEiGgCQi6gBhkgOQidgVhvg9IiShhQhYg6hDgPQhXgTh0AgQiGAuhCAVQiXAvjFANQh4AIjrgDQiYgChPgKQh/gRhbguQgsgWhPg4QhQg4grgWQiGhEivAIQiWAHinA/QhbAijMBiQi7BZhuAlQj3BRlbAGQiaADhsgRQiNgXhmg8QgwgdhvhcQhihRhCgfQiRhDiqAvQilAuhqCBQgcAig0BJQgwBAgsAeQg6AohIgGQhLgHgbg5QgphTBmh/QDUkJDwhqQCLg/CTgFQCcgHCCA8QBFAfBjBIQB8BbAmAWQBeA6BrAgQBqAgBuAEQDPAJECheQBdgiCCg6IDbhkQEFh1DJgiQEFgsDKBUQAzAVBRAwQBiA4AhARQDoBzE1gIQD1gGE7hXQC7gzBMgMQCWgWBvAlQBIAYBpBIQB8BVAvAXQCTBHDBgIQCDgGDkg0QEOg+BggNQDMgbCaApQBKAUCTA4QCDApBcgWQA0gMBLgtQBfg3AdgNQBdgnB0ACQBWABCFAbQDHApAXADQCAAUBfgMQCPgRAsACQBnAHAfBHQAUAugZA1QgWAygwAcIgJAGQA5AOAZAvQAYAtgUA2QgSA0guAfQgmAcg5ANQgpAIg/AFQjhARjggUQiRgMgqgBQhqAAhLAcQgxAUhZA8QhYA9gzATQhTAfhogIQhJgFh3gfQiagogqgHQhvgVhUALQhOALhvAxQihBHgXAIQhUAdhwAPQhDAJiFAJQi6ANhkgGQifgJhzg0IiZhVQhcgzhFgJQhXgMhyAoIjCBTQiTA7jDAcQh4ASjqAPQiXAJhQgDQiAgHhegnQgtgThUgxQhVgygrgSQiMg6iuAWQiUATijBLQhWAqjFBxQizBohqAtQjxBllaAhQiZAOhsgIQiPgMhrg0QgxgZh3hTQhohJhEgaQiWg4imA9QigA7hgCJQgZAkguBNQgqBDgrAiQg1ArhFAAIgDAAg");
	this.shape_27.setTransform(223.9498,491.2306);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("A6RNfQgdgLgFgYIAAgGQh6ADh6hCQiFhIheiBQhmiMAIh4QAFhIAshDQAqg/BCgrQBphFCzgZQBHgKAZgHQA1gPAegeQApgpAIhOIAEiLQAHiPBVh7QBUh8CDg6QBJggBhgPQBHgLBqgCQBCgCApAEQA7AEAtAPQBaAeBvBnQCRCGAqAcQCIhdBkg0QCFhFB6gbQBJgQBdgFQA3gEBwgBQD5gCCJAXQDTAkCDBrQBXBHAZBTQAOAwgKAwQgLAzghAgQBVAPCAgEQCPgHBHABQENABCACAQBEBDAmByQAZBIAXCLQALBEAAAmQAAApgLAhQAOAIAJANQAKAPAAAQQABAUgRAZIgfAqQgJAQgPAkQgPAegUALQgVAMgegGQgPgCgIgHIgCgCQgxANg6AHQg1AFhnACIiMADQg1ABgcAEQgtAFggAPIgmAVQgXANgPAGQgTAIggAGIg0AKQgsAKhdAvQhWAsg0AIQgcAEg6gBIjjgDQgfAQgTgNIgFgEIgYgBQgYAAgPgEQgVgFgKgOQgFgHgBgIIqeAkQjdAMhxADQheADi9ADIu6APIgEAAQgfAAgVgHg");
	this.shape_28.setTransform(658.618,105.304);

	this.instance_12 = new lib.donut_shop();
	this.instance_12.setTransform(-325.95,162.45,1,1,0,0,0,810.1,-219.5);

	this.instance_13 = new lib.happyeyes();
	this.instance_13.setTransform(981.75,361.55,0.803,0.8028,0,0,0,-110.7,-14);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("Aj1nlQg7gXgWgeQgOgTAAgUQAAg3BggmQBggmCJAAQCHAABgAmQBhAmAAA3QAAAUgOATQgWAbg0AXQgEABgFACQhgAmiHAAQiJAAhggmgAmrk9QgJgJgJgIQgGgGgFgFQh/h+gmikQgPhEAAhKQAAg0AHgxQAZihBsh/QATgWAVgVQC0izD/AAQD+AAC0CzQC0CzAAD9QAAD+i0CyQgFAFgFAFQAUAYASAcQAtBCAjBIQBpDfAAEdQAABsgPBkQgNCUgGB6QgGCOBBAAQBCAAAsixQAsiyAAjvQAAjvgviOQguiMhRAFQg9AEASB/QAVBGAMBLQAIBtgDBpQgCBOgIBMQgCAbgDAbQgZCihBCLQgjBIgtBDQgyBHg2A1QgKAKgLAJQh/BvibAMQgQABgRAAQgCAAgEAAQiyAAiPh8QhDg6g7hVQhyilgrjRQgbiBAAiRQAAhwAQhmQAMhLAUhGQAuicBaiDQADgEAEgFQAJgNAJgMQBUhuBig6ApMAEQgGAngNAzQgHAbgGAcQgrC7AfC1QAdC0AJCQQAJCOhCAAQgxAAgmhnAIDGiQAAEwiTDYQiSDXjQAAQjOAAiTjXQhbiFgiioQgWhnAAh0QAAigApiHQAkh7BGhmQCTjXDOAAQDQAACSDXQCTDXAAExgAr+MOQgmiqAAjfQAAjvAuiOQAviMBQAFQA+AEgTB/AABT+QgBAPgJANQgVAbg2AWQhXAih6AAQh7AAhXgiQg2gWgUgbQgNgQAAgSQAAgyBXgiQBLgeBmgEADlnoQA4AgA0AxQAiAgAgAoAE8SCQAHgBAHAAQB7AABWAjQBXAiAAAyQAAASgMAQQgVAbg2AWQhWAih7AAQh7AAhXgiQg2gWgUgbQgKgOgCgP");
	this.shape_29.setTransform(985.4,457.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0099FF").s().p("AABD7QgigQghgeQgxADglgYQgdgTgQggQgPggAEgiQAEgiAWgdIAGgFQgHgnADgoQADhBAgghQATgSAcgKQATgfAhgQQAugWAzARQAuAPAYAjIAHALQAQAcAEAqIABASIABA5IAAAbIAJAOQAmA1AJAnQAHAfgGAgQgFAggRAaQgSAagbARQgbARgfADIgOABQghAAgigPg");
	this.shape_30.setTransform(896.6129,556.3523);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC99CC").s().p("AAAU2QixAAiPh9QhDg6g7hVQhyilgsjQQgbiBAAiRQAAhwAQhnQAGgbAIgbQANgzAGgnQAuidBaiDIAGgIIATgaQBThuBjg6IAAAAQBhAnCIAAQCHAABhgnIAIgDQA1gWAVgcQAOgSAAgVQAAg2hggnQhhgmiHAAQiIAAhhAmQhgAnAAA2QAAAVAOASQAXAeA7AXQhjA6hTBuIgTgRIgLgLQh/h+glikQgQhEAAhKQAAg0AIgxQAZigBrh/QATgXAVgVQC1izD+AAQD+AAC0CzQC1CzAAD9QAAD+i1CyIgKALQAUAYASAbQAuBCAiBJQBqDeAAEeQgCBNgIBMIgGA2QgYCjhCCLQgiBIguBCQgxBHg3A1IgUATQh/BvibANIghABIgHAAgAlOguQhGBlgkB7QgoCHAACgQAAB1AVBnQAiCnBbCFQCTDYDOAAQDQAACSjYQCTjXAAkxQAAkxiTjWQiSjYjQAAQjOAAiTDYgAFWlgQAiAhAgAoQgggogighQgzgxg5ggQA5AgAzAxg");
	this.shape_31.setTransform(984.875,451.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AB5P2Qg3gVgTgbQgLgNgCgPQCcgOB/huIANAAQB7AABWAiQBYAjgBAxQAAARgMARQgUAbg3AVQhWAjh7AAQh7AAhWgjgAn3P2Qg2gVgUgbQgMgRAAgRQgBgxBXgjQBLgdBmgFQCQB9CyAAIAGAAQgCAOgJANQgVAbg2AVQhXAjh6AAQh7AAhXgjgAJQH0QAFh5AOiUQAPhkAAhsQADhogIhtQgMhLgUhGQgTiAA+gEQBQgFAvCOQAuCNAADuQAADvgsCyQgsCyhBAAQhCAAAGiQgAriIcIgBgRQgEgqgQgcIgHgLQgmiqAAjfQAAjuAuiNQAviOBQAFQA+AEgTCAQgUBGgMBLQAMhLAUhGQgFAngNAzQgIAcgGAbQgrC8AfCzQAeC0AICPQAJCQhCAAQgxAAgmhogAJpCxQAHhMAChOQAABsgPBkIAGg2gAJyAXIAAAAgAj0s5IgBAAQg7gYgWgdQgOgTAAgUQAAg3BggmQBggmCJAAQCHAABhAmQBgAmAAA3QAAAUgOATQgWAbg0AXIgIADQhhAniHAAQiJAAhggng");
	this.shape_32.setTransform(985.4,491.3);

	this.instance_14 = new lib.CachedBmp_11();
	this.instance_14.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_24();
	this.instance_15.setTransform(982.55,153.65,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_13();
	this.instance_16.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_15();
	this.instance_17.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_17();
	this.instance_18.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_19();
	this.instance_19.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_21();
	this.instance_20.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_23();
	this.instance_21.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_25();
	this.instance_22.setTransform(1065.9,153.65,0.5,0.5);

	this.instance_23 = new lib.fullpingo();
	this.instance_23.setTransform(402.8,469.5,0.9999,0.9999,0,0,0,120.6,207.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AhLDDIAsgtQAFgGAFACIAAgGIATAGIg3A3gAk/BhIAtgtQAFgFAFACIAAgGIASAGIg3A3gAD2hqIgMgDQgBgSAEgLQADgIAOgOIAcgcQAIgHAFABIAAgGIAYAGQABAUgEAKQgDAHgNANIgjAiQgDAEgEACIgDAAQgEABgFgDgAh8iRIAsgtQAHgGAEACIAAgGIASAGIg3A3gAk/iRIAtgtQAGgGAEACIAAgGIASAGIg3A3g");
	this.shape_33.setTransform(412.8591,452.5);

	this.instance_24 = new lib.fullpingowalk();
	this.instance_24.setTransform(408.05,469.85,0.9997,0.9997,0,0,0,120.8,208.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgdAuIgMgDQgBgTAEgKQADgIAOgNIAagcQAJgHAFABIAAgGIAYAGQABATgFAKQgCAIgOAMIghAiQgDAEgEACIgEAAQgDAAgFgCg");
	this.shape_34.setTransform(440.5491,437.225);

	this.instance_25 = new lib.banch();
	this.instance_25.setTransform(-56.35,477.25,1,1,0,0,0,-134.2,-94.5);

	this.instance_26 = new lib.pingosit();
	this.instance_26.setTransform(220.6,437.75,1,1,0,0,0,-238.2,-166);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("A0RGQQFQpFEzkcQEzkcINAAQIPAAF0DbQF1DaAAE1QAAE0mJCcQmICcrqjNQrqjMmTGDQigCbgrAAQhBAADJleg");
	this.shape_35.setTransform(404.9614,208.953);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:984.6,y:456.6,regX:119.6,regY:207.8,scaleX:1,scaleY:1}},{t:this.instance_1}]},6).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:984.6,y:456.6,regX:119.6,regY:207.8,scaleX:1,scaleY:1}},{t:this.instance_5},{t:this.instance_4,p:{x:719.5,y:293.55}}]},13).to({state:[{t:this.instance_6},{t:this.instance_2,p:{x:984.6,y:456.6,regX:119.6,regY:207.8,scaleX:1,scaleY:1}}]},12).to({state:[{t:this.instance_8},{t:this.instance_7}]},14).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:986.025,y:498.325}},{t:this.shape},{t:this.instance_7}]},12).to({state:[{t:this.shape_4},{t:this.instance_2,p:{x:985.45,y:457.4,regX:119.6,regY:207.8,scaleX:1,scaleY:1}}]},39).to({state:[{t:this.shape_5},{t:this.instance_2,p:{x:987.9,y:457.4,regX:119.6,regY:207.8,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_6},{t:this.instance_2,p:{x:987.9,y:457.4,regX:119.6,regY:207.8,scaleX:1,scaleY:1}}]},5).to({state:[{t:this.shape_7},{t:this.instance_2,p:{x:987.9,y:457.4,regX:119.6,regY:207.8,scaleX:1,scaleY:1}}]},5).to({state:[{t:this.shape_8,p:{x:459.7998,y:440.8806}},{t:this.instance_2,p:{x:987.9,y:457.4,regX:119.6,regY:207.8,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.instance_11},{t:this.instance_2,p:{x:985.45,y:457.4,regX:119.6,regY:207.8,scaleX:1,scaleY:1}},{t:this.instance_4,p:{x:714,y:271.5}},{t:this.instance_10},{t:this.instance_9}]},3).to({state:[{t:this.instance}]},15).to({state:[{t:this.shape_9},{t:this.instance}]},4).to({state:[{t:this.shape_10,p:{x:746.8864}},{t:this.instance}]},4).to({state:[{t:this.shape_10,p:{x:989.8864}},{t:this.instance}]},3).to({state:[{t:this.shape_10,p:{x:1160.8864}},{t:this.instance}]},5).to({state:[{t:this.shape_10,p:{x:1267.0864}},{t:this.instance}]},4).to({state:[{t:this.shape_13},{t:this.shape_12,p:{x:-112.7697}},{t:this.shape_11,p:{x:-114.482}},{t:this.instance}]},3).to({state:[{t:this.shape_14},{t:this.shape_12,p:{x:9.1803}},{t:this.shape_11,p:{x:7.468}},{t:this.instance}]},5).to({state:[{t:this.shape_15},{t:this.shape_12,p:{x:149.8803}},{t:this.shape_11,p:{x:148.168}},{t:this.instance}]},4).to({state:[{t:this.shape_16},{t:this.shape_12,p:{x:289.0303}},{t:this.shape_11,p:{x:287.318}},{t:this.instance}]},4).to({state:[{t:this.shape_17},{t:this.shape_12,p:{x:470.3803}},{t:this.shape_11,p:{x:468.668}},{t:this.instance}]},6).to({state:[{t:this.shape_18},{t:this.shape_12,p:{x:562.1803}},{t:this.shape_11,p:{x:560.468}},{t:this.instance}]},4).to({state:[{t:this.shape_19},{t:this.shape_12,p:{x:725.9803}},{t:this.shape_11,p:{x:724.268}},{t:this.instance}]},3).to({state:[{t:this.shape_20},{t:this.shape_12,p:{x:887.9803}},{t:this.shape_11,p:{x:886.268}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1126.5864}},{t:this.shape_12,p:{x:1136.3803}},{t:this.shape_11,p:{x:1134.668}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1274.1864}},{t:this.shape_12,p:{x:1283.9803}},{t:this.shape_11,p:{x:1282.268}},{t:this.instance}]},4).to({state:[{t:this.shape_21,p:{x:1391.1864}},{t:this.shape_12,p:{x:1400.9803}},{t:this.shape_11,p:{x:1399.268}},{t:this.shape_22},{t:this.instance}]},4).to({state:[{t:this.shape_21,p:{x:1391.1864}},{t:this.shape_12,p:{x:1400.9803}},{t:this.shape_11,p:{x:1399.268}},{t:this.shape_23},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1391.1864}},{t:this.shape_12,p:{x:1400.9803}},{t:this.shape_11,p:{x:1399.268}},{t:this.shape_24},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_26,p:{x:187.518}},{t:this.shape_25},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_26,p:{x:371.768}},{t:this.shape_27},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_28,p:{x:658.618}},{t:this.shape_8,p:{x:360.7998,y:491.2306}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_26,p:{x:795.468}},{t:this.instance}]},5).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_28,p:{x:937.618}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_26,p:{x:1074.468}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_28,p:{x:1228.868}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_26,p:{x:1384.418}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_28,p:{x:1438.918}},{t:this.instance}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.instance},{t:this.instance_12,p:{x:-325.95,y:162.45,regY:-219.5,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.instance},{t:this.instance_12,p:{x:-68.05,y:162.45,regY:-219.5,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.instance},{t:this.instance_12,p:{x:176.75,y:162.45,regY:-219.5,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.instance},{t:this.instance_12,p:{x:366.25,y:162.45,regY:-219.5,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.instance},{t:this.instance_12,p:{x:414.25,y:162.45,regY:-219.5,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.instance},{t:this.instance_12,p:{x:412.8,y:162.45,regY:-219.5,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_21,p:{x:1497.3864}},{t:this.shape_12,p:{x:1507.1803}},{t:this.shape_11,p:{x:1505.468}},{t:this.shape_1,p:{x:986.825,y:499.075}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_12,p:{x:412.8,y:162.45,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_13}]},6).to({state:[{t:this.instance_15},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_14},{t:this.instance_2,p:{x:980.1,y:461.6,regX:120.4,regY:208.6,scaleX:0.9997,scaleY:0.9997}}]},24).to({state:[{t:this.instance_15},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_16},{t:this.instance_2,p:{x:986.2,y:439.05,regX:120.4,regY:208.6,scaleX:0.9997,scaleY:0.9997}}]},3).to({state:[{t:this.instance_15},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_17},{t:this.instance_2,p:{x:986.2,y:462.45,regX:120.4,regY:208.7,scaleX:0.9996,scaleY:0.9996}}]},2).to({state:[{t:this.instance_15},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_18},{t:this.instance_2,p:{x:986.2,y:439.3,regX:120.4,regY:208.8,scaleX:0.9996,scaleY:0.9996}}]},4).to({state:[{t:this.instance_15},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_19},{t:this.instance_2,p:{x:986.2,y:462.6,regX:120.4,regY:208.8,scaleX:0.9995,scaleY:0.9995}}]},3).to({state:[{t:this.instance_15},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_20},{t:this.instance_2,p:{x:986.2,y:439.3,regX:120.4,regY:208.8,scaleX:0.9995,scaleY:0.9995}}]},3).to({state:[{t:this.instance_15},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_21},{t:this.instance_2,p:{x:986.2,y:462.75,regX:120.4,regY:208.9,scaleX:0.9994,scaleY:0.9994}}]},3).to({state:[{t:this.instance_15},{t:this.instance},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_22}]},4).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance}]},3).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance}]},4).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance}]},1).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance}]},4).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance}]},4).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance}]},3).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance}]},4).to({state:[{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_23}]},15).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:120.8,regY:208.1,x:408.05,y:469.85,scaleX:0.9997,scaleY:0.9997}}]},2).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:120.9,regY:208.2,x:348.65,y:469.9,scaleX:0.9997,scaleY:0.9997}}]},3).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:120.9,regY:208.3,x:221.95,y:469.95,scaleX:0.9996,scaleY:0.9996}}]},2).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:412.8,y:169.85,regY:-219.5,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:141.7,y:469.95,scaleX:0.9996,scaleY:0.9996}}]},3).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:434.95,y:169.9,regY:-219.4,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:103.45,y:469.95,scaleX:0.9995,scaleY:0.9995}}]},4).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:498.65,y:169.9,regY:-219.4,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:103.45,y:469.95,scaleX:0.9995,scaleY:0.9995}}]},7).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:628.1,y:169.9,regY:-219.4,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:103.45,y:469.95,scaleX:0.9995,scaleY:0.9995}}]},8).to({state:[{t:this.shape_33},{t:this.instance_12,p:{x:767.5,y:169.9,regY:-219.4,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:103.45,y:469.95,scaleX:0.9995,scaleY:0.9995}}]},7).to({state:[{t:this.shape_34},{t:this.instance_12,p:{x:863.1,y:169.9,regY:-219.4,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:199.05,y:469.95,scaleX:0.9995,scaleY:0.9995}}]},5).to({state:[{t:this.instance_12,p:{x:887,y:169.9,regY:-219.4,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:240.7,y:469.95,scaleX:0.9995,scaleY:0.9995}}]},6).to({state:[{t:this.instance_12,p:{x:994.85,y:169.9,regY:-219.4,scaleX:1,scaleY:1}},{t:this.instance_24,p:{regX:121,regY:208.3,x:348.55,y:469.95,scaleX:0.9995,scaleY:0.9995}}]},6).to({state:[{t:this.instance_12,p:{x:1308.1,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:661.8,y:470.05,scaleX:0.9995,scaleY:0.9995}}]},8).to({state:[{t:this.instance_12,p:{x:1452.7,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:806.4,y:470.05,scaleX:0.9995,scaleY:0.9995}}]},3).to({state:[{t:this.instance_12,p:{x:1614.45,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:968.15,y:470.05,scaleX:0.9995,scaleY:0.9995}}]},5).to({state:[{t:this.instance_12,p:{x:1614.45,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:823.95,y:470.1,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:-56.35}}]},6).to({state:[{t:this.instance_12,p:{x:1768.9,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:978.4,y:470.1,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:98.1}}]},6).to({state:[{t:this.instance_12,p:{x:1923.3,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:1132.8,y:470.1,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:252.5}}]},6).to({state:[{t:this.instance_12,p:{x:1923.3,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:1034.75,y:470.1,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:252.5}}]},3).to({state:[{t:this.instance_12,p:{x:1923.3,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:904.5,y:470.1,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:252.5}}]},8).to({state:[{t:this.instance_12,p:{x:1923.3,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:741.45,y:465.65,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:252.5}}]},7).to({state:[{t:this.instance_12,p:{x:1923.3,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:579.8,y:465.65,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:252.5}}]},7).to({state:[{t:this.instance_12,p:{x:1923.3,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:579.8,y:465.65,scaleX:0.9995,scaleY:0.9995}},{t:this.instance_25,p:{x:252.5}}]},3).to({state:[{t:this.instance_25,p:{x:252.5}},{t:this.instance_12,p:{x:1923.3,y:170,regY:-219.3,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_24,p:{regX:121,regY:208.4,x:442.2,y:470.1,scaleX:0.9995,scaleY:0.9995}}]},3).to({state:[{t:this.instance_26}]},5).to({state:[{t:this.shape_35},{t:this.instance_26}]},6).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:1199.65,y:458.1},0).wait(5).to({x:1017.75,y:456.55},0).wait(5).to({x:983.4,y:458.15},0).to({_off:true},6).wait(125).to({_off:false,x:985.4,y:457.35},0).wait(117).to({_off:true},6).wait(46).to({_off:false,y:461.65},0).wait(3).to({x:986.75,y:459.05},0).wait(4).to({x:852.4},0).wait(5).to({x:725},0).wait(4).to({x:604.2},0).wait(3).to({x:477.3},0).wait(4).to({regX:119.7,x:419.25,y:466.3},0).to({_off:true},4).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.startbt = new lib.startbt();
	this.startbt.name = "startbt";
	this.startbt.setTransform(653.9,294.4,1,1,0,0,0,-107,-100);

	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.setTransform(441.65,206.35,0.9999,0.9999,0,0,0,-336.7,-233.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startbt}]}).to({state:[]},1).to({state:[{t:this.replay}]},488).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.pingo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,489];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.startbt = this.btn.startbt;
		var self = this;
		this.stop();
		
		self.startbt.addEventListener("click", startAnimation);
		
		function startAnimation() {
			self.play(1);
		}
	}
	this.frame_1 = function() {
		this.startbt = undefined;
	}
	this.frame_489 = function() {
		this.replay = this.btn.replay;
		this.___loopingOver___ = true;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(488).call(this.frame_489).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(270).to({regX:2.1,regY:2.5,scaleX:0.1391,scaleY:0.1391,x:993.6,y:369.05},0).wait(23).to({regX:2.7,regY:3,scaleX:0.9959,scaleY:0.9959,x:646.5,y:363.45},0).wait(189).to({regX:3.4,regY:3.6,scaleX:0.5185,scaleY:0.5185,x:361.4,y:313.2},0).wait(8));

	// btn_obj_
	this.btn = new lib.Scene_1_btn();
	this.btn.name = "btn";
	this.btn.setTransform(653.9,294.4,1,1,0,0,0,653.9,294.4);
	this.btn.depth = 0;
	this.btn.isAttachedToCamera = 0
	this.btn.isAttachedToMask = 0
	this.btn.layerDepth = 0
	this.btn.layerIndex = 0
	this.btn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(270).to({regX:995.2,regY:359.6,scaleX:7.1875,scaleY:7.1875,x:653.75,y:294.7},0).wait(23).to({regX:657.6,regY:295.2,scaleX:1.0041,scaleY:1.0041,x:653.9,y:294.5},0).wait(189).to({regX:366.9,regY:277.3,scaleX:1.9286,scaleY:1.9286,x:654,y:294.4},0).wait(8));

	// pingo_obj_
	this.pingo = new lib.Scene_1_pingo();
	this.pingo.name = "pingo";
	this.pingo.setTransform(1407.8,437.4,1,1,0,0,0,1407.8,437.4);
	this.pingo.depth = 0;
	this.pingo.isAttachedToCamera = 0
	this.pingo.isAttachedToMask = 0
	this.pingo.layerDepth = 0
	this.pingo.layerIndex = 1
	this.pingo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pingo).wait(293).to({regX:1408.4,regY:437.6,scaleX:1.0041,scaleY:1.0041,x:1407.75,y:437.5},0).wait(193).to({regX:757.7,regY:351.4,scaleX:1.9286,scaleY:1.9286,x:1407.7,y:437.3},0).wait(4));

	// street_view_obj_
	this.street_view = new lib.Scene_1_street_view();
	this.street_view.name = "street_view";
	this.street_view.setTransform(645.1,361.1,1,1,0,0,0,645.1,361.1);
	this.street_view.depth = 0;
	this.street_view.isAttachedToCamera = 0
	this.street_view.isAttachedToMask = 0
	this.street_view.layerDepth = 0
	this.street_view.layerIndex = 2
	this.street_view.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.street_view).wait(270).to({regX:994,regY:368.9,scaleX:7.1875,scaleY:7.1875,y:361.55},0).wait(23).to({regX:648.8,regY:361.5,scaleX:1.0041,scaleY:1.0041,x:645.05,y:361.1},0).wait(197));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-282.1,73.3,2602.2,654);
// library properties:
lib.properties = {
	id: '65C9DAAC98B254408B25D0683BFBE8A0',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_28.png?1598131873024", id:"CachedBmp_28"},
		{src:"images/pingo_atlas_1.png?1598131872719", id:"pingo_atlas_1"},
		{src:"images/pingo_atlas_2.png?1598131872719", id:"pingo_atlas_2"},
		{src:"images/pingo_atlas_3.png?1598131872721", id:"pingo_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['65C9DAAC98B254408B25D0683BFBE8A0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;