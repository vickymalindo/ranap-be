import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('MCSYS', 'admin_mcsys', 'mcsys_p@ssw0rd', {
  host: '103.103.192.139,53055MCSYSSTANDBY',
  dialect: 'mssql',
});

export default sequelize;
