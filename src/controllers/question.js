const { Question } = require("../models")


const addQuestion = async (req, res) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(200).json({ message: "saved successfully" })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getQuestion = async (req, res) => {
    try {
        const question = await Question.find().populate("section","title template");
        res.status(200).json({ question })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const updateQuestion = async (req, res) => {
    try {
        const { _id } = req.params;
        const question = await Question.findOneAndUpdate({ _id }, req.body);
        if (question) {
            res.status(200).json({ message: "Updated successfully" })
        }
        else {
            res.status(404).json({ error: "Not Found" })

        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const deleteQuestion = async (req, res) => {
    try {
        const { _id } = req.params;
        const question = await Question.findOneAndRemove({ _id });
        if (question) {
            res.status(200).json({ message: "Deleted" })
        }
        else {
            res.status(404).json({ error: "Not Found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

module.exports = {
    addQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion,
}