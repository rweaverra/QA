import axios from 'axios';

const markQuestionAsHelpful = (id) => axios.post(`http://52.26.193.201:3000/qa/${id}/answers`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default markQuestionAsHelpful;
