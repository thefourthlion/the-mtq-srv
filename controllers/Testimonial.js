const Testimonial = require("../models/Testimonial");

//--------------------------------------------Create------------------------------------
exports.createTestimonial = async (req, res) => {
  try {
    let testimonial = new Testimonial({
      name: req.body.name,
      companyName: req.body.companyName,
      feedback: req.body.feedback,
      approved: req.body.approved,
      image: req.body.image,
    });

    await testimonial.save();
    res.send(testimonial);
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Edit------------------------------------
exports.updateTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndUpdate(
      req.params.id,
      {
        approved: req.body.approved,
        image: req.body.image,
      },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Read  ------------------------------------
exports.readTestimonial = async (req, res) => {
  try {
    Testimonial.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readTestimonialFromID = async (req, res) => {
  try {
    await Testimonial.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Delete------------------------------------
exports.deleteTestimonial = async (req, res) => {
  try {
    if ((await Testimonial.findById(req.params.id)) === null) {
      res.send("Testimonial Not Found");
    } else {
      await Testimonial.findByIdAndRemove(req.params.id).exec();
      res.send("Deleted Testimonial");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
