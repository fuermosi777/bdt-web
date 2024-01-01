import React, { useEffect } from "react";
import "./ExpBottlePreview.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef } from "react";
import { PlainBottlePreviewerImageData } from "../interfaces/PreviewerImageData";

const ExpBottlePreview = (props: {
  imageData: PlainBottlePreviewerImageData;
}) => {
  const { imageData } = props;
  const canvasRef = useRef<HTMLDivElement>(null);

  // Bottle packaging.
  useEffect(() => {
    // Create the renderer and add it to the page's body element
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    if (canvasRef.current) {
      renderer.setSize(
        canvasRef.current.offsetWidth,
        canvasRef.current.offsetHeight
      );
    }

    canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

    // Create the scene to hold the object
    const scene = new THREE.Scene();

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      35, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near plane distance
      1000 // Far plane distance
    );

    // Position the camera
    camera.position.set(-15, 10, 20);

    // Add the lights
    const ambientLight = new THREE.AmbientLight(0xbbbbbb, 3);
    scene.add(ambientLight);

    const light = new THREE.PointLight(0xffffff, 100, 0);
    light.position.set(10, 10, 10);
    scene.add(light);

    // The blue bottle.
    const bottleMaterial = new THREE.MeshLambertMaterial();
    bottleMaterial.color = new THREE.Color(0xb5e1ff);

    // Add images.
    const textureLoader = new THREE.TextureLoader();
    const pkgTextureCover = textureLoader.load(imageData.cover);
    pkgTextureCover.minFilter = THREE.LinearFilter;
    const pkgCover = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      map: pkgTextureCover,
    });

    // Add stuff.
    const geometryBody = new THREE.CylinderGeometry(3, 3, 9, 32);
    const meshBody = new THREE.Mesh(geometryBody, pkgCover);
    meshBody.castShadow = true;
    scene.add(meshBody);

    const geometryBottom = new THREE.TorusGeometry(2.4, 0.6, 16, 100);
    const meshBottom = new THREE.Mesh(geometryBottom, bottleMaterial);
    meshBottom.position.y = -4.5;
    meshBottom.rotateX(Math.PI / 2);
    meshBottom.castShadow = true;
    scene.add(meshBottom);

    const geometryTop = new THREE.TorusGeometry(2.4, 0.6, 16, 100);
    const meshTop = new THREE.Mesh(geometryTop, bottleMaterial);
    meshTop.position.y = 4.5;
    meshTop.rotateX(Math.PI / 2);
    meshTop.castShadow = true;
    scene.add(meshTop);

    const geometryTop2 = new THREE.TorusGeometry(1.9, 0.6, 16, 100);
    const meshTop2 = new THREE.Mesh(geometryTop2, bottleMaterial);
    meshTop2.position.y = 4.9;
    meshTop2.rotateX(Math.PI / 2);
    meshTop2.castShadow = true;
    scene.add(meshTop2);

    const geometryTop3 = new THREE.TorusGeometry(1.4, 0.6, 16, 100);
    const meshTop3 = new THREE.Mesh(geometryTop3, bottleMaterial);
    meshTop3.position.y = 5.3;
    meshTop3.rotateX(Math.PI / 2);
    meshTop3.castShadow = true;
    scene.add(meshTop3);

    const geometryCap = new THREE.CylinderGeometry(1, 1, 2.3, 20);
    const materialCap = new THREE.MeshLambertMaterial();
    materialCap.color = new THREE.Color(0x887003);
    const meshCap = new THREE.Mesh(geometryCap, materialCap);
    meshCap.position.y = 6.5;
    meshCap.castShadow = true;
    scene.add(meshCap);

    // Create the orbit controls for the camera
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enablePan = false;

    // Animate the packaging.
    const animate = () => {
      // Update the orbit controls
      controls.update();

      // Render the frame
      renderer.render(scene, camera);

      // Keep the animation going
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="ExpBottlePreview">
      <div className="canvas" ref={canvasRef}></div>
    </div>
  );
};

export default ExpBottlePreview;
