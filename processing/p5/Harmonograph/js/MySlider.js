function MySlider (_id, _label, _x, _y, _min, _max, _value, _step, _parent) {
  this.id = _id;
  this.label = _label;
  this.x = _x;
  this.y = _y;
  this.min = _min;
  this.max = _max;
  this.value = _value;
  this.step = _step;

  this.labelInst = createDiv(this.label);
  this.labelInst.position(this.x, this.y);
  this.sliderInst = createSlider(this.min, this.max, this.value, this.step);
  this.sliderInst.position(this.x+50, this.y);
  this.sliderInst.changed(this.sliderChange);
  this.inputInst = createInput(this.value);
  this.inputInst.position(this.x + 190, this.y);
  /*this.input.changed = function () {
    if(!this.sliderchangeflag) {
      this.slider.value(this.input.value());
    }

  };*/

  this.sliderchangeflag = false;
  this.sliderChange = function () {
    console.log("slider change");
    this.value = this.slider.value();
    this.sliderchangeflag = true;
    this.inputInst.value(this.sliderInst.value());
    this.sliderchangeflag = false;

  }
};
