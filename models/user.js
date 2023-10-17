const Sequelize = require("sequelize");
module.exports = class User extends Sequelize.Model {
  static init(sequelize) { // 모델 설정, id 컬럼을 기본키로 연결하므로 별도로 작성하지 않음.
    return super.init({
      name: {
        type: Sequelize.STRING(20), // VARCHAR
        allowNull: false, // NOT NULL
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED, // UNSIGNED INT
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN, // TINYINT
        allowNull: false
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE, // DATETIME
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    }, {
      sequelize,
      timestamp: false,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    })
  }
  static associated(db) {} // 모델관계 - FK
}