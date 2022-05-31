/*
  Warnings:

  - You are about to drop the column `name` on the `events` table. All the data in the column will be lost.
  - Added the required column `event_name` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `name`,
    ADD COLUMN `event_name` VARCHAR(191) NOT NULL;
