'use strict';

import Animal from './Animal';

class Cnidarian extends Animal {
  constructor(name, symmetry){
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }


  get symmetry(){
    return this._symmetry;
  }

  set symmetry(x){
    this._symmetry = x;
  }
}

export default Cnidarian;