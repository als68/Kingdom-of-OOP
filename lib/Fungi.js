'use strict';

import LivingThing from './LivingThing';

class Fungi extends LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic){
    super(name, false, trueNucleus, anaerobic, true, false, true);
  }
}

export default Fungi;