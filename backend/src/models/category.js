const db = require('../../config/db');

class Category {
    constructor() {
        this.tableName = 'categories';
    }

    async getAllCategories() {
        try {
            const categories = await db(this.tableName).select('*');
            return categories;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching categories from the database');
        }
    }
}

module.exports = new Category();