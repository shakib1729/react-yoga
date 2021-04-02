<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://user-images.githubusercontent.com/39847281/113415422-cdd04a00-93dc-11eb-8eef-49aeb116f02e.png" alt="Logo">
  </a>
  <p align="center">
    Do Yoga Poses Better!
    <br />
    Visit:  www.reactyoga.ml
    <br />
    <a href="/">View Demo</a>
    ·
    <a href="https://github.com/shakib1729/react-yoga/issues">Report Bug</a>
  
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>   
      <ul>
        <li><a href="#project-overview">Project Overview</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li><a href="#development-process">Development Process</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![image](https://user-images.githubusercontent.com/39847281/113415962-eab94d00-93dd-11eb-88ea-bc7cb9661d77.png)

![image](https://user-images.githubusercontent.com/39847281/113420276-a9796b00-93e6-11eb-978b-15e8b47d7c0c.png)

The goal of this project is to classify the yoga poses performed by the user using machine learning so that they correctly perform the yoga poses.

### Project Overview

- Select one of the available pose (asana) and get score for performing that pose correctly
- Beat your best score
- Become proficient in performing asanas
- Toggle between Light and Dark modes

### Built With

This web app is developed using React and TensorflowJS

- [React](https://reactjs.org/) - To build the user interface
- [TensorFlowJS](https://www.tensorflow.org/js) - To classify the yoga poses using PoseNet and custom Neural Network model

#### Additional libraries/packages used:

- [React-Router](https://reactrouter.com/) - The standard routing library for React
- [React-Webcam](https://github.com/mozmorris/react-webcam) - Webcam component for React
- [React-CSV](https://github.com/react-csv/react-csv) - To generate the CSV file of the dataset
- [Papa Parse](https://www.papaparse.com/) - To parse the CSV files in browser

<!-- GETTING STARTED -->

## Usage

The live version of this web app is deployed using AWS Amplify at: https://www.reactyoga.ml
<br />
To set up locally, follow these simple steps:

1. Clone the repo
   ```sh
   git clone https://github.com/shakib1729/react-yoga.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   npm start
   ```

<!-- DEVELOPMENT PROCESS -->

## Development Process

### Step 1) Collecting the Dataset

- [PoseNet model](https://github.com/tensorflow/tfjs-models/tree/master/posenet) of TensorFlowJS was used to collect the dataset.
- The PoseNet model takes input an image of a body and outputs the coordinates (x and y) of 17 keypoints alongwith their name (like nose, leftEye, rightEye, etc.) and confidence scores. So each image gives 17\*2 = 34 values. These 34 values are features of a single data point.
- In this way, around 300 data points for each pose were taken using live webcam feed.
- Two CSV files (X and Y) containing the data points along with their lable were generated using react-csv,
- These CSV files are the dataset for the neural network.

![collecting1](https://user-images.githubusercontent.com/39847281/113425697-f7df3780-93ef-11eb-8bc5-e4c46af95a94.png)

### Step 2) Training the model

- A neural network was created using TensorFlowJS to perform the classification. It had two dense layers: the first dense layer had 10 units and activation function was 'relu'. The second dense layer was the output layer with 3 units and activation function was 'softmax'.
- The dataset 'X' and 'Y' which we created in the previous step were shuffled and split such that 85% was the training data and 15% was the testing data.
- The following parameters were set: <br />
  Learning rate: 0.01 <br/>
  Number of epochs: 40 <br/>
  Optimizer: Adam optimizer <br/>
  Loss: Categorical cross-entropy <br/>
  Metrics: Accuracy <br/>
- The model was trained in the browser itself and accuracy of 99.12% was achieved.

![training1](https://user-images.githubusercontent.com/39847281/113425764-11807f00-93f0-11eb-9e0e-d8ee5e09bb41.png)

### Step 3) Testing the model

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [YogaPedia](https://www.yogapedia.com/)
