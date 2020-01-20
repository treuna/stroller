const Stroller = require('../models/stroller-model.js')

createStroller = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a stroller',
    })
  }

  const stroller = new Stroller(body)

  if (!stroller) {
    return res.status(400).json({ success: false, error: err })
  }
  stroller
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: stroller._id,
        message: 'Stroller created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Stroller not created!',
      })
    })
}

updateStroller = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }

  Stroller.findOne({ _id: req.params.id }, (err, stroller) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Stroller not found!',
      })
    }
    stroller.name = body.name
    stroller.manufacturer = body.manufacturer
    stroller.weight = body.weight
    stroller.price = body.price
    stroller.maxNumberOfSeats = body.maxNumberOfSeats
    stroller.wheels = body.wheels
    stroller.length = body.length
    stroller.depth = body.depth
    stroller.height = body.height
    stroller.lengthFolded = body.lengthFolded
    stroller.depthFolded = body.depthFolded
    stroller.heightFolded = body.heightFolded
    strollers
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: stroller._id,
          messafe: 'Stroller updated!'
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Stroller not updated!',
        })
      })
  })
}

deleteStroller = async (req, res) => {
  await Stroller.findOneAndDelete({ _id: req.params.id}, (err, stroller) => {
    if (err) {
      return res.status(400).json({ success: false, error: err})
    }

    if (!stroller) {
      return res
        .status(400)
        .json({ success: false, error: 'Stroller not found!'})
    }

    return res.status(200).json({ success: true, data: stroller})
  }).catch(err => console.log(err))
}

getStrollerById = async (req, res) => {
  await Stroller.findOne({ _id: req.params.id}, (err, stroller) => {
    if (err) {
      return res.status(400).json({ success: false, error: err})
    }

    if (!stroller) {
      return res
        .status(400)
        .json({ success: false, error: 'Stroller not found!'})
    }
    return res.status(200).json({ success: true, data: stroller})
  }).catch(err => console.log(err))
}

getStrollers = async (req, res) => {
  await Stroller.find({}, (err, strollers) => {
    console.log(115, strollers)
    if (err) {
      return res.status(400).json({ success: false, error: err})
    }
    if (!strollers.length) {
      return res
        .status(404)
        .json({ success: false, error: 'Strollers not found!'})
    }
    return res.status(200).json({ success: true, data: strollers })
  }).catch(err => console.log(err))
}

module.exports = {
  createStroller,
  updateStroller,
  deleteStroller,
  getStrollers,
  getStrollerById,
}