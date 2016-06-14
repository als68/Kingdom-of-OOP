'use strict';

import Eukaryota from './Eukaryota';

class Fungi extends Eukaryota {
  constructor(name, uniCellular, trueNucleus, anaerobic){
    super(name, false, trueNucleus, anaerobic, true, false, true);
  }
}

export default Fungi;