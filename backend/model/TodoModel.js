const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            require: true,
        },
        checked: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: { createdAt: "created_at" } },
);

module.exports = mongoose.model("TodoList", todoSchema);
