import React, { useEffect, useRef } from 'react';
import './index.scss';
import axios from 'axios';
import { Flex, Button } from 'antd';

function Cam() {
  const videoElement = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        videoElement.current.srcObject = stream;
        videoElement.current.addEventListener('loadedmetadata', function () {
          videoElement.current.play();
        });
      })
      .catch(function (error) {
        console.error('Error accessing camera: ', error);
      });
  }, []);

  function captureAndSend() {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.current.videoWidth;
    canvas.height = videoElement.current.videoHeight;
    const context = canvas.getContext('2d');

    context.drawImage(
      videoElement.current,
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Получаем данные в формате blob
    canvas.toBlob(function (blob) {
      // Создаем объект FormData и добавляем туда файл blob
      const formData = new FormData();
      formData.append('file', blob, 'captured_frame.png');
      console.log('blob =>',blob);
      // Отправляем данные на сервер с использованием Axios
      sendDataToServer(formData);
    }, 'image/png');
  }

  function sendDataToServer(formData) {
    // Отправка данных на сервер с использованием Axios
    console.log('formData =>',formData);
    axios
      .post('https://ваш_сервер/api/захват_кадра', formData)
      .then(response => {
        // Обработка ответа от сервера
        console.log('Server response:', response.data);
        
      })
      .catch(error => {
        console.error('Error sending data to server: ', error);
      });
  }

  return (
    <Flex style={{ height: '100vh', width: '100%' }} align='center' justify='center' vertical>
      <video ref={videoElement} id='video-preview'></video>
      <Button style={{marginTop: '30px'}} onClick={captureAndSend} type="primary">Сделать фото</Button>
    </Flex>
  );
}

export default Cam;
