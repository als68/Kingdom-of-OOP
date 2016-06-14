'use strict';

import Eukaryota from './Eukaryota';

class Animal extends Eukaryota {
  constructor(name, asexual, mobile, heterotroph){
    super(name, false, true, false, false);
  }
}

export default Animal;