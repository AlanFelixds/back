/*
  Warnings:

  - You are about to drop the column `speaker` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `speaker_email` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `speaker`,
    DROP COLUMN `speaker_email`;
