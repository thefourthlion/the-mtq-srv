const Posts = require("../models/Posts");

//--------------------------------------------Create------------------------------------
exports.createPost = async (req, res) => {
  try {
    let note = new Posts({
      name: req.body.name,
      companyName: req.body.companyName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      currentWebsite: req.body.currentWebsite,
      information: req.body.information,
      formType: req.body.formType,
    });

    await note.save();
    res.send(note);
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Read  ------------------------------------

// router.post("/update", function (req, res) {
//   StudentModel.findByIdAndUpdate(
//     req.body.id,
//     { Name: req.body.Name },
//     function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(data);
//         console.log("Data updated!");
//       }
//     }
//   );
// });

exports.updatePost = async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(
      req.params.id,
      {
        responded: req.body.responded,
        notes: req.body.notes,
        quote: req.body.quote,
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
exports.readPosts = async (req, res) => {
  try {
    Posts.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      // console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readPostFromID = async (req, res) => {
  try {
    await Posts.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      // console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Delete------------------------------------
exports.deletePost = async (req, res) => {
  try {
    if ((await Posts.findById(req.params.id)) === null) {
      res.send("Post Not Found");
    } else {
      await Posts.findByIdAndRemove(req.params.id).exec();
      res.send("Deleted Post");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
