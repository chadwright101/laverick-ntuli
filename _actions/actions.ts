"use server";

export async function getTestVariable() {
  return process.env.TEST_VARIABLE;
}
