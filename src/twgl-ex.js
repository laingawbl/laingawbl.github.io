var gl = twgl.getWebGLContext(document.getElementById("twgl-c"));
var progs = twgl.createProgramInfo(gl, ["v","f"]);
var arrays = {
	position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
}; 
var buffs = twgl.createBufferInfoFromArrays(gl, arrays);
function render(time){
	twgl.resizeCanvasToDisplaySize(gl.canvas);
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	var uniforms = { 
		iResolution: [gl.canvas.width, gl.canvas.height],
		iGlobalTime: time*0.001,	 
	};
	gl.useProgram(progs.program);
	twgl.setBuffersAndAttributes(gl, progs, buffs);
	twgl.setUniforms(progs, uniforms);
	twgl.drawBufferInfo(gl, gl.TRIANGLES, buffs);
	
	requestAnimationFrame(render);
}
requestAnimationFrame(render);
