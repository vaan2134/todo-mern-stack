const { Router } = require("express");

// Controllers
const { getTodo, saveTodo, updateTodo, deleteTodo, checkTodo, unCheckTodo } = require("../controllers/TodoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);
router.post("/check", checkTodo);
router.post("/uncheck", unCheckTodo);

module.exports = router;
