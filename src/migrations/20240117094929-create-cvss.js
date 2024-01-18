'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cvsses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      base_score: {
        type: Sequelize.STRING
      },
      base_severity: {
        type: Sequelize.STRING
      },
      cvss_vector: {
        type: Sequelize.STRING
      },
      exploitability_score: {
        type: Sequelize.STRING
      },
      impact_score: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      cveId: {
        type: Sequelize.STRING,
        references: {
          model: "cves",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cvsses');
  }
};