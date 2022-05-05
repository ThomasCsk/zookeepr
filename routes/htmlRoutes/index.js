const path = require('path')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html')); //connection to index file
});

router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html')); //connection to index file(via any non linked link due to the "*") (This should always be last)
});

module.exports = router;