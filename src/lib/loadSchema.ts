import fs from "fs";
import path from "path";

export function faceSchema(slug: string): any {
  try {
    const filePath = path.join(process.cwd(), "src", "schema", "face", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading schema:", error);
    return null;
  }
}
export function hairSchema(slug: string): any {
  try {
    const filePath = path.join(process.cwd(), "src", "schema", "hair", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading schema:", error);
    return null;
  }
}
export function regenerativeSchema(slug: string): any {
  try {
    const filePath = path.join(process.cwd(), "src", "schema", "regenerative", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading schema:", error);
    return null;
  }
}
export function skinSchema(slug: string): any {
  try {
    const filePath = path.join(process.cwd(), "src", "schema", "skin", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading schema:", error);
    return null;
  }
}
export function picoLaserConditionSchema(condition: string): any {
  try {
    const filePath = path.join(process.cwd(), "src", "schema", "skin", "pico-laser-malaysia", `${condition}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading schema:", error);
    return null;
  }
}
export function weightLossSchema(slug: string): any {
  try {
    const filePath = path.join(process.cwd(), "src", "schema", "weightLoss", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading schema:", error);
    return null;
  }
}