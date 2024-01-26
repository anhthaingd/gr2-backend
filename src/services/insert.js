import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import data from "../../data/data2.json";
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
require("dotenv").config();

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      data.forEach(async (item) => {
        await db.Cve.create({
          id: item?.cve_id,
          description: item?.cve_description,
          category: JSON.stringify(item?.cve_category),
          published_at: item?.cve_published_at,
          updated_at: item?.cve_updated_at,
        });
        await db.cvss.create({
          base_score: item?.cvss?.base_score,
          base_severity: item?.cvss?.base_severity,
          cvss_vector: item?.cvss?.cvss_vector,
          exploitability_score: item?.cvss?.exploitability_score,
          impact_score: item?.cvss?.impact_score,
          source: item?.cvss?.source,
          cveId: item?.cve_id,
        });
        item?.cpe.forEach(async (i) => {
          await db.cpe.create({
            version: i?.version,
            detail: i?.detail,
            cveId: item?.cve_id,
          });
        });
        item?.cwe.forEach(async (i) => {
          await db.Cwe.findOrCreate({
            where: { id: i?.cwe_id },
            defaults: {
              name: i?.cwe_name,
              description: i?.cwe_description,
              extended_description: i?.cwe_extended_description,
            },
          });
        });
        item?.cwe.forEach(async (i) => {
          i?.observed_example.forEach(async (o) => {
            await db.observed_example.findOrCreate({
              where: { name: o?.name, cweId: i?.cwe_id },
              defaults: {
                link: o?.link,
                name: o?.name,
                des: o?.des,
                cweId: i?.cwe_id,
              },
            });
          });
        });
        item?.cwe.forEach(async (i) => {
          i?.potential_mitigations.forEach(async (o) => {
            await db.potential_mitigations.findOrCreate({
              where: { subheading: o?.subheading, cweId: i?.cwe_id },
              defaults: {
                subheading: o?.subheading,
                des: JSON.stringify(o?.des),
                cweId: i?.cwe_id,
              },
            });
          });
        });
        item?.cwe.forEach(async (i) => {
          i?.detection_methods.forEach(async (o) => {
            await db.detection_method.findOrCreate({
              where: { subheading: o?.subheading, cweId: i?.cwe_id },
              defaults: {
                subheading: o?.subheading,
                des: JSON.stringify(o?.des),
                cweId: i?.cwe_id,
              },
            });
          });
        });
        item?.cwe.forEach(async (i) => {
          i?.capec.forEach(async (ca) => {
            await db.capec.findOrCreate({
              where: { id: ca?.capec_id },
              defaults: {
                name: ca?.capec_name,
                description: ca?.capec_description,
                extended_description: ca?.capec_extended_description,
                likelihood_of_attack: ca?.likelihood_of_attack,
                typical_severity: ca?.typical_severity,
                mitigations: JSON.stringify(ca?.mitigations),
              },
            });
          });
        });
        item?.cwe.forEach(async (i) => {
          await db.Cve_Cwe.findOrCreate({
            where: { cweId: i?.cwe_id, cveId: item?.cve_id },
            defaults: {
              cweId: i?.cwe_id,
              cveId: item?.cve_id,
            },
          });
        });
        item?.cwe.forEach(async (i) => {
          i?.capec.forEach(async (ca) => {
            ca?.related_cwe.forEach(async (re) => {
              await db.cwe_capec.findOrCreate({
                where: { capecId: ca?.capec_id, cweId: re },
                defaults: {
                  capecId: ca?.capec_id,
                  cweId: re,
                },
              });
            });
          });
        });
        item?.cwe.forEach(async (i) => {
          i?.capec.forEach(async (ca) => {
            await db.cwe_capec.findOrCreate({
              where: { capecId: ca?.capec_id, cweId: i?.cwe_id },
              defaults: {
                capecId: ca?.capec_id,
                cweId: i?.cwe_id,
              },
            });
          });
        });
      });

      resolve("Done");
    } catch (error) {
      reject(error);
    }
  });
