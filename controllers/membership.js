import { QueryTypes } from 'sequelize';
import sequelize from '../config/db.js';

export const getInpatientRaw = async (req, res) => {
  const { no_member } = req.params;
  try {
    const membership = await sequelize.query(
      'SELECT TOP 100 treat_date as indate, claim_no, member_no, member_name, nm_cus as corporate, provider_name, vip_member, no_sj as gl_no, nm_cabang as member_branch, nm_cabang_transaksi as host_branch, kdicd as icd10, nm_holding as customer_group, nm_plan_dtl as covarage, ipstatus, no_kartu FROM VW_CLAIM_IP_MONITORING',
      {
        type: QueryTypes.SELECT,
      }
    );

    console.log('berhasil');
    res.json(membership);
  } catch (error) {
    throw new Error(error);
  }
};
// dbo.VW_CLAIM_IP_MONITORING,
// SELECT TOP 100 member_no, no_kartu, no_bpjs, insurance_no FROM tbl_membership WHERE member_no = 011-0910-0156030

export const getInpatientRawWithSearch = async (req, res) => {
  const { member_name } = req.params;
  console.log(member_name);
  try {
    const membership = await sequelize.query(
      'SELECT TOP 10 createddate as indate, moddate as last_follow_up, claim_no, member_no, member_name, nm_cus as corporate, provider_name, vip_member, no_sj as gl_no, nm_cabang as member_branch, nm_cabang_transaksi as host_branch, kdicd as ic10, nm_holding as customer_group, nm_plan_dtl as covarage FROM VW_CLAIM_IP_MONITORING WHERE member_name LIKE :search_name',
      {
        replacements: { search_name: `%${member_name}%` },
        type: QueryTypes.SELECT,
      }
    );

    console.log('berhasil');
    res.json(membership);
  } catch (error) {
    throw new Error(error);
  }
};

export const test = async (req, res) => {
  res.json('berhasil');
};
