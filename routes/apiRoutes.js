const router = require("express").Router();
const db = require("../models");
let mongoose = require("mongoose");
//include put, get, post, delete
mongoose.connect("mongodb://localhost/workout", {useNewUrlParser:true});

// router.post("/api/workouts", (req, res) => {
    // console.log(res);
    // Workouts.create({})
    //     .then(
    //         dbWorkout => {
    //             res.json(dbWorkout);
    //         }
    //     )
    //     .catch(err => {
    //         res.json(err);
    //     });
    
// });
router.post("/api/workouts", ({ body }, res) => {
    let newWorkout = {
        day: new Date().setDate(new Date().getDate()),
        exercises: body
      }
    db.Workout.create(newWorkout).then((dbWorkouts => {
      res.json(dbWorkouts);  
    })).catch(err => {
        res.json(err);
    });
});

  //View the combined weight of multiple exercises on the `stats` page.
  router.get("/api/workouts/range", ( req, res ) => {
    db.Workout.find({}).then((dbWorkouts => {
        res.json(dbWorkouts);  
      })).catch(err => {
          res.json(err);
      });
});

//Add exercises to a previous workout plan.
router.put("/api/workouts/:id", function({ body, params }, res){
    db.Workout.findByIdAndUpdate(params.id,
    {
        $push: { exercises: body }
    }).then(data =>{ 
        res.json(data)}
    ).catch(err => {
        res.json(err)}
)} );

// router.get("/api/workouts", (req, res) => {
//     console.log(res);
//     Workouts.find()
//     .then(
//         dbWorkOut => {
//             res.json(dbWorkOut)
//         }
//     )
//     .catch(err => {
//         res.json(err);
//     });
// });

// router.get("/api/workouts/range", (req, res) => {
//     console.log(res);
//     Workouts.find({})
//     .limit(7)
//     .then(
//         dbWorkOut => {
//             res.json(dbWorkOut);
//         }
//     )
//     .catch(err => {
//         res.json(err);
//     });

// });

// router.put("/api/workouts/:id", ({body, params}, res) => {
//     console.log(res);
//     Workouts.findByIdAndUpdate(
//         params.id,
//         {$push: {exercises: body}},
//         {new: true, runValidators: true}
    
        
//         )
//         .then(
//             dbWorkOut => {
//                 res.json(dbWorkOut);
//             }
//         )
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.delete("/api/workouts", ({ body }, res) => {
//     console.log(res);
//     Workouts.findByIdAndDelete(body.id)
//     .then(() => {
//         res.json(true)
//     })
//     .catch(err => {
//         res.json(err);
//     });

// });

module.exports = router;