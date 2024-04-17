import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('MCSYS', 'admin_mcsys', 'mcsys_p@ssw0rd', {
//   host: String.raw`103.103.192.139,53055\MCSYSSTANDBY`,
//   dialect: 'mssql',
// });

const sequelize = new Sequelize('database', null, null, {
  dialect: 'mssql',
  dialectOptions: {
    authentication: {
      type: 'azure-active-directory-msi-vm',
      options: {
        domain: String.raw`103.103.192.139,53055\MCSYSSTANDBY`,
        userName: 'admin_mcsys',
        password: 'mcsys_p@ssw0rd',
      },
    },
    // options: {
    //   instanceName: 'MCSYSSTANDBY',
    // },
  },
});

export default sequelize;
