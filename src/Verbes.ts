import {Verbe} from './Verbe';
/*
(1,'abide','abode','abode','demeurer'),(2,'arise','arose','arisen','s\'élever, survenir'),(3,'awake','awoke','awoken','(se) réveiller')
 */
const Verbes: Array<Verbe> = [
  {
    baseVerbale: 'abide',
    preterit: 'abode',
    participePasse: 'abode',
    traduction: 'demeurer'
  },
  {
    baseVerbale: 'arise',
    preterit: 'arose',
    participePasse: 'arisen',
    traduction: 's\'élever'
  },
  {
    baseVerbale: 'awake',
    preterit: 'awoke',
    participePasse: 'awaken',
    traduction: 'se réveiller'
  }
];

export default Verbes;
