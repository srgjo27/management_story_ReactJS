const db = require('../../config/db');

class Story {
    constructor() {
        this.tableName = 'stories';
    }

    async getAllStories() {
        try {
            const stories = await db(this.tableName).select('*');
            return stories;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching stories from the database');
        }
    }
}

module.exports = new Story();