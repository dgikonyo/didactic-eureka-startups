const ResponseDto = require('../dto/response.dto');

const serverTest = async (req, res) => {
  console.log('Attempt to access server');
  const responseDto = new ResponseDto();

  try {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(200);
    responseDto.setStatusCodeDesc('OK');
    responseDto.setStatusCodeMessage('Successful');
    responseDto.setAdditionalData('Server is up');

    res.status(200).json({ responseDto });
  } catch (err) {
    responseDto.setTimeStamp(new Date());
    responseDto.setStatusCode(500);
    responseDto.setStatusCodeDesc('INTERNAL SERVER ERROR');
    responseDto.setStatusCodeMessage(err.message);
    responseDto.setAdditionalData('Server failure');

    res.status(500).json({ responseDto });
  }
};

module.exports = serverTest;
