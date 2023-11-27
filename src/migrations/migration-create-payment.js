"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("payments", {
            id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            valueEn: {
                type: Sequelize.STRING,
            },
            valueVi: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("payments");
    },
};

/**Dùng để tự động map vào database cho chúng ta */