const { Service } = require("../models")


const addService = async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        if (service) {
            const services = await Service.find({});
            res.status(200).json({ service: services })
        } else {
            const services = await Service.find({});
            res.status(200).json({ service: services })
        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getService = async (req, res) => {
    try {
        const service = await Service.find();
        res.status(200).json({ service })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const updateService = async (req, res) => {
    try {
        const { _id } = req.params;
        const service = await Service.findOneAndUpdate({ _id }, req.body);
        if (service) {
            res.status(200).json({ message: "Updated successfully" })
        }
        else {
            res.status(404).json({ error: "Not Found" })

        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const deleteService = async (req, res) => {
    try {
        const { _id } = req.params;
        const service = await Service.findOneAndRemove({ _id });
        if (service) {
            const services = await Service.find({});
            res.status(200).json({ service: services })
        } else {
            const services = await Service.find({});
            res.status(200).json({ service: services })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getOneService = async (req, res) => {
    try {
        const { _id } = req.params;
        const service = await Service.findOne({ _id });
        if (service)
            res.status(200).json({ service })
        else
            res.status(404).json({ message: "Not Found" })

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

module.exports = {
    addService,
    getService,
    updateService,
    deleteService,
    getOneService
}