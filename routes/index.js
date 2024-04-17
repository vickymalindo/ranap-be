import express from 'express';
import {
  getInpatientRaw,
  getInpatientRawWithSearch,
  test,
} from '../controllers/membership.js';

const router = express.Router();

router.get('/', test);
router.get('/inpatient-raw/search', getInpatientRawWithSearch);
router.get('/inpatient-raw', getInpatientRaw);

export default router;
