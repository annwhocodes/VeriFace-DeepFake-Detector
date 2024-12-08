import axios from 'axios';

export const analyzeVideo = async (videoFile) => {
  const formData = new FormData();
  formData.append('video', videoFile);
  return axios.post('https://your-backend-url/api/detect', formData);
};
