'use strict';

import Eukaryota from './Eukaryota';

class Protista extends Eukaryota {
  constructor(name, uniCellular, mobile, heterotroph){
    super(name, uniCellular, true, mobile, heterotroph);
  }
}

export default Protista;