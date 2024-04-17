import sequelize from "../config/db.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Membership = sequelize.define("tbl_membership", {
  member_no: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  no_kartu: {
    type: DataTypes.STRING,
  },
  no_bpjs: {
    type: DataTypes.STRING,
  },
  insurance_no: {
    type: DataTypes.STRING,
  },
  member_name: {
    type: DataTypes.STRING,
  },
  birth_date: {
    type: DataTypes.STRING,
  },
  emp_no: {
    type: DataTypes.STRING,
  },
  kd_cus: {
    type: DataTypes.STRING,
  },
  parent_id: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  kd_jabatan: {
    type: DataTypes.STRING,
  },
  kd_bagian: {
    type: DataTypes.STRING,
  },
  kd_cabang: {
    type: DataTypes.STRING,
  },
  kd_paket: {
    type: DataTypes.STRING,
  },
  kd_grade: {
    type: DataTypes.STRING,
  },
  date_join: {
    type: DataTypes.DATE,
  },
  sta_member: {
    type: DataTypes.INTEGER,
  },
  address: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  ket_trmt: {
    type: DataTypes.STRING,
  },
  tgl_trmt: {
    type: DataTypes.DATE,
  },
  st_kwn: {
    type: DataTypes.STRING,
  },
  kd_area: {
    type: DataTypes.STRING,
  },
  gaji: {
    type: DataTypes.DECIMAL(18, 2),
  },
  pp: {
    type: DataTypes.INTEGER,
  },
  premi: {
    type: DataTypes.DECIMAL(18, 2),
  },
  st_byr: {
    type: DataTypes.STRING,
  },
  provider_code_dt: {
    type: DataTypes.STRING,
  },
  st_kap_dt: {
    type: DataTypes.STRING,
  },
  provider_code_gp: {
    type: DataTypes.STRING,
  },
  st_kap_gp: {
    type: DataTypes.STRING,
  },
  nm_bank: {
    type: DataTypes.STRING,
  },
  atn: {
    type: DataTypes.STRING,
  },
  no_rek: {
    type: DataTypes.STRING,
  },
  cabang_bank: {
    type: DataTypes.STRING,
  },
  dk_name: {
    type: DataTypes.STRING,
  },
  dk_phone: {
    type: DataTypes.STRING,
  },
  unit: {
    type: DataTypes.STRING,
  },
  id_card: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  kd_site: {
    type: DataTypes.STRING,
  },
  st_family_limit: {
    type: DataTypes.STRING,
  },
  date_begin: {
    type: DataTypes.DATE,
  },
  date_end: {
    type: DataTypes.DATE,
  },
  keterangan: {
    type: DataTypes.STRING,
  },
  is_vip: {
    type: DataTypes.INTEGER,
  },
  no_polis: {
    type: DataTypes.STRING,
  },
  kd_site: {
    type: DataTypes.STRING,
  },
  user_no: {
    type: DataTypes.BIGINT,
  },
  user_pass: {
    type: DataTypes.STRING,
  },
  auth_token: {
    type: DataTypes.STRING,
  },
  no_ktp: {
    type: DataTypes.STRING,
  },
  no_sim: {
    type: DataTypes.STRING,
  },
  npwp: {
    type: DataTypes.STRING,
  },
  faskes_bpjs: {
    type: DataTypes.STRING,
  },
  faskes_bpjs_rjtl: {
    type: DataTypes.STRING,
  },
  is_ip_referal: {
    type: DataTypes.STRING,
  },
  kls_kamar: {
    type: DataTypes.STRING,
  },
  id_cab_customer: {
    type: DataTypes.BIGINT,
  },
  createdby: {
    type: DataTypes.BIGINT,
  },
  createddate: {
    type: DataTypes.DATE,
  },
  modby: {
    type: DataTypes.BIGINT,
  },
  moddate: {
    type: DataTypes.DATE,
  },
  is_client_dashboard: {
    type: DataTypes.INTEGER,
  },
  kd_bank: {
    type: DataTypes.STRING,
  },
  member_type: {
    type: DataTypes.STRING,
  },
});
