/*
  Warnings:

  - You are about to alter the column `event_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `eventparticipant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `eventparticipant` DROP FOREIGN KEY `EventParticipant_events_id_fkey`;

-- DropForeignKey
ALTER TABLE `eventparticipant` DROP FOREIGN KEY `EventParticipant_user_id_fkey`;

-- AlterTable
ALTER TABLE `events` MODIFY `event_date` DATETIME NOT NULL;

-- DropTable
DROP TABLE `eventparticipant`;

-- CreateTable
CREATE TABLE `event_participant` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `events_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_events_id_fkey` FOREIGN KEY (`events_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
