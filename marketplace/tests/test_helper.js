import { resolve } from 'path';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

global.ROOT = resolve('.');
