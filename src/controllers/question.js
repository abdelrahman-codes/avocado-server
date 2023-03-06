const { Question } = require("../models")


const addQuestion = async (req, res) => {
    try {
        const { template } = req.body;
        const question = new Question(req.body);
        await question.save();
        if (question) {
            const questions = await Question.find({ template });
            res.status(200).json({ question: questions })
        } else {
            const questions = await Question.find({ template });
            res.status(200).json({ question: questions })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getQuestion = async (req, res) => {
    try {
        const { template } = req.params;
        const question = await Question.find({ template });
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
            const questions = await Question.find({ template: question.template });
            res.status(200).json({ question: questions })
        } else {
            const questions = await Question.find({ template: question.template });
            res.status(200).json({ question: questions })
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
            const questions = await Question.find({ template: question.template });
            res.status(200).json({ question: questions })
        } else {
            const questions = await Question.find({ template: question.template });
            res.status(200).json({ question: questions })
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