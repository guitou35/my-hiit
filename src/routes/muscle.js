const express = require("express");
const {getMuscles, createMuscles, getMuscle, updateMuscles, deleteMuscles} = require("../controllers/muscle");
const router = express.Router();

/**
 * @swagger
 * /api/v1/muscles:
 *  get:
 *      description: Get all muscles
 *      responses:
 *          200:
 *              description: Return the list of muscles
 */
router.get("/", getMuscles);
router.get("/:id", getMuscle);

/**
 * @openapi
 * /api/v1/muscles:
 *  post:
 *      produces:
 *          - application/json
 *      description: Add a new muscles
 *      requestBody:
 *          content:
 *              'application/json':
 *                  schema:
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          201:
 *              description: Return the muscles created
 */
router.post("/", createMuscles);
router.put("/:id", updateMuscles);
router.delete("/:id", deleteMuscles);


module.exports = router;