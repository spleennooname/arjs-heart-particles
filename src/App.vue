<template>
  <div id="app">
    <a-scene embedded antialias="false"
      vr-mode-ui="enabled: false"
      arjs="debugUIEnabled: true; sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; maxDetectionRate: 30">
        <a-assets>
          <a-asset-item id="heart-gltf" src="assets/models/heart.gltf"></a-asset-item>
        </a-assets>
        <!-- marker -->
        <a-marker id="ar-anchor" preset="hiro" type="pattern" emitevents="true" arjs-registerevents>
          <!-- here define the content to display on top of the marker -->
          <a-entity position="0 0 0" particle-system="type: 2; color: #ffffff, #ff0000; texture: assets/images/heart.png; maxAge: 20; randomize: true; rotationAxis: y; opacity: 0.75; velocitySpread: 3.0 2.0 3.0; blending: 1; velocityValue: 1.0 3.0 1.0; particleCount: 800;">
            <a-gltf-model shadow="receive: true; type: pcfsoft" src="#heart-gltf"
              scale="0.07 0.07 0.07" position="0 0.0 0.0"
              rotation="-90 0 0"
              animation_scale="property: scale; from: 0.05 0.05 0.05; to: .08 0.08 0.08; dur: 1500; dir: alternate-reverse; loop: true"
              animation_rotation="property: rotation; from: -90.0 0.0 -5.0; to: -90.0 0.0 5.0; dur: 1500; dir: alternate-reverse; loop: true">
            </a-gltf-model>
          </a-entity>
        </a-marker>
        <a-entity light="type: ambient; intensity: 0.5;"></a-entity>
        <a-entity light="type: directional; castShadow: true;" position="0 0.5 1"></a-entity>
        <a-camera-static id="camera" />
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">

</style>
