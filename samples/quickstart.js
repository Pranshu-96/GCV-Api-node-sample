// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START vision_quickstart]
async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection('https://www.google.com/search?q=cat&rlz=1C1CHBF_enIN850IN850&sxsrf=ALeKk00hsbaLli34_F8GvAVn0rA-EqXZYA:1599531558188&source=lnms&tbm=isch&sa=X&ved=2ahUKEwijt9Syv9jrAhUZ7XMBHTPvBzMQ_AUoAXoECB0QAw&biw=1536&bih=722#imgrc=XWXc4QpQ2bVTYM
');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
  
  // Performs logo detection on the image file
  const [result1] = await client.logoDetection('./resources/logos.png');
  const logos = result1.logoAnnotations;
  console.log('Logos:');
  logos.forEach(logo => console.log(logo));
  
  // Perform face detection
  const [result2] = await client.faceDetection('./resources/face.png');
const faces = result2.faceAnnotations;
console.log('Faces:');
faces.forEach((face, i) => {
  console.log(`  Face #${i + 1}:`);
  console.log(`    Joy: ${face.joyLikelihood}`);
  console.log(`    Anger: ${face.angerLikelihood}`);
  console.log(`    Sorrow: ${face.sorrowLikelihood}`);
  console.log(`    Surprise: ${face.surpriseLikelihood}`);
});
  
}
 
              // [END vision_quickstart]

quickstart().catch(console.error);
