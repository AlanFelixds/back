/*
  Warnings:

  - You are about to drop the column `date` on the `events` table. All the data in the column will be lost.
  - Added the required column `date_event` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `date`,
    ADD COLUMN `date_event` DATETIME(3) NOT NULL;
