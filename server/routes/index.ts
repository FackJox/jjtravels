import express, { Request, Response, NextFunction } from 'express';

var router = express.Router();

type GetHomePageProps = {
  req: Request
  res: Response
  next: NextFunction
}

/* GET home page. */
router.get('/', function({req, res, next}: GetHomePageProps) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
