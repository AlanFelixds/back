/*
  Warnings:

  - You are about to drop the column `date_event` on the `events` table. All the data in the column will be lost.
  - Added the required column `event_date` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speaker` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speaker_email` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `date_event`,
    ADD COLUMN `event_date` DATE NOT NULL,
    ADD COLUMN `speaker` VARCHAR(191) NOT NULL,
    ADD COLUMN `speaker_email` VARCHAR(191) NOT NULL;
