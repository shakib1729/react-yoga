import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/globalContext';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import Webcam from 'react-webcam';
import { drawKeypoints, drawSkeleton } from '../utilities/utilities';

const Detect = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const videoWidth = 426,
    videoHeight = 240;
  const {
    poseNetModel,
    model,
    timer,
    currPose,
    scores,
    isDetecting,
    setPoseNetModel,
    setModel,
    setTimer,
    setCurrPose,
    setScores,
    setIsDetecting,
  } = useGlobalContext();

  const timerRef = useRef(timer);
  timerRef.current = timer;

  const currPoseRef = useRef(currPose);
  currPoseRef.current = currPose;

  const scoresRef = useRef(scores);
  scoresRef.current = scores;

  const isDetectingRef = useRef(isDetecting);
  isDetectingRef.current = isDetecting;

  const intervalRef = useRef(null);
  const timerVarRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      // Load the posenet model
      const loadedPoseNetModel = await posenet.load({
        inputResolution: { width: videoWidth, height: videoHeight },
        scale: 0.5,
      });
      setPoseNetModel(loadedPoseNetModel);

      // Load our trained neural network model
      const loadedModel = await tf.loadLayersModel('/model/my-model.json');
      setModel(loadedModel);
    };

    if (model === null || poseNetModel === null) {
      loadModels();
    }
    return () => resetStates();
  }, []);

  const runPosenet = () => {
    const newInterval = setInterval(() => {
      detect();
    }, 100);
    intervalRef.current = newInterval;

    // Stop detecting after 10 seconds
    setTimer(10);
    const timerVar = setInterval(() => {
      setTimer(timerRef.current - 1);
      console.log(timerRef.current);
      if (timerRef.current == 0) {
        clearInterval(timerVar);
        clearInterval(timerVarRef.current);
        changeIsDetecting();
      }
    }, 1000);
    timerVarRef.current = timerVar;
  };

  const detect = async () => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState == 4 &&
      typeof canvasRef.current !== 'undefined' &&
      canvasRef.current !== null
    ) {
      // Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width (because when we are working with webcam we need to force the height and width)
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make detections
      const pose = await poseNetModel.estimateSinglePose(video, {
        flipHorizontal: true,
      });
      let currDataPoint = [];
      for (let i = 0; i < pose['keypoints'].length; i++) {
        currDataPoint.push(pose['keypoints'][i]['position'].x / 400);
        currDataPoint.push(pose['keypoints'][i]['position'].y / 400);
      }

      predict(currDataPoint);

      requestAnimationFrame(() => {
        drawCanvas(pose, videoWidth, videoHeight, canvasRef);
      });
    }
  };

  const predict = async (input) => {
    const inputTensor = tf.tensor2d(input, [1, input.length]);
    const prediction = model.predict(inputTensor);
    const predictedClass = prediction.argMax(-1).dataSync();
    console.log(
      'Predicted: ',
      predictedClass[0],
      ' Current:  ',
      currPoseRef.current
    );
    if (predictedClass[0] == currPoseRef.current) {
      // We made a correct prediction,
      // so increment the score of current pose

      setScores(
        scoresRef.current.map((currScore, idx) => {
          if (idx == currPoseRef.current) return currScore + 1;
          else return currScore;
        })
      );
      console.log('Yes');
    } else {
      console.log('No');
    }
  };

  const drawCanvas = (pose, videoWidth, videoHeight, canvas) => {
    if (canvas.current !== null) {
      const ctx = canvas.current.getContext('2d');
      canvas.current.width = videoWidth;
      canvas.current.height = videoHeight;

      drawKeypoints(pose['keypoints'], 0.5, ctx);
      drawSkeleton(pose['keypoints'], 0.5, ctx);
    }
  };

  const resetStates = () => {
    // isDetectingRef.current = false;
    setIsDetecting(false);
    clearInterval(intervalRef.current);
    clearInterval(timerVarRef.current);
    setTimer(10);
  };

  const startDetecting = () => {
    setIsDetecting(true);
    // isDetectingRef.current = true;
    const timerVar = setInterval(() => {
      setTimer(timerRef.current - 1);
      if (timerRef.current == 0) {
        clearInterval(timerVar);
        runPosenet();
      }
    }, 1000);
    timerVarRef.current = timerVar;
  };

  const changeIsDetecting = () => {
    if (isDetectingRef.current) resetStates();
    else startDetecting();
  };

  return (
    <>
      <button className='btn btn-1' onClick={() => changeIsDetecting()}>
        <h4> {isDetecting ? `Stop` : `Let's Begin`} </h4>
      </button>
      {isDetecting ? (
        <div className='video-container'>
          <Webcam
            ref={webcamRef}
            mirrored
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              zindex: 9,
              width: videoWidth,
              height: videoHeight,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              zindex: 9,
              width: videoWidth,
              height: videoHeight,
            }}
          />
        </div>
      ) : (
        <p>Turn On</p>
      )}
    </>
  );
};

export default Detect;
