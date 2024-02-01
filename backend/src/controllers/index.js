const Category = require('../models/category');
const Story = require('../models/story');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.getAllCategories();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllStories = async (req, res) => {
    try {
        const stories = await Story.getAllStories();
        res.json(stories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllCategories,
    getAllStories,
};