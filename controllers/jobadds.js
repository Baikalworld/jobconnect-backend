// const Jobadd = require('../models/Jobadd');

// const getJobadds = async (req, res, next) => {
//   try {
//     const jobadds = await Jobadd.find();

//     res.json({
//       success: true,
//       msg: 'show all job offers',
//       data: jobadds
//     })  
//   } catch(err) {
//     next(err)
//   }

// }

// const getJobadd = async (req, res, next) => {
//   try {
//     const { id } = req.params;
    
//     const jobadd = await Jobadd.findById(id);
//     res.json({
//       success: true,
//       msg: 'show selected jobadd',
//       data: jobadd
//     })
//   } catch(err) {
//     next(err)
//   }

// }

// const createJobadd = async (req, res, next) => {
//   try {
//       const { 
//         addTitle,
//         addDate,
//         addLocation,
//         addDesc,
//         addFull
//       } = req.body;

//       const jobadd = await Jobadd.create({
//         addTitle,
//         addDate,
//         addLocation,
//         addDesc,
//         addFull        
//       })

//       res.json({
//         success: true,
//         msg: 'new jobadd created',
//         data: jobadd
//       })
//     } catch(err) {
//       next(err)
//     }
  
// }

// const updateJobadd = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { add_id, add_title, add_date } = req.body;

//     const jobadd = await Jobadd.findByIdAndUpdate(id, { add_id, add_title, add_date }, { new: true })

//     res.json({
//       success: true,
//       msg: `jobadd with id ${id} updated`,
//       data: jobadds
//     })
//   } catch(err) {
//     next(err)
//   }
// }
// const deleteJobadd = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const jobadd = await Jobadd.findByIdAndDelete(id);
//     res.json({
//       success: true,
//       msg: `jobadd with id ${id} deleted`,
//       data: jobadds
//     });
//   } catch(err) {
//     next(err)
//   }
// }

// module.exports = {
//   getJobadd,
//   getJobadds,
//   createJobadd,
//   updateJobadd,
//   deleteJobadd
// }