const TodoModel = require("../model/TodoModel");

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find();
    res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
    const { task } = req.body;

    TodoModel.create({ task })
        .then((data) => {
            console.log("Added successfully...");
            console.log(data);
            res.send(data);
        })
        .catch((err) => console.log(err));
};

module.exports.updateTodo = async (req, res) => {
    const { _id, task } = req.body;

    TodoModel.findByIdAndUpdate(_id, { task })
        .then(() => res.send(`Updated successfully...`))
        .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body;

    TodoModel.findByIdAndDelete(_id)
        .then(() => res.send("Deleted successfully..."))
        .catch((err) => console.log(err));
};

module.exports.checkTodo = async (req, res) => {
    const { _id } = req.body;

    TodoModel.findByIdAndUpdate(_id, { checked: true })
        .then(() => res.send("Checked..."))
        .catch((err) => console.log(err));
};

module.exports.unCheckTodo = async (req, res) => {
    const { _id } = req.body;

    TodoModel.findByIdAndUpdate(_id, { checked: false })
        .then(() => res.send(`Unchecked....`))
        .catch((err) => console.log(err));
};
