/*
  Warnings:

  - You are about to drop the column `user_id` on the `event_participant` table. All the data in the column will be lost.
  - You are about to drop the column `participantsId` on the `events` table. All the data in the column will be lost.
  - You are about to alter the column `event_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `event_participant` DROP FOREIGN KEY `event_participant_events_id_fkey`;

-- DropForeignKey
ALTER TABLE `event_participant` DROP FOREIGN KEY `event_participant_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_participantsId_fkey`;

-- AlterTable
ALTER TABLE `event_participant` DROP COLUMN `user_id`,
    ADD COLUMN `participants_id` VARCHAR(191) NULL,
    MODIFY `events_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `participantsId`,
    MODIFY `event_date` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_events_id_fkey` FOREIGN KEY (`events_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_participants_id_fkey` FOREIGN KEY (`participants_id`) REFERENCES `participants`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
