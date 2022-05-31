/*
  Warnings:

  - You are about to alter the column `event_date` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `participants` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `participantsId` VARCHAR(191) NULL,
    MODIFY `event_date` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `participants` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `EventParticipant` (
    `user_id` VARCHAR(191) NOT NULL,
    `events_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`user_id`, `events_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_participantsId_fkey` FOREIGN KEY (`participantsId`) REFERENCES `participants`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventParticipant` ADD CONSTRAINT `EventParticipant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventParticipant` ADD CONSTRAINT `EventParticipant_events_id_fkey` FOREIGN KEY (`events_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
